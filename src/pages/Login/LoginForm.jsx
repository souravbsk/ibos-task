import React, { useContext } from "react";
import FurniFlex from "../../assets/auth/FurniFlex.png";
import InputwithLable from "../../components/InputwithLable/InputwithLable";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../Providers/AuthProviders";
const LoginForm = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    if (email && password && terms) {
      loginUser(email, password).then((result) => {
        if (result?.user) {
          navigate("/");
        }
      });
      console.log(email, password, terms);
    }
  };
  return (
    <div className=" bg-[#FAFAFA] border w-full p-6 mx-auto max-w-lg ">
      <div className="text-center flex flex-col gap-3 items-center ">
        <h2 className="text-2xl font-bold">Welcome To</h2>
        <img className="md:w-1/4 w-2/4" src={FurniFlex} alt="" />
        <p className="text-[#707070] font-medium">
          Signup for purchase your desire products
        </p>
      </div>
      <form onSubmit={handleLogin} className=" mt-8 space-y-4">
        <InputwithLable
          type="email"
          labelText="Email"
          id="email"
          name="email"
          required={true}
          htmlFor="email"
        ></InputwithLable>
        <InputwithLable
          type="password"
          labelText="Password"
          id="password"
          name="password"
          required={true}
          htmlFor="password"
        ></InputwithLable>
        <div className=" ">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="terms"
              className="checkbox checkbox-sm"
            />
            <span className="label-text font-medium">
              I agree to the{" "}
              <Link to="/" className="underline">
                Terms & Policy
              </Link>
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black hover:text-black text-white">
            SignIn
          </button>
        </div>
      </form>
      <div className="divider">OR</div>
      <SocialLogin></SocialLogin>

      <p className="text-center font-medium mt-4">
        <span> Have an account?</span>{" "}
        <Link to="/register" className="text-blue-600">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
