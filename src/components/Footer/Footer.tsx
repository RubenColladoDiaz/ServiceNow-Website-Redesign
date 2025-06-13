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
import { useLogoImageContext } from "../../context/LogoImageContext";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const { logoImages } = useLogoImageContext();
  return (
    <div className="flex justify-between items-center bg-green-600 p-10 px-28">
      <div className="flex items-center gap-4">
        <img className="h-6" src={logoImages[1].path} alt={logoImages[1].alt} />
        <span className="text-base text-white text-opacity-50 ml-6">|</span>
        <p className="text-base ml-6 text-white">
          The world works with ServiceNow®
        </p>
      </div>
      <div className="flex gap-6">
        <Link to="https://x.com/ServiceNow">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTwitter className="text-white text-3xl hover:text-green-800 cursor-pointer" />
          </motion.div>
        </Link>
        <Link to="https://www.youtube.com/@servicenow">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaYoutube className="text-white text-3xl hover:text-green-800 cursor-pointer" />
          </motion.div>
        </Link>
        <Link to="https://www.linkedin.com/company/servicenow/posts/?feedView=all">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-white text-3xl hover:text-green-800 cursor-pointer" />
          </motion.div>
        </Link>
        <Link to="https://www.facebook.com/servicenow/?locale=es_ES">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebook className="text-white text-3xl hover:text-green-800 cursor-pointer" />
          </motion.div>
        </Link>
        <Link to="https://www.instagram.com/servicenow/">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaInstagram className="text-white text-3xl hover:text-green-800 cursor-pointer" />
          </motion.div>
        </Link>
        <Link to="https://www.tiktok.com/@servicenow?lang=es">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaTiktok className="text-white text-3xl hover:text-green-800 cursor-pointer" />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
