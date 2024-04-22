import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The byte lab",
  description: "Marketing agency based on Malaysia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("antialiased relative", inter.className)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
