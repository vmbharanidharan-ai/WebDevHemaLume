import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "HemaLume | Point-of-care hematology triage",
  description:
    "HemaLume is an offline, smartphone-based blood-smear triage system designed to help frontline clinics flag cases that may need urgent specialist referral.",
  metadataBase: new URL("https://hemalume.vercel.app")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
