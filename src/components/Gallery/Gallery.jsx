// import "./Gallery.css";
// import React, { useState } from "react";

// // ✅ HEADER & FOOTER
// import Header from "../Header";
// import Footer from "../Footer";

// // 🔥 HERO IMPORT
// import Hero from "../Hero/Hero1";

// // ✅ LIGHTGALLERY
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";

// // 🔥 IMAGES
// import img1 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM (1).jpeg";
// import img2 from "../../assets/gallery/2.jpg";
// import img3 from "../../assets/gallery/3.jpg";
// import img4 from "../../assets/gallery/4.jpeg";
// import img5 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM.jpeg";
// import img6 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM (1).jpeg";
// import img7 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM.jpeg";

// function Gallery() {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   const [albums] = useState([
//     { name: "Food Donation", images: [img1, img2, img3, img4] },
//     { name: "Charity Event", images: [img5, img6, img7, img1] },
//     { name: "Helping Hands", images: [img1, img3, img4, img2] },
//     { name: "Medical Camp", images: [img2, img4, img1, img3] },
//     { name: "Child Support", images: [img1, img2, img4, img3] },
//     { name: "Volunteer Work", images: [img2, img3, img1, img4] },
//     { name: "Education Help", images: [img1, img2, img3, img4] },
//     { name: "Old Age Support", images: [img2, img3, img4, img1] },
//     { name: "Disaster Relief", images: [img1, img3, img2, img4] },
//   ]);

//   const visibleAlbums = showAll ? albums : albums.slice(0, 6);

//   return (
//     <>
//       {/* 🔝 HEADER */}
//       <Header />

//       {/* 🔥 HERO */}
//       <Hero 
//         title="Gallery" 
//         subtitle="✿ Explore Our Memories" 
//       />

//       {/* 📸 GALLERY */}
//       <section className="gallery">
//         <div className="gallery-header">
//           <h2>Our Albums</h2>
//         </div>

//         {/* ALBUM LIST */}
//         {!selectedAlbum && (
//           <>
//             <div className="album-grid">
//               {visibleAlbums.map((album, i) => (
//                 <div
//                   key={i}
//                   className="album-tile"
//                   onClick={() => setSelectedAlbum(album)}
//                 >
//                   <div className="stack">
//                     {album.images.slice(0, 3).map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt=""
//                         className={`stack-img img-${index}`}
//                       />
//                     ))}
//                   </div>
//                   <div className="album-overlay">
//                     <p>{album.name}</p>
//                   </div>
//                   <p className="album-title">{album.name}</p>
//                 </div>
//               ))}
//             </div>

//             {albums.length > 6 && (
//               <button
//                 className="show-more-btn"
//                 onClick={() => setShowAll(!showAll)}
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             )}
//           </>
//         )}

//         {/* ALBUM OPEN */}
//         {selectedAlbum && (
//           <div className="lightgallery-wrapper">
//             <div className="album-header">
//               <h3>{selectedAlbum.name}</h3>
//               <span
//                 className="close-btn"
//                 onClick={() => setSelectedAlbum(null)}
//               >
//                 Back
//               </span>
//             </div>

//             <LightGallery
//               speed={500}
//               plugins={[
//                 lgThumbnail,
//                 lgZoom,
//                 lgAutoplay,
//                 lgFullscreen,
//                 lgRotate,
//                 lgShare,
//               ]}
//             >
//               {selectedAlbum.images.map((img, index) => (
//                 <a href={img} key={index}>
//                   <img src={img} alt="" />
//                 </a>
//               ))}
//             </LightGallery>
//           </div>
//         )}
//       </section>

//       {/* 🔚 FOOTER */}
//       <Footer />
//     </>
//   );
// }

// export default Gallery;



// import "./Gallery.css";
// import React, { useState, useEffect } from "react";

// // ✅ HEADER & FOOTER
// import Header from "../Header";
// import Footer from "../Footer";

// // 🔥 HERO IMPORT
// import Hero from "../Hero/Hero1";

// // ✅ LIGHTGALLERY
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";

// // 🔥 PLACEHOLDER IMAGES (for existing albums)
// import img1 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM (1).jpeg";
// import img2 from "../../assets/gallery/2.jpg";
// import img3 from "../../assets/gallery/3.jpg";
// import img4 from "../../assets/gallery/4.jpeg";
// import img5 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM.jpeg";
// import img6 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM (1).jpeg";
// import img7 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM.jpeg";

// function Gallery() {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [showAll, setShowAll] = useState(false);
//   const [albums, setAlbums] = useState([
//     { name: "Food Donation", images: [img1, img2, img3, img4] },
//     { name: "Charity Event", images: [img5, img6, img7, img1] },
//     { name: "Helping Hands", images: [img1, img3, img4, img2] },
//     { name: "Medical Camp", images: [img2, img4, img1, img3] },
//     { name: "Child Support", images: [img1, img2, img4, img3] },
//     { name: "Volunteer Work", images: [img2, img3, img1, img4] },
//     { name: "Education Help", images: [img1, img2, img3, img4] },
//     { name: "Old Age Support", images: [img2, img3, img4, img1] },
//     { name: "Disaster Relief", images: [img1, img3, img2, img4] },
//   ]);

