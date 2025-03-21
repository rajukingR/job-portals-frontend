// /src/pages/AuthPages/LoginPage.tsx
import Logo from "@/components/core-ui/Logo";
import PublicLayout from "@/components/layouts/public/PublicLayout";
import LoginForm from "@/forms/auth/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <PublicLayout title="Sign in">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        {/* Logo and Title */}
        <div>
          <Logo />
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Register now
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <div className="mt-10">
          <LoginForm />
        </div>
      </div>
    </PublicLayout>
  );
};

export default LoginPage;
