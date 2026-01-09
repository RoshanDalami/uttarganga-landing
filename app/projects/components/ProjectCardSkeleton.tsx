import { Skeleton } from "@/components/ui/skeleton";

function ProjectCardSkeleton() {
    return (
        <div className="border border-gray-200 bg-white flex flex-col overflow-hidden rounded-2xl">
            {/* Image Skeleton */}
            <div className="relative aspect-[16/9] bg-gray-100">
                <Skeleton className="absolute inset-0" />
            </div>

            {/* Content Skeleton */}
            <div className="p-5 flex flex-col flex-1 gap-3">
                {/* Title */}
                <Skeleton className="h-5 w-3/4" />

                {/* Content lines */}
                <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-[90%]" />
                    <Skeleton className="h-4 w-[80%]" />
                </div>

                {/* Button */}
                <div className="mt-4 flex justify-end">
                    <Skeleton className="h-8 w-24 rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export default ProjectCardSkeleton;