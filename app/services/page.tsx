'use client';

import { Zap, Users, Shield, TrendingUp, FileText, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">
            Comprehensive solutions for sustainable hydroelectric energy development
          </p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Power Generation */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-blue-100 w-16 h-16 rounded flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-blue-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hydroelectric Power Generation</h2>
              <p className="text-gray-700 mb-4">
                Development and operation of state-of-the-art hydroelectric power generation facilities 
                utilizing Nepal&apos;s abundant water resources. Our projects are designed to provide reliable, 
                clean energy to support national development.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  Storage type hydropower projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  Run-of-river cascade systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-700 mt-1">•</span>
                  Integrated energy systems
                </li>
              </ul>
            </div>

            {/* Project Development */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-green-100 w-16 h-16 rounded flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Development</h2>
              <p className="text-gray-700 mb-4">
                Comprehensive project development services from feasibility studies to commissioning. 
                We manage all aspects of hydropower project development with expertise and efficiency.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  Feasibility studies and assessments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  Engineering design and planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-700 mt-1">•</span>
                  Construction management
                </li>
              </ul>
            </div>

            {/* Environmental Management */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-emerald-100 w-16 h-16 rounded flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-emerald-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Environmental Management</h2>
              <p className="text-gray-700 mb-4">
                Commitment to environmental sustainability through comprehensive assessment and management 
                practices. We ensure all projects meet the highest environmental standards.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 mt-1">•</span>
                  Environmental impact assessments
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 mt-1">•</span>
                  Biodiversity conservation programs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-700 mt-1">•</span>
                  Sustainable resource management
                </li>
              </ul>
            </div>

            {/* Community Development */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-purple-100 w-16 h-16 rounded flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Development</h2>
              <p className="text-gray-700 mb-4">
                Active engagement with local communities through various development programs and initiatives. 
                We believe in creating shared value for all stakeholders.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 mt-1">•</span>
                  Skills training and capacity building
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 mt-1">•</span>
                  Local employment opportunities
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-700 mt-1">•</span>
                  Community welfare programs
                </li>
              </ul>
            </div>

            {/* Consulting Services */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-indigo-100 w-16 h-16 rounded flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-indigo-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Consulting</h2>
              <p className="text-gray-700 mb-4">
                Expert advisory services for hydropower project development, drawing from our extensive 
                experience in the field. We provide technical expertise and strategic guidance.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-700 mt-1">•</span>
                  Technical feasibility analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-700 mt-1">•</span>
                  Project optimization studies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-700 mt-1">•</span>
                  Regulatory compliance guidance
                </li>
              </ul>
            </div>

            {/* Investment Opportunities */}
            <div className="bg-white border border-gray-200 p-8">
              <div className="bg-orange-100 w-16 h-16 rounded flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-orange-700" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Investment Opportunities</h2>
              <p className="text-gray-700 mb-4">
                Attractive investment opportunities in sustainable energy infrastructure. Our projects 
                offer long-term returns while contributing to national energy security.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 mt-1">•</span>
                  Equity participation options
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 mt-1">•</span>
                  Public-private partnerships
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-700 mt-1">•</span>
                  Sustainable investment returns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">15+</div>
              <div className="text-gray-700 font-semibold mb-2">Years Experience</div>
              <p className="text-gray-600 text-sm">
                Over a decade of expertise in hydropower development
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">500+</div>
              <div className="text-gray-700 font-semibold mb-2">Skilled Professionals</div>
              <p className="text-gray-600 text-sm">
                Dedicated team of engineers and specialists
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">100%</div>
              <div className="text-gray-700 font-semibold mb-2">Commitment</div>
              <p className="text-gray-600 text-sm">
                To sustainable and responsible energy development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-700 text-white p-12 rounded text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Services?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact us to learn more about how we can help with your hydropower needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
