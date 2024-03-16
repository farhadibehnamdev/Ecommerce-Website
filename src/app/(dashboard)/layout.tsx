import "@/styles/globals.css";
import TanstakProvider from "@/providers/react-query-provider";
import SessionProvider from "@/providers/session-provider";
import NextUIProviderWrapper from "@/providers/nextui-provider-wrapper";
import Sidebar from "@/app/_components/sidebar/sidebar";
import Navbar from "@/app/_components/navbar/navbar";

interface IDashboardLayout {
  children: React.ReactNode;
}
const DashboardLayout = function ({ children }: IDashboardLayout) {
  return (
    <html className="h-full bg-slate-50">
      <body className="h-full  font-interRegular">
        <TanstakProvider>
          <Sidebar />
          <NextUIProviderWrapper>
            <SessionProvider>
              <Navbar />
              <div className="lg:pl-72 pt-4">
                <main className="py-5">
                  <div className="container mx-auto text-zinc-800  text-16  ">
                    {children}
                  </div>
                </main>
              </div>
            </SessionProvider>
          </NextUIProviderWrapper>
        </TanstakProvider>
      </body>
    </html>
  );
};
export default DashboardLayout;
