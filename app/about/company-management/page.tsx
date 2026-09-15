"use client";

import Image from "next/image";
import Link from "next/link";
import TeamsView from "../components/TeamsView";

const managementTeam = [
  {
    name: "Mr. John Doe",
    designation: "Managing Director",
    image: "/images/management/md.jpg",
    description:
      "Provides strategic leadership and oversees the overall management and development of the company.",
  },
  {
    name: "Mr. Ram Sharma",
    designation: "Chief Executive Officer",
    image: "/images/management/ceo.jpg",
    description:
      "Responsible for the company's operations, business strategy, and organizational performance.",
  },
  {
    name: "Mr. Hari Prasad",
    designation: "Deputy Chief Executive Officer",
    image: "/images/management/dceo.jpg",
    description:
      "Supports executive leadership and coordinates major operational and strategic activities.",
  },
  {
    name: "Mr. Krishna Thapa",
    designation: "General Manager",
    image: "/images/management/gm.jpg",
    description:
      "Leads day-to-day management and ensures effective implementation of company policies and plans.",
  },
  {
    name: "Mr. Suresh Adhikari",
    designation: "Project Director",
    image: "/images/management/project-director.jpg",
    description:
      "Oversees project planning, implementation, monitoring, and coordination with relevant stakeholders.",
  },
  {
    name: "Ms. Anita Karki",
    designation: "Finance Manager",
    image: "/images/management/finance-manager.jpg",
    description:
      "Manages financial planning, budgeting, reporting, and financial control activities of the company.",
  },
];

export default function CompanyManagementPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-blue-100 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>

            <span>/</span>

            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>

            <span>/</span>

            <span className="text-white font-medium">Company Management</span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white">
              Leadership & Management
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Company Management
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-blue-50 leading-relaxed">
              Meet the dedicated professionals leading our organization with
              vision, integrity, expertise, and commitment to sustainable
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Our Leadership
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Meet Our Management Team
            </h2>

            <div className="mt-4 mx-auto h-1 w-16 rounded-full bg-blue-600" />

            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Our management team brings together experienced professionals
              committed to achieving organizational excellence and contributing
              to the development of the energy sector.
            </p>
          </div>

          {/* Management Cards */}
          <div className="max-w-6xl mx-auto p-20 px-4 sm:px-6 lg:px-8">
            <TeamsView />
          </div>
          {/* <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative bg-gradient-to-br from-blue-50 to-gray-100">
                  <div className="relative mx-auto h-64 w-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain object-center p-5 group-hover:scale-105 transition-transform duration-300"
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

                  <p className="mt-4 text-sm text-gray-600 leading-6">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="bg-white border-y border-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Approach
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Strong Leadership, Better Results
              </h2>

              <p className="mt-6 text-gray-600 leading-7">
                Our management philosophy is built around accountability,
                transparency, teamwork, innovation, and sustainable development.
                We believe that effective leadership is essential for delivering
                quality projects and creating long-term value.
              </p>

              <p className="mt-4 text-gray-600 leading-7">
                Through collaborative decision-making and responsible management
                practices, our team works continuously toward achieving the
                company's strategic objectives.
              </p>
            </div>

            {/* Right - Values */}
            <div className="grid sm:grid-cols-2 gap-5">
              <ManagementValue
                icon="🎯"
                title="Vision"
                description="Working toward long-term organizational growth and excellence."
              />

              <ManagementValue
                icon="🤝"
                title="Teamwork"
                description="Encouraging collaboration and mutual respect across the organization."
              />

              <ManagementValue
                icon="🔍"
                title="Transparency"
                description="Maintaining openness and accountability in our decisions and operations."
              />

              <ManagementValue
                icon="⚡"
                title="Innovation"
                description="Embracing modern solutions to improve efficiency and performance."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-12 sm:px-12 text-center">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/10" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Learn More About Our Company
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-blue-50">
                Discover our company information, leadership structure,
                projects, and activities.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Company Information
                </Link>

                <Link
                  href="/about/company-bod"
                  className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  View Board of Directors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Management Value Component */
function ManagementValue({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 hover:bg-blue-50 hover:border-blue-200 transition-colors">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>

      <p className="mt-4 text-sm text-gray-600 leading-6">{description}</p>
    </div>
  );
}
