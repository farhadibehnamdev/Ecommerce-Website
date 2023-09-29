import "@/styles/globals.css";
import Sidebar from "@/components/dashboard/presentational/Sidebar";
import Navbar from "@/components/dashboard/presentational/Navbar";
import TanstakProvider from "@/providers/TanstackProvider";
import SessionProvider from "@/providers/SessionProvider";
import NavbarContainer from "@/components/dashboard/containers/NavbarContainer";

interface IDashboardLayout {
  children: React.ReactNode;
}
const DashboardLayout = function ({ children }: IDashboardLayout) {
  return (
    <html className="h-full bg-white">
      <body className="h-full font-interRegular">
        <TanstakProvider>
          <Sidebar />
          <SessionProvider>
            <NavbarContainer />
            <div className="lg:pl-72 pt-16">
              <main className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
              </main>
            </div>
          </SessionProvider>
        </TanstakProvider>
      </body>
    </html>
  );
};
export default DashboardLayout;
