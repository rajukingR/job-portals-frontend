import { Link } from "react-router-dom";

import PublicLayout from "@/components/layouts/public/PublicLayout";
import RegisterForm from "@/forms/auth/RegisterForm";
import Logo from "@/components/core-ui/Logo";

const RegisterPage = () => {
  return (
    <PublicLayout title="Sign up">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <Logo />
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>

        <div className="mt-10">
          <RegisterForm />
        </div>
      </div>
    </PublicLayout>
  );
};

export default RegisterPage;
