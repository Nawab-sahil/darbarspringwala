"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { contactInfo } from "../../lib/site";

export default function WhatsAppFloat() {
  return (
    <motion.div
      className="fixed bottom-24 right-6 z-40 sm:bottom-28"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        href={contactInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 sm:h-[56px] sm:w-[56px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(37,211,102,0.4)]"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="h-7 w-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.381 9.805-9.782.001-2.592-1.01-5.03-2.847-6.87C16.398 2.11 13.962 1.11 11.962 1.11c-5.41 0-9.811 4.38-9.814 9.782-.001 2.03.536 4.018 1.554 5.766l-1.02 3.725 3.825-1.002zM17.47 15.3c-.3-.15-1.77-.874-2.043-.974-.275-.1-.475-.15-.675.15-.2.3-.77.974-.944 1.174-.175.2-.35.225-.65.075-3.04-1.357-4.73-3.626-5.47-4.9-.196-.34-.02-.52.152-.693.15-.15.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.625-.925-2.225-.244-.588-.492-.507-.675-.516-.174-.008-.374-.01-.574-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.525.714.31 1.272.495 1.7.63.717.227 1.37.195 1.885.118.574-.085 1.77-.724 2.02-1.388.25-.664.25-1.234.175-1.388-.075-.15-.275-.25-.575-.4z" />
        </svg>
      </Link>
    </motion.div>
  );
}
