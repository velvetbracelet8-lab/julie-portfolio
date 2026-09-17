import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Hero photograph */}
      <div className="absolute inset-0">
        <Image
          src="https://fazywssyelpsatnzisnn.supabase.co/storage/v1/object/public/artworks/05533bb4-1088-4d7c-b108-0e41c070f452/b12c8ba8-dee5-469e-b4aa-fab9aac55a39.png"
          alt="Julie"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/20" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="container flex flex-1 items-end pb-10 pt-32 md:pb-14 md:pt-40">
          <div className="w-full">
            {/* Availability */}
            <div className="mb-8 flex items-center gap-3 md:mb-10">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                Available for selected projects
              </span>
            </div>

            {/* Main content */}
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              {/* Heading */}
              <div className="lg:col-span-10">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-white/70 md:mb-6">
                  Hello, I&apos;m Julie.
                </p>

                <h1 className="max-w-6xl text-[clamp(3.5rem,10vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.055em]">
                  I design{" "}
                  <span className="display-font">&amp;</span> build
                  <br />
                  <span className="display-font">digital</span>{" "}
                  experiences.
                </h1>
              </div>

              {/* Supporting text */}
              <div className="lg:col-span-2 lg:pb-2">
                <p className="max-w-xs text-sm leading-6 text-white/70 md:text-base md:leading-7">
                  Designing intuitive experiences &amp; building
                  high-performance websites.
                </p>
              </div>
            </div>

            {/* Actions + disciplines */}
            <div className="mt-10 flex flex-col gap-6 md:mt-12 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--accent)]"
                >
                  View my work

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
                >
                  Let&apos;s talk

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              {/* Disciplines */}
              <div className="hidden items-center gap-4 md:flex">
                <span className="h-px w-12 bg-white/30" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">
                  Design → UX → UI → Code → Product
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}