import { userProfile } from "@/api/userApi";
import { useQuery } from "@tanstack/react-query";

const getProfile = async function () {
  const response = await userProfile();
  if (response.status >= 400) throw new Error(response.statusText);
  if (response.status === 200) {
    return response.data;
  }
};

const useProfile = function () {
  const {
    data,
    isError,
    isPending,
    isSuccess,
    isFetching,
    status,
    error,
    refetch,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: getProfile,
    retry(failureCount, error: any) {
      if (error.response?.status === 401) {
        return false;
      } else if (error.response?.status >= 500 && failureCount > 1) {
        return false;
      }
      return true;
    },
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isError,
    isPending,
    isSuccess,
    isFetching,
    status,
    error,
    refetch,
  };
};
export default useProfile;
