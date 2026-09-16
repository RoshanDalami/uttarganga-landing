"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { TUserMessagePayload } from "@/types/user-message.type";
import { useCreateUserMessage } from "@/service/apiHooks/user-message.hook";
import LoadingButtonCircle from "@/components/reusable/LoadingCircleButton";
import PageBanner from "@/components/reusable/PageBanner";
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUserMessagePayload>();
  const { mutateAsync: createUserMessage, isPending } = useCreateUserMessage();
  const onSubmit = async (data: TUserMessagePayload) => {
    await createUserMessage(data);
    reset();
  };
  return (
    <div className="min-h-screen bg-white">
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with us for inquiries, partnerships, or information"
      />

      {/* Contact Form & Info */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Full name is required" })}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-700 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-700 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register("contact")}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                    placeholder="+977-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-700 ${errors.subject ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Subject of your message"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    {...register("message", {
                      required: "Message is required",
                    })}
                    className={`w-full px-4 py-3 border rounded focus:outline-none focus:border-blue-700 ${errors.message ? "border-red-500" : "border-gray-300"}`}
                    placeholder="Your message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition disabled:opacity-50 cursor-pointer "
                >
                  {isPending ? <LoadingButtonCircle /> : "Submit Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* Head Office */}
                <div className="bg-gray-50 p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Head Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-1 " />
                      <div>
                        <div className="font-medium text-gray-900">Address</div>
                        <div className="text-gray-700">
                          {/* Chundevi Marga, House No: 217 */}
                          {/* <br /> */}
                          Tripureshwor, Kathmandu, Nepal
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-500 mt-1 " />
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-700">01-5363166</div>
                        {/* <div className="text-gray-700">01-4953039</div>
                        <div className="text-gray-700">01-4153040</div> */}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-500 mt-1 " />
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-gray-700">ugpcl@nea.org.np</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-blue-500 mt-1 " />
                      <div>
                        <div className="font-medium text-gray-900">
                          Office Hours
                        </div>
                        <div className="text-gray-700">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </div>
                        <div className="text-gray-700 text-sm">
                          (Saturday & Sunday: Closed)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-start">
            Find Us
          </h2>
          <div className="bg-gray-300 h-96 rounded flex items-center justify-center">
            <p className="text-gray-600">
              Map Placeholder - Head Office Location
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
