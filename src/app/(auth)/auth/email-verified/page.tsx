import EmailVerifiedContainer from "@/app/(auth)/auth/verify-email/_components/VerifiedEmailContainer";

const EmailVerifiedPage = function ({ searchParams }: unknown) {
  const { token } = searchParams;
  return <EmailVerifiedContainer token={token} />;
};

export default EmailVerifiedPage;
