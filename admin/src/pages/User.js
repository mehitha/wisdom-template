import React, { useState, useEffect } from "react";
import { FaUser, FaUserShield, FaUserTie, FaEdit, FaTrash } from "react-icons/fa";
import "./User.css";

const roleIcon = {
  user: <FaUser color="#555" />,
  admin: <FaUserShield color="#0d6efd" />,
  superadmin: <FaUserTie color="#dc3545" />,
};

const User = () => {
  // All users state
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { id: 1, name: "John Doe", role: "user", email: "john@mail.com", phone: "9876543210", password: "1234" },
        ];
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    role: "user",
    email: "",
    phone: "",
    password: "",
  });

  // Currently editing user
  const [editingId, setEditingId] = useState(null);

  // Logged in / visible user state
  const [loggedUser, setLoggedUser] = useState(() => {
    const storedLoggedUser = localStorage.getItem("loggedUser");
    return storedLoggedUser ? JSON.parse(storedLoggedUser) : null;
  });

  // Save users to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save loggedUser to localStorage whenever it changes
  useEffect(() => {
    if (loggedUser) {
      localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    } else {
      localStorage.removeItem("loggedUser");
    }
  }, [loggedUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.password) return;

    if (editingId) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.id === editingId ? { ...user, ...formData } : user
        )
      );
      setEditingId(null);
    } else {
      // Add new user
      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        ...formData,
      };
      setUsers([...users, newUser]);
    }

    // Log in the user after submission
    setLoggedUser({
      email: formData.email,
      password: formData.password,
      role: formData.role,
    });

    setFormData({ name: "", role: "user", email: "", phone: "", password: "" });
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      role: user.role,
      email: user.email,
      phone: user.phone,
      password: user.password || "",
    });
    setEditingId(user.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
      if (loggedUser && loggedUser.email === users.find(u => u.id === id)?.email) {
        setLoggedUser(null); // remove loggedUser if deleted
      }
    }
  };

  // Determine which users are visible
  const visibleUsers = users.filter((user) => {
    if (!loggedUser) return false; // show nothing initially
    if (loggedUser.role === "admin" || loggedUser.role === "superadmin") return true; // admin/superadmin sees all
    return user.email === loggedUser.email && user.password === loggedUser.password; // normal user sees own card
  });

  return (
    <div className="user-container">
      <h2>{editingId ? "Edit User" : "Create User"}</h2>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="superadmin">Superadmin</option>
        </select>
        <button type="submit">{editingId ? "Update" : "Create"}</button>
      </form>

      <h2>Users</h2>
      <div className="user-grid">
        {visibleUsers.length ? (
          visibleUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-icon">{roleIcon[user.role]}</div>
              <div className="user-info">
                <p className="user-name">{user.name}</p>
                <p className="user-role">{user.role.toUpperCase()}</p>
                <p className="user-email">{user.email}</p>
                <p className="user-phone">{user.phone}</p>
              </div>
              <div className="user-actions">
                <button className="edit-btn" onClick={() => handleEdit(user)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#888", marginTop: "20px" }}>
            No users to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default User;