// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 50px;
          background: #0f172a;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .logo-icon {
          font-size: 28px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
        }

        .logo-text {
          font-size: 22px;
          font-weight: bold;
          background: linear-gradient(135deg, #fff 0%, #667eea 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .logo-text span {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Navigation Links */
        .nav-links {
          list-style: none;
          display: flex;
          gap: 30px;
          margin: 0;
          padding: 0;
        }

        .nav-links li a {
          text-decoration: none;
          color: white;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 5px 0;
        }

        /* Hover underline animation */
        .nav-links li a::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          left: 0;
          bottom: -5px;
          transition: width 0.3s ease;
        }

        .nav-links li a:hover::after {
          width: 100%;
        }

        .nav-links li a:hover {
          color: #667eea;
        }

        /* Button */
        .btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          padding: 10px 24px;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          font-size: 14px;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }

        /* Menu Icon (Mobile) */
        .menu-icon {
          display: none;
          font-size: 28px;
          color: white;
          cursor: pointer;
          transition: 0.3s;
        }

        .menu-icon:hover {
          color: #667eea;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .navbar {
            padding: 15px 20px;
          }

          .menu-icon {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            right: 0;
            width: 100%;
            background: #0f172a;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            display: none;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .nav-links.active {
            display: flex;
            animation: slideDown 0.3s ease;
          }

          .btn {
            display: none;
          }

          .logo-text {
            font-size: 18px;
          }

          .logo-icon {
            font-size: 24px;
            width: 35px;
            height: 35px;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .navbar {
            padding: 12px 15px;
          }

          .logo-text {
            font-size: 16px;
          }

          .logo-icon {
            font-size: 20px;
            width: 32px;
            height: 32px;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">🏥</div>
          <div className="logo-text">
            Med<span>Solutions</span>
          </div>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/packages" onClick={() => setMenuOpen(false)}>Packages</Link></li>
          <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        {/* Button */}
        <button className="btn">Get Started</button>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>
    </>
  );
}

export default Navbar;