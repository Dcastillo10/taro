import "react";
import "./Footer.css"

export default function Footer() {
    return (
        <footer>
        <div className="footer-links">
          <a href="/">Privacy Policy</a>
          <a href="/">Cookies Policy</a>
          <a href="/">Cookie Preferences</a>
          <a href="/">Admin Profile</a>
        </div>
        <div className="social-links">
          <a href="/">📘</a>
          <a href="/">📸</a>
          <a href="/">📹</a>
          <a href="/">🎵</a>
          <a href="/">🐦</a>
        </div>
      </footer>
    );
  }