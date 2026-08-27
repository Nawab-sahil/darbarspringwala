import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import logo from "../../app/logo.png";
import { navLinks } from "../../lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-[linear-gradient(180deg,rgba(247,245,241,0.95)_0%,rgba(247,245,241,0.86)_100%)] backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="inline-flex items-center">
          <Image src={logo} alt="Darbar Springwala" className="h-10 w-auto" priority />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] text-ink transition-colors hover:text-bronze after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-bronze after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn-primary hidden lg:inline-flex">
          Request Quote
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
