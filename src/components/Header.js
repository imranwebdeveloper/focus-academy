import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AuthContext } from "../contexts/AuthContextProvider";

const Header = () => {
  const { setUser } = useContext(AuthContext);

  return (
    <header className=" border-b md:px-4  my-bg-primary shadow ">
      <div className="justify-between gap-4 navbar container mx-auto ">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            className="btn drawer-button btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className=" px-2  mx-2 md:m-0 md:text-2xl text-lg font-bold flex-1  md:max-w-[300px] ">
          <Link to="/"> Focus Academy</Link>
        </div>

        {/* Search box */}

        <div className="flex-1 md:flex items-center bg-slate-100 px-4 py-2 rounded-3xl  gap-4 hidden ">
          <input
            type="text"
            className="focus:outline-none bg-transparent flex-1   "
            placeholder="Find your phone here..."
          />
          <span className="md:text-lg  font-bold ">
            <BsSearch />
          </span>
        </div>

        <div className=" hidden md:flex flex-1  max-w-[300px]  justify-end ">
          <ul className="menu menu-horizontal gap-2">
            {/* <!-- Navbar menu content here --> */}
            <button
              onClick={() => setUser(null)}
              className="btn btn-outline  btn-sm"
            >
              Logout
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
