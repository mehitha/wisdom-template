// src/pages/gallery/Feedback.js
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // for live link navigation

const SUPABASE_URL = "https://qotiejrokypijozgmtft.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvdGllanJva3lwaWpvemdtdGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MTIyNTYsImV4cCI6MjA5NjE4ODI1Nn0.9WJRm644zr0ayb1kQn5AMP_uDCsbnCYcT6TqCDKseMk";
const TABLE = "testimonials";

const headers = {
  "Content-Type": "application/json",
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  Prefer: "return=representation",
};

async function dbFetch(path, options = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, { headers, ...options });
  if (!res.ok) throw new Error(await res.text());
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

const getAll = () => dbFetch(`${TABLE}?select=*&order=created_at.desc`);

function exportToCSV(data) {
  const csv = [
    Object.keys(data[0] || {}).join(","),
    ...data.map(row => Object.values(row).map(v => `"${v}"`).join(",")),
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", "feedbacks.csv");
  link.click();
}

export default function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    initials: "",
    company: "",
    review: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: "", company: "", review: "" });
  const [hoveredId, setHoveredId] = useState(null);

  const fileInputRef = useRef();
  const navigate = useNavigate(); // navigate for live link

  useEffect(() => {
    getAll().then(setFeedbacks).catch(console.error);
  }, []);

  const handleAdd = async () => {
    if (!newFeedback.name || !newFeedback.review)
      return alert("Name & Review required");

    try {
      const res = await dbFetch(TABLE, {
        method: "POST",
        body: JSON.stringify([newFeedback]),
      });

      setFeedbacks([res[0], ...feedbacks]);
      setNewFeedback({ name: "", initials: "", company: "", review: "" });
    } catch (e) {
      console.error(e);
      alert("Error adding feedback");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await file.text();
    const rows = text.split("\n").slice(1);

    const objs = rows.map((row) => {
      const [name, initials, company, review] = row.split(",");
      return { name, initials, company, review };
    });

    try {
      const res = await dbFetch(TABLE, {
        method: "POST",
        body: JSON.stringify(objs),
      });

      setFeedbacks([...res, ...feedbacks]);
      alert("Upload successful!");
    } catch (e) {
      console.error(e);
      alert("Upload failed");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this feedback?")) return;
    try {
      await dbFetch(`${TABLE}?id=eq.${id}`, { method: "DELETE" });
      setFeedbacks(feedbacks.filter(f => f.id !== id));
    } catch (e) {
      console.error(e);
      alert("Delete failed");
    }
  };

  const handleEdit = (feedback) => {
    setEditingId(feedback.id);
    setEditData({ name: feedback.name, company: feedback.company, review: feedback.review });
  };

  const handleSaveEdit = async (id) => {
    try {
      await dbFetch(`${TABLE}?id=eq.${id}`, {
        method: "PATCH",
        body: JSON.stringify(editData),
      });
      setFeedbacks(feedbacks.map(f => (f.id === id ? { ...f, ...editData } : f)));
      setEditingId(null);
    } catch (e) {
      console.error(e);
      alert("Edit failed");
    }
  };

  const filteredFeedbacks = feedbacks.filter(f =>
    f.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* 🔗 Live Link Button */}
      <button
  style={styles.liveBtn}
  onClick={() => window.open("http://localhost:3000/", "_blank")}
>
  Live View
</button>

      <h1 style={styles.title}>Feedback Dashboard</h1>

      {/* Search + Actions */}
      <div style={styles.actions}>
        <input
          placeholder="Search by Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.searchInput}
        />
        <div style={styles.actionBtns}>
          <button onClick={() => exportToCSV(feedbacks)} style={styles.btn}>
            Export CSV
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
          <button onClick={() => fileInputRef.current.click()} style={styles.btn}>
            Upload CSV
          </button>
        </div>
      </div>

      {/* Add Feedback Form */}
      <div style={styles.actions}>
        <h2>Add New Feedback</h2>
        <div style={styles.form}>
          <input
            placeholder="Name"
            value={newFeedback.name}
            onChange={(e) => setNewFeedback({ ...newFeedback, name: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Initials"
            value={newFeedback.initials}
            onChange={(e) => setNewFeedback({ ...newFeedback, initials: e.target.value })}
            style={styles.input}
          />
          <input
            placeholder="Company"
            value={newFeedback.company}
            onChange={(e) => setNewFeedback({ ...newFeedback, company: e.target.value })}
            style={styles.input}
          />
          <textarea
            placeholder="Review"
            value={newFeedback.review}
            onChange={(e) => setNewFeedback({ ...newFeedback, review: e.target.value })}
            style={{ ...styles.input, height: 80 }}
          />
          <button onClick={handleAdd} style={styles.btn}>
            Add Feedback
          </button>
        </div>
      </div>

      {/* Feedback List */}
      {filteredFeedbacks.length === 0 && (
        <p style={{ color: "#555", marginTop: 20 }}>No feedback found.</p>
      )}

      <div style={styles.cardContainer}>
        {filteredFeedbacks.map((t) => (
          <div
            key={t.id}
            style={styles.card}
            onMouseEnter={() => setHoveredId(t.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={styles.cardHeader}>
              <div style={styles.avatar}>{t.name.charAt(0).toUpperCase()}</div>
              <div style={{ marginLeft: 10, minWidth: 0, flex: 1 }}>
                {editingId === t.id ? (
                  <>
                    <input
                      value={editData.name}
                      onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                      style={styles.inputSmall}
                    />
                    <input
                      value={editData.company}
                      onChange={(e) => setEditData({ ...editData, company: e.target.value })}
                      style={styles.inputSmall}
                    />
                  </>
                ) : (
                  <>
                    <p style={styles.name}>{t.name}</p>
                    <p style={styles.company}>{t.company || "—"}</p>
                  </>
                )}
              </div>
            </div>

            {editingId === t.id ? (
              <>
                <textarea
                  value={editData.review}
                  onChange={(e) => setEditData({ ...editData, review: e.target.value })}
                  style={{ ...styles.input, height: 60, marginTop: 5 }}
                />
                <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                  <button onClick={() => handleSaveEdit(t.id)} style={styles.btnSmall}>Save</button>
                  <button onClick={() => setEditingId(null)} style={styles.btnSmallCancel}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p style={styles.review}>{t.review}</p>
                {hoveredId === t.id && (
                  <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                    <button onClick={() => handleEdit(t)} style={styles.btnSmall}>Edit</button>
                    <button onClick={() => handleDelete(t.id)} style={styles.btnSmallCancel}>Delete</button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🔥 STYLES adapted from Home page */
// 🔥 FULLY RESPONSIVE + ATTRACTIVE UI Updated Feedback.js
/* 🔥 SIMPLIFIED + RESPONSIVE + PERFECT SIZING */
const styles = {
  container: { 
    padding: "20px 15px",  // ✅ Smaller padding
    background: "#f8f9fa",
    minHeight: "100vh", 
    fontFamily: "system-ui, -apple-system, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  title: { 
    fontSize: "24px",  // ✅ Smaller title
    fontWeight: 600, 
    marginBottom: "20px", 
    color: "#1a1a1a", 
    textAlign: "center"
  },
  liveBtn: { 
    padding: "10px 20px",  // ✅ Smaller button
    background: "#00b894", 
    color: "#fff", 
    border: "none", 
    borderRadius: "8px", 
    cursor: "pointer", 
    fontSize: "14px", 
    fontWeight: 500,
    marginBottom: 15,
    alignSelf: "center",
    boxShadow: "0 4px 12px rgba(0,184,148,0.3)",
    transition: "all 0.2s ease"
  },
  cardContainer: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",  // ✅ Smaller cards
    gap: "20px", 
    marginTop: "25px",
    maxWidth: "1000px",  // ✅ Smaller max width
    width: "100%",
    padding: "0 5px"
  },
  card: { 
    background: "#fff", 
    padding: "20px",  // ✅ Smaller padding
    borderRadius: "12px", 
    boxShadow: "0 6px 20px rgba(0,0,0,0.08)",  // ✅ Lighter shadow
    transition: "all 0.2s ease",
    border: "1px solid #f0f0f0"
  },
  cardHeader: { 
    display: "flex", 
    alignItems: "center", 
    marginBottom: "12px",
    gap: "12px"
  },
  avatar: { 
    width: 42, 
    height: 42,  // ✅ Smaller avatar
    borderRadius: "50%", 
    background: "#1f2d3d", 
    color: "#fff", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    fontWeight: 700, 
    fontSize: 16
  },
  name: { 
    fontWeight: 600, 
    margin: 0, 
    fontSize: "15px"
  },
  company: { 
    fontSize: "12px", 
    color: "#666", 
    margin: 0, 
    fontWeight: 500
  },
  review: { 
    color: "#555", 
    lineHeight: 1.6, 
    marginTop: 8,
    fontSize: "14px"
  },
  actions: { 
    marginTop: "20px", 
    background: "#fff",
    width: "min(95vw, 650px)",  // ✅ Smaller + responsive
    display: "flex", 
    flexDirection: "column",
    alignItems: "center",
    padding: "25px 20px",  // ✅ Smaller padding
    borderRadius: "16px", 
    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
    border: "1px solid #f0f0f0"
  },
  actionBtns: { 
    display: "flex", 
    gap: "15px", 
    marginTop: "18px", 
    flexWrap: "wrap",
    justifyContent: "center"
  },
  btn: { 
    padding: "12px 22px", 
    background: "#1f2d3d", 
    color: "#fff", 
    border: "none", 
    borderRadius: "8px", 
    cursor: "pointer", 
    fontSize: "14px", 
    fontWeight: 500,
    boxShadow: "0 4px 12px rgba(31,45,61,0.2)",
    transition: "all 0.2s ease"
  },
  btnSmall: { 
    padding: "8px 16px", 
    background: "#1f2d3d", 
    color: "#fff", 
    border: "none", 
    borderRadius: "6px", 
    cursor: "pointer", 
    fontSize: "13px", 
    fontWeight: 500
  },
  btnSmallCancel: { 
    padding: "8px 16px", 
    background: "#e74c3c", 
    color: "#fff", 
    border: "none", 
    borderRadius: "6px", 
    cursor: "pointer", 
    fontSize: "13px", 
    fontWeight: 500
  },
  searchInput: { 
    padding: "14px 20px", 
    borderRadius: "12px", 
    border: "1px solid #ddd", 
    fontSize: 15, 
    outline: "none", 
    width: "100%", 
    maxWidth: "350px", 
    boxSizing: "border-box",
    marginBottom: "18px",
    background: "#fff",
    transition: "border-color 0.2s ease"
  },
  form: { 
    display: "grid", 
    gridTemplateColumns: "1fr 1fr",  // ✅ 2-column same line
    gap: "15px", 
    marginTop: "18px",
    width: "100%"
  },
  input: { 
    padding: "14px 16px", 
    borderRadius: "12px", 
    border: "1px solid #ddd", 
    fontSize: 15, 
    outline: "none", 
    width: "100%", 
    boxSizing: "border-box",
    background: "#fff",
    transition: "border-color 0.2s ease",
    fontWeight: 500
  },
  inputSmall: { 
    padding: "10px 14px", 
    borderRadius: "8px", 
    border: "1px solid #ddd", 
    fontSize: 14, 
    outline: "none", 
    width: "100%", 
    boxSizing: "border-box", 
    marginBottom: 6
  },
  h2: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#1f2d3d",
    marginBottom: "18px",
    textAlign: "center"
  },
  
};
