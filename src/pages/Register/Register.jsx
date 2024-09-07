import React from "react";
import authbg from "../../assets/auth/authbg.png";
import frame from "../../assets/auth/frame.png";
import RegisterForm from "./RegisterForm";
const Register = () => {
  return (
    <section className=" flex flex-col md:flex-row items-center">
      <div className="md:w-[60%] w-full ">
        <RegisterForm></RegisterForm>
      </div>
      <div className="flex-1 hidden md:block relative ">
        <img className="h-screen w-full object-fill " src={authbg} alt="" />
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="text-center flex flex-col justify-center">
            <div className="flex  justify-center">
              <img src={frame} alt="" />
            </div>
            <p>
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
