import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-sm font-medium mb-4">FIND A STORE</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Become a Member
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sign Up for Email
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Send Us Feedback
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Student Discounts
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-sm font-medium mb-4">GET HELP</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li>
              <Link href="#" className="hover:underline">
                Order Status
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Delivery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Payment Options
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us on Nike.com
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us on All Other Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-sm font-medium mb-4">ABOUT NIKE</h3>
          <ul className="space-y-2 text-sm text-[#7E7E7E]">
            <li>
              <Link href="#" className="hover:underline">
                News
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Investors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 (Social Media Icons) */}
        <div className="flex justify-end pt-4 items-start space-x-3">
          <div className="bg-[#7E7E7E] rounded-full p-2">
            <FaTwitter className="text-white w-6 h-6 cursor-pointer" />
          </div>
          <div className="bg-[#7E7E7E] rounded-full p-2">
            <FaFacebook className="text-white w-6 h-6 cursor-pointer" />
          </div>
          <div className="bg-[#7E7E7E] rounded-full p-2">
            <FaYoutube className="text-white w-6 h-6 cursor-pointer" />
          </div>
          <div className="bg-[#7E7E7E] rounded-full p-2">
            <FaInstagram className="text-white w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-xs text-gray-400">
          {/* Country and Copyright */}
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <IoLocationOutline className="text-white w-5 h-5" />
            <p className="text-white">India</p>
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">
              Guides
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Sale
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:underline">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
