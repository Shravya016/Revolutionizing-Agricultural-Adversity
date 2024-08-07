import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  const handleSuccess = () => {
    // Redirect to a different page or show a success message
  };

  return (
    <div>
      <SignupForm onSuccess={handleSuccess} />
    </div>
  );
}
