"use client";
import SessionContext from "@/contexts/SessionContext";
import { useQuery } from "@tanstack/react-query";
import { profile } from "@/api/userApi";

const fetchUser = async function () {
  const response = await profile();
  return response.data;
};
const SessionProvider = function ({ children }: { children: React.ReactNode }) {
  const {
    data: user,
    isLoading,
    isSuccess,
    refetch,
  } = useQuery({ queryKey: ["user"], queryFn: () => fetchUser() });
  console.log("user ::", user);
  return (
    <SessionContext.Provider value={{ user, isLoading, refetch }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
