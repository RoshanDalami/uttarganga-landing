"use client"
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { imageurlgenerator } from "@/utils/imageurlgenerator";
import { TNotice } from "@/types/notice.type";
import { useRouter } from "next/navigation";
function NoticeCard({ notice, index }: { notice: TNotice; index: number }) {
  const media = notice.noticeMedias?.[0];
  const router = useRouter()
  const handleView = () => {
    router.push(`/notice/${notice.id}`)
  }
  return (
    <motion.div
      key={notice.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
    >
      {/* Media */}
      {media?.mediaType === "image" && (
        <Image
          src={imageurlgenerator(media.mediaUrl)}
          alt={notice.title}
          className="w-full h-48 object-cover"
          width={400}
          height={200}
        />
      )}

      {media?.mediaType === "pdf" && (
        <div className="flex items-center justify-center h-48 bg-gradient-to-br from-red-50 to-red-100">
          <a
            href={imageurlgenerator(media.mediaUrl)}
            target="_blank"
            className="text-red-600 font-semibold underline"
          >
            View PDF Document
          </a>
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-center">

          <h2 className="text-lg font-semibold mb-2">{notice.title}</h2>
          <button onClick={handleView} className="text-blue-600 font-semibold cursor-pointer hover:bg-blue-50 px-4 py-1 rounded-2xl">View</button>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {notice.content}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {notice.publishDate}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {notice.time}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default NoticeCard;
