"use client";
import SessionContext from "@/contexts/SessionContext";
import useProfile from "@/hooks/users/useProfile";

const SessionProvider = function ({ children }: { children: React.ReactNode }) {
  const { isPending, isSuccess, isError, data, isFetching, refetch, status } =
    useProfile();
  console.log("data :: ", data);
  // const { isLoading, data, error, isFetching, refetch, status } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: fetchUser,
  //   retry: (failureCount: number, error: any) => {
  //     if (error.response?.status === 401) {
  //       return false;
  //     } else if (error.response?.status >= 500 && failureCount > 1) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   refetchOnWindowFocus: false,
  // });

  return (
    <SessionContext.Provider
      value={{
        user: data,
        isPending,
        refetch,
        isFetching,
        isSuccess,
        status,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
