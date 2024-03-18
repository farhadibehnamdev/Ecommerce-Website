import "@/app/globals.css";
import TanstakProvider from "@/providers/react-query-provider";
const AuthLayout = async function ({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full mx-auto max-w-full">
        <TanstakProvider>{children}</TanstakProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
