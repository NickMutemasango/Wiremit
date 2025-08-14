import LoginForm from "../components/auth/LoginForm";
import { redirect } from "next/navigation";
import { auth } from "@/config/firebase";
import { getCurrentUser } from "@/lib/helpers";

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm />
    </div>
  );
}