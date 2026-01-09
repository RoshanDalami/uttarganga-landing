"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import { TActivities } from "@/types/activities.type";

interface ActivityDetailsViewProps {
    activity: TActivities;
}

const ActivityDetailsView = ({ activity }: ActivityDetailsViewProps) => {
    const router = useRouter();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const images = activity.activitiesImages || [];
    const hasImages = images.length > 0;

    return (
        <motion.div
            className="min-h-screen bg-gray-50/50"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Navigation Bar */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors bg-gray-100/50 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Activities
                    </button>

                    <div className="flex gap-2">
                        <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Header Section */}
                    <motion.div className="lg:col-span-10 lg:col-start-2" variants={itemVariants}>
                        <div className="space-y-6 text-start">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Event Details
                            </span>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                                {activity.title}
                            </h1>

                            <div className="flex flex-wrap items-center justify-start gap-4 text-gray-500 text-sm md:text-base">
                                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    <span>
                                        {formatDate(activity.startDate)}
                                        {activity.startDate !== activity.endDate && (
                                            <> - {formatDate(activity.endDate)}</>
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Images Section */}
                    {/* Images Section */}
                    {hasImages && (
                        <motion.div
                            className="lg:col-span-10 lg:col-start-2"
                            variants={itemVariants}
                        >
                            {/* Main Image */}
                            <div className="relative aspect-[16/9] w-full bg-gray-100 border border-gray-200">
                                <Image
                                    src={imageurlgenerator(images[selectedImageIndex].imageUrl)}
                                    alt={activity.title}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Thumbnails */}
                            {images.length > 1 && (
                                <div className="mt-4 flex gap-3 overflow-x-auto">
                                    {images.map((img, idx) => (
                                        <button
                                            key={img.id}
                                            onClick={() => setSelectedImageIndex(idx)}
                                            className={`relative h-14 w-20 flex-shrink-0 border transition
                            ${idx === selectedImageIndex
                                                    ? "border-blue-600"
                                                    : "border-gray-200 hover:border-gray-400"
                                                }
                        `}
                                        >
                                            <Image
                                                src={imageurlgenerator(img.imageUrl)}
                                                alt={`Image ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    )}

                    {/* Content Description */}
                    <motion.div
                        className="lg:col-span-10 lg:col-start-2"
                        variants={itemVariants}
                    >
                        <div className="bg-white border rounded-2xl border-gray-200 p-6 md:p-10">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                About this Event
                            </h3>

                            <div
                                className="
                prose prose-gray max-w-none
                prose-img:rounded-none
                prose-img:border
                prose-img:border-gray-200
                prose-a:text-blue-600
                prose-a:no-underline hover:prose-a:underline
                prose-table:border
                prose-table:border-gray-200
            "
                                dangerouslySetInnerHTML={{ __html: activity.content }}
                            />
                        </div>
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
};

export default ActivityDetailsView;
