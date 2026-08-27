export default function AboutPage() {
  return (
    <main className="section-pad">
      <div className="container grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <article className="card-base p-8 bg-[linear-gradient(160deg,#fff_0%,#f0eadf_100%)]">
          <p className="eyebrow">Since 1990</p>
          <h1 className="text-[clamp(34px,4.4vw,54px)] leading-[1.1] font-semibold">Built on Experience. Driven by Precision.</h1>
          <p className="mt-6 text-lg leading-8 text-steel">
            Darbar Springwala is an established spring manufacturing company based in Jamnagar, Gujarat, serving industrial and OEM applications.
          </p>
          <p className="mt-4 text-lg leading-8 text-steel">
            Our focus is application-first manufacturing with precision, consistency, and quality-conscious production practices.
          </p>
        </article>
        <article className="card-base p-8">
          <h2 className="text-3xl font-semibold text-navy">Engineering Heritage Timeline</h2>
          <div className="mt-8 space-y-5">
            <div className="rounded-lg border border-line bg-surface-2/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-bronze">1990</p>
              <p className="mt-2 text-steel">Darbar Springwala established in Jamnagar.</p>
            </div>
            <div className="rounded-lg border border-line bg-surface-2/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-bronze">Today</p>
              <p className="mt-2 text-steel">Serving industrial, engineering, and OEM spring requirements.</p>
            </div>
            <div className="rounded-lg border border-line bg-surface-2/70 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-bronze">Next Generation Manufacturing</p>
              <p className="mt-2 text-steel">Continuing heritage with modern process discipline and conversion-focused service.</p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
