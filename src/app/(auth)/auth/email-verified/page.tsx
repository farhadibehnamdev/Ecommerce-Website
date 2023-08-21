import EmailVerifiedContainer from "@/components/website/containers/VerifiedEmailContainer";

const EmailVerifiedPage = function ({ searchParams }: unknown) {
  const { token } = searchParams;
  return <EmailVerifiedContainer token={token} />;
};

export default EmailVerifiedPage;
