import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = (props: AuthLayoutProps) => {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center"
      style={{
        backgroundImage: "url('/images/register/background.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {props.children}
    </div>
  );
};

export default AuthLayout;
