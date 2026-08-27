"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useRef } from "react";
import { CheckCircle2, UploadCloud, File, X } from "lucide-react";

const productOptions = [
  { slug: "compression-spring", label: "Compression Springs" },
  { slug: "extension-tension-spring", label: "Extension / Tension Springs" },
  { slug: "torsion-spring", label: "Torsion Springs" },
  { slug: "conical-spring", label: "Conical Springs" },
  { slug: "wire-forms", label: "Wire Forms" },
  { slug: "garter-spring", label: "Garter Springs" },
  { slug: "spiral-spring", label: "Spiral Springs" },
  { slug: "die-spring", label: "Die Springs" },
  { slug: "other", label: "Other / Custom Specification" }
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";

  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API submission lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[400px]">
        <div className="rounded-full bg-ok/10 p-4 text-ok">
          <CheckCircle2 className="h-14 w-14" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-navy">Enquiry Submitted Successfully</h2>
        <p className="mt-3 text-sm text-steel max-w-sm leading-relaxed">
          Thank you for reaching out. Our engineering team will review your specifications and contact you with a quotation within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setFile(null);
            setSelectedProduct("");
          }}
          className="btn-primary mt-8 px-6 py-2.5 text-xs font-bold"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Contact Name</span>
          <input
            className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink"
            type="text"
            placeholder="e.g. Rahul Patel"
            required
          />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Company Name</span>
          <input
            className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink"
            type="text"
            placeholder="e.g. Apex Autos Ltd."
            required
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Email Address</span>
          <input
            className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink"
            type="email"
            placeholder="you@company.com"
            required
          />
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Phone / WhatsApp</span>
          <input
            className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            required
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Product Category</span>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink"
            required
          >
            <option value="" disabled>Select Spring Type</option>
            {productOptions.map((opt) => (
              <option key={opt.slug} value={opt.slug}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-xs font-bold text-navy uppercase tracking-wider">Estimated Quantity</span>
          <input
            className="rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink"
            type="text"
            placeholder="e.g. 5,000 units"
            required
          />
        </label>
      </div>

      <label className="grid gap-2">
        <span className="text-xs font-bold text-navy uppercase tracking-wider">Requirement Details</span>
        <textarea
          className="min-h-24 rounded-md border border-line bg-surface px-4 py-3 outline-none focus:ring-1 focus:ring-bronze focus:border-bronze text-sm text-ink leading-relaxed"
          placeholder="Please specify wire size, operating loads, free length, material specifications (e.g. SS302) or other design parameters."
          required
        />
      </label>

      {/* Drag & Drop File Upload Zone */}
      <div className="grid gap-2">
        <span className="text-xs font-bold text-navy uppercase tracking-wider">Upload Drawing / PDF Specs (Optional)</span>

        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-xl p-6 text-center flex flex-col items-center justify-center transition-all ${dragActive ? "border-bronze bg-bronze/5" : "border-line bg-surface hover:border-bronze/60"
            }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept=".pdf,.png,.jpg,.jpeg,.zip,.cad,.dwg"
            onChange={handleFileChange}
          />

          {file ? (
            <div className="flex items-center gap-3 bg-surface-2/60 border border-line px-4 py-2.5 rounded-lg max-w-full">
              <File className="h-5 w-5 text-bronze shrink-0" />
              <div className="text-left overflow-hidden">
                <p className="text-xs font-semibold text-navy truncate max-w-[200px] sm:max-w-[300px]">{file.name}</p>
                <p className="text-[10px] text-steel-2">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
              <button
                type="button"
                onClick={removeFile}
                className="p-1 rounded-full hover:bg-line text-steel hover:text-navy shrink-0"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
              <UploadCloud className="h-10 w-10 text-steel-2 mb-2" />
              <p className="text-xs font-semibold text-navy">Drag & drop your files here or <span className="text-bronze underline">browse</span></p>
              <p className="text-[10px] text-steel-2 mt-1">Supports PDF, CAD (DWG), ZIP, or Images up to 10MB</p>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-4 w-full flex items-center justify-center shadow-md disabled:bg-steel/50"
      >
        {isSubmitting ? "Processing Enquiry..." : "Request a Quote"}
      </button>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-steel animate-pulse p-6">Loading request form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
