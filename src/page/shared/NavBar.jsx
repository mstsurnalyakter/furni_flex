import { useEffect, useState } from "react";
import logo from "/icon.png";
// import { Tooltip } from "react-tooltip";
import { SlHandbag } from "react-icons/sl";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { Link, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => toast.error(error.message));
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="sticky top-0 z-50 dark:bg-slate-900 duration-100">
      <Navbar
        className="mx-auto max-w-7xl border-b-2 border-b-[#F1F1F1;

]   shadow-none rounded-none px-3 lg:px-2  mb-6 "
      >
        <div className="flex items-center justify-between">
          <Typography className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center">
            <Link to={"/"} className="flex items-center justify-center gap-1">
              <img className="w-6 rounded-full " src={logo} alt="" />
              <h3 className="text-[#000] font-inter font-bold text-xl">
                Furni<span className="text-[#1E99F5]">Flex</span>
              </h3>
            </Link>
          </Typography>
          <div className="hidden gap-4 lg:flex items-center">
            <div>
              <div className="flex gap-2 items-center">
                <>
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#F8F8F8] text-[#202020] px-3 py-1 flex items-center justify-center  rounded-lg"
                        : "p-2 text-[#202020] text-lg font-medium"
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to={"/products"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#F8F8F8] text-[#202020] px-3 py-1 flex items-center justify-center  rounded-lg"
                        : "p-2 text-[#202020] text-lg font-medium"
                    }
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to={"/categories"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#F8F8F8] text-[#202020] px-3 py-1  flex items-center justify-center  rounded-lg"
                        : "p-2 text-[#202020] text-lg font-medium"
                    }
                  >
                    Categories
                  </NavLink>
                  <NavLink
                    to={"/custom"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#F8F8F8] text-[#202020] px-3 py-1  flex items-center justify-center  rounded-lg"
                        : "p-2 text-[#202020] text-lg font-medium"
                    }
                  >
                    Custom
                  </NavLink>
                  <NavLink
                    to={"/blog"}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-[#F8F8F8] text-[#202020] px-3 py-1 flex items-center justify-center  rounded-lg"
                        : "p-2 text-[#202020] text-lg font-medium"
                    }
                  >
                    Blog
                  </NavLink>
                  <>
                    {user ? (
                      <button onClick={()=>handleLogOut()} className="bg-red-400 px-3 py-1 rounded-md ">
                        LogOut
                      </button>
                    ) : (
                      <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-[#F8F8F8] text-[#202020] px-2 py-1 flex items-center justify-center  rounded-lg"
                            : "px-3 py-1 text-[#fff] bg-[#1E99F5] rounded-lg text-lg font-medium"
                        }
                      >
                        Login
                      </NavLink>
                    )}
                  </>
                </>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row gap-4">
            <div className="relative hidden sm:flex items-center justify-center">
              <span className="text-3xl text-[#323232]">
                <SlHandbag />
              </span>
              <span className="bg-[#323232] absolute left-4 top-5 px-1 font-medium rounded-full text-xs">
                0
              </span>
            </div>

            {/* Theme Toggle Buttons */}
            <div className=" bg-[#1E99F5] hidden items-center justify-center sm:flex flex-wrap rounded">
              {options?.map((opt) => (
                <button
                  onClick={() => setTheme(opt.text)}
                  key={opt.text}
                  className={`w-8 h-8 leading-9 text-xl rounded-full mr-1 ${
                    theme === opt.text ? "text-[#fdbf2dfe]" : ""
                  }`}
                >
                  <ion-icon name={opt.icon}></ion-icon>
                </button>
              ))}
            </div>
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <div className="flex gap-5">
                  <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                </div>
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
        </div>

        <Collapse open={openNav}>
          <div className="flex items-center justify-center"></div>
          <div className="">
            <div className="flex items-center justify-center gap-4  flex-col">
              <>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F8F8F8] text-[#202020] px-3 py-1  rounded-lg"
                      : "p-2 text-[#202020] font-medium text-lg"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F8F8F8] text-[#202020] px-3 py-1  rounded-lg"
                      : "p-2 text-[#202020] font-medium text-lg"
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to={"/categories"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F8F8F8] text-[#202020] px-3 py-1  rounded-lg"
                      : "p-2 text-[#202020] font-medium text-lg"
                  }
                >
                  Categories
                </NavLink>
                <NavLink
                  to={"/custom"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F8F8F8] text-[#202020] px-3 py-1  rounded-lg"
                      : "p-2 text-[#202020] font-medium text-lg"
                  }
                >
                  Custom
                </NavLink>
                <NavLink
                  to={"/blog"}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-[#F8F8F8] text-[#202020] px-3 py-1 rounded-lg"
                      : "p-2 text-[#202020] font-medium text-lg"
                  }
                >
                  Blog
                </NavLink>

                <div className="relative flex sm:hidden items-center justify-center">
                  <span className="text-3xl text-[#323232]">
                    <SlHandbag />
                  </span>
                  <span className="bg-[#323232] absolute left-4 top-5 px-1 font-medium rounded-full text-xs">
                    0
                  </span>
                </div>
                <>
                  {user ? (
                    <button className="bg-red-400 px-3 py-1 rounded-md ">
                      LogOut
                    </button>
                  ) : (
                    <NavLink
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-[#F8F8F8] text-[#202020] px-2 py-1 flex items-center justify-center  rounded-lg"
                          : "px-3 py-1 text-[#fff] bg-[#1E99F5] rounded-lg text-lg font-medium"
                      }
                    >
                      Login
                    </NavLink>
                  )}
                </>
                <div className=" bg-[#1E99F5] sm:hidden items-center justify-center flex flex-wrap rounded">
                  {options?.map((opt) => (
                    <button
                      onClick={() => setTheme(opt.text)}
                      key={opt.text}
                      className={`w-8 h-8 leading-9 text-xl rounded-full mr-1 ${
                        theme === opt.text ? "text-[#fdbf2dfe]" : ""
                      }`}
                    >
                      <ion-icon name={opt.icon}></ion-icon>
                    </button>
                  ))}
                </div>
              </>
            </div>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
