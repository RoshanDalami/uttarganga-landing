import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock } from "lucide-react";

// Example: Array of 3 dummy indices for loading state
const skeletonIndices = [0, 1, 2];

function NoticeCardSkeleton() {
  return skeletonIndices.map((index) => (
    <motion.div
      key={`skeleton-${index}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      {/* Media Skeleton */}
      <Skeleton className="w-full h-48 rounded-t-2xl" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-4">
        {/* Title */}
        <Skeleton className="h-6 w-3/4 rounded-lg" />

        {/* Description (3 lines) */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-full rounded-lg" />
          <Skeleton className="h-4 w-5/6 rounded-lg" />
        </div>

        {/* Footer (date & time) */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <Skeleton className="h-4 w-24 rounded-lg" />
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <Skeleton className="h-4 w-16 rounded-lg" />
          </div>
        </div>
      </div>
    </motion.div>
  ));
}

export default NoticeCardSkeleton;
