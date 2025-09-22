import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "my Next.js App",
  description: "This  is a Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">

        <header className="bg-blue-600 text-white shadow">
          <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        </header>
        
        <main>
          {children}
        </main>
        <footer >
        &#169; 2025 My Next.js App. All rights reserved.
         <p>
          <Link href="/privacy">Privacy Policy</Link> 
          <Link href="/terms">Terms of Service</Link>
         </p>
        </footer>

      </body>
    </html>
  );
}