//   const [adminPassword, setAdminPassword] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploading, setUploading] = useState(false);

//   const visibleAlbums = showAll ? albums : albums.slice(0, 6);

//   // Fetch images from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/gallery")
//       .then((res) => res.json())
//       .then((data) => {
//         const newAlbums = [...albums];
//         data.forEach((img) => {
//           const index = newAlbums.findIndex((a) => a.name === img.album);
//           if (index !== -1) {
//             newAlbums[index].images.push(img.url);
//           }
//         });
//         setAlbums(newAlbums);
//       });
//   }, []);

//   // Admin upload handler
//   const handleUpload = async () => {
//     if (adminPassword !== "admin123") {
//       alert("Wrong password ❌");
//       return;
//     }
//     if (!selectedFile) {
//       alert("Choose a file ❌");
//       return;
//     }
//     if (!selectedAlbum) {
//       alert("Select an album ❌");
//       return;
//     }

//     try {
//       setUploading(true);
//       const formData = new FormData();
//       formData.append("file", selectedFile);
//       formData.append("album", selectedAlbum.name);

//       const res = await fetch("http://localhost:5000/api/gallery/upload", {
//         method: "POST",
//         body: formData,
//       });

//       if (res.ok) {
//         alert("Uploaded ✅");
//         const newImage = await res.json(); // { album: "", url: "" }
//         setAlbums((prev) =>
//           prev.map((alb) =>
//             alb.name === newImage.album
//               ? { ...alb, images: [...alb.images, newImage.url] }
//               : alb
//           )
//         );
//         setSelectedFile(null);
//       } else {
//         alert("Upload failed ❌");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Error uploading ❌");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Hero title="Gallery" subtitle="✿ Explore Our Memories" />

//       <section className="gallery">
//         <div className="gallery-header">
//           <h2>Our Albums</h2>
//         </div>

//         {!selectedAlbum && (
//           <>
//             <div className="album-grid">
//               {visibleAlbums.map((album, i) => (
//                 <div
//                   key={i}
//                   className="album-tile"
//                   onClick={() => setSelectedAlbum(album)}
//                 >
//                   <div className="stack">
//                     {album.images.slice(0, 3).map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt=""
//                         className={`stack-img img-${index}`}
//                       />
//                     ))}
//                   </div>
//                   <div className="album-overlay">
//                     <p>{album.name}</p>
//                   </div>
//                   <p className="album-title">{album.name}</p>
//                 </div>
//               ))}
//             </div>

//             {albums.length > 6 && (
//               <button
//                 className="show-more-btn"
//                 onClick={() => setShowAll(!showAll)}
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             )}
//           </>
//         )}

//         {selectedAlbum && (
//           <div className="lightgallery-wrapper">
//             <div className="album-header">
//               <h3>{selectedAlbum.name}</h3>
//               <span
//                 className="close-btn"
//                 onClick={() => setSelectedAlbum(null)}
//               >
//                 Back
//               </span>
//             </div>

//             {/* Admin upload section */}
//             <div style={{ marginBottom: "1rem" }}>
//               <input
//                 type="password"
//                 placeholder="Admin Password"
//                 value={adminPassword}
//                 onChange={(e) => setAdminPassword(e.target.value)}
//                 style={{ marginRight: "0.5rem" }}
//               />
//               <input
//                 type="file"
//                 onChange={(e) => setSelectedFile(e.target.files[0])}
//                 style={{ marginRight: "0.5rem" }}
//               />
//               <button onClick={handleUpload} disabled={uploading}>
//                 {uploading ? "Uploading..." : "Upload"}
//               </button>
//             </div>

//             <LightGallery
//               speed={500}
//               plugins={[
//                 lgThumbnail,
//                 lgZoom,
//                 lgAutoplay,
//                 lgFullscreen,
//                 lgRotate,
//                 lgShare,
//               ]}
//             >
//               {selectedAlbum.images.map((img, index) => (
//                 <a href={img} key={index}>
//                   <img src={img} alt="" />
//                 </a>
//               ))}
//             </LightGallery>
//           </div>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Gallery;














// import "./Gallery.css";
// import React, { useState, useEffect } from "react";

// // ✅ HEADER & FOOTER
// import Header from "../Header";
// import Footer from "../Footer";

// // 🔥 HERO IMPORT
// import Hero from "../Hero/Hero1";

// // ✅ LIGHTGALLERY
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";

