import { Fira_Sans, Fira_Mono } from "next/font/google"; // Custom Fonts
import "./globals.css"; // Global Styles
import Link from "next/link";
import CustomHead from "./head.js";
// Authentication Context (If applicable)
// Logout Component

// Define Fonts
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--fira-sans",
});
const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--fira-mono",
});

// Metadata for the site
export const metadata = {
  title: "DevStoic Hub",
  description: "A place for developers to cultivate productive habits.",
};

export default function RootLayout({ children }) {
  // Header Component
  const header = (
    <header className="flex items-center justify-between gap-4 p-4 text-indigo-500 sm:p-8">
      <Link href="/">
        <h1 className="font-mono text-base sm:text-lg">DevStoic Hub</h1>
      </Link>
      PLACEHOLDER
    </header>
  );

  // Footer Component
  const footer = (
    <footer className="grid p-4 sm:p-8 place-items-center">
      <Link
        href={"https://solarluiso-portfolio.vercel.app/"}
        target="_blank"
        aria-label="Visit Luiso's Portfolio"
      >
        <p className="font-mono text-indigo-500 duration-200 hover:text-white hover:bg-indigo-500">
          Built with 💚 by Luiso!
        </p>
      </Link>
      <p className="mt-2 text-sm text-gray-500">
        © {new Date().getFullYear()} DevStoic Hub. All rights reserved.
      </p>
    </footer>
  );

  return (
    <html lang="en">
      <CustomHead />

      <body
        className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-green-500 ${firaSans.className} ${firaMono.variable}`}
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
