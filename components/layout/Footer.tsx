import Image from "next/image";
import Link from "next/link";
import logo from "../../app/logo.png";
import { contactInfo } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-navy-deep py-16 text-white">
      <div className="container grid gap-10 md:grid-cols-4">
        <div>
          <Image src={logo} alt="Darbar Springwala" className="h-11 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#C7CFD7]">
            Established in 1990, Darbar Springwala manufactures industrial springs and custom wire-formed components for engineering and OEM applications.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bronze-2">Company</p>
          <div className="mt-4 grid gap-2 text-sm text-[#C7CFD7]">
            <Link href="/about" className="transition-colors hover:text-white">About Us</Link>
            <Link href="/manufacturing" className="transition-colors hover:text-white">Manufacturing</Link>
            <Link href="/quality" className="transition-colors hover:text-white">Quality</Link>
            <Link href="/contact" className="transition-colors hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bronze-2">Products</p>
          <div className="mt-4 grid gap-2 text-sm text-[#C7CFD7]">
            <Link href="/compression-springs" className="transition-colors hover:text-white">Compression Springs</Link>
            <Link href="/extension-springs" className="transition-colors hover:text-white">Extension Springs</Link>
            <Link href="/torsion-springs" className="transition-colors hover:text-white">Torsion Springs</Link>
            <Link href="/wire-forms" className="transition-colors hover:text-white">Wire Forms</Link>
            <Link href="/custom-springs" className="transition-colors hover:text-white">Custom Springs</Link>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-bronze-2">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-[#C7CFD7]">
            <p>{contactInfo.address}</p>
            <Link href={`mailto:${contactInfo.email}`} className="block transition-colors hover:text-white">{contactInfo.email}</Link>
            <Link href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="block transition-colors hover:text-white">{contactInfo.phone}</Link>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-6 text-xs text-[#9fb0c0] sm:flex sm:items-center sm:justify-between">
        <p>© 2026 Darbar Springwala</p>
        <div className="mt-3 flex gap-4 sm:mt-0">
          <Link href="/" className="hover:text-white">Privacy Policy</Link>
          <Link href="/" className="hover:text-white">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
