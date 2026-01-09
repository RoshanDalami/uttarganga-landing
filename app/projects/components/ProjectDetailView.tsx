'use client';

import { useParams, useRouter } from 'next/navigation';
import { useGetProjectById } from '@/service/apiHooks/project.hook';
import { motion } from 'framer-motion';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';
import { imageurlgenerator } from '@/utils/imageurlgenerator';
import { useState } from 'react';

function ProjectDetailView() {
    const { id } = useParams();
    const router = useRouter();
    const { data: project, isLoading } = useGetProjectById(id as string);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Skeleton loader for images
    const Skeleton = () => (
        <div className="animate-pulse bg-gray-200 h-[400px] md:h-[500px] w-full rounded-xl" />
    );

    if (isLoading) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4">
                <Skeleton />
                <div className="h-6 w-48 bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-96 bg-gray-200 animate-pulse rounded" />
                <div className="h-4 w-80 bg-gray-200 animate-pulse rounded" />
            </div>
        );
    }

    if (!project) return null;

    const images = project.projectImages || [];
    const hasImages = images.length > 0;

    return (
        <motion.div
            className="min-h-screen bg-gray-50"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Top Navigation */}
            <div className="sticky top-0 z-20 bg-white border-b shadow-sm">
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                </div>
            </div>

            <main className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-8">

                {/* Project Title */}
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-gray-900"
                    variants={itemVariants}
                >
                    {project.title}
                </motion.h1>

                {/* Image Section */}
                {hasImages ? (
                    <motion.div className="space-y-4" variants={itemVariants}>
                        {/* Main Image */}
                        <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden bg-gray-100">
                            <Image
                                src={imageurlgenerator(images[selectedImageIndex].imageUrl)}
                                alt={project.title}
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto">
                                {images.map((img, idx) => (
                                    <button
                                        key={img.id}
                                        onClick={() => setSelectedImageIndex(idx)}
                                        className={`relative h-16 w-16 md:h-20 md:w-20 rounded-lg overflow-hidden border-2 ${idx === selectedImageIndex
                                            ? 'border-blue-500 cursor-pointer'
                                            : 'border-gray-200 cursor-pointer'
                                            }`}
                                    >
                                        <Image
                                            src={imageurlgenerator(img.imageUrl)}
                                            alt={`Thumbnail ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <motion.div
                        className="flex flex-col items-center justify-center h-[400px] md:h-[500px] bg-gray-200 rounded-xl text-gray-400"
                        variants={itemVariants}
                    >
                        <ImageIcon className="w-12 h-12 mb-2" />
                        No Images
                    </motion.div>
                )}

                {/* Project Content */}
                <motion.div
                    className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 prose prose-gray max-w-none"
                    variants={itemVariants}
                >
                    <div className="prose prose-neutral dark:prose-invert max-w-none
                    [&_table]:border-collapse [&_table]:w-full
                    [&_th]:border [&_th]:border-gray-300 dark:[&_th]:border-gray-700 [&_th]:p-2
                    [&_td]:border [&_td]:border-gray-300 dark:[&_td]:border-gray-700 [&_td]:p-2
                    prose-li:text-gray-800 dark:prose-li:text-gray-200" dangerouslySetInnerHTML={{ __html: project.content }} />
                </motion.div>
            </main>
        </motion.div>
    );
}

export default ProjectDetailView;