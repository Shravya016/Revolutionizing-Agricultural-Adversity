import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  const handleSuccess = () => {
    // Redirect to a different page or show a success message
  };

  return (
    <div>
      <ForgotPasswordForm onSuccess={handleSuccess} />
    </div>
  );
}
