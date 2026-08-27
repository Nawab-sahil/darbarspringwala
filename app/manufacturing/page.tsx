export default function ManufacturingPage() {
  const steps = [
    "Material Preparation",
    "Spring Forming",
    "Process Control",
    "Finishing",
    "Inspection",
    "Final Product",
  ];

  return (
    <main className="section-pad">
      <div className="container">
        <p className="eyebrow">Manufacturing</p>
        <h1 className="text-[clamp(34px,4.6vw,56px)] leading-[1.08] font-semibold">From Wire to Precision Component</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
          Manufacturing sequence may vary by spring type and customer requirement, with quality-focused checks throughout production.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step} className="card-base p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-2xl font-semibold text-navy">{step}</h2>
              <p className="mt-3 text-steel">Executed according to process control and application requirements.</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
