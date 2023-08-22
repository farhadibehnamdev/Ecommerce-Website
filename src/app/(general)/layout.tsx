import Navbar from "@/components/website/presentational/Navbar";
import "@/app/globals.css";
import { Footer } from "@/components/website/presentational/Footer";
import WebsiteFeatures from "@/components/website/presentational/WebsiteFeatures";
import { ReduxProvider } from "@/store/provider";
import NavbarContainer from "@/components/website/containers/NavbarContainer";

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
        <ReduxProvider>
          <NavbarContainer />
          {children}
          <WebsiteFeatures />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
