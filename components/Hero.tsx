export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-600/30 via-violet-950/20 to-transparent blur-3xl" />
      <div className="section-wrap text-center">
        <p className="eyebrow">Free one-to-one consultation</p>
        <h1 className="mx-auto mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-indigo-300 sm:mt-7 sm:text-6xl lg:text-7xl">
          Get a Free Custom AI Marketing Plan to Generate More Qualified Leads for Your Business
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
          Find out why your current marketing is not producing enough sales—and what to focus on next without guessing.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-7 text-slate-400">
          This free one-to-one consultation is for small and medium business owners struggling to sell online and offline. You’ll receive a customized AI marketing plan based on your business, goals, and current challenges.
        </p>
        <a className="primary-button mt-8 w-full sm:w-auto" href="#book-consultation">Book Free Consultation</a>
      </div>
    </section>
  );
}
