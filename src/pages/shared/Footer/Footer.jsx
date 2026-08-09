import React from 'react';
import {
  FiFacebook,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
  FiArrowUpRight,
  FiMapPin,
  FiPhone,
  FiMail,
  FiTruck,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#031524] text-white">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/[0.08] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-500/[0.07] blur-3xl" />

      {/* =====================================================
          MAIN FOOTER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-sm">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 shadow-[0_10px_30px_rgba(249,115,22,0.2)]">
                <FiTruck className="text-xl text-white" />
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight">
                  Go<span className="text-orange-400">Deliver</span>
                </h2>

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                  Move with confidence
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-sm leading-7 text-white/45">
              Fast, secure and reliable parcel delivery across Bangladesh.
              GoDeliver makes every delivery simple, transparent and
              stress-free.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FiFacebook className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <FiTwitter className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-400"
              >
                <FiYoutube className="text-sm" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FiLinkedin className="text-sm" />
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div>
            <h3 className="text-sm font-bold text-white">Quick Links</h3>

            <div className="mt-5 space-y-3">
              {['Home', 'About Us', 'Services', 'How It Works'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex w-fit items-center gap-1.5 text-sm text-white/45 transition-colors duration-300 hover:text-orange-400"
                >
                  <span>{item}</span>

                  <FiArrowUpRight className="text-[11px] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================== */}

          <div>
            <h3 className="text-sm font-bold text-white">Our Services</h3>

            <div className="mt-5 space-y-3">
              {[
                'Express Delivery',
                'Nationwide Delivery',
                'Cash on Delivery',
                'Corporate Delivery',
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group flex w-fit items-center gap-1.5 text-sm text-white/45 transition-colors duration-300 hover:text-orange-400"
                >
                  <span>{item}</span>

                  <FiArrowUpRight className="text-[11px] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div>
            <h3 className="text-sm font-bold text-white">Get in Touch</h3>

            <div className="mt-5 space-y-4">
              {/* Location */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-orange-400">
                  <FiMapPin className="text-sm" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-white/50">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-orange-400">
                  <FiPhone className="text-sm" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-white/50">+880 1XXX-XXXXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.05] text-orange-400">
                  <FiMail className="text-sm" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white/50">
                    support@godeliver.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DIVIDER
        ====================================================== */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent" />

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} GoDeliver. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/30 transition-colors hover:text-white/70"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
