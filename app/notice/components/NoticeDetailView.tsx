'use client'

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import NoticeDetailSkeleton from "./NoticeDetailSkeleton";
import { useGetNoticeById } from '@/service/apiHooks/notice.hook'
import { imageurlgenerator } from "@/utils/imageurlgenerator";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
};

function NoticeDetailView() {
    const { id } = useParams();
    const router = useRouter();
    const { data: notice, isLoading, error } = useGetNoticeById(id as string);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600">
                Failed to load notice
            </div>
        );
    }

    if (!notice) return null;

    return (
        <motion.div
            className="min-h-screen bg-gray-50"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {/* Top Bar */}
            <div className="sticky top-0 z-20 bg-white border-b">
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                </div>
            </div>

            {isLoading ? <div className="min-h-screen flex items-center justify-center">
                <NoticeDetailSkeleton />
            </div> : <main className="max-w-5xl mx-auto px-4 py-8">
                {/* Header */}
                <motion.div variants={item} className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        {notice.title}
                    </h1>
                </motion.div>

                {/* Content */}
                <motion.div
                    variants={item}
                    className="bg-white border p-6 md:p-8 mb-8"
                >
                    <div
                        className="
                            prose prose-gray max-w-none
                            prose-img:border
                            prose-img:border-gray-200
                            prose-img:rounded-none
                            prose-a:text-blue-600
                        "
                        dangerouslySetInnerHTML={{ __html: notice.content }}
                    />
                </motion.div>

                {/* Media Section */}
                {notice.noticeMedias?.length > 0 && (
                    <motion.div variants={item}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <ImageIcon className="w-5 h-5" />
                            Attachments
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {notice.noticeMedias.map((media, index) => (
                                <div
                                    key={index}
                                    className="border bg-white p-3 hover:border-gray-400 transition"
                                >
                                    {media.mediaType === "image" && (
                                        <div className="relative aspect-[16/9] bg-gray-100">
                                            <Image
                                                src={imageurlgenerator(media.mediaUrl)}
                                                alt={notice.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}

                                    {media.mediaType === "pdf" && (
                                        <a
                                            href={imageurlgenerator(media.mediaUrl)}
                                            target="_blank"
                                            className="flex items-center gap-3 text-red-600 font-medium hover:underline"
                                        >
                                            <FileText className="w-5 h-5" />
                                            View PDF Document
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </main>}
        </motion.div>
    );
}

export default NoticeDetailView;