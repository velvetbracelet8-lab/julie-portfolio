import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const navigation = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Playground", href: "/playground" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container py-16 md:py-20 lg:py-24">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-6">
            <Link
              href="/"
              className="text-sm font-bold tracking-[-0.02em]"
            >
              JULIE LUPEX
            </Link>

            <h2 className="mt-8 max-w-2xl text-[clamp(2.75rem,6vw,6rem)] font-medium leading-[0.9] tracking-[-0.05em]">
              Let&apos;s make something{" "}
              <span className="display-font">real.</span>
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                Available for selected projects
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Navigation
            </p>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="group mt-2 inline-flex items-center gap-1 text-sm font-semibold"
              >
                Let&apos;s Talk
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Contact
            </p>

            <div className="flex flex-col items-start gap-4">
              <a
                href="mailto:julielupex@gmail.com"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              >
                julielupex@gmail.com

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="tel:+254786371590"
                className="group inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--accent)]"
              >
                +254 786 371 590

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-6 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)] md:mt-20 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Julie Lupex</p>

          <p>Design + Development</p>

          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[var(--text)]"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}