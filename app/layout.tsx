import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"]
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "HemaLume | Point-of-care hematology triage",
  description:
    "HemaLume is an offline, smartphone-based blood-smear triage system designed to help frontline clinics flag cases that may need urgent specialist referral.",
  metadataBase: new URL("https://hemalume.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
