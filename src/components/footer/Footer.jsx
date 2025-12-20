import React from "react";
import logo from "../../assets/bibimbap.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 pt-16 pb-8 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="The Daily Dish" className="h-10 w-10" />
              <span className="text-xl font-bold text-gray-900">
                The Daily <span className="text-primary">Dish</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Fresh, home-cooked meals delivered right to your doorstep.
              Supporting local chefs and satisfying your cravings.
            </p>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact Details
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:support@thedailydish.com"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  support@thedailydish.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+1-234-567-8900"
                  className="text-gray-600 hover:text-primary transition-colors text-sm"
                >
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600 text-sm">
                  123 Chef Street
                  <br />
                  Culinary City, CC 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Working Hours Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Working Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-600">Monday - Friday:</span>
                <span className="text-gray-900 font-medium">
                  9:00 AM - 10:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Saturday:</span>
                <span className="text-gray-900 font-medium">
                  10:00 AM - 11:00 PM
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sunday:</span>
                <span className="text-gray-900 font-medium">
                  10:00 AM - 9:00 PM
                </span>
              </li>
              <li className="pt-3 border-t border-gray-200 mt-3">
                <p className="text-gray-600 text-xs">
                  Delivery available during working hours
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 text-gray-600 hover:bg-primary hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.488 2h.172zM12.488 4h-.172c-2.68 0-3.004.012-3.882.052-.784.035-1.05.166-1.286.257-.31.125-.515.27-.723.479-.21.209-.355.414-.479.723-.09.236-.222.502-.257 1.287C5.645 7.747 5.633 8.01 5.633 11.772v.63c0 3.762.012 4.025.045 4.87.035.785.166 1.051.257 1.287.125.31.27.514.479.723.209.21.414.355.723.479.236.09.502.222 1.287.257 1.068.049 1.341.06 4.545.06h.63c2.973 0 3.25-.012 3.883-.052.784-.035 1.05-.166 1.286-.257.31-.125 515-.27.723-.479.21-.209.355-.414.479-.723.09-.236.222-.502.257-1.287.035-.845.046-1.168.046-4.87v-.63c0-3.762-.012-4.025-.046-4.87-.035-.785-.166-1.051-.257-1.287-.125-.31-.27-.514-.479-.723-.209-.21-.414-.355-.723-.479-.236-.09-.502-.222-1.287-.257-.878-.04-1.202-.052-3.882-.052zM12.315 7.645a4.572 4.572 0 110 9.144 4.572 4.572 0 010-9.144zM12.315 9.49a2.727 2.727 0 100 5.454 2.727 2.727 0 000-5.454zm5.111-3.692a1.229 1.229 0 110 2.458 1.229 1.229 0 010-2.458z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} The Daily Dish. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
