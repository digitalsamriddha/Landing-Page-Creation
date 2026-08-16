import { Header } from "@/components/Header";

export default function ThankYou() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="section-wrap pb-16 pt-8 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Request received</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] sm:text-6xl">Your Free <span className="text-indigo-300">AI Marketing Consultation</span> Is Booked</h1>
          <p className="mt-6 text-lg text-slate-300">Thank you. Your request has been received.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          <section className="rounded-3xl border border-indigo-400/20 bg-indigo-500/10 p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">Watch This Before Your Consultation</h2>
            <p className="mt-3 leading-7 text-slate-300">This short video will help you get more value from our call.</p>
            <h3 className="mt-7 font-bold">In the video, you’ll learn:</h3>
            <ul className="mt-3 space-y-2 leading-7 text-slate-300"><li>What we will look at during your consultation</li><li>Why many businesses get attention but not enough customer inquiries</li><li>What to prepare so your customized marketing plan is more useful</li></ul>
            <div className="mt-7 aspect-video overflow-hidden rounded-2xl border border-indigo-400/40 bg-[#0c1020]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/U3ce8kPYtSg"
                title="Prepare for your AI marketing consultation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </section>
          <section className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-7 sm:p-10">
            <h2 className="text-2xl font-extrabold">One Quick Step</h2>
            <p className="mt-3 leading-7 text-slate-300">Send us a message on WhatsApp now to confirm your consultation and share any important details about your business.</p>
            <a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-xl bg-[#25D366] px-6 font-bold text-[#06120a] transition hover:-translate-y-0.5 hover:bg-[#42e881] focus:outline-none focus:ring-4 focus:ring-emerald-400/30" href="https://wa.me/message/4QVVWC7XVEVYM1" target="_blank" rel="noreferrer">Confirm on WhatsApp</a>
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
