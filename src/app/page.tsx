import Link from "next/link";
import { getCurrentUser } from "@/lib/helpers";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Wiremit</h1>
        <p className="text-xl text-gray-600 mb-8">
          Send pocket money to your children studying abroad with ease and
          confidence.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/signup"
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-lg font-medium"
          >
            Create Account
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition text-lg font-medium"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}