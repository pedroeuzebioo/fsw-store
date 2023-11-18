import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AuthProvider } from "@/providers/auth";
import Footer from "@/components/footer";
import CartProvider from "@/providers/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Store",
  description:
    "Sistema de e-commerce feito com React, Next.js, Next Auth, Tailwind CSS, Shadcn/UI, Prisma, PostgreSQL, Stripe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
