"use client";

import { Zap, MapPin, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import PageBanner from "@/components/reusable/PageBanner";
import ProjectView from './components/ProjectView'
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageBanner
        title="Our Projects"
        subtitle="Developing Sustainable hydroelectric infrastructure across Nepal"
      />

      <ProjectView />
      {/* Main Project - Tanahu */}
      {/* <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80"
                alt="Tanahu Hydropower Project"
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                    Under Construction
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tanahu Hydropower Project
                </h2>
                <p className="text-gray-700 mb-6">
                  Storage type hydropower project with an installed capacity of
                  140 MW, located on the Seti River in Tanahu District, Gandaki
                  Province. The project is designed to generate an estimated
                  average annual energy of 587.7 GWh in the first 10 years.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Capacity
                      </div>
                      <div className="text-gray-600">140 MW</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Location
                      </div>
                      <div className="text-gray-600">
                        Seti River, Tanahu District, Gandaki Province
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Project Type
                      </div>
                      <div className="text-gray-600">
                        Storage Type Hydropower
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Annual Energy
                      </div>
                      <div className="text-gray-600">
                        587.7 GWh (Years 1-10), 489.9 GWh (Year 11+)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section> */}

      {/* Project Details */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Project Details
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Total Investment
              </h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">$505M</p>
              <p className="text-gray-600 text-sm">
                Including rural electrification, taxes, duties, interest
                charges, and contingencies
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Distance from Kathmandu
              </h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">150 km</p>
              <p className="text-gray-600 text-sm">
                Located west of Kathmandu in Gandaki Province
              </p>
            </div>
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Project Status
              </h3>
              <p className="text-3xl font-bold text-blue-700 mb-2">85%</p>
              <p className="text-gray-600 text-sm">
                Construction progress as of December 2025
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Upper Trishuli Project */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&q=80"
                alt="Upper Trishuli 3B Project"
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-semibold">
                    Under Development
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Upper Trishuli 3B Hydroelectric Project
                </h2>
                <p className="text-gray-700 mb-6">
                  Run-of-river cascade project with an installed capacity of 37
                  MW, located in Nuwakot and Rasuwa Districts, Bagmati Province.
                  This project represents our commitment to expanding clean
                  energy infrastructure.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Capacity
                      </div>
                      <div className="text-gray-600">37 MW</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Location
                      </div>
                      <div className="text-gray-600">
                        Nuwakot and Rasuwa Districts, Bagmati Province
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-blue-700 mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">
                        Project Type
                      </div>
                      <div className="text-gray-600">
                        Run-of-River (ROR) Cascade
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Future Projects */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Future Projects
          </h2>
          <div className="bg-white p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Lower Seti (Tanahu) Hydropower Project
            </h3>
            <p className="text-gray-700 mb-6">
              The company envisages developing the Lower Seti (Tanahu)
              Hydropower Project at the lower reaches of Seti River, downstream
              of the Tanahu Hydropower Project. It is planned as an integrated
              system with THP, utilizing its releases with approximately six
              hours of peaking capability during the dry season.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Project Benefits
                </h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Optimal utilization of water resources</li>
                  <li>Enhanced energy generation efficiency</li>
                  <li>Peaking power capability</li>
                  <li>Integrated system benefits</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Current Status
                </h4>
                <p className="text-gray-700">
                  Feasibility studies and environmental assessments are
                  currently being conducted to ensure sustainable development of
                  this integrated hydropower system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
