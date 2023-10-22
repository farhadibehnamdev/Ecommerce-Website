import "@/styles/globals.css";
import TanstakProvider from "@/providers/TanstackProvider";
const AuthLayout = function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full mx-auto max-w-full">
        <TanstakProvider>{children}</TanstakProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
