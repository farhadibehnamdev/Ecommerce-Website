import ResetPasswordContainer from "@/components/website/containers/ResetPasswordContainer";

const ResetPasswordPage = function ({ searchParams }: unknown) {
  const { token } = searchParams;
  return <ResetPasswordContainer token={token} />;
};

export default ResetPasswordPage;
