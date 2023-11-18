import "@/styles/globals.css";
import { Footer } from "@/components/website/Footer";
import WebsiteFeatures from "@/components/website/WebsiteFeatures";
import NavbarContainer from "@/components/website/containers/NavbarContainer";
import TanstakProvider from "@/providers/TanstackProvider";
import SessionProvider from "@/providers/SessionProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/build/lib/devtools";

export const metadata = {
  title: "Ecommerce Website",
  description: "This is the Ecommerce Website",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <TanstakProvider>
          <SessionProvider>
            <NavbarContainer />
            {children}
          </SessionProvider>

          <WebsiteFeatures />
          <Footer />
        </TanstakProvider>
      </body>
    </html>
  );
}
