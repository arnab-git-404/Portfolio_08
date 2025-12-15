import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navigation/navbar";
import { ReactLenis, useLenis } from 'lenis/react'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | MERN Stack Developer",
  description:
    "Full Stack Web Developer specializing in MERN stack. Showcasing projects, internship experience, and client work.",
  keywords: [
    "MERN Stack",
    "Full Stack Developer",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Web Developer",
  ],
  authors: [{ name: "Arnab Mukherjee | Rampurhat | Website Developer" }],
  openGraph: {
    title: "Portfolio | MERN Stack Developer",
    description: "Full Stack Web Developer specializing in MERN stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactLenis root  
          
          
            />
            <Navbar />
            {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
