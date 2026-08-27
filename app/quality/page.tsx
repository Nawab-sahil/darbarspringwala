export default function QualityPage() {
  return (
    <main className="section-pad">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-start">
        <article className="card-base p-8">
        <p className="eyebrow">Quality First</p>
        <h1 className="text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-semibold">Quality and Testing</h1>
        <p className="mt-6 text-lg leading-8 text-steel">
          Quality you can build into your product through dimensional consistency, process control, and inspection-focused workflow.
        </p>
        <ul className="mt-8 grid gap-4 text-steel md:grid-cols-2">
          <li className="card-base p-5">Incoming material inspection</li>
          <li className="card-base p-5">CNC process parameter checks</li>
          <li className="card-base p-5">Product verification</li>
          <li className="card-base p-5">Final dimensional and finish verification</li>
        </ul>
        </article>
        <article className="card-base p-8 bg-[linear-gradient(180deg,#17324f_0%,#0d1d2f_100%)] text-white">
          <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-bronze-2">Inspection Focus</p>
          <div className="mt-5 grid gap-3">
            {['Dimension', 'Load', 'Material', 'Consistency'].map((item) => (
              <div key={item} className="rounded-md border border-white/20 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.08em]">
                {item}
              </div>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
