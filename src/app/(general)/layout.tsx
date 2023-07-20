import Navbar from "@/components/presentational/Navbar";
import "@/app/globals.css";
import { Footer } from "@/components/presentational/Footer";
import WebsiteFeatures from "@/components/presentational/WebsiteFeatures";

export const metadata = {
  title: "Ecommerce Website",
  description: "This is the Ecommerce Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
        <WebsiteFeatures />
        <Footer />
      </body>
    </html>
  );
}
