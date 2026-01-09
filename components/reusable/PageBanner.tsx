import { motion } from "framer-motion";
function PageBanner({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-500 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-300">{subtitle}</p>
      </div>
    </motion.section>
  );
}

export default PageBanner;