// // 🔥 FIREBASE STORAGE
// import { storage } from "../../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// // 🔥 PLACEHOLDER IMAGES (for existing albums)
// import img1 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM (1).jpeg";
// import img2 from "../../assets/gallery/2.jpg";
// import img3 from "../../assets/gallery/3.jpg";
// import img4 from "../../assets/gallery/4.jpeg";
// import img5 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM.jpeg";
// import img6 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM (1).jpeg";
// import img7 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM.jpeg";

// function Gallery() {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [showAll, setShowAll] = useState(false);
//   const [albums, setAlbums] = useState([
//     { name: "Food Donation", images: [img1, img2, img3, img4] },
//     { name: "Charity Event", images: [img5, img6, img7, img1] },
//     { name: "Helping Hands", images: [img1, img3, img4, img2] },
//     { name: "Medical Camp", images: [img2, img4, img1, img3] },
//     { name: "Child Support", images: [img1, img2, img4, img3] },
//     { name: "Volunteer Work", images: [img2, img3, img1, img4] },
//     { name: "Education Help", images: [img1, img2, img3, img4] },
//     { name: "Old Age Support", images: [img2, img3, img4, img1] },
//     { name: "Disaster Relief", images: [img1, img3, img2, img4] },
//   ]);

//   const [adminPassword, setAdminPassword] = useState(""); // Admin password input
//   const [selectedFile, setSelectedFile] = useState(null); // File chosen by admin
//   const [uploading, setUploading] = useState(false);

//   const visibleAlbums = showAll ? albums : albums.slice(0, 6);

//   // Fetch images from backend (MongoDB)
//   useEffect(() => {
//     fetch("http://localhost:5000/api/gallery")
//       .then((res) => res.json())
//       .then((data) => {
//         // Map images from backend into albums
//         const newAlbums = [...albums];
//         data.forEach((img) => {
//           const index = newAlbums.findIndex((a) => a.name === img.album);
//           if (index !== -1) {
//             newAlbums[index].images.push(img.url);
//           }
//         });
//         setAlbums(newAlbums);
//       });
//   }, []);

//   // Admin upload handler
//   const handleUpload = async () => {
//     if (adminPassword !== "admin123") {
//       alert("Wrong password ❌");
//       return;
//     }
//     if (!selectedFile) {
//       alert("Choose a file ❌");
//       return;
//     }
//     if (!selectedAlbum) {
//       alert("Select an album ❌");
//       return;
//     }

//     try {
//       setUploading(true);
//       const storageRef = ref(
//         storage,
//         `gallery/${selectedAlbum.name}/${selectedFile.name}`
//       );
//       const uploadTask = uploadBytesResumable(storageRef, selectedFile);

//       uploadTask.on(
//         "state_changed",
//         (snapshot) => {},
//         (error) => {
//           console.error(error);
//           setUploading(false);
//         },
//         async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//           // Save to backend
//           await fetch("http://localhost:5000/api/gallery", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ album: selectedAlbum.name, url: downloadURL }),
//           });
//           alert("Uploaded ✅");
//           setUploading(false);
//           setSelectedFile(null);
//         }
//       );
//     } catch (err) {
//       console.error(err);
//       setUploading(false);
//     }
//   };

//   return (
//     <>
//       {/* 🔝 HEADER */}
//       <Header />

//       {/* 🔥 HERO */}
//       <Hero title="Gallery" subtitle="✿ Explore Our Memories" />

//       {/* 📸 GALLERY */}
//       <section className="gallery">
//         <div className="gallery-header">
//           <h2>Our Albums</h2>
//         </div>

//         {/* ALBUM LIST */}
//         {!selectedAlbum && (
//           <>
//             <div className="album-grid">
//               {visibleAlbums.map((album, i) => (
//                 <div
//                   key={i}
//                   className="album-tile"
//                   onClick={() => setSelectedAlbum(album)}
//                 >
//                   <div className="stack">
//                     {album.images.slice(0, 3).map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt=""
//                         className={`stack-img img-${index}`}
//                       />
//                     ))}
//                   </div>
//                   <div className="album-overlay">
//                     <p>{album.name}</p>
//                   </div>
//                   <p className="album-title">{album.name}</p>
//                 </div>
//               ))}
//             </div>

//             {albums.length > 6 && (
//               <button
//                 className="show-more-btn"
//                 onClick={() => setShowAll(!showAll)}
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             )}
//           </>
//         )}

//         {/* ALBUM OPEN */}
//         {selectedAlbum && (
//           <div className="lightgallery-wrapper">
//             <div className="album-header">
//               <h3>{selectedAlbum.name}</h3>
//               <span
//                 className="close-btn"
//                 onClick={() => setSelectedAlbum(null)}
//               >
//                 Back
//               </span>
//             </div>

