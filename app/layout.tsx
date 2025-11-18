import type { Metadata } from "next";
import { Inter, Galada } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LenisScroll from "@/components/LenisScroll";

// Default site font
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Lily Script One (for specific text)
const lily = Galada({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lily",
});

export const metadata: Metadata = {
  title: "Dhruvik - Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, and 3D Web Experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/* Add both font variables */}
      <body className={`${inter.variable} ${lily.variable} antialiased`}>
        <LenisScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LenisScroll>
      </body>
    </html>
  );
}
