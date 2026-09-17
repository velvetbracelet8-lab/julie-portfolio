"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Playground", href: "/playground" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
    }

    return pathname === href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[color:var(--bg)]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-sm font-bold tracking-[-0.02em]"
          aria-label="Julie Lupex home"
        >
          JULIE LUPEX
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                  active
                    ? "text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute bottom-0 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          {/* Contact */}
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`group flex items-center gap-1 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.06em] transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--text)] text-[var(--bg)] hover:-translate-y-0.5 hover:bg-[var(--accent)]"
            }`}
          >
            Let&apos;s Talk

            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <nav
          className="container flex flex-col py-6"
          aria-label="Mobile navigation"
        >
          {navigation.map((item, index) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between border-b border-[var(--border)] py-5 text-2xl font-medium tracking-[-0.03em] transition-colors duration-200 ${
                  active
                    ? "text-[var(--accent)]"
                    : "text-[var(--text)]"
                }`}
              >
                <span>
                  <span className="mr-3 text-xs text-[var(--text-muted)]">
                    0{index + 1}
                  </span>

                  {item.label}
                </span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className={
                    active
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-muted)]"
                  }
                />
              </Link>
            );
          })}

          {/* Mobile Contact */}
          <Link
            href="/contact"
            onClick={closeMenu}
            aria-current={pathname === "/contact" ? "page" : undefined}
            className={`mt-6 flex items-center justify-between rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.06em] transition-all duration-300 ${
              pathname === "/contact"
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--text)] text-[var(--bg)]"
            }`}
          >
            Let&apos;s Talk

            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}