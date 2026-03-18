import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-5">
      <div className="flex justify-between items-start flex-wrap gap-10">
        {/* Brand / Company */}
        <div className="footer-brand">
          <h2>Food Pot</h2>
        </div>

        {/* Quick Links */}
        <div className="flex gap-5 flex-wrap hover:text-gray-300 transition-colors duration-300">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#privacy">Privacy</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="">
          <h4>Contact</h4>
          <p>Email: info@mycompany.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="items-center text-center mt-5 border-t border-gray-600 pt-3">
        <p>© 2026 MyCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
