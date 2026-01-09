import React from 'react';
import { FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EmptyDataProps {
    title?: string;
    description?: string;
    className?: string;
    icon?: React.ElementType;
}

export default function EmptyData({
    title = "No Data Found",
    description = "There are no items to display at the moment.",
    className,
    icon: Icon = FolderOpen
}: EmptyDataProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "flex flex-col items-center justify-center p-8 text-center bg-gray-50/50 dark:bg-gray-900/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-800 min-h-[200px]",
                className
            )}
        >
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-full mb-4">
                <Icon className="w-8 h-8 text-gray-400 dark:text-gray-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm">
                {description}
            </p>
        </motion.div>
    );
}