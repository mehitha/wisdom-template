import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCog, FaImages, FaComments, FaChartBar, FaUsers } from 'react-icons/fa';

export default function Home() {
  const navigate = useNavigate();

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <style>
        {`
          .admin-home {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
            background: linear-gradient(135deg, #0C2C55 0%, #1a4a7a 100%);
            color: white;
            text-align: center;
          }

          .admin-title {
            font-size: 3rem;
            margin-bottom: 5px;
            font-weight: 700;
            letter-spacing: 2px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          }

          .admin-subtitle {
            font-size: 1.2rem;
            color: #d3a50e;
            margin-bottom: 40px;
            font-weight: 300;
            letter-spacing: 4px;
            text-transform: uppercase;
          }

          .admin-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            max-width: 900px;
            width: 100%;
            margin-bottom: 40px;
          }

          .admin-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 30px 20px;
            border-radius: 12px;
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .admin-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.2);
            border-color: #d3a50e;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }

          .card-icon {
            font-size: 2.5rem;
            color: #d3a50e;
            margin-bottom: 15px;
          }

          .admin-card h3 {
            font-size: 1.1rem;
            margin-bottom: 8px;
            font-weight: 600;
          }

          .admin-card p {
            font-size: 0.85rem;
            opacity: 0.8;
            margin: 0;
          }

          .admin-footer {
            padding: 10px 30px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            font-size: 0.9rem;
            color: #ccc;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          /* Responsive */
          @media (max-width: 768px) {
            .admin-title {
              font-size: 2rem;
            }
            
            .admin-subtitle {
              font-size: 1rem;
              margin-bottom: 30px;
            }
            
            .admin-cards {
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
            }
            
            .admin-card {
              padding: 20px 15px;
            }
            
            .card-icon {
              font-size: 2rem;
            }
          }

          @media (max-width: 480px) {
            .admin-title {
              font-size: 1.5rem;
            }
            
            .admin-cards {
              grid-template-columns: 1fr;
              max-width: 300px;
            }
          }
        `}
      </style>

      <div className="admin-home">
        <h1 className="admin-title">NEW LIFE ACADEMY</h1>
        
        <p className="admin-subtitle">Admin Panel</p>
        
        <div className="admin-cards">
          {/* User Management Card */}
          <div className="admin-card" onClick={() => handleNavigation('/admin/user')}>
            <FaUsers className="card-icon" />
            <h3>User Management</h3>
            <p>Manage users & permissions</p>
          </div>
          
          {/* Gallery Card */}
          <div className="admin-card" onClick={() => handleNavigation('/admin/gallery')}>
            <FaImages className="card-icon" />
            <h3>Gallery</h3>
            <p>Manage academy gallery</p>
          </div>
          
          {/* Feedback Card */}
          <div className="admin-card" onClick={() => handleNavigation('/admin/feedback')}>
            <FaComments className="card-icon" />
            <h3>Feedback</h3>
            <p>View and manage feedback</p>
          </div>
          
          {/* Analytics Card */}
          {/* <div className="admin-card" onClick={() => handleNavigation('/admin/analytics')}>
            <FaChartBar className="card-icon" />
            <h3>Analytics</h3>
            <p>View statistics and reports</p>
          </div> */}
        </div>
        
        <p className="admin-footer">
          Welcome to New Life Academy Admin Panel
        </p>
      </div>
    </>
  );
}