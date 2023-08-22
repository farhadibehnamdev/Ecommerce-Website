import "@/app/globals.css";
import { ReduxProvider } from "@/store/provider";
const AuthLayout = function ({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full mx-auto max-w-full">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
