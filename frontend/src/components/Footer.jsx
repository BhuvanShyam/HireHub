
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Job Portal Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Job Portal</h4>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/jobs" className="hover:underline">Find Jobs</a></li>
              <li><a href="/employers" className="hover:underline">For Employers</a></li>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/help" className="hover:underline">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul>
              <li>Email: support@jobportal.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Job Street, City</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500">© {new Date().getFullYear()} Job Portal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
