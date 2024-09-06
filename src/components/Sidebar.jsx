// "use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  Collapse,
  IconButton,
} from "@material-tailwind/react";

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="mx-3">
      <div className="hidden lg:block p-5 shadow-lg min-h-[600px]">
        <div className="flex flex-col gap-2">
          <button className="bg-[#0E0E0E] text-white py-2 rounded-lg">Rocking chair</button>
          <button>Side chair</button>
          <button>Lounge chair</button>
        </div>
      </div>

      <IconButton
        variant="text"
        color="blue-gray"
        className="lg:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
          <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>

      <Collapse open={openNav}>
        <div className="flex flex-col gap-2">
          <button className="text-[#0E0E0E] rounded-lg">Rocking chair</button>
          <button>Side chair</button>
          <button>Lounge chair</button>
        </div>

      </Collapse>
    </div>
  );
};

export default Sidebar;
