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
    <main className="flex-1 bg-[#f7f5f1] py-16 lg:py-24 relative overflow-hidden">
      {/* Blueprint Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, #17324f 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }} />

      <div className="container relative z-10 max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Info (Span 5) */}
          <motion.section 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-5 rounded-2xl bg-[#0d1d2f] text-white p-8 lg:p-10 shadow-2xl relative overflow-hidden border border-white/5"
          >
            {/* Ambient gold glow */}
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-[#9c724a]/20 blur-3xl pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              {/* Logo */}
              <Image src={logo} alt="Darbar Springwala" className="h-10 w-auto" priority />
              
              {/* Titles */}
              <div>
                <p className="eyebrow text-[#b98f5e] before:bg-[#b98f5e] mb-2 font-mono text-[11px] uppercase tracking-widest">
                  Contact
                </p>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
                  Let&apos;s Discuss Your Spring Requirement.
                </h1>
                <p className="mt-3 text-sm text-[#d2dbe4] leading-relaxed">
                  Share your requirement and our team will respond with a suitable spring solution.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6 pt-2">
                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 text-[#b98f5e] shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#89919b] font-bold">
                      Factory Address
                    </h4>
                    <p className="mt-1 text-sm text-[#d2dbe4] leading-relaxed">
                      Military Gate, Buddhisagar School, Prajapati Society, Radar Rd, opposite Satadhar Pan, Gokul Nagar, Jamnagar, Gujarat 361004
                    </p>
                  </div>
                </div>

                {/* Call */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 text-[#b98f5e] shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#89919b] font-bold">
                      Call
                    </h4>
                    <Link href="tel:+919974155963" className="mt-1 block text-md font-bold text-white hover:text-[#b98f5e] transition-colors">
                      +91 99741 55963
                    </Link>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 text-[#b98f5e] shrink-0">
                    <svg className="h-5 w-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.982L2 22l5.233-1.372a9.954 9.954 0 004.773 1.216h.004c5.505 0 9.989-4.478 9.99-9.984 0-2.669-1.037-5.176-2.927-7.07C17.186 2.896 14.68 2 12.012 2zM6.593 6.966c.26-.002.502.01.7.457.2.457.678 1.657.737 1.777.06.12.098.26.018.42-.08.158-.118.258-.238.397-.12.138-.25.31-.358.416-.12.119-.245.249-.105.489.14.24.62.98.932 1.258.402.358.74.47.892.54.152.07.242.06.332-.04.09-.1.39-.45.49-.6.1-.15.2-.12.33-.07.13.05.83.39.97.46.14.07.23.1.26.16.03.06.03.35-.09.69-.12.34-.69.66-.95.69-.262.03-.667-.09-1.572-.455-1.077-.433-2.083-1.636-2.527-2.235-.088-.118-.737-.98-.737-1.87 0-.89.47-1.32.64-1.49.17-.17.37-.21.5-.21z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#89919b] font-bold">
                      WhatsApp
                    </h4>
                    <Link href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-md font-bold text-white hover:text-[#b98f5e] transition-colors">
                      +91 99741 55963
                    </Link>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="rounded-lg bg-white/5 border border-white/10 p-2.5 text-[#b98f5e] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#89919b] font-bold">
                      Email
                    </h4>
                    <Link href={`mailto:${contactInfo.email}`} className="mt-1 block text-md font-bold text-white hover:text-[#b98f5e] transition-colors">
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
                  className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-5 py-3.5 text-xs font-bold text-[#b98f5e] hover:bg-white/10 hover:text-white transition-all w-full justify-center group"
                >
                  <Compass className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  Open in Google Maps
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* Right Column: Contact Form (Span 7) */}
          <motion.section 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="lg:col-span-7 rounded-2xl bg-white border border-[#e2ded4] p-8 lg:p-10 shadow-xl flex flex-col justify-center"
          >
            <div>
              <p className="eyebrow">Interactive RFP</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#17324f] leading-tight mt-2">
                Request a Design Consultation
              </h2>
              <p className="mt-2 text-sm text-[#5b6672] mb-8">
                Complete our secure form to transmit blueprint parameters directly to our coiling engineers.
              </p>
            </div>
            
            <ContactForm />
          </motion.section>
        </div>
      </div>
    </main>
  );
}
