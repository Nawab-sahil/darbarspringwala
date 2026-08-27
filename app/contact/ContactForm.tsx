"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product") || "";

  return (
    <form className="grid gap-4">
      <label className="grid gap-2">
        <span className="text-sm font-medium">Name</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          type="text"
          placeholder="Your name"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Company Name</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          type="text"
          placeholder="Company name"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Email</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          type="email"
          placeholder="you@company.com"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Phone</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          type="tel"
          placeholder="+91"
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Product Type</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          type="text"
          key={product}
          defaultValue={product}
          placeholder="Compression Springs"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Quantity</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          type="text"
          placeholder="Required quantity"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Requirement</span>
        <textarea
          className="min-h-32 rounded-md border border-line bg-surface px-4 py-3 outline-none focus:border-bronze"
          placeholder="Share application, dimensions, load, material, and any drawing reference."
          required
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-medium">Drawing / Specification Upload</span>
        <input
          className="rounded-md border border-line bg-surface px-4 py-3 outline-none file:mr-4 file:rounded-sm file:border-0 file:bg-bronze file:px-3 file:py-1 file:text-sm file:font-medium file:text-[#1a1206]"
          type="file"
        />
      </label>
      <button type="submit" className="btn-primary mt-2 w-fit">
        Request a Quote
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-steel animate-pulse">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
