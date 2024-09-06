import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { IoLogoApple } from "react-icons/io5";
import useAuth from "../Hooks/useAuth";


const SocialLogin = () => {
  const { signInWithGoogle, signInWithApple } = useAuth();
//   const axiosCommon = useAxiosCommon();

  // navigate user
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  // handle google sign in
  const handleGoogleSignIn = async () => {
    try {
      const { user } = await signInWithGoogle();
       if (user) {
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
  // handle apple sign in
  const handleAppleSignIn = async () => {
    try {
      const { user } = await signInWithApple();

      console.log("github login", user);
       if (user) {
         toast.success("SignIn with Apple Successful");
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
    <div className="flex flex-row gap-2">
      <div
        onClick={()=>handleGoogleSignIn()}
        className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg py-2 px-1  hover:bg-gray-50 "
      >
        <div className="">
          <svg className="w-6 h-6" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
        </div>

        <span className="font-bold  text-sm">
          Sign in with Google
        </span>
      </div>

      <div
        onClick={()=>handleAppleSignIn()}
        className="flex py-2 px-1 cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
      >
        <div>
          <IoLogoApple />
        </div>

        <span className="font-bold text-sm">
          Sign in with Apple
        </span>
      </div>
    </div>
  );
};

SocialLogin.propTypes = {};

export default SocialLogin;
