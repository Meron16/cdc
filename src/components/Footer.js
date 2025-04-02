import React from "react";
import logo from "../assets/bit-cdc-logo.jpg";

function Footer() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row mx-auto px-4">
        <div className="flex items-center gap-2">
          <img
            src={logo || "/placeholder.svg"}
            alt="BiT CDC Logo"
            className="h-8 w-auto"
          />
          <p className="text-sm text-gray-500 md:text-base">
            © {new Date().getFullYear()} Bahir Dar Institute of Technology
            Career Development Center. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:underline"
          >
            Sitemap
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
