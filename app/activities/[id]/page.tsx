"use client"

import { useParams } from "next/navigation";
import { useActivitiesById } from "@/service/apiHooks/activities.hook";
import ActivitiesDetailsView from "../components/ActivityDetailsView";
function Activities() {
    const { id } = useParams();
    // Safely cast id to string to satisfy the hook's type requirement
    const { data: activity, isLoading } = useActivitiesById(id as string);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20 min-h-[50vh] bg-gray-50/50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    if (!activity) {
        return (
            <div className="flex justify-center items-center min-h-[50vh] bg-gray-50/50">
                <p className="text-gray-500 text-lg">Activity not found</p>
            </div>
        )
    }

    return (
        <ActivitiesDetailsView activity={activity} />
    )
}

export default Activities