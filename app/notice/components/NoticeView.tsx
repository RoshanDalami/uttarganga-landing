"use client";
import React from "react";
import { useNotices } from "@/service/apiHooks/notice.hook";
import NoticeCard from "./NoticeCard";
import NoticeCardSkeleton from "./NoticeCardSkeleton";
import PageBanner from "@/components/reusable/PageBanner";
import EmptyData from "@/components/reusable/EmptyData";
function NoticeView() {
  const { data: notices, isLoading, isError } = useNotices();
  return (
    <div>
      <PageBanner
        title="Notices"
        subtitle="Stay updated with the latest announcements and information"
      />
      <div className="max-w-7xl mx-auto p-6 min-h-screen">
        <h1 className="font-bold text-3xl mb-6">Notices</h1>
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
    </div>
  );
}

export default NoticeView;
