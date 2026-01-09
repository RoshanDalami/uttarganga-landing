"use client"

import { useActivities } from "@/service/apiHooks/activities.hook";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Image from "next/image";
import PageBanner from "@/components/reusable/PageBanner";
import { useRouter } from "next/navigation";
import EmptyData from "@/components/reusable/EmptyData";
function ActivitiesView() {
    const { data: activities, isLoading } = useActivities();
    const router = useRouter();

    // Skeleton loader component
    const SkeletonCard = () => (
        <div className="bg-card rounded-xl shadow-md overflow-hidden flex flex-col h-full animate-pulse">
            {/* Image skeleton */}
            <div className="relative h-56 w-full bg-muted">
                <div className="absolute top-4 right-4 bg-muted-foreground/20 px-3 py-1 rounded-full w-16 h-6"></div>
            </div>

            {/* Content skeleton */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Title skeleton */}
                <div className="space-y-2 mb-3">
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-6 bg-muted rounded w-1/2"></div>
                </div>

                {/* Date skeleton */}
                <div className="flex items-center mb-4">
                    <div className="h-4 bg-muted rounded w-32"></div>
                </div>

                {/* Content skeleton */}
                <div className="space-y-2 mb-6 flex-grow">
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-full"></div>
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>

                {/* Button skeleton */}
                <div className="flex justify-end">
                    <div className="h-8 bg-muted rounded-full w-28"></div>
                </div>
            </div>
        </div>
    );

    if (isLoading) {
        return (
            <section className="bg-background min-h-screen">
                <PageBanner title="Activities" subtitle="Stay updated with our latest events, conferences, and community engagements." />
                <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleReadDetails = (id: number) => {
        router.push(`/activities/${id}`);
    };

    return (
        <section className=" bg-background min-h-screen">
            <PageBanner title="Activities" subtitle="Stay updated with our latest events, conferences, and community engagements." />
            <div className="max-w-7xl py-16 mx-auto px-4 sm:px-6 lg:px-8">


                {activities?.length === 0 ? <EmptyData title="No activities found" description="There are no activities to display at the moment." /> : <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {activities?.map((activity) => (
                        <motion.div
                            key={activity.id}
                            variants={itemVariants}
                            className="bg-card rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group"
                        >
                            <div className="relative h-56 w-full overflow-hidden bg-muted">
                                {activity.activitiesImages && activity.activitiesImages.length > 0 ? (
                                    <Image
                                        src={imageurlgenerator(activity.activitiesImages[0].imageUrl)}
                                        alt={activity.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary shadow-sm">
                                    {new Date(activity.startDate).getFullYear()}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                    {activity.title}
                                </h3>

                                <div className="flex items-center text-muted-foreground text-sm mb-4 gap-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>{formatDate(activity.startDate)}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground line-clamp-3 mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: activity.content || '' }}></p>

                                <div className="flex justify-end">
                                    <button onClick={() => handleReadDetails(activity.id)} className="text-primary font-semibold text-sm hover:text-primary transition-colors flex items-center gap-1 group/btn cursor-pointer hover:bg-accent hover:text-primary rounded-full px-4 py-2">
                                        Read Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>}
            </div>
        </section>
    )
}

export default ActivitiesView