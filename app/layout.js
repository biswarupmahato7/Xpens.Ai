import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { Toaster } from "sonner";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
          
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors /> 
          {/* Footer */}
         
             <footer className="bg-blue-300 py-6">
            <div className="container mx-auto px-4 text-center text-gray-700 space-y-2">
              <p>By- Biswarup Mahato</p>
              <ul className="flex justify-center gap-6">
                <li>
                  <Link href="https://discord.com" target="_blank" className="hover:text-blue-600 flex items-center gap-2">
                  <FaDiscord size={20} />
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/biswarupmahato7" target="_blank" className="hover:text-blue-600 flex items-center gap-2">
                  <FaGithub size={20}/>
                  </Link>
                </li>
                <li>
                  <Link href="https://linkedin.com/in/biswarupmahato" target="_blank" className="hover:text-blue-600 flex items-center gap-2">
                  <FaLinkedin size={20} />
                  </Link>
                </li>
              </ul>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

