import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Contact Details */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <div className="w-10 border-b-2 border-red-600 my-2"></div>
          <p className="mt-2">Pillai College of Arts, Commerce & Science (Autonomous)</p>
          <p className="text-sm mt-1">Dr. K. M. Vasudevan Pillai Campus</p>
          <p className="text-sm">Plot No. 10, Sector 16, New Panvel – 410 206</p>
          <a href="https://www.pcacs.ac.in" className="text-red-400 hover:text-white mt-2 block">🌐 www.pcacs.ac.in</a>
          <p className="text-sm">✉️ pcacs@mes.ac.in</p>
          <p className="text-sm">📩 admissions@mes.ac.in</p>
        </div>

        {/* Contact Numbers */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact No.</h3>
          <div className="w-10 border-b-2 border-red-600 my-2"></div>
          <p><span className="font-semibold text-white">Reception:</span> 022-65748000</p>
          <p><span className="font-semibold text-white">Admission Office:</span> 022-65748016, 022-65748014</p>
          <p><span className="font-semibold text-white">Placement:</span> 022-65748008</p>
          <p><span className="font-semibold text-white">Exam Cell:</span> 022-65748004</p>
        </div>

        {/* Online Portal */}
        <div>
          <h3 className="text-lg font-semibold text-white">Online Portal</h3>
          <div className="w-10 border-b-2 border-red-600 my-2"></div>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-red-400">📚 PCACS Online Library</a></li>
            <li><a href="#" className="hover:text-red-400">🚆 Online Railway Concession</a></li>
            <li><a href="#" className="hover:text-red-400">🎓 Online Student Portal</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="w-10 border-b-2 border-red-600 my-2"></div>
          <div className="mt-4 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-500"><FaFacebookF size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-sky-400"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500"><FaYoutube size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-700"><FaLinkedinIn size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        © 2025 Pillai College. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
