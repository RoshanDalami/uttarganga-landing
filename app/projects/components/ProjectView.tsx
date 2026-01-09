"use client";

import AnimationWrapper from "@/components/reusable/AnimationWrapper";
import { useGetAllProjects } from "@/service/apiHooks/project.hook";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import ProjectCardSkeleton from "./ProjectCardSkeleton";
import EmptyData from "@/components/reusable/EmptyData";
function ProjectView() {
  const { data: projects, isLoading } = useGetAllProjects();



  return (
    <AnimationWrapper>
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Projects Grid */}
        {projects?.length === 0 ? <EmptyData title="No projects found" description="There are no projects to display at the moment." /> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? Array.from({ length: 6 }).map((_, index) => (
            <ProjectCardSkeleton key={index} />
          )) : projects?.map((project) => {
            const coverImage = project.projectImages?.[0];

            return (
              <div
                key={project.id}
                className="group border border-gray-200 bg-white flex flex-col overflow-hidden transition hover:border-gray-100 hover:shadow-lg cursor-pointer rounded-2xl"
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
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h2>

                  <div
                    className="
                      prose prose-sm prose-gray max-w-none
                      line-clamp-4
                      prose-p:my-1
                      prose-img:hidden
                    "
                    dangerouslySetInnerHTML={{
                      __html: project.content,
                    }}
                  />

                  <div className="w-full flex items-center justify-end">
                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-4 gap-2 flex items-center text-sm text-blue-600 font-medium opacity-100 transition hover:bg-blue-50 p-2 rounded-xl"
                    >
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>}
      </div>
    </AnimationWrapper>
  );
}

export default ProjectView;