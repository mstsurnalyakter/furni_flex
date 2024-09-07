import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import authImage from "/login.png";
;
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SocialLogin from "../../components/SocialLogin";
import useAuth from "../../Hooks/useAuth";


const SingUp = () => {


  const [toggle, setToggle] = useState(false);

  const { createUser, updateUserProfile, loading, setLoading } = useAuth();

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
    if (errors.fname) {
      toast.error(errors.fname.message);
    } else if (errors.lname) {
      toast.error(errors.lname.message);
    }  else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.photo) {
      toast.error(errors.photo.message);
    } else if (errors.password) {
      toast.error(errors.password.message);
    } else if (errors.termsConditions) {
      toast.error(errors.termsConditions.message);
    }
  }, [
    errors.fname,
    errors.lname,
    errors.email,
    errors.photo,
    errors.termsConditions,
    errors.password,
  ]);


  const onSubmit = async (data) => {
    const { fname,lname, email, photo, password } = data;
    console.log(fname, lname, email, photo, password);
      const fullName = fname + " " + lname;
      console.log(fullName)

    try {
      // 1. upload image and get image url
      setLoading(true);

      //2.user registration
      const result = await createUser(email, password);
      console.log(result);

      //3.update user profile
      await updateUserProfile(fullName, photo);

      if (result) {
        toast.success("SignIn with Google Successful");
        setTimeout(() => {
          navigate(from);
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };


  return (
    <div className="flex mt-10 justify-center items-center min-h-[calc(100vh-306px)]">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
        <div className="w-full px-1 py-8 lg:w-1/2">
          <div className="bg-[#FAFAFA] py-5 px-3 mt-10 mx-10">
            <div className="w-72 mx-auto text-center space-y-1 mb-5">
              <h3 className="text-[#000] text-2xl font-semibold">Welcome To</h3>
              <h2 className="text-[#000] text-4xl font-bold">
                Furni<span className="text-[#1E99F5]">Flex</span>
              </h2>
              <p className="text-[#707070] font-medium">
                Signup for purchase your desire products
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="flex
             gap-1"
              >
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="fname"
                  >
                    First name (optional)
                  </label>
                  <input
                    id="fname"
                    autoComplete="fname"
                    name="fname"
                    placeholder="Jordan"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    {...register("fname")}
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="lname"
                  >
                    Last name (optional)
                  </label>
                  <input
                    id="lname"
                    placeholder="Ken"
                    autoComplete="lname"
                    name="lname"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    {...register("lname")}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  autoComplete="photo"
                  name="photo"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="url"
                  {...register("photo", {
                    required: {
                      value: true,
                      message: "You must fill Photo URL input field",
                    },
                  })}
                />
              </div>

              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  placeholder="jordan@email.com"
                  autoComplete="email"
                  name="email"
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
                  placeholder="*********"
                  autoComplete="current-password"
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
                <div
                  className="absolute text-xl top-10 right-2"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <LuEye /> : <LuEyeOff />}
                </div>
              </div>
              <div className="flex mt-4 items-center flex-row gap-2">
                <input
                  className="cursor-pointer"
                  type="checkbox"
                  {...register("termsConditions", {
                    required: {
                      value: true,
                      message: "I agree to the Terms & Policy",
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text">
                    I agree to the{" "}
                    <Link className="underline text-[#0073e1]">
                      Terms & Policy
                    </Link>
                  </span>
                </label>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#111] rounded-lg hover:bg-[#000] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign Up
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
            <div className="w-4/5 mx-auto">
              <SocialLogin />
            </div>

            <h3 className="text-[#000] text-center mt-5 text-[14px] font-medium">
              Have an account?{" "}
              <Link to={"/signup"} className="text-[#0F3DDE]">
                Sign In
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

export default SingUp;