//             {/* ADMIN UPLOAD SECTION */}
//             <div style={{ marginBottom: "1rem" }}>
//               <input
//                 type="password"
//                 placeholder="Admin Password"
//                 value={adminPassword}
//                 onChange={(e) => setAdminPassword(e.target.value)}
//                 style={{ marginRight: "0.5rem" }}
//               />
//               <input
//                 type="file"
//                 onChange={(e) => setSelectedFile(e.target.files[0])}
//                 style={{ marginRight: "0.5rem" }}
//               />
//               <button onClick={handleUpload} disabled={uploading}>
//                 {uploading ? "Uploading..." : "Upload"}
//               </button>
//             </div>

//             <LightGallery
//               speed={500}
//               plugins={[
//                 lgThumbnail,
//                 lgZoom,
//                 lgAutoplay,
//                 lgFullscreen,
//                 lgRotate,
//                 lgShare,
//               ]}
//             >
//               {selectedAlbum.images.map((img, index) => (
//                 <a href={img} key={index}>
//                   <img src={img} alt="" />
//                 </a>
//               ))}
//             </LightGallery>
//           </div>
//         )}
//       </section>

//       {/* 🔚 FOOTER */}
//       <Footer />
//     </>
//   );
// }

// export default Gallery;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Gallery.css';

// // ✅ HEADER & FOOTER
// import Header from "../Header";
// import Footer from "../Footer";

// // 🔥 HERO
// import Hero from "../Hero/Hero1";

// // ✅ LIGHTGALLERY
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";

// // 🔥 IMAGES (for initial local albums)
// import img1 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM (1).jpeg";
// import img2 from "../../assets/gallery/2.jpg";
// import img3 from "../../assets/gallery/3.jpg";
// import img4 from "../../assets/gallery/4.jpeg";
// import img5 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.53.59 PM.jpeg";
// import img6 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM (1).jpeg";
// import img7 from "../../assets/wisdomgallery/WhatsApp Image 2026-03-13 at 1.54.02 PM.jpeg";

// function Gallery() {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   // 🔒 Admin states
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [passwordInput, setPasswordInput] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadAlbumId, setUploadAlbumId] = useState("");

//   // 🎨 Albums state (can later replace with DB fetch)
//   const [albums, setAlbums] = useState([
//     { name: "Food Donation", images: [img1, img2, img3, img4] },
//     { name: "Charity Event", images: [img5, img6, img7, img1] },
//     { name: "Helping Hands", images: [img1, img3, img4, img2] },
//     { name: "Medical Camp", images: [img2, img4, img1, img3] },
//     { name: "Child Support", images: [img1, img2, img4, img3] },
//     { name: "Volunteer Work", images: [img2, img3, img1, img4] },
//     { name: "Education Help", images: [img1, img2, img3, img4] },
//     { name: "Old Age Support", images: [img2, img3, img4, img1] },
//     { name: "Disaster Relief", images: [img1, img3, img2, img4] },
//   ]);

//   const visibleAlbums = showAll ? albums : albums.slice(0, 6);

//   // ✅ Admin login
//   const handleAdminLogin = () => {
//     if (passwordInput === "admin123") { // replace with .env variable in production
//       setIsAdmin(true);
//       setPasswordInput("");
//     } else {
//       alert("Wrong password!");
//     }
//   };

//   // ✅ Upload image
//   const handleUpload = async () => {
//     if (!selectedFile || uploadAlbumId === "") {
//       return alert("Select file & album!");
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/albums/${uploadAlbumId}/images`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       alert("Image uploaded successfully!");
//       setSelectedFile(null);
//       setUploadAlbumId("");

//       // Optional: fetch updated albums from DB
//       // fetchAlbumsFromDB();
//     } catch (error) {
//       console.error(error);
//       alert("Upload failed!");
//     }
//   };

//   return (
//     <>
//       {/* 🔝 HEADER */}
//       <Header />

//       {/* 🔥 HERO */}
//       <Hero title="Gallery" subtitle="✿ Explore Our Memories" />

//       {/* 🔒 ADMIN LOGIN & UPLOAD */}
//       <section className="admin-section">
//         {!isAdmin && (
//           <div className="admin-login">
//             <input
//               type="password"
//               placeholder="Enter Admin Password"
//               value={passwordInput}
//               onChange={(e) => setPasswordInput(e.target.value)}
//             />
//             <button onClick={handleAdminLogin}>Unlock Admin</button>
//           </div>
//         )}

//         {isAdmin && (
//           <div className="admin-upload">
//             <h3>Upload Image to Album</h3>
//             <select
//               value={uploadAlbumId}
//               onChange={(e) => setUploadAlbumId(e.target.value)}
//             >
//               <option value="">Select Album</option>
//               {albums.map((album, i) => (
//                 <option key={i} value={i}>
//                   {album.name}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="file"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//             <button onClick={handleUpload}>Upload Image</button>
//           </div>
//         )}
//       </section>

//       {/* 📸 GALLERY */}
//       <section className="gallery">
//         <div className="gallery-header">
//           <h2>Our Albums</h2>
//         </div>

//         {/* ALBUM LIST */}
//         {!selectedAlbum && (
//           <>
//             <div className="album-grid">
//               {visibleAlbums.map((album, i) => (
//                 <div
//                   key={i}
//                   className="album-tile"
//                   onClick={() => setSelectedAlbum(album)}
//                 >
//                   <div className="stack">
//                     {album.images.slice(0, 3).map((img, index) => (
//                       <img
//                         key={index}
//                         src={img}
//                         alt={album.name}
//                         className={`stack-img img-${index}`}
//                       />
//                     ))}
//                   </div>
//                   <div className="album-overlay">
//                     <p>{album.name}</p>
//                   </div>
//                   <p className="album-title">{album.name}</p>
//                 </div>
//               ))}
//             </div>

//             {albums.length > 6 && (
//               <button
//                 className="show-more-btn"
//                 onClick={() => setShowAll(!showAll)}
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             )}
//           </>
//         )}

//         {/* ALBUM OPEN */}
//         {selectedAlbum && (
//           <div className="lightgallery-wrapper">
//             <div className="album-header">
//               <h3>{selectedAlbum.name}</h3>
//               <span
//                 className="close-btn"
//                 onClick={() => setSelectedAlbum(null)}
//               >
//                 Back
//               </span>
//             </div>

//             <LightGallery
//               speed={500}
//               plugins={[
//                 lgThumbnail,
//                 lgZoom,
//                 lgAutoplay,
//                 lgFullscreen,
//                 lgRotate,
//                 lgShare,
//               ]}
//             >
//               {selectedAlbum.images.map((img, index) => (
//                 <a href={img} key={index}>
//                   <img src={img} alt={selectedAlbum.name} />
//                 </a>
//               ))}
//             </LightGallery>
//           </div>
//         )}
//       </section>

//       {/* 🔚 FOOTER */}
//       <Footer />
//     </>
//   );
// }

// export default Gallery;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Gallery.css';

// // ✅ HEADER & FOOTER
// import Header from "../Header";
// import Footer from "../Footer";

// // 🔥 HERO
// import Hero from "../Hero/Hero1";

// // 🔥 LIGHTGALLERY
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";

// const API_URL = "http://localhost:5000/api";

// // 🔑 ADMIN PASSWORD (Frontend check)
// const ADMIN_PASSWORD = "Wisdom2026";

// function Gallery() {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   // 🔒 Admin states
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [passwordInput, setPasswordInput] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadAlbumId, setUploadAlbumId] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🎨 Albums from MongoDB
//   const [albums, setAlbums] = useState([]);

//   const visibleAlbums = showAll ? albums : albums.slice(0, 6);

//   // ✅ Fetch albums from DB on load
//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/albums`);
//       setAlbums(res.data);
//     } catch (error) {
//       console.error("Failed to fetch albums:", error);
//     }
//   };

//   // ✅ Admin login (Frontend check)
//   const handleAdminLogin = () => {
//     if (passwordInput === ADMIN_PASSWORD) {
//       setIsAdmin(true);
//       setPasswordInput("");
//       alert("Admin unlocked! ✅");
//     } else {
//       alert("Wrong password! ❌");
//     }
//   };

//   // ✅ Upload image
//   const handleUpload = async () => {
//     if (!selectedFile || uploadAlbumId === "") {
//       return alert("Select file & album!");
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     setLoading(true);
//     try {
//       await axios.post(
//         `${API_URL}/albums/${uploadAlbumId}/images`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       alert("Image uploaded successfully! 🎉");
//       setSelectedFile(null);
//       setUploadAlbumId("");
//       fetchAlbums();
//     } catch (error) {
//       console.error(error);
//       alert("Upload failed! Check backend connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Hero title="Gallery" subtitle="✿ Explore Our Memories" />

//       {/* 🔒 ADMIN SECTION */}
//       <section className="admin-section">
//         {!isAdmin ? (
//           <div className="admin-login">
//             <input
//               type="password"
//               placeholder="Enter Admin Password"
//               value={passwordInput}
//               onChange={(e) => setPasswordInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
//             />
//             <button onClick={handleAdminLogin}>Unlock Admin</button>
//           </div>
//         ) : (
//           <div className="admin-upload">
//             <h3>📤 Upload Image to Album</h3>
//             <select
//               value={uploadAlbumId}
//               onChange={(e) => setUploadAlbumId(e.target.value)}
//             >
//               <option value="">-- Select Album --</option>
//               {albums.map((album) => (
//                 <option key={album._id} value={album._id}>
//                   {album.name}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => setSelectedFile(e.target.files[0])}
//             />
//             <button onClick={handleUpload} disabled={loading}>
//               {loading ? "Uploading..." : "Upload Image"}
//             </button>
//             <button 
//               onClick={() => setIsAdmin(false)} 
//               className="logout-btn"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </section>

//       {/* 📸 GALLERY */}
//       <section className="gallery">
//         <div className="gallery-header">
//           <h2>Our Albums</h2>
//         </div>

//         {!selectedAlbum && (
//           <>
//             <div className="album-grid">
//               {visibleAlbums.map((album) => (
//                 <div
//                   key={album._id}
//                   className="album-tile"
//                   onClick={() => setSelectedAlbum(album)}
//                 >
//                   <div className="stack">
//                     {album.images.length > 0 ? (
//                       album.images.slice(0, 3).map((img, index) => (
//                         <img
//                           key={index}
//                           // ✅ மாற்றம் 1: API_URL அல்ல, நேரடி URL
//                           src={`http://localhost:5000/${img}`}
//                           alt={album.name}
//                           className={`stack-img img-${index}`}
//                         />
//                       ))
//                     ) : (
//                       <div className="no-images-placeholder">
//                         No images yet
//                       </div>
//                     )}
//                   </div>
//                   <div className="album-overlay">
//                     <p>{album.name}</p>
//                   </div>
//                   <p className="album-title">{album.name}</p>
//                 </div>
//               ))}
//             </div>

//             {albums.length > 6 && (
//               <button
//                 className="show-more-btn"
//                 onClick={() => setShowAll(!showAll)}
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             )}
//           </>
//         )}

//         {/* ALBUM OPEN */}
//         {selectedAlbum && (
//           <div className="lightgallery-wrapper">
//             <div className="album-header">
//               <h3>{selectedAlbum.name}</h3>
//               <span
//                 className="close-btn"
//                 onClick={() => setSelectedAlbum(null)}
//               >
//                 ← Back
//               </span>
//             </div>

//             {selectedAlbum.images.length > 0 ? (
//               <LightGallery
//                 speed={500}
//                 plugins={[
//                   lgThumbnail,
//                   lgZoom,
//                   lgAutoplay,
//                   lgFullscreen,
//                   lgRotate,
//                   lgShare,
//                 ]}
//               >
//                 {selectedAlbum.images.map((img, index) => (
//                   <a 
//                     // ✅ மாற்றம் 2: href-லும் நேரடி URL
//                     href={`http://localhost:5000/${img}`} 
//                     key={index}
//                   >
//                     <img 
//                       // ✅ மாற்றம் 3: src-லும் நேரடி URL
//                       src={`http://localhost:5000/${img}`} 
//                       alt={selectedAlbum.name} 
//                     />
//                   </a>
//                 ))}
//               </LightGallery>
//             ) : (
//               <div className="no-images-message">
//                 <p>📭 No images in this album yet.</p>
//                 <p>Login as admin to upload images!</p>
//               </div>
//             )}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Gallery;








// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Gallery.css';

// // ✅ HEADER & FOOTER
// import Header from "../Header";
// import Footer from "../Footer";

// // 🔥 HERO
// import Hero from "../Hero/Hero1";

// // 🔥 LIGHTGALLERY
// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import "lightgallery/css/lg-autoplay.css";
// import "lightgallery/css/lg-fullscreen.css";
// import "lightgallery/css/lg-share.css";
// import "lightgallery/css/lg-rotate.css";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import lgAutoplay from "lightgallery/plugins/autoplay";
// import lgFullscreen from "lightgallery/plugins/fullscreen";
// import lgShare from "lightgallery/plugins/share";
// import lgRotate from "lightgallery/plugins/rotate";

// const API_URL = "http://localhost:5000/api";

// // 🔑 ADMIN PASSWORD (Frontend check)
// const ADMIN_PASSWORD = "Wisdom2026";

// function Gallery() {
//   const [selectedAlbum, setSelectedAlbum] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   // 🔒 Admin states
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [passwordInput, setPasswordInput] = useState("");
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadAlbumId, setUploadAlbumId] = useState("");
//   const [loading, setLoading] = useState(false);

//   // 🆕 New Album states
//   const [showAddAlbum, setShowAddAlbum] = useState(false);
//   const [newAlbumName, setNewAlbumName] = useState("");

//   // 🎨 Albums from MongoDB
//   const [albums, setAlbums] = useState([]);

//   const visibleAlbums = showAll ? albums : albums.slice(0, 6);

//   // ✅ Fetch albums from DB on load
//   useEffect(() => {
//     fetchAlbums();
//   }, []);

//   const fetchAlbums = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/albums`);
//       setAlbums(res.data);
//     } catch (error) {
//       console.error("Failed to fetch albums:", error);
//     }
//   };

//   // ✅ Admin login (Frontend check)
//   const handleAdminLogin = () => {
//     if (passwordInput === ADMIN_PASSWORD) {
//       setIsAdmin(true);
//       setPasswordInput("");
//       alert("Admin unlocked! ✅");
//     } else {
//       alert("Wrong password! ❌");
//     }
//   };

//   // ✅ Upload image
//   const handleUpload = async () => {
//     if (!selectedFile || uploadAlbumId === "") {
//       return alert("Select file & album!");
//     }

//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     setLoading(true);
//     try {
//       await axios.post(
//         `${API_URL}/albums/${uploadAlbumId}/images`,
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       alert("Image uploaded successfully! 🎉");
//       setSelectedFile(null);
//       setUploadAlbumId("");
//       fetchAlbums();
//     } catch (error) {
//       console.error(error);
//       alert("Upload failed! Check backend connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 🗑️ Delete Image from Album
//   const handleDeleteImage = async (albumId, imageIndex) => {
//     if (!window.confirm("Are you sure you want to delete this image?")) {
//       return;
//     }

//     try {
//       await axios.delete(`${API_URL}/albums/${albumId}/images/${imageIndex}`);
//       alert("Image deleted successfully! 🗑️");
//       fetchAlbums();
      
//       // Update selected album if open
//       if (selectedAlbum && selectedAlbum._id === albumId) {
//         const updatedAlbum = albums.find(a => a._id === albumId);
//         if (updatedAlbum) {
//           setSelectedAlbum(updatedAlbum);
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Failed to delete image!");
//     }
//   };

//   // ➕ Add New Album
//   const handleAddAlbum = async () => {
//     if (!newAlbumName.trim()) {
//       return alert("Enter album name!");
//     }

//     try {
//       await axios.post(`${API_URL}/albums`, { name: newAlbumName });
//       alert("Album created successfully! 🎉");
//       setNewAlbumName("");
//       setShowAddAlbum(false);
//       fetchAlbums();
//     } catch (error) {
//       console.error(error);
//       alert("Failed to create album!");
//     }
//   };

//   // 🗑️ Delete Entire Album
//   const handleDeleteAlbum = async (albumId, albumName) => {
//     if (!window.confirm(`Are you sure you want to delete "${albumName}" album? This cannot be undone!`)) {
//       return;
//     }

//     try {
//       await axios.delete(`${API_URL}/albums/${albumId}`);
//       alert("Album deleted successfully! 🗑️");
//       setSelectedAlbum(null);
//       fetchAlbums();
//     } catch (error) {
//       console.error(error);
//       alert("Failed to delete album!");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <Hero title="Gallery" subtitle="✿ Explore Our Memories" />

//       {/* 🔒 ADMIN SECTION */}
//       <section className="admin-section">
//         {!isAdmin ? (
//           <div className="admin-login">
//             <input
//               type="password"
//               placeholder="Enter Admin Password"
//               value={passwordInput}
//               onChange={(e) => setPasswordInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
//             />
//             <button onClick={handleAdminLogin}>Unlock Admin</button>
//           </div>
//         ) : (
//           <div className="admin-upload">
//             <h3>📤 Upload Image to Album</h3>
            
//             {/* Upload Section */}
//             <div className="admin-controls">
//               <select
//                 value={uploadAlbumId}
//                 onChange={(e) => setUploadAlbumId(e.target.value)}
//               >
//                 <option value="">-- Select Album --</option>
//                 {albums.map((album) => (
//                   <option key={album._id} value={album._id}>
//                     {album.name}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setSelectedFile(e.target.files[0])}
//               />
//               <button onClick={handleUpload} disabled={loading}>
//                 {loading ? "Uploading..." : "Upload Image"}
//               </button>
//             </div>

//             {/* Add New Album Button */}
//             <button 
//               className="add-album-btn"
//               onClick={() => setShowAddAlbum(!showAddAlbum)}
//             >
//               {showAddAlbum ? "Cancel" : "➕ Add New Album"}
//             </button>

//             {/* Add Album Form */}
//             {showAddAlbum && (
//               <div className="add-album-form">
//                 <input
//                   type="text"
//                   placeholder="Enter album name..."
//                   value={newAlbumName}
//                   onChange={(e) => setNewAlbumName(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleAddAlbum()}
//                 />
//                 <button onClick={handleAddAlbum}>Create Album</button>
//               </div>
//             )}

//             <button 
//               onClick={() => setIsAdmin(false)} 
//               className="logout-btn"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </section>

//       {/* 📸 GALLERY */}
//       <section className="gallery">
//         <div className="gallery-header">
//           <h2>Our Albums</h2>
//         </div>

//         {!selectedAlbum && (
//           <>
//             <div className="album-grid">
//               {visibleAlbums.map((album) => (
//                 <div
//                   key={album._id}
//                   className="album-tile"
//                   onClick={() => setSelectedAlbum(album)}
//                 >
//                   <div className="stack">
//                     {album.images.length > 0 ? (
//                       album.images.slice(0, 3).map((img, index) => (
//                         <img
//                           key={index}
//                           src={`http://localhost:5000/${img}`}
//                           alt={album.name}
//                           className={`stack-img img-${index}`}
//                         />
//                       ))
//                     ) : (
//                       <div className="no-images-placeholder">
//                         No images yet
//                       </div>
//                     )}
//                   </div>
//                   <div className="album-overlay">
//                     <p>{album.name}</p>
//                   </div>
//                   <p className="album-title">{album.name}</p>
//                 </div>
//               ))}
//             </div>

//             {albums.length > 6 && (
//               <button
//                 className="show-more-btn"
//                 onClick={() => setShowAll(!showAll)}
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             )}
//           </>
//         )}

//         {/* ALBUM OPEN */}
//         {selectedAlbum && (
//           <div className="lightgallery-wrapper">
//             <div className="album-header">
//               <h3>{selectedAlbum.name}</h3>
//               <div className="album-actions">
//                 {isAdmin && (
//                   <button
//                     className="delete-album-btn"
//                     onClick={() => handleDeleteAlbum(selectedAlbum._id, selectedAlbum.name)}
//                   >
//                     🗑️ Delete Album
//                   </button>
//                 )}
//                 <span
//                   className="close-btn"
//                   onClick={() => setSelectedAlbum(null)}
//                 >
//                   ← Back
//                 </span>
//               </div>
//             </div>

//             {selectedAlbum.images.length > 0 ? (
//               <LightGallery
//                 speed={500}
//                 plugins={[
//                   lgThumbnail,
//                   lgZoom,
//                   lgAutoplay,
//                   lgFullscreen,
//                   lgRotate,
//                   lgShare,
//                 ]}
//               >
//                 {selectedAlbum.images.map((img, index) => (
//                   <div key={index} className="image-wrapper">
//                     <a href={`http://localhost:5000/${img}`}>
//                       <img src={`http://localhost:5000/${img}`} alt={selectedAlbum.name} />
//                     </a>
//                     {isAdmin && (
//                       <button
//                         className="delete-image-btn"
//                         onClick={() => handleDeleteImage(selectedAlbum._id, index)}
//                         title="Delete this image"
//                       >
//                         🗑️
//                       </button>
//                     )}
//                   </div>
//                 ))}
//               </LightGallery>
//             ) : (
//               <div className="no-images-message">
//                 <p>📭 No images in this album yet.</p>
//                 <p>Login as admin to upload images!</p>
//               </div>
//             )}
//           </div>
//         )}
//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Gallery;

import React, { useState, useEffect } from "react";
import axios from "axios";
import './Gallery.css';

import Header from "../Header";
import Footer from "../Footer";
import Hero from "../Hero/Hero1";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const API_URL = "http://localhost:5000/api";

function Gallery() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [albums, setAlbums] = useState([]);

  const visibleAlbums = showAll ? albums : albums.slice(0, 6);

  // ✅ Fetch albums
  useEffect(() => {
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(`${API_URL}/albums`);
      setAlbums(res.data);

      if (selectedAlbum) {
        const updated = res.data.find(a => a._id === selectedAlbum._id);
        if (updated) setSelectedAlbum(updated);
      }
    } catch (error) {
      console.error("Failed to fetch albums:", error);
    }
  };

  return (
    <>
      <Header />
      <Hero title="Gallery" subtitle="✿ Explore Our Memories" />

      <section className="gallery">
        <div className="gallery-header">
          <h2>Our Albums</h2>
        </div>

        {/* 📁 Album List */}
        {!selectedAlbum && (
          <>
            <div className="album-grid">
              {visibleAlbums.map((album) => (
                <div
                  key={album._id}
                  className="album-tile"
                  onClick={() => setSelectedAlbum(album)}
                >
                  <div className="stack">
                    {album.images.length > 0 ? (
                      album.images.slice(0, 3).map((img, index) => (
                        <img
                          key={index}
                          src={`http://localhost:5000/${img}`}
                          alt={album.name}
                          className={`stack-img img-${index}`}
                        />
                      ))
                    ) : (
                      <div className="no-images-placeholder">
                        No images yet
                      </div>
                    )}
                  </div>

                  <div className="album-overlay">
                    <p>{album.name}</p>
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

        {/* 📸 Album Open */}
        {selectedAlbum && (
          <div className="lightgallery-wrapper">
            <div className="album-header">
              <h3>{selectedAlbum.name}</h3>

              <span
                className="close-btn"
                onClick={() => setSelectedAlbum(null)}
              >
                ← Back
              </span>
            </div>

            {selectedAlbum.images.length > 0 ? (
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
              >
                {selectedAlbum.images.map((img, index) => (
                  <a key={index} href={`http://localhost:5000/${img}`}>
                    <img
                      src={`http://localhost:5000/${img}`}
                      alt={selectedAlbum.name}
                    />
                  </a>
                ))}
              </LightGallery>
            ) : (
              <div className="no-images-message">
                <p>📭 No images in this album yet.</p>
              </div>
            )}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Gallery;











