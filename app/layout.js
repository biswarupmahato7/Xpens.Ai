import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xpens.Ai",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-slate-800 `}>
          <Toaster position="top-center" richColors /> {/* ✅ Move above children */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* Footer */}
          <footer className="bg-gray-400 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>By- Biswarup Mahato</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

