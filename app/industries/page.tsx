const industries = [
  "Automotive",
  "Auto Components",
  "Industrial Machinery",
  "Engineering",
  "Agriculture",
  "Electrical",
  "Hardware",
  "Construction Equipment",
  "OEM Manufacturing",
];

export default function IndustriesPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <p className="eyebrow">Industries We Serve</p>
        <h1 className="text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-semibold">Application-focused spring manufacturing across sectors.</h1>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry} className="card-base group overflow-hidden p-6 transition-all hover:-translate-y-1 hover:border-bronze hover:shadow-[0_16px_32px_rgba(23,50,79,0.12)]">
              <div className="h-28 rounded-lg border border-line bg-[linear-gradient(140deg,#f8f4ed_0%,#ece4d5_100%)]" />
              <h2 className="mt-5 text-2xl font-semibold text-navy">{industry}</h2>
              <p className="mt-3 text-steel">Engineered spring and wire-form solutions tailored to application reliability, consistency, and product performance.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
