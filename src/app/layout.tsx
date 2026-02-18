import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha School Baldwin County | World-Class Education on the Eastern Shore",
  description:
    "Join the Founding Family cohort to bring Alpha—the school producing the top 1% of academic outcomes globally—to Baldwin County, AL. Fall 2028 launch.",
  openGraph: {
    title: "Alpha School Baldwin County | World-Class Education",
    description:
      "We are organizing a Founding Family cohort to bring Alpha to the Eastern Shore. Apply now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
