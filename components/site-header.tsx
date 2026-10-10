"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    ["/services", "Services"],
    ["/training", "Training"],
    ["/lab", "The lab"],
    ["/about", "About"],
  ];
  return (
    <header className="site-header container">
      <Link
        href="/"
        className="wordmark"
        aria-label="Hashbay home"
        onClick={() => setOpen(false)}
      >
        hashbay.
      </Link>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`site-nav ${open ? "is-open" : ""}`}
      >
        {links.map(([href, label]) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname.startsWith(href) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="mobile-contact"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Start a conversation
        </Link>
      </nav>
      <Link href="/contact" className="button">
        Start a conversation
      </Link>
    </header>
  );
}
