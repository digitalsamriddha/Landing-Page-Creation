import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free AI Marketing Consultation | Digital Samriddha",
  description: "Get a free custom AI marketing plan to generate more qualified leads for your business.",
  openGraph: {
    title: "Free AI Marketing Consultation | Digital Samriddha",
    description: "Get a free custom AI marketing plan to generate more qualified leads for your business.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
