"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Fields = { name: string; email: string; whatsapp: string; business: string; url: string; message: string };
const initial: Fields = { name: "", email: "", whatsapp: "", business: "", url: "", message: "" };

export function CTAForm() {
  const [fields, setFields] = useState(initial); const [errors, setErrors] = useState<Partial<Fields>>({}); const router = useRouter();
  const update = (key: keyof Fields, value: string) => setFields((current) => ({ ...current, [key]: value }));
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const next: Partial<Fields> = {};
    if (!fields.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(fields.email)) next.email = "Please enter a valid email address.";
    if (!fields.whatsapp.trim()) next.whatsapp = "Please enter your WhatsApp number.";
    if (!fields.business.trim()) next.business = "Please enter your business name.";
    setErrors(next); if (Object.keys(next).length) return; router.push(`/thank-you?name=${encodeURIComponent(fields.name.trim())}`);
  }
  const input = "mt-2 w-full rounded-xl border border-white/10 bg-[#111627] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/20";
  const field = (key: keyof Fields, label: string, placeholder: string, type = "text", required = true) => <label className="block text-sm font-bold text-slate-200">{label}{required && <span className="text-indigo-300"> *</span>}<input type={type} value={fields[key]} onChange={(e) => update(key, e.target.value)} placeholder={placeholder} className={input} aria-invalid={!!errors[key]} />{errors[key] && <span className="mt-1 block text-sm text-red-300">{errors[key]}</span>}</label>;
  return <section id="book-consultation" className="section-wrap scroll-mt-4 py-16 sm:py-24"><div className="mx-auto grid max-w-5xl gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/15 via-[#111627] to-[#111627] p-6 shadow-glow sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12"><div><p className="eyebrow">Book the call</p><h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">One-to-One Consultation</h2><p className="mt-5 leading-7 text-slate-300">Talk about your current marketing, sales challenges, and business goals.</p><h3 className="mt-8 text-xl font-bold">Customized Strategy for Your Business</h3><p className="mt-3 leading-7 text-slate-300">Leave the call with a practical AI marketing plan designed around your business.</p></div><form noValidate onSubmit={submit} className="space-y-5 rounded-3xl border border-white/10 bg-[#0c1020] p-5 shadow-sm sm:p-7">{field("name", "Full Name", "Your full name")}{field("email", "Active Email", "you@business.com", "email")}{field("whatsapp", "WhatsApp Number", "Your active WhatsApp number")}{field("business", "Business Name", "Your business name")}{field("url", "Website or Facebook URL", "https://", "url", false)}<label className="block text-sm font-bold text-slate-200">Anything You Want to Say<textarea value={fields.message} onChange={(e) => update("message", e.target.value)} placeholder="Tell us about your business or current challenges" className={`${input} min-h-28 resize-y`} /></label><button className="primary-button w-full" type="submit">Book Free Consultation</button><p className="text-center text-xs text-slate-400">We respect your privacy. No spam.</p></form></div></section>;
}
