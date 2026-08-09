import {
  TbTruckDelivery,
  TbClipboardText,
  TbCash,
  TbBuildingWarehouse,
  TbArrowRight,
} from 'react-icons/tb';
import { useTranslation } from 'react-i18next';

const HowWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: '01',
      icon: TbClipboardText,
      title: t('howItWorks.booking'),
      description:
        'Book your parcel pickup quickly and provide the delivery details.',
      accent: 'orange',
    },
    {
      number: '02',
      icon: TbCash,
      title: t('howItWorks.cod'),
      description:
        'Choose cash on delivery and let us handle your payment securely.',
      accent: 'blue',
    },
    {
      number: '03',
      icon: TbBuildingWarehouse,
      title: t('howItWorks.deliveryHub'),
      description:
        'Your parcel reaches our delivery hub for fast sorting and processing.',
      accent: 'orange',
    },
    {
      number: '04',
      icon: TbTruckDelivery,
      title: t('howItWorks.sme'),
      description:
        'We deliver your parcel safely to the right destination on time.',
      accent: 'blue',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#eef7ff] via-white to-white py-20 sm:py-24 lg:py-28">
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      {/* Top blue glow — connects with Hero */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[75%] -translate-x-1/2 rounded-full bg-blue-400/[0.08] blur-3xl" />

      {/* Orange glow */}
      <div className="pointer-events-none absolute -left-40 top-48 h-80 w-80 rounded-full bg-orange-400/[0.045] blur-3xl" />

      {/* Blue glow */}
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-blue-500/[0.045] blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15, 63, 100, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 63, 100, 0.035) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-2xl text-center">
          {/* Small label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
            </span>

            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-orange-600">
              Simple & Seamless
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black tracking-[-0.035em] text-[#103963] sm:text-4xl lg:text-[44px]">
            {t('howItWorks.title')}
          </h2>

          {/* Decorative line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-2">
            <span className="h-[2px] w-10 rounded-full bg-orange-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#103963]" />
            <span className="h-[2px] w-10 rounded-full bg-blue-500" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            From booking to doorstep, GoDeliver makes parcel delivery simple,
            transparent and hassle-free.
          </p>
        </div>

        {/* =====================================================
            JOURNEY TIMELINE
        ====================================================== */}

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* =================================================
              DESKTOP CONNECTING LINE
          ================================================= */}

          <div className="absolute left-[12%] right-[12%] top-[42px] hidden lg:block">
            {/* Main line */}
            <div className="h-[2px] w-full bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400" />

            {/* Soft glow */}
            <div className="absolute left-0 right-0 top-1/2 h-5 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-400/10 via-blue-400/10 to-orange-400/10 blur-md" />

            {/* Moving dot */}
            <div className="absolute left-[24%] top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-white shadow-[0_0_0_4px_rgba(59,130,246,0.12)]" />
          </div>

          {/* =================================================
              STEPS
          ================================================= */}

          <div className="grid lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isOrange = step.accent === 'orange';

              return (
                <div
                  key={step.number}
                  className={`
                    group relative
                    ${index !== steps.length - 1 ? 'pb-14 lg:pb-0' : ''}
                  `}
                >
                  {/* =================================================
                      MOBILE CONNECTING LINE
                  ================================================= */}

                  {index !== steps.length - 1 && (
                    <div className="absolute left-[27px] top-[64px] h-[calc(100%-45px)] w-px bg-gradient-to-b from-slate-300 via-blue-200 to-transparent lg:hidden" />
                  )}

                  <div className="relative px-0 lg:px-5">
                    {/* =================================================
                        STEP NUMBER
                    ================================================= */}

                    <div className="mb-4 flex items-center gap-3 lg:justify-center">
                      <span
                        className={`
                          text-[11px] font-black uppercase tracking-[0.2em]
                          ${isOrange ? 'text-orange-500' : 'text-blue-600'}
                        `}
                      >
                        Step
                      </span>

                      <span className="text-[11px] font-bold tracking-[0.18em] text-slate-300">
                        {step.number}
                      </span>
                    </div>

                    {/* =================================================
                        ICON / TIMELINE POINT
                    ================================================= */}

                    <div className="relative z-10 flex items-center lg:justify-center">
                      {/* Outer ring */}
                      <div
                        className={`
                          relative flex h-[58px] w-[58px]
                          shrink-0 items-center justify-center
                          rounded-full
                          border-[5px] border-white
                          shadow-[0_8px_25px_rgba(15,23,42,0.10)]
                          transition-all duration-500
                          group-hover:scale-110
                          ${
                            isOrange
                              ? 'bg-orange-500 shadow-orange-500/20'
                              : 'bg-blue-600 shadow-blue-500/20'
                          }
                        `}
                      >
                        <Icon className="text-[27px] text-white" />

                        {/* Glow */}
                        <span
                          className={`
                            pointer-events-none absolute inset-[-6px]
                            rounded-full opacity-0 blur-md
                            transition-opacity duration-500
                            group-hover:opacity-30
                            ${isOrange ? 'bg-orange-500' : 'bg-blue-500'}
                          `}
                        />
                      </div>

                      {/* Mobile content starts beside icon */}
                      <div className="ml-5 lg:hidden">
                        <h3 className="text-lg font-extrabold tracking-tight text-[#173F64]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    {/* =================================================
                        DESKTOP CONTENT
                    ================================================= */}

                    <div className="hidden pt-7 text-center lg:block">
                      <h3 className="text-[18px] font-extrabold tracking-tight text-[#173F64]">
                        {step.title}
                      </h3>

                      <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>

                      {/* Small accent */}
                      <div className="mx-auto mt-6 flex items-center justify-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isOrange ? 'bg-orange-500' : 'bg-blue-500'
                          }`}
                        />

                        <span className="h-px w-8 bg-slate-200 transition-all duration-500 group-hover:w-12" />
                      </div>
                    </div>

                    {/* =================================================
                        MOBILE CONTENT
                    ================================================= */}

                    <div className="ml-[78px] mt-4 lg:hidden">
                      <p className="max-w-md text-sm leading-6 text-slate-500">
                        {step.description}
                      </p>

                      <div className="mt-4 flex items-center gap-2">
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isOrange ? 'bg-orange-500' : 'bg-blue-500'
                          }`}
                        />

                        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                          GoDeliver
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM JOURNEY MESSAGE
        ====================================================== */}

        <div className="mt-16 flex justify-center sm:mt-20">
          <div className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
            {/* Check */}
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-sm font-bold text-green-600">
              ✓
            </span>

            <span className="text-xs font-semibold text-slate-500 sm:text-sm">
              Simple process. Reliable delivery.
            </span>

            <TbArrowRight className="text-base text-slate-300 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
