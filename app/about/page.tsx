"use client";
import { useEffect } from "react";
import { Award, Shield, Users, Target, Eye, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useAbout } from "@/service/apiHooks/about-us.hook";
import { useBanners } from "@/service/apiHooks/banner.hook";
import PageBanner from "@/components/reusable/PageBanner";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import Image from "next/image";
import TeamsView from "./components/TeamsView";
import useCompany from "@/store/useCompany";
export default function AboutPage() {
  const { data: about } = useAbout();
  const { data: banner } = useBanners();
  const extractedAbout = about?.[0];
  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="About Us"
        subtitle="Leading Nepal's sustainable energy development"
      />
      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Company Overview
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: extractedAbout?.content || "",
                }}
              />
            </div>
            <div>
              <Image
                src={imageurlgenerator(banner?.[0]?.imageUrl as string)}
                alt="Banner Image"
                className="w-full h-96 object-cover rounded shadow-lg"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Excellence
              </h3>
              <p className="text-gray-600">
                Commitment to the highest standards in all aspects of our
                operations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600">
                Prioritizing the wellbeing of our employees and communities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Community
              </h3>
              <p className="text-gray-600">
                Building lasting partnerships with local communities
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p className="text-gray-600">
                Environmental responsibility in all our development activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <div className="max-w-6xl mx-auto p-20 px-4 sm:px-6 lg:px-8">
        <TeamsView />
      </div>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission & Vision
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Driving sustainable energy development through innovation,
              responsibility, and long-term commitment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Rocket className="h-8 w-8 text-blue-700" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-7">
                <p className="text-gray-600 leading-7">
                  To develop sustainable hydroelectric facilities that harness
                  the power of nature, providing clean and reliable energy for
                  communities across Nepal.
                </p>{" "}
                <br />
                <p className="text-gray-600 leading-7">
                  We are committed to innovation, environmental responsibility,
                  and supporting the nation’s growth through renewable energy.
                </p>
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-green-700" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-7">
                To be a leading force in Nepal&apos;s sustainable energy sector,
                recognized for excellence, innovation, environmental
                stewardship, and our positive impact on communities and the
                nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
