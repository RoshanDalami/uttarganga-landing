'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import useCompany from "@/store/useCompany";
import LoadingButtonCircle from "@/components/reusable/LoadingCircleButton";
export default function MissionSection() {
    const bannerurl = useCompany((state) => state.bannerurl);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
                                <LoadingButtonCircle size={40} />
                            </div>
                        )}
                        <Image
                            src={bannerurl}
                            alt="Hydroelectric Facility"
                            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-sm"
                            width={1000}
                            height={600}
                            onLoad={() => setIsLoading(false)}
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 mb-4">
                            To develop sustainable hydroelectric facilities that harness the power of nature,
                            providing clean and reliable energy for communities across Nepal.
                        </p>
                        <p className="text-gray-700">
                            We are committed to innovation, environmental responsibility, and supporting the nation’s growth through renewable energy.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}