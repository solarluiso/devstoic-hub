// layout.js

import "./globals.css";
import { Fira_Sans, Fira_Mono } from "next/font/google"; // Importing Fira fonts

// Defining the Fira Sans font for the body
const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--fira-sans", // Custom variable name for easier use in CSS
});

// Defining the Fira Mono font for the headers
const firaMono = Fira_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--fira-mono", // Custom variable name for easier use in CSS
});

export const metadata = {
  title: "DevStoic Hub",
  description: "A place for developers to cultivate productive habits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${firaMono.variable} antialiased bg-gray-900`} // Applying the fonts here
      >
        {children}
      </body>
    </html>
  );
}
