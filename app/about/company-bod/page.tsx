"use client";

import Image from "next/image";
import Link from "next/link";
import TeamsView from "../components/TeamsView";

const boardMembers = [
  {
    name: "Mr. John Doe",
    designation: "Chairperson",
    image: "/images/bod/chairperson.jpg",
    description:
      "Provides strategic direction and leadership to the Board while ensuring effective governance of the company.",
  },
  {
    name: "Mr. Ram Sharma",
    designation: "Director",
    image: "/images/bod/director-1.jpg",
    description:
      "Contributes to strategic decision-making, policy development, and effective corporate governance.",
  },
  {
    name: "Mr. Hari Prasad",
    designation: "Director",
    image: "/images/bod/director-2.jpg",
    description:
      "Supports the Board in organizational planning, oversight, and long-term development initiatives.",
  },
  {
    name: "Mr. Krishna Thapa",
    designation: "Independent Director",
    image: "/images/bod/director-3.jpg",
    description:
      "Provides independent oversight and professional expertise to strengthen transparency and accountability.",
  },
  {
    name: "Ms. Anita Karki",
    designation: "Director",
    image: "/images/bod/director-4.jpg",
    description:
      "Participates in Board-level decisions and supports organizational strategy and sustainable growth.",
  },
  {
    name: "Mr. Suresh Adhikari",
    designation: "Director",
    image: "/images/bod/director-5.jpg",
    description:
      "Provides guidance on corporate policies, projects, and organizational performance.",
  },
];

const responsibilities = [
  {
    icon: "🎯",
    title: "Strategic Direction",
    description:
      "Establishing the company's strategic objectives and providing guidance for sustainable growth.",
  },
  {
    icon: "⚖️",
    title: "Good Governance",
    description:
      "Ensuring transparency, accountability, ethical conduct, and responsible corporate governance.",
  },
  {
    icon: "📊",
    title: "Performance Oversight",
    description:
      "Monitoring organizational performance and ensuring that strategic objectives are effectively implemented.",
  },
  {
    icon: "🤝",
    title: "Stakeholder Interest",
    description:
      "Protecting the interests of shareholders and other stakeholders through responsible decision-making.",
  },
];

export default function CompanyBODPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
        {/* Background decorations */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10" />

        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-white/10" />

        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-blue-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <span>/</span>

            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>

            <span>/</span>

            <span className="text-white font-medium">Company BOD</span>
          </div>

          {/* Hero content */}
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
              Corporate Governance
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Board of Directors
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-relaxed text-blue-50">
              Our Board of Directors provides strategic leadership, governance,
              and oversight to guide the company toward sustainable growth and
              long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Board Leadership
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Our Board of Directors
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-600" />

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600">
              The Board of Directors plays a vital role in providing strategic
              guidance, ensuring sound corporate governance, and overseeing the
              overall performance of the company.
            </p>
          </div>

          {/* =====================================================
              BOARD MEMBERS
          ====================================================== */}
          {/* Management Team */}
          <div className="max-w-6xl mx-auto p-20 px-4 sm:px-6 lg:px-8">
            <TeamsView />
          </div>
          {/* <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className={`group overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0
                    ? "border-blue-200 ring-1 ring-blue-100"
                    : "border-gray-200"
                }`}
              >
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-cyan-50">
                  {index === 0 && (
                    <div className="absolute left-4 top-4 z-10 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                      Board Chairperson
                    </div>
                  )}

                  <div className="relative mx-auto h-72 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain object-center p-5 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-blue-600">
                    {member.designation}
                  </p>

                  <div className="mx-auto mt-4 h-px w-12 bg-gray-200" />

                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* =====================================================
          BOARD RESPONSIBILITIES
      ====================================================== */}
      <section className="border-y border-gray-200 bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Board Responsibilities
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Leading With Accountability
              </h2>

              <p className="mt-6 leading-7 text-gray-600">
                The Board of Directors is responsible for providing effective
                leadership and ensuring that the company operates according to
                its vision, objectives, policies, and applicable governance
                principles.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                Through strategic oversight and responsible decision-making, the
                Board supports the company's commitment to sustainable
                development and long-term stakeholder value.
              </p>

              <Link
                href="/about/company-management"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Meet Management Team
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M13 6l6 6-6 6"
                  />
                </svg>
              </Link>
            </div>

            {/* Right */}
            <div className="grid gap-5 sm:grid-cols-2">
              {responsibilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-colors hover:border-blue-200 hover:bg-blue-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOVERNANCE SECTION
      ====================================================== */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 px-6 py-12 sm:px-12 lg:px-16">
            {/* Decorative circles */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-cyan-400/10" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-cyan-300">
                  Corporate Governance
                </span>

                <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                  Building Trust Through Good Governance
                </h2>

                <p className="mt-5 leading-7 text-blue-100">
                  We are committed to maintaining high standards of corporate
                  governance, transparency, accountability, and ethical
                  leadership.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <GovernanceStat number="01" title="Transparency" />

                <GovernanceStat number="02" title="Accountability" />

                <GovernanceStat number="03" title="Integrity" />

                <GovernanceStat number="04" title="Sustainability" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER CTA
      ====================================================== */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Learn More About Our Company
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore our company information, management team, projects,
              activities, and other organizational updates.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Company Information
              </Link>

              <Link
                href="/about/company-management"
                className="inline-flex items-center justify-center rounded-lg border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
              >
                Company Management
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   GOVERNANCE STAT COMPONENT
===================================================== */

function GovernanceStat({ number, title }: { number: string; title: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
      <div className="text-sm font-bold text-cyan-300">{number}</div>

      <div className="mt-2 text-base font-semibold text-white">{title}</div>
    </div>
  );
}
