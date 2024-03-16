import "@/app/globals.css";
import { Footer } from "@/app/_components/footer/footer";
import WebsiteFeatures from "@/app/_components/feature/feature";
import SessionProvider from "@/providers/session-provider";
import QueryProvider from "@/providers/react-query-provider";
import Header from "@/app/_components/header/header";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Ecommerce Website",
  description: "This is the Ecommerce Website",
};

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] bg-white">
        <QueryProvider>
          <SessionProvider>
            <Header />
            {children}
          </SessionProvider>
          <WebsiteFeatures />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
