import React from "react";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-green-600 p-10 px-28">
      <div className="flex items-center gap-4">
        <img
          className="h-6"
          src="https://www.servicenow.com/content/dam/servicenow-assets/images/naas/servicenow-header-logo.svg"
          alt="ServiceNow Logo"
        />
        <span className="text-base text-white text-opacity-50 ml-6">|</span>
        <p className="text-base ml-6 text-white">
          The world works with ServiceNow®
        </p>
      </div>
      <div className="flex gap-6">
        <Link to="https://x.com/ServiceNow">
          <FaTwitter className="text-white text-3xl hover:text-green-800 cursor-pointer" />
        </Link>
        <Link to="https://www.youtube.com/@servicenow">
          <FaYoutube className="text-white text-3xl hover:text-green-800 cursor-pointer" />
        </Link>
        <Link to="https://www.linkedin.com/company/servicenow/posts/?feedView=all">
          <FaLinkedin className="text-white text-3xl hover:text-green-800 cursor-pointer" />
        </Link>
        <Link to="https://www.facebook.com/servicenow/?locale=es_ES">
          <FaFacebook className="text-white text-3xl hover:text-green-800 cursor-pointer" />
        </Link>
        <Link to="https://www.instagram.com/servicenow/">
          <FaInstagram className="text-white text-3xl hover:text-green-800 cursor-pointer" />
        </Link>
        <Link to="https://www.tiktok.com/@servicenow?lang=es">
          <FaTiktok className="text-white text-3xl hover:text-green-800 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
