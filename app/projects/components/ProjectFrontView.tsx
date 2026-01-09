"use client";

import { useGetAllProjects } from "@/service/apiHooks/project.hook";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import EmptyData from "@/components/reusable/EmptyData";
function ProjectFrontView() {
    const { data: projects, isLoading } = useGetAllProjects();

    const featuredProjects = projects?.slice(0, 3);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Our Projects
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-xl">
                        Developing sustainable hydroelectric facilities across Nepal
                    </p>
                </div>

                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition"
                >
                    View all projects
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Grid */}
            {featuredProjects?.length === 0 ? <EmptyData title="No projects found" description="There are no projects to display at the moment." /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <ProjectCardSkeleton key={index} />
                    ))
                    : featuredProjects?.map((project, index) => {
                        const coverImage = project.projectImages?.[0];

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group border border-gray-200 bg-white flex flex-col overflow-hidden transition hover:border-gray-100 hover:shadow-lg rounded-2xl"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/9] bg-gray-100 flex items-center justify-center">
                                    {coverImage ? (
                                        <Image
                                            src={imageurlgenerator(coverImage.imageUrl)}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <ImageIcon className="w-10 h-10 mb-2" />
                                            <span className="text-sm">No Image</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {project.title}
                                    </h3>

                                    <div
                                        className="
                        prose prose-sm prose-gray max-w-none
                        line-clamp-3
                        prose-p:my-1
                        prose-img:hidden
                      "
                                        dangerouslySetInnerHTML={{
                                            __html: project.content,
                                        }}
                                    />

                                    <div className="mt-auto pt-4 flex justify-end">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium hover:bg-blue-50 px-3 py-2 rounded-xl transition"
                                        >
                                            Read more
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
            </div>}
        </section>
    );
}

export default ProjectFrontView;