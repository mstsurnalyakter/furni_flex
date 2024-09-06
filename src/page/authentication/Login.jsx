import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import authImage from "./../../../public/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  // const { signIn, loading, setLoading } = useAuth();

  // navigate user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.password) {
      toast.error(errors.password.message);
    }
  }, [errors.email, errors.password]);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      setLoading(true);
      //1. sign in user
      await signIn(email, password);
      //   setEmail(email)

      navigate(from);
      toast.success("Sign In Successful");
    } catch (error) {
      toast.error(
        error?.message?.split("(")[1].replace(")", "").split("/")[1] ||
          "An error occurred while logging."
      );
    }
  };

  return (
    <div className="flex mt-20 justify-center items-center min-h-[calc(100vh-306px)]">
      {/* <DynamicTitle pageTitle="Login" /> */}
      <div className="flex w-full  max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2 ">
          <div className="bg-[#FAFAFA] py-5 px-5 mt-10 mx-10">
            <h3 className="text-[#000] text-3xl font-medium">Welcome Back!</h3>
            <p className="text-[#707070] text-sm font-medium">
              Enter your Credentials to access your account
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email address
                </label>
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  // onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must fill Email input field",
                    },
                  })}
                />
              </div>

              <div className="mt-4 relative">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>

                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type={toggle ? "text" : "password"}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "You must fill Password input field",
                    },
                    minLength: {
                      value: 6,
                      message: "Password length must be at least 6 character",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                      message:
                        "Password must contain at least one uppercase letter and one lowercase letter.",
                    },
                  })}
                />
                <a
                  href="#"
                  className="text-[#1E99F5] mt-1 text-[8px] lg:text-[14px] font-medium absolute right-0"
                >
                  Forgot Password
                </a>
                <div
                  className="absolute text-xl top-10 right-2"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <LuEye /> : <LuEyeOff />}
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#111] rounded-lg hover:bg-[#000] focus:outline-none focus:ring focus:ring-gray-300 mt-2 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center gap-2 justify-between">
            <span className="w-1/2 border-b  md:w-1/2"></span>
            <span className="text-2xl"> or</span>
            <span className="w-1/2 border-b  md:w-1/2"></span>
          </div>
          <div>
            <SocialLogin />

            <h3 className="text-[#000] text-center mt-5 text-[14px] font-medium">
              Have an account?{" "}
              <Link to={"/signup"} className="text-[#0F3DDE]">
                Sign Up
              </Link>
            </h3>
          </div>
        </div>
        <div
          className="hidden bg-cover bg-center lg:block lg:w-1/2"
          style={{
            backgroundImage: `url(${authImage})`,
          }}
        >
          <div className="flex flex-col mx-auto h-full items-center justify-center w-3/4 space-y-1">
            <img className="w-16" src="icon.png" alt="" />
            <h3 className="text-[#FFF] font-inter font-bold text-4xl">
              Furni<span className="text-[#1E99F5]">Flex</span>
            </h3>
            <p className="text-[#C8C4C4] text-center">
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
