import Link from "next/link";
import Image from "next/image";
import logo from "../logo.png";
import { contactInfo } from "../../lib/site";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <main className="section-pad">
      <div className="container grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <section className="card-base p-7 bg-[linear-gradient(165deg,#17324f_0%,#0d1d2f_100%)] text-white">
          <Image src={logo} alt="Darbar Springwala" className="h-10 w-auto" />
          <p className="eyebrow mt-8 text-bronze-2 before:bg-bronze-2">Contact</p>
          <h1 className="text-4xl font-semibold leading-tight">Let&apos;s Discuss Your Spring Requirement.</h1>
          <p className="mt-4 leading-8 text-[#d2dbe4]">
            Share your requirement and our team will respond with a suitable spring solution.
          </p>
          <div className="mt-8 space-y-3 text-[#d2dbe4]">
            <p>{contactInfo.address}</p>
            <Link href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="block hover:text-white">Call: {contactInfo.phone}</Link>
            <Link href={contactInfo.whatsappUrl} className="block hover:text-white" target="_blank" rel="noopener noreferrer">WhatsApp: {contactInfo.phone}</Link>
            <Link href={`mailto:${contactInfo.email}`} className="block hover:text-white">Email: {contactInfo.email}</Link>
            <Link href={contactInfo.mapsUrl} className="block hover:text-white" target="_blank" rel="noopener noreferrer">Open in Google Maps</Link>
          </div>
        </section>

        <section className="card-base p-7">
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
