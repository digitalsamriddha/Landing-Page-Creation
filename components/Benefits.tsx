const benefits = [
  "See why your current marketing may not be bringing enough customers",
  "Identify the best channel to focus on first",
  "Learn how to generate more qualified inquiries",
  "Get a clear plan for your next marketing steps",
  "Stop wasting time on random posts and unclear ads",
];

export function Benefits() {
  return <section className="section-wrap py-16 sm:py-24">
    <div className="mx-auto max-w-2xl text-center"><p className="eyebrow">The value of the call</p><h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">How You Benefit From This Consultation</h2></div>
    <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {benefits.map((benefit, index) => <article key={benefit} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-400/15 text-sm font-bold text-indigo-300">0{index + 1}</span><p className="mt-5 font-semibold leading-6 text-slate-200">{benefit}</p></article>)}
    </div>
  </section>;
}
