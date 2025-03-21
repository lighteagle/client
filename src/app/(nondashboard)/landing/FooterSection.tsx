import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between ">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold" scroll={false}>
              RENTIFUL
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              <li>
                <Link href="/about" scroll={false}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" scroll={false}>
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" scroll={false}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" scroll={false}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" scroll={false}>
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Youtube" className="hover:text-primary-600">
              <FontAwesomeIcon icon={faYoutube} className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          <span>&copy; 2023 Rentiful. All rights reserved.</span>
          <Link href="/privacy" scroll={false}>
            Privacy Policy
          </Link>
          <Link href="/terms" scroll={false}>
            Term of Service
          </Link>
          <Link href="/cookies" scroll={false}>
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
