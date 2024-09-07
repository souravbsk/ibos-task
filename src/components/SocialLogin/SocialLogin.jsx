import React, { useContext } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();

  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      console.log(result)
      const user = result.user;
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-3 justify-between items-center">
      <button
        onClick={handleGoogleLogin}
        className="flex gap-3 justify-center border px-6 rounded-lg py-2.5 items-center font-medium"
      >
        <FcGoogle className="text-3xl" />
        <span className="text-sm">Sign in with Google</span>
      </button>
      <button className="flex gap-3 justify-center border px-6 rounded-lg py-2.5 items-center font-medium">
        <FaApple className="text-3xl" />
        <span className="text-sm">Sign in with Apple</span>
      </button>
    </div>
  );
};

export default SocialLogin;
