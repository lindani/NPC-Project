import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ndibs from '../assets/ndibs.jpeg'
const Footer = () => {
  return (
    <footer className="bg-neutral text-white py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src={ndibs} // Replace with actual image path
          alt="Foundation Founder Logo"
          className="w-24 h-24 rounded-full object-cover border-4 border-white mb-4"
        />

        {/* Title and registration */}
        <h3 className="text-2xl font-bold mb-2">Ndithini L Tyhido Foundation (NPC)</h3>
        <p className="text-gray-400 mb-2">Reg: 2023/564482/08</p>

        {/* Social icons */}
        <div className="flex space-x-4 mb-4">
          <a href="https://www.facebook.com/NDITHINI/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white hover:text-blue-500 text-xl" />
          </a>
          <a href="https://x.com/NdithiniT" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-blue-400 text-xl" />
          </a>
          <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500 text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/ndithini-tyhido-90092b89/?originalSubdomain=za" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-blue-700 text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ndithini L Tyhido Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
