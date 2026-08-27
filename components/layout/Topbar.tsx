import Link from "next/link";
import { contactInfo } from "../../lib/site";

export default function Topbar() {
  return (
    <div className="bg-navy-deep py-2 text-center text-[12.5px] text-[#C7CFD7]">
      <div className="container flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-between">
        <p>Precision Spring Manufacturer · Jamnagar, Gujarat</p>
        <p className="flex items-center gap-3">
          <Link href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
            {contactInfo.email}
          </Link>
          <span>·</span>
          <Link href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
            {contactInfo.phone}
          </Link>
        </p>
      </div>
    </div>
  );
}
