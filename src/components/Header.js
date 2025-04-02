import React from "react";
import logo from "../assets/bit-cdc-logo.jpg";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-2">
          <img
            src={logo || "/placeholder.svg"}
            alt="BiT CDC Logo"
            className="h-10 w-auto"
          />
          <span className="text-xl font-bold tracking-tight text-bit-blue">
            BiT CDC
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#"
            className="font-medium transition-colors hover:text-bit-blue"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-medium text-muted-foreground transition-colors hover:text-bit-blue"
          >
            About
          </a>
          <a
            href="#services"
            className="font-medium text-muted-foreground transition-colors hover:text-bit-blue"
          >
            Services
          </a>
          <a
            href="#events"
            className="font-medium text-muted-foreground transition-colors hover:text-bit-blue"
          >
            Events
          </a>
          <a
            href="#resources"
            className="font-medium text-muted-foreground transition-colors hover:text-bit-blue"
          >
            Resources
          </a>
          <a
            href="#contact"
            className="font-medium text-muted-foreground transition-colors hover:text-bit-blue"
          >
            Contact
          </a>
        </nav>
        <button className="hidden md:flex h-9 items-center justify-center rounded-md bg-bit-blue px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-bit-blue/90">
          Student Login
        </button>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
