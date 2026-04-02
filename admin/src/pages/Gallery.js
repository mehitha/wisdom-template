import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Gallery.css";

const API_URL = "http://localhost:5000/api";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadAlbumId, setUploadAlbumId] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAddAlbum, setShowAddAlbum] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState("");
  const [albums, setAlbums] = useState([]);
  const fileInputRef = useRef();
  const visibleAlbums = showAll ? albums : albums.slice(0, 6);

  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(`${API_URL}/albums`);
      const sortedAlbums = res.data
        .map((album) => ({
          ...album,
          images: [...album.images].reverse(),
        }))
        .reverse();
      setAlbums(sortedAlbums);
      if (selectedAlbum) {
        const updated = sortedAlbums.find((a) => a._id === selectedAlbum._id);
        if (updated) setSelectedAlbum(updated);
      }
    } catch (error) {
      console.error("Failed to fetch albums:", error);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || uploadAlbumId === "") {
      return alert("Select file & album!");
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    setLoading(true);
    try {
      await axios.post(`${API_URL}/albums/${uploadAlbumId}/images`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Image Successfully Uploaded!");
      setSelectedFile(null);
      fileInputRef.current.value = "";
      fetchAlbums();
    } catch (error) {
      console.error(error);
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleAddAlbum = async () => {
    if (!newAlbumName.trim()) return alert("Enter album name!");
    try {
      const res = await axios.post(`${API_URL}/albums`, {
        name: newAlbumName,
      });
      setAlbums((prev) => [{ ...res.data, images: [] }, ...prev]);
      setNewAlbumName("");
      setShowAddAlbum(false);
    } catch (error) {
      console.error(error);
      alert("Failed!");
    }
  };

  // 🔥 FIXED DELETE - Filename only
  const handleDeleteImage = async (albumId, imagePath) => {
    if (!window.confirm("Delete this image?")) return;
    
    // Extract filename: "uploads/abc123.jpg" → "abc123.jpg"
    const filename = imagePath.split('/').pop();
    
    try {
      await axios.delete(`${API_URL}/albums/${albumId}/images/${filename}`);
      fetchAlbums();
      alert("✅ Image deleted!");
    } catch (error) {
      console.error("Delete error:", error);
      alert("❌ Delete failed!");
    }
  };

  const handleDeleteAlbum = async (albumId) => {
    if (!window.confirm("Delete album?")) return;
    try {
      await axios.delete(`${API_URL}/albums/${albumId}`);
      setSelectedAlbum(null);
      fetchAlbums();
    } catch {
      alert("Delete failed");
    }
  };

  const handleLiveView = () => {
    window.open("http://localhost:3000/gallery", "_blank");
  };

  return (
    <div className="gallery-container">
      {/* ADMIN PANEL */}
      <div className="admin-section">
        <h3> Upload Image</h3>
        <div className="admin-controls">
          <select
            value={uploadAlbumId}
            onChange={(e) => setUploadAlbumId(e.target.value)}
          >
            <option value="">Select Album</option>
            {albums.map((album) => (
              <option key={album._id} value={album._id}>
                {album.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            ref={fileInputRef}
            onChange={(e) => setSelectedFile(e.target.files[0])}
            accept="image/*"
          />
          <button className="upload-btn" onClick={handleUpload} disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
        <button
          className="add-album-btn"
          onClick={() => setShowAddAlbum(!showAddAlbum)}
        >
          ➕ Add Album
        </button>
        <button className="live-view-btn" onClick={handleLiveView}>
           Live View
        </button>

        {showAddAlbum && (
          <div className="add-album-form">
            <input
              type="text"
              placeholder="Album name"
              value={newAlbumName}
              onChange={(e) => setNewAlbumName(e.target.value)}
            />
            <button onClick={handleAddAlbum}>Create</button>
          </div>
        )}
      </div>

      {/* ALBUM LIST */}
      {!selectedAlbum && (
        <>
          <div className="album-grid">
            {visibleAlbums.map((album) => (
              <div
                key={album._id}
                className="album-title"
                onClick={() => setSelectedAlbum(album)}
              >
                <div className="stack">
                  {album.images.length > 0 ? (
                    album.images.slice(0, 3).map((img, i) => (
                      <img
                        key={i}
                        src={`http://localhost:5000/${img}`}
                        alt=""
                        className={`stack-img img-${i}`}
                      />
                    ))
                  ) : (
                    <div className="no-images-placeholder">
                      📸 No Images
                    </div>
                  )}
                </div>
                <p className="album-title">{album.name}</p>
              </div>
            ))}
          </div>
          {albums.length > 6 && (
            <button
              className="show-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          )}
        </>
      )}

      {/* ALBUM VIEW */}
      {selectedAlbum && (
        <div className="album-view">
          <div className="album-header">
            <h3>{selectedAlbum.name}</h3>
            <div>
              <button
                className="delete-album-btn"
                onClick={() => handleDeleteAlbum(selectedAlbum._id)}
              >
                🗑️ Delete Album
              </button>
              <span className="close-btn" onClick={() => setSelectedAlbum(null)}>
                ← Back
              </span>
            </div>
          </div>
          <div className="images-grid">
            {selectedAlbum.images.map((img, i) => (
              <div key={i} className="image-wrapper">
                <img src={`http://localhost:5000/${img}`} alt="" />
                {/* 🔥 FIXED: Pass full image path, extract filename in handler */}
                <button
                  className="delete-image-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteImage(selectedAlbum._id, img);
                  }}
                  title="Delete image"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;