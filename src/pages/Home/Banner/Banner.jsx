import { Link } from 'react-router';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  MapPin,
  Package,
  Truck,
} from 'lucide-react';

const Banner = () => {
  return (
    <section className="group relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#031524]">
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================== */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-[0.11] transition-opacity duration-1000 group-hover:opacity-[0.14]"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://v1.pinimg.com/videos/mc/720p/7e/fc/50/7efc5098698e67ea3f5ed914070b9001.mp4"
          type="video/mp4"
        />
      </video>

      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================== */}

      {/* Main gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_40%,rgba(30,110,180,0.25),transparent_31%),linear-gradient(110deg,#02111F_0%,#062746_47%,#073B62_100%)]" />

      {/* Bottom fade */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_58%,#031524_100%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Blue ambient glow */}
      <div className="absolute -right-52 -top-40 h-[700px] w-[700px] rounded-full bg-blue-500/[0.12] blur-[150px]" />

      {/* Orange ambient glow */}
      <div className="absolute right-[25%] top-[38%] h-[280px] w-[280px] rounded-full bg-orange-500/[0.07] blur-[120px]" />

      {/* Bottom glow */}
      <div className="absolute -bottom-72 left-[30%] h-[600px] w-[600px] rounded-full bg-blue-400/[0.06] blur-[140px]" />

      {/* =========================================================
          CONTENT
      ========================================================== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-12 sm:px-8 lg:px-10 lg:pt-16">
        <div className="grid min-h-[570px] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-2">
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="relative z-20 max-w-2xl">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.055] px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-orange-400/20 hover:bg-white/[0.08]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_14px_rgba(249,115,22,0.85)]" />
              </span>

              <span className="text-[11px] font-semibold tracking-wide text-white/80 sm:text-xs">
                Fast & Reliable Delivery Across Bangladesh
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-[48px] font-black leading-[0.94] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl lg:text-[78px]">
              Deliver
              <span className="relative ml-3 inline-block">
                Faster.
                <span className="absolute -bottom-1 left-0 h-[3px] w-[70%] rounded-full bg-orange-500 shadow-[0_0_14px_rgba(249,115,22,0.4)]" />
              </span>
              <br />
              <span className="relative inline-block bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 bg-clip-text text-transparent">
                Deliver Smarter.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-[15px] leading-7 text-white/55 sm:text-[17px] sm:leading-8">
              Send parcels anywhere in Bangladesh with GoDeliver. Fast pickup,
              secure handling, real-time tracking and reliable delivery — all in
              one place.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <Link
                to="/sendParcel"
                className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_45px_rgba(249,115,22,0.23)] transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-[0_20px_55px_rgba(249,115,22,0.34)]"
              >
                {/* Shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

                <span className="relative">Send a Parcel</span>

                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                to="/tracking"
                className="group/track inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.09]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-300/30 text-blue-300 transition-transform duration-300 group-hover/track:scale-110">
                  <MapPin className="h-3 w-3" />
                </span>
                Track Parcel
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/50 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                  <Check className="h-2.5 w-2.5" />
                </span>
                64 Districts
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                  <Check className="h-2.5 w-2.5" />
                </span>
                Secure Delivery
              </div>

              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                  <Check className="h-2.5 w-2.5" />
                </span>
                Easy Tracking
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}
          <div className="relative hidden h-[590px] items-center justify-center lg:flex">
            {/* Decorative rings */}
            <div className="absolute right-[2%] top-[7%] h-[450px] w-[450px] rounded-full border border-white/[0.035]" />

            <div className="absolute right-[9%] top-[14%] h-[365px] w-[365px] rounded-full border border-orange-400/[0.045]" />

            {/* Soft ring glow */}
            <div className="absolute right-[13%] top-[19%] h-[300px] w-[300px] rounded-full bg-blue-400/[0.025] blur-2xl" />

            {/* ==================================================
                ROUTE SVG
            ================================================== */}
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 600 590"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="routeGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Full route */}
              <path
                d="M75 465 C145 395 125 320 220 285 C315 250 300 175 390 145 C450 125 475 92 530 72"
                stroke="rgba(255,255,255,0.10)"
                strokeWidth="2"
                strokeDasharray="6 10"
              />

              {/* Active orange route */}
              <path
                d="M75 465 C145 395 125 320 220 285"
                stroke="#F97316"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 9"
                filter="url(#routeGlow)"
                className="route-animation"
              />

              {/* Destination route */}
              <path
                d="M220 285 C315 250 300 175 390 145 C450 125 475 92 530 72"
                stroke="rgba(96,165,250,0.28)"
                strokeWidth="2"
                strokeDasharray="5 12"
                className="destination-route"
              />
            </svg>

            {/* Origin */}
            <div className="absolute bottom-[88px] left-[48px] flex h-10 w-10 items-center justify-center rounded-full border border-orange-400/20 bg-orange-400/[0.07]">
              <span className="absolute h-7 w-7 animate-ping rounded-full bg-orange-400/10" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.95)]" />
            </div>

            {/* Destination */}
            <div className="absolute right-[45px] top-[55px] flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/20 bg-blue-300/[0.07]">
              <span className="absolute h-7 w-7 animate-ping rounded-full bg-blue-300/10" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(147,197,253,0.95)]" />
            </div>

            {/* ==================================================
                MAIN DELIVERY CARD
            ================================================== */}
            <div className="relative z-20 w-[410px]">
              {/* Small label */}
              <div className="mb-4 ml-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/35">
                  Live Delivery Network
                </span>
              </div>

              {/* Glass card */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.11] bg-[#0A3458]/75 p-5 shadow-[0_40px_110px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                {/* Card glows */}
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/[0.11] blur-3xl" />

                <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-orange-500/[0.06] blur-3xl" />

                {/* Header */}
                <div className="relative flex items-center justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                      Delivery Overview
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Your parcel is on the way
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-green-400/15 bg-green-400/[0.08] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />

                    <span className="text-[9px] font-bold text-green-300">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* ==================================================
                    DELIVERY VISUAL
                ================================================== */}
                <div className="relative mt-6 h-[220px] overflow-hidden rounded-[20px] border border-white/[0.04] bg-gradient-to-br from-[#0C416D] to-[#062B49]">
                  {/* Stars */}
                  <span className="absolute left-[15%] top-[18%] h-1 w-1 rounded-full bg-white/30" />
                  <span className="absolute left-[70%] top-[13%] h-1 w-1 rounded-full bg-white/20" />
                  <span className="absolute right-[17%] top-[28%] h-1 w-1 rounded-full bg-white/30" />

                  {/* Moon glow */}
                  <div className="absolute right-10 top-7 h-16 w-16 rounded-full bg-blue-200/[0.05] blur-sm" />

                  <div className="absolute right-[54px] top-[41px] h-5 w-5 rounded-full bg-blue-100/20 blur-[1px]" />

                  {/* Buildings */}
                  <div className="absolute bottom-0 left-4 h-20 w-12 rounded-t-lg bg-white/[0.035]" />
                  <div className="absolute bottom-0 left-20 h-32 w-10 rounded-t-lg bg-white/[0.045]" />
                  <div className="absolute bottom-0 left-[115px] h-24 w-8 rounded-t-lg bg-white/[0.025]" />
                  <div className="absolute bottom-0 right-[92px] h-28 w-12 rounded-t-lg bg-white/[0.04]" />
                  <div className="absolute bottom-0 right-8 h-20 w-11 rounded-t-lg bg-white/[0.03]" />

                  {/* Building lights */}
                  <div className="absolute bottom-[65px] left-[28px] h-1 w-1 bg-orange-300/40" />
                  <div className="absolute bottom-[80px] left-[89px] h-1 w-1 bg-blue-200/30" />
                  <div className="absolute bottom-[70px] right-[110px] h-1 w-1 bg-orange-300/30" />

                  {/* Road */}
                  <div className="absolute bottom-0 left-0 right-0 h-[58px] bg-[#051F35]" />

                  {/* Road glow */}
                  <div className="absolute bottom-[56px] left-0 right-0 h-5 bg-gradient-to-t from-[#051F35] to-transparent" />

                  {/* Road markings */}
                  <div className="absolute bottom-6 left-8 right-8 flex justify-between">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <span
                        key={item}
                        className="h-1 w-9 rounded-full bg-white/15"
                      />
                    ))}
                  </div>

                  {/* ==================================================
                      TRUCK
                  ================================================== */}
                  <div className="truck-animation absolute bottom-[32px] left-1/2">
                    {/* Truck shadow */}
                    <div className="absolute -bottom-5 left-1/2 h-3 w-[190px] -translate-x-1/2 rounded-full bg-black/35 blur-md" />

                    <div className="relative h-[75px] w-[165px] -translate-x-1/2">
                      {/* Cargo */}
                      <div className="absolute left-0 top-0 h-[60px] w-[112px] rounded-l-lg bg-gradient-to-b from-white to-slate-100 shadow-lg">
                        {/* Cargo lines */}
                        <div className="absolute left-4 top-4 h-1.5 w-16 rounded-full bg-[#0B3B66]/10" />

                        <div className="absolute left-4 top-8 h-1.5 w-11 rounded-full bg-[#0B3B66]/10" />

                        {/* Brand */}
                        <div className="absolute bottom-3 left-4 text-[8px] font-black tracking-tight text-[#0B3B66]">
                          Go<span className="text-orange-500">Deliver</span>
                        </div>

                        {/* Orange stripe */}
                        <div className="absolute bottom-0 left-0 h-2 w-[112px] rounded-bl-lg bg-orange-500" />
                      </div>

                      {/* Cabin */}
                      <div className="absolute right-0 top-[17px] h-[58px] w-[57px] rounded-br-xl rounded-tr-lg bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
                        {/* Window */}
                        <div className="absolute left-2 top-2 h-[22px] w-[40px] overflow-hidden rounded-md bg-[#08375C]">
                          <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />
                        </div>

                        {/* Door */}
                        <div className="absolute bottom-2 right-2 h-5 w-6 rounded-sm border-l border-white/20" />

                        {/* Handle */}
                        <div className="absolute bottom-[18px] right-3 h-0.5 w-2 rounded-full bg-white/30" />
                      </div>

                      {/* Headlight */}
                      <div className="absolute right-0 top-[49px] h-2.5 w-2.5 rounded-full bg-yellow-100 shadow-[0_0_12px_rgba(253,224,71,0.9)]" />

                      {/* Wheel 1 */}
                      <div className="wheel-animation absolute -bottom-3 left-5 h-8 w-8 rounded-full border-[5px] border-[#051F35] bg-slate-600 shadow-lg">
                        <div className="absolute inset-1.5 rounded-full bg-slate-400" />
                      </div>

                      {/* Wheel 2 */}
                      <div className="wheel-animation absolute -bottom-3 right-5 h-8 w-8 rounded-full border-[5px] border-[#051F35] bg-slate-600 shadow-lg">
                        <div className="absolute inset-1.5 rounded-full bg-slate-400" />
                      </div>
                    </div>
                  </div>

                  {/* Destination pin */}
                  <div className="absolute right-7 top-6 flex flex-col items-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_8px_30px_rgba(249,115,22,0.3)]">
                      <span className="absolute inset-0 animate-ping rounded-full bg-orange-400/20" />

                      <MapPin className="relative h-4 w-4" />
                    </div>

                    <div className="mt-1 h-5 w-px bg-orange-400/40" />

                    <div className="rounded-md border border-white/5 bg-white/[0.08] px-2.5 py-1 backdrop-blur-md">
                      <span className="text-[9px] font-medium text-white/75">
                        Dhaka
                      </span>
                    </div>
                  </div>

                  {/* Moving parcel light */}
                  <div className="delivery-dot absolute h-2.5 w-2.5 rounded-full bg-orange-300 shadow-[0_0_18px_rgba(251,146,60,0.95)]" />
                </div>

                {/* Delivery info */}
                <div className="mt-5 grid grid-cols-3 divide-x divide-white/[0.08]">
                  <div className="px-3 first:pl-0">
                    <p className="text-[9px] uppercase tracking-wide text-white/30">
                      Status
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      In Transit
                    </p>
                  </div>

                  <div className="px-3">
                    <p className="text-[9px] uppercase tracking-wide text-white/30">
                      ETA
                    </p>

                    <p className="mt-1 text-xs font-semibold text-white">
                      Today
                    </p>
                  </div>

                  <div className="px-3 last:pr-0">
                    <p className="text-[9px] uppercase tracking-wide text-white/30">
                      Coverage
                    </p>

                    <p className="mt-1 text-xs font-semibold text-orange-300">
                      Nationwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                FLOATING CARD - LEFT
            ================================================== */}
            <div className="float-card absolute left-[-2px] top-[92px] z-30 w-[165px] rounded-2xl border border-white/10 bg-white/[0.96] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100">
                  <Package className="h-4 w-4 text-orange-600" />
                </div>

                <div>
                  <p className="text-[9px] font-medium text-gray-400">
                    Parcel Status
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold text-gray-800">
                    Ready to Deliver
                  </p>

                  <div className="mt-1 flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-green-500" />

                    <span className="text-[8px] font-medium text-green-600">
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================================================
                FLOATING CARD - RIGHT
            ================================================== */}
            <div className="float-card-reverse absolute bottom-[108px] right-[-5px] z-30 w-[150px] rounded-2xl border border-white/10 bg-white/[0.96] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>

                <div>
                  <p className="text-[9px] font-medium text-gray-400">
                    Delivery
                  </p>

                  <p className="mt-0.5 text-[11px] font-bold text-gray-800">
                    On Time
                  </p>

                  <div className="mt-1.5 h-1 w-14 overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full w-[82%] rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage pill */}
            <div className="absolute bottom-[42px] left-[55px] z-30 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-2 backdrop-blur-xl">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                <Truck className="h-2.5 w-2.5" />
              </span>

              <span className="text-[9px] font-semibold text-white/65">
                Nationwide Coverage
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            STATS
        ====================================================== */}
        <div className="relative z-20 mt-2 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.045] shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {/* Stat 1 */}
            <div className="relative px-5 py-5 text-center md:py-6">
              <p className="text-2xl font-black tracking-tight text-white">
                64
              </p>

              <p className="mt-1 text-[10px] font-medium text-white/35 sm:text-xs">
                Districts Covered
              </p>
            </div>

            {/* Stat 2 */}
            <div className="relative border-l border-white/[0.08] px-5 py-5 text-center md:py-6">
              <p className="text-2xl font-black tracking-tight text-white">
                Fast
              </p>

              <p className="mt-1 text-[10px] font-medium text-white/35 sm:text-xs">
                Delivery
              </p>
            </div>

            {/* Stat 3 */}
            <div className="relative border-t border-white/[0.08] px-5 py-5 text-center md:border-l md:border-t-0 md:py-6">
              <p className="text-2xl font-black tracking-tight text-white">
                Secure
              </p>

              <p className="mt-1 text-[10px] font-medium text-white/35 sm:text-xs">
                Parcel Handling
              </p>
            </div>

            {/* Stat 4 */}
            <div className="relative border-l border-t border-white/[0.08] px-5 py-5 text-center md:border-t-0">
              <p className="text-2xl font-black tracking-tight text-white">
                24/7
              </p>

              <p className="mt-1 text-[10px] font-medium text-white/35 sm:text-xs">
                Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(7px);
          }
        }

        @keyframes truckMove {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }

          50% {
            transform: translateX(5px) translateY(-2px);
          }
        }

        @keyframes wheelSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes routeDash {
          to {
            stroke-dashoffset: -40;
          }
        }

        @keyframes destinationRoute {
          to {
            stroke-dashoffset: -34;
          }
        }

        @keyframes deliveryDot {
          0% {
            left: 18%;
            top: 72%;
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          45% {
            left: 45%;
            top: 56%;
            opacity: 1;
          }

          80% {
            left: 68%;
            top: 38%;
            opacity: 1;
          }

          100% {
            left: 82%;
            top: 22%;
            opacity: 0;
          }
        }

        .float-card {
          animation: float 5s ease-in-out infinite;
        }

        .float-card-reverse {
          animation: floatReverse 6s ease-in-out infinite;
        }

        .truck-animation {
          animation: truckMove 2.5s ease-in-out infinite;
        }

        .wheel-animation {
          animation: wheelSpin 1.2s linear infinite;
        }

        .route-animation {
          animation: routeDash 2s linear infinite;
        }

        .destination-route {
          animation: destinationRoute 3s linear infinite;
        }

        .delivery-dot {
          animation: deliveryDot 4.5s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .float-card,
          .float-card-reverse,
          .truck-animation,
          .wheel-animation,
          .route-animation,
          .destination-route,
          .delivery-dot {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
