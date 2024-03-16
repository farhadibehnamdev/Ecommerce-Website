import ResetPasswordContainer from "@/app/(auth)/auth/reset-password/_components/ResetPasswordContainer";

const ResetPasswordPage = function ({ searchParams }: unknown) {
  const { token } = searchParams;
  return <ResetPasswordContainer token={token} />;
};

export default ResetPasswordPage;
