import { Skeleton } from "@/components/ui/skeleton"

function NoticeDetailSkeleton() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-8">
            {/* Header Skeleton */}
            <div className="mb-8">
                <Skeleton className="h-8 w-3/4 mb-3" />
                <Skeleton className="h-6 w-1/2" />
            </div>

            {/* Content Skeleton */}
            <div className="bg-white border p-6 md:p-8 mb-8 space-y-4">
                {/* Paragraph lines */}
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[92%]" />
                <Skeleton className="h-4 w-[85%]" />

                {/* Image placeholder inside content */}
                <Skeleton className="h-[220px] w-full mt-6" />

                {/* More text */}
                <Skeleton className="h-4 w-[88%]" />
                <Skeleton className="h-4 w-[80%]" />
            </div>

            {/* Media Section Skeleton */}
            <div>
                {/* Section title */}
                <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-5 w-32" />
                </div>

                {/* Media grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[1, 2].map((_, index) => (
                        <div
                            key={index}
                            className="border bg-white p-3 space-y-3"
                        >
                            {/* Media preview */}
                            <Skeleton className="aspect-[16/9] w-full" />

                            {/* PDF / caption line */}
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default NoticeDetailSkeleton