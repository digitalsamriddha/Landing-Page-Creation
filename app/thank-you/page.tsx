import { Header } from "@/components/Header";

export default function ThankYou({ searchParams }: { searchParams: { name?: string } }) {
  const firstName = searchParams.name?.trim().split(" ")[0] || "there";
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-wrap pb-16 pt-8 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Request received</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Your Free <span className="text-indigo-300">AI Marketing Consultation</span> Is Booked</h1>
          <p className="mt-6 text-lg text-slate-300">Thank you, <strong className="text-white">{firstName}</strong>. Your request has been received.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          <section className="rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Watch This Before Your Consultation</h2>
            <p className="mt-3 leading-7 text-slate-300">This short video will help you get more value from our call.</p>
            <h3 className="mt-7 font-bold">In the video, you’ll learn:</h3>
            <ul className="mt-3 space-y-2 leading-7 text-slate-300"><li>What we will look at during your consultation</li><li>Why many businesses get attention but not enough customer inquiries</li><li>What to prepare so your customized marketing plan is more useful</li></ul>
            <div className="mt-7 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-indigo-400/40 bg-[#0c1020] text-sm font-bold text-indigo-300">VIDEO PLACEHOLDER</div>
          </section>
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-sm sm:p-10">
            <h2 className="text-2xl font-extrabold">What Happens Next</h2>
            <ol className="mt-5 space-y-3 leading-7 text-slate-300"><li>We review your business details.</li><li>We prepare for your one-to-one consultation.</li><li>You receive a customized AI marketing strategy for your business.</li></ol>
            <p className="mt-7 font-semibold text-slate-100">Please check your email and WhatsApp for consultation details.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
