import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const handleSuccess = () => {
    // Redirect to a different page or show a success message
  };

  return (
    <div>
      <LoginForm onSuccess={handleSuccess} />
    </div>
  );
}
