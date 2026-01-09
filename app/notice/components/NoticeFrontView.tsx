"use client"
import { useFrontNotices } from '@/service/apiHooks/notice.hook';
import NoticeCard from './NoticeCard';
import NoticeCardSkeleton from './NoticeCardSkeleton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import EmptyData from '@/components/reusable/EmptyData';
function NoticeFrontView() {
    const { data: notices, isLoading, error } = useFrontNotices();
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Latest Updates
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-xl">
                        Latest updates and news from Hydro Nepal
                    </p>
                </div>

                <Link
                    href="/notice"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-xl transition"
                >
                    View all notices
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
            {notices?.length === 0 ? <EmptyData title="No notices found" description="There are no notices to display at the moment." /> : <div className="grid md:grid-cols-3  2xl:grid-cols-3 gap-6">
                {isLoading ? (
                    <NoticeCardSkeleton />
                ) : (
                    notices?.map((notice, index) => {
                        return (
                            <NoticeCard key={notice.id} notice={notice} index={index} />
                        );
                    })
                )}
            </div>}
        </div>
    )
}

export default NoticeFrontView