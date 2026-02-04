import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "AI Tools Directory | Discover the Best AI Tools",
    template: "%s | AI Tools Directory",
  },
  description: "Explore curated AI tools across writing, coding, design, productivity, and marketing. Find the perfect AI solution for your needs.",
  keywords: ["AI tools", "artificial intelligence", "productivity", "AI directory", "writing tools", "coding tools", "design tools"],
  authors: [{ name: "AI Tools Directory" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-tools-directory.com",
    siteName: "AI Tools Directory",
    title: "AI Tools Directory | Discover the Best AI Tools",
    description: "Explore curated AI tools across writing, coding, design, productivity, and marketing.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Tools Directory | Discover the Best AI Tools",
    description: "Explore curated AI tools across writing, coding, design, productivity, and marketing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
