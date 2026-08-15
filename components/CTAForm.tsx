"use client";

import { useEffect, useRef, useState } from "react";

const FORM_ROOT_SELECTOR = ".ff-6a7611818a167a70cc4e6dec[data-ff-el='root']";

export function CTAForm() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const mountElement = mount;
    let cancelled = false;
    let redirectTimer: number | undefined;
    let observer: MutationObserver | undefined;

    async function loadEmbed() {
      const response = await fetch("/flodesk-form.html");
      if (!response.ok) throw new Error("Could not load the Flodesk form.");
      const markup = await response.text();
      if (cancelled) return;

      const template = document.createElement("template");
      template.innerHTML = markup;
      const scripts = Array.from(template.content.querySelectorAll("script"));
      scripts.forEach((script) => script.remove());
      mountElement.replaceChildren(template.content.cloneNode(true));

      const root = mountElement.querySelector<HTMLElement>(FORM_ROOT_SELECTOR);
      if (root) {
        observer = new MutationObserver(() => {
          if (root.dataset.ffStage !== "success" || redirectTimer) return;
          redirectTimer = window.setTimeout(() => window.location.assign("/thanks"), 1500);
        });
        observer.observe(root, { attributes: true, attributeFilter: ["data-ff-stage"] });
      }

      // Execute Flodesk's supplied scripts after its unmodified markup is in the document.
      scripts.forEach((original) => {
        const script = document.createElement("script");
        Array.from(original.attributes).forEach((attribute) => script.setAttribute(attribute.name, attribute.value));
        script.textContent = original.textContent;
        document.body.appendChild(script);
      });
      setLoaded(true);
    }

    loadEmbed().catch(() => setLoaded(true));
    return () => { cancelled = true; observer?.disconnect(); if (redirectTimer) clearTimeout(redirectTimer); };
  }, []);

  return (
    <section id="book-consultation" className="section-wrap scroll-mt-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-[#111627] to-[#111627] p-6 shadow-glow sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
        <div>
          <p className="eyebrow">Book the call</p>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">One-to-One Consultation</h2>
          <p className="mt-5 leading-7 text-slate-300">Talk about your current marketing, sales challenges, and business goals.</p>
          <h3 className="mt-8 text-xl font-bold">Customized Strategy for Your Business</h3>
          <p className="mt-3 leading-7 text-slate-300">Leave the call with a practical AI marketing plan designed around your business.</p>
        </div>
        <div className="flodesk-embed rounded-3xl border border-white/10 bg-[#0c1020] p-1 shadow-sm">
          {!loaded && <p className="p-8 text-center text-sm text-slate-400">Loading consultation form…</p>}
          <div ref={mountRef} />
        </div>
      </div>
    </section>
  );
}
