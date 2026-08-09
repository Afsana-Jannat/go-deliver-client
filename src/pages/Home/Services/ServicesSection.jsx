import React from 'react';
import * as Icons from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const servicesData = [
  {
    icon: 'FiTruck',
    titleKey: 'services.express.title',
    descriptionKey: 'services.express.desc',
    tag: 'FAST DELIVERY',
    accent: 'orange',
  },
  {
    icon: 'FiMapPin',
    titleKey: 'services.nationwide.title',
    descriptionKey: 'services.nationwide.desc',
    tag: 'NATIONWIDE',
    accent: 'blue',
  },
  {
    icon: 'FiPackage',
    titleKey: 'services.fulfillment.title',
    descriptionKey: 'services.fulfillment.desc',
    tag: 'FULFILLMENT',
    accent: 'blue',
  },
  {
    icon: 'FiDollarSign',
    titleKey: 'services.cod.title',
    descriptionKey: 'services.cod.desc',
    tag: 'PAYMENT',
    accent: 'orange',
  },
  {
    icon: 'FiHome',
    titleKey: 'services.corporate.title',
    descriptionKey: 'services.corporate.desc',
    tag: 'BUSINESS',
    accent: 'orange',
  },
  {
    icon: 'FiRefreshCcw',
    titleKey: 'services.return.title',
    descriptionKey: 'services.return.desc',
    tag: 'EASY RETURNS',
    accent: 'blue',
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-[#f6faff] py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[70%] -translate-x-1/2 rounded-full bg-blue-300/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -left-48 top-[35%] h-[420px] w-[420px] rounded-full bg-orange-400/[0.045] blur-3xl" />

      <div className="pointer-events-none absolute -right-48 bottom-[10%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.05] blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(#103963 1px, transparent 1px), linear-gradient(90deg, #103963 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      {/* Decorative route */}
      <div className="pointer-events-none absolute right-[4%] top-[18%] hidden opacity-30 lg:block">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none">
          <path
            d="M10 150C40 140 35 95 75 95C115 95 95 40 170 30"
            stroke="#B8C8D8"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />

          <circle cx="10" cy="150" r="4" fill="#F97316" />
          <circle cx="75" cy="95" r="4" fill="#2563EB" />
          <circle cx="170" cy="30" r="4" fill="#F97316" />
        </svg>
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-orange-500" />
              </span>

              <span className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-orange-600">
                Our Services
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-[-0.04em] text-[#103963] sm:text-4xl lg:text-[46px]">
              {t('services.title')}
            </h2>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-[2px] w-10 rounded-full bg-orange-500" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#103963]" />
              <span className="h-[2px] w-10 rounded-full bg-blue-500" />
            </div>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="text-sm leading-7 text-slate-500 sm:text-base">
              {t('services.desc')}
            </p>
          </div>
        </div>

        {/* =====================================================
            BENTO GRID
        ====================================================== */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[210px_210px_210px]">
          {/* =================================================
              FEATURED EXPRESS
          ================================================== */}

          <div className="group relative min-h-[430px] overflow-hidden rounded-[28px] md:col-span-2 lg:col-span-5 lg:row-span-3">
            {/* Main background */}
            <div className="absolute inset-0 bg-[#103963] transition-all duration-700 group-hover:bg-[#0b3157]" />

            {/* Orange glow */}
            <div className="absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-orange-500/20 blur-3xl transition-all duration-700 group-hover:scale-125 group-hover:bg-orange-500/30" />

            {/* Blue glow */}
            <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-blue-500/20 blur-3xl" />

            {/* Route */}
            <svg
              className="pointer-events-none absolute right-0 top-0 h-full w-full opacity-20"
              viewBox="0 0 500 600"
              fill="none"
            >
              <path
                d="M470 20C350 90 390 160 260 210C120 265 190 350 60 420C20 445 50 520 10 580"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="5 8"
              />

              <circle cx="470" cy="20" r="5" fill="#F97316" />
              <circle cx="260" cy="210" r="5" fill="#60A5FA" />
              <circle cx="60" cy="420" r="5" fill="#F97316" />
            </svg>

            {/* Decorative circles */}
            <div className="absolute right-8 top-24 h-2 w-2 rounded-full bg-orange-400 opacity-70" />
            <div className="absolute bottom-32 right-20 h-1.5 w-1.5 rounded-full bg-blue-300 opacity-70" />

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-white/10 text-orange-400 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <Icons.FiTruck className="text-[32px]" />
                </div>

                <span className="text-[52px] font-black tracking-[-0.08em] text-white/[0.06]">
                  01
                </span>
              </div>

              {/* Content */}
              <div className="mt-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-orange-300">
                    {servicesData[0].tag}
                  </span>
                </div>

                <h3 className="max-w-sm text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
                  {t(servicesData[0].titleKey)}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                  {t(servicesData[0].descriptionKey)}
                </p>
              </div>

              {/* Bottom */}
              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-orange-400 opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-orange-400" />
                  </span>

                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    GoDeliver Express
                  </span>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-500 group-hover:bg-orange-500">
                  <Icons.FiArrowUpRight className="text-base transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              NATIONWIDE
              Row 1 / Col 6-9
          ================================================== */}

          <ServiceBentoCard
            service={servicesData[1]}
            index={1}
            t={t}
            className="md:col-span-1 lg:col-span-4 lg:col-start-6 lg:row-start-1"
          />

          {/* =================================================
              FULFILLMENT
              Row 1 / Col 10-12
          ================================================== */}

          <ServiceBentoCard
            service={servicesData[2]}
            index={2}
            t={t}
            className="md:col-span-1 lg:col-span-3 lg:col-start-10 lg:row-start-1"
          />

          {/* =================================================
              COD
              Row 2 / Col 6-8
          ================================================== */}

          <ServiceBentoCard
            service={servicesData[3]}
            index={3}
            t={t}
            className="md:col-span-1 lg:col-span-3 lg:col-start-6 lg:row-start-2"
          />

          {/* =================================================
              CORPORATE
              Row 2 / Col 9-12
          ================================================== */}

          <ServiceBentoCard
            service={servicesData[4]}
            index={4}
            t={t}
            className="md:col-span-1 lg:col-span-4 lg:col-start-9 lg:row-start-2"
          />

          {/* =================================================
              EASY RETURNS
              Row 3 / Col 6-13
              THIS IS THE IMPORTANT FIX
          ================================================== */}

          <ServiceBentoCard
            service={servicesData[5]}
            index={5}
            t={t}
            className="md:col-span-2 lg:col-span-7 lg:col-start-6 lg:row-start-3"
          />
        </div>

        {/* =====================================================
            BOTTOM TRUST STRIP
        ====================================================== */}

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[22px] border border-slate-200/80 bg-white px-6 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.04)] sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-orange-50">
                <Icons.FiTruck className="text-xs text-orange-500" />
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-50">
                <Icons.FiPackage className="text-xs text-blue-600" />
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-green-50">
                <Icons.FiCheck className="text-xs text-green-600" />
              </span>
            </div>

            <span className="text-xs font-semibold text-slate-500">
              Everything you need for reliable delivery
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Fast
            </span>

            <span className="h-1 w-1 rounded-full bg-orange-400" />

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Secure
            </span>

            <span className="h-1 w-1 rounded-full bg-blue-400" />

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
              Reliable
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   BENTO SERVICE CARD
============================================================ */

const ServiceBentoCard = ({ service, index, t, className = '' }) => {
  const IconComponent = Icons[service.icon];

  const isOrange = service.accent === 'orange';

  return (
    <div className={`group relative min-h-[210px] ${className}`}>
      <div
        className="
          relative h-full overflow-hidden
          rounded-[26px]
          border border-slate-200/80
          bg-white
          p-6 sm:p-7
          shadow-[0_8px_35px_rgba(15,23,42,0.045)]
          transition-all duration-500
          hover:-translate-y-1.5
          hover:border-slate-300
          hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
        "
      >
        {/* Top gradient */}
        <div
          className={`absolute left-8 right-8 top-0 h-[2px] rounded-full bg-gradient-to-r ${
            isOrange
              ? 'from-orange-500 via-orange-300 to-transparent'
              : 'from-blue-600 via-blue-300 to-transparent'
          } opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full blur-3xl transition-all duration-700 group-hover:scale-125 ${
            isOrange ? 'bg-orange-500/[0.07]' : 'bg-blue-500/[0.07]'
          }`}
        />

        {/* Decorative dot */}
        <div
          className={`absolute right-6 top-6 h-2 w-2 rounded-full transition-all duration-500 group-hover:scale-150 ${
            isOrange ? 'bg-orange-300' : 'bg-blue-300'
          }`}
        />

        {/* Top */}
        <div className="relative flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-[16px] transition-all duration-500 ${
              isOrange
                ? 'bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white'
                : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
            }`}
          >
            <IconComponent className="text-[23px]" />
          </div>

          <span className="text-3xl font-black tracking-[-0.07em] text-slate-100 transition-colors duration-500 group-hover:text-slate-200">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Content */}
        <div className="relative mt-5">
          <div className="mb-2 flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isOrange ? 'bg-orange-500' : 'bg-blue-500'
              }`}
            />

            <span
              className={`text-[9px] font-bold uppercase tracking-[0.18em] ${
                isOrange ? 'text-orange-500' : 'text-blue-600'
              }`}
            >
              {service.tag}
            </span>
          </div>

          <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[#173F64]">
            {t(service.titleKey)}
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            {t(service.descriptionKey)}
          </p>
        </div>

        {/* Bottom */}
        <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-300">
            GoDeliver
          </span>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-500 ${
              isOrange
                ? 'border-slate-200 text-slate-400 group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-500'
                : 'border-slate-200 text-slate-400 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600'
            }`}
          >
            <Icons.FiArrowUpRight className="text-sm transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
