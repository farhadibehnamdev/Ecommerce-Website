"use client";
import { useQuery } from "@tanstack/react-query";
import Profile from "../presentational/Profile";
import { userProfile } from "@/api/userApi";

const fetchUserProfile = async function () {
  const response = await userProfile();
  if (response.status === 200) {
    return response.data;
  } else if (response.status >= 400) {
    throw new Error(response.data.message);
  }
};

const ProfileContainer = function () {
  const { data, isLoading, isError } = useQuery(
    ["userProfile"],
    fetchUserProfile
  );
  return <Profile />;
};
export default ProfileContainer;
