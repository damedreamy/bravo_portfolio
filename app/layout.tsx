import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bravo Portfolio",
};


import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white min-h-screen">


        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">



            <p className="text-xl font-bold text-blue-400 tracking-wide">
              Rencess
            </p>


            <div className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
              <Link href="/projects" className="hover:text-blue-400 transition">
                My Projects
              </Link>
              <Link href="/about" className="hover:text-blue-400 transition">
                About Me
              </Link>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact Me
              </Link>
            </div>

          </div>
        </nav>


        <main className="pt-20 flex-grow">
          {children}
        </main>


        <footer className="p-4 border-t border-white/10 text-center text-sm text-gray-300">
          © 2026 Rencess Portfolio
        </footer>

      </body>
    </html>
  );
}