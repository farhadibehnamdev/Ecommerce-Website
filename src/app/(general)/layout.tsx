import Navbar from "@/components/navbar/Navbar";
import "@/app/globals.css";
import { Footer } from "@/components/footer/Footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
