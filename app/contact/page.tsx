"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Compass, ArrowUpRight } from "lucide-react";
import logo from "@/public/logo.png";
import { contactInfo } from "../../lib/site";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#f7f9fa] py-14 lg:py-24 relative overflow-hidden">
      {/* Blueprint Grid Accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #17324f 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Info (Span 5) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl bg-[#081423] text-white p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-white/10"
          >
            {/* Ambient gold glow */}
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#9c724a]/25 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
              {/* Logo */}
              <div className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/20 shadow-sm">
                <Image src={logo} alt="Darbar Springwala" className="h-9 w-auto" priority />
              </div>

              {/* Titles */}
              <div className="space-y-3">
                <span className="eyebrow block">
                  Contact
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight font-display text-white">
                  Let&apos;s Discuss Your Spring Requirement.
                </h1>
                <p className="text-xs sm:text-sm text-steel-2/90 leading-relaxed">
                  Share your technical parameters and our engineering team will respond with a custom feasibility analysis and quotation.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-5 pt-2">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-[#9C724A] shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#9C724A] font-bold">
                      Factory Address
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-white/80 leading-relaxed">
                      Military Gate, Buddhisagar School, Prajapati Society, Radar Rd, opposite Satadhar Pan, Gokul Nagar, Jamnagar, Gujarat 361004
                    </p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-[#9C724A] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#9C724A] font-bold">
                      Direct Line
                    </h4>
                    <Link href="tel:+919974155963" className="mt-1 block text-sm font-bold text-white hover:text-[#9C724A] transition-colors font-mono">
                      +91 99741 55963
                    </Link>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-[#25D366] shrink-0">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.372a9.954 9.954 0 004.773 1.216h.004c5.505 0 9.989-4.478 9.99-9.984 0-2.669-1.037-5.176-2.927-7.07C17.186 2.896 14.68 2 12.012 2zM6.593 6.966c.26-.002.502.01.7.457.2.457.678 1.657.737 1.777.06.12.098.26.018.42-.08.158-.118.258-.238.397-.12.138-.25.31-.358.416-.12.119-.245.249-.105.489.14.24.62.98.932 1.258.402.358.74.47.892.54.152.07.242.06.332-.04.09-.1.39-.45.49-.6.1-.15.2-.12.33-.07.13.05.83.39.97.46.14.07.23.1.26.16.03.06.03.35-.09.69-.12.34-.69.66-.95.69-.262.03-.667-.09-1.572-.455-1.077-.433-2.083-1.636-2.527-2.235-.088-.118-.737-.98-.737-1.87 0-.89.47-1.32.64-1.49.17-.17.37-.21.5-.21z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#9C724A] font-bold">
                      WhatsApp Dispatch
                    </h4>
                    <Link href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm font-bold text-white hover:text-[#25D366] transition-colors font-mono">
                      +91 99741 55963
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-2.5 text-[#9C724A] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#9C724A] font-bold">
                      Technical Email
                    </h4>
                    <Link href={`mailto:${contactInfo.email}`} className="mt-1 block text-sm font-bold text-white hover:text-[#9C724A] transition-colors">
                      {contactInfo.email}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Google Maps Button */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-xs font-bold text-[#9C724A] hover:bg-[#9C724A] hover:text-white transition-all w-full justify-center group"
                >
                  <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  <span>Open Factory Location in Google Maps</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Right Column: Contact Form (Span 7) */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 rounded-3xl bg-white border border-line p-8 sm:p-10 shadow-lg flex flex-col justify-center"
          >
            <div>
              <span className="eyebrow block">
                Interactive RFP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#17324F] font-display leading-tight mt-2">
                Request a Design Consultation
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-steel mb-8 leading-relaxed">
                Complete our secure form to transmit blueprint parameters directly to our Jamnagar coiling engineers.
              </p>
            </div>

            <ContactForm />
          </motion.section>
        </div>
      </div>
    </main>
  );
}
