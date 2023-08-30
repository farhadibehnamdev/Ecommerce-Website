import "@/styles/globals.css";
import Sidebar from "@/components/dashboard/presentational/Sidebar";
import Navbar from "@/components/dashboard/presentational/Navbar";
const DashboardLayout = function ({ children }: { children: React.ReactNode }) {
  return (
    <html className="h-full bg-white">
      <body className="h-full font-interRegular">
        <Sidebar />
        <Navbar />
        <div className="lg:pl-72 pt-16">
          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};
export default DashboardLayout;
