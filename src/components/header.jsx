import { MdOutlineEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header
      className="
        w-full z-40 
        bg-white py-3 px-4 
        flex items-center justify-between 
        shadow-md
        lg:px-8
      "
    >
      {/* Hamburger Menu */}
      <div
        className="xl:hidden cursor-pointer"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu size={25} />
      </div>


      {/* Search Bar */}
      <div
        className="
          flex flex-1 
          py-2 px-4 gap-4 items-center 
          border bg-gray-100 border-gray-200 
          rounded-lg 
          max-w-md 
          mx-4
        "
      >
        <IoSearch size={21} color="gray" />
        <input
          type="text"
          placeholder="Search"
          className="
            outline-none w-full bg-gray-100 
            text-sm md:text-base
          "
        />
      </div>

      {/* User and Notifications */}
      <div
        className="
          flex items-center gap-x-4 
          lg:gap-x-6
        "
      >
        {/* User Profile*/}
        <div
          className="
            hidden md:flex items-center gap-x-3
          "
        >
          <div className="text-right">
            <p className="font-semibold text-sm">Srishti Ahuja</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-9 h-9">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://plus.unsplash.com/premium_photo-1663050935625-108bf0ed9748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmwlMjBiZWF1dGlmdWx8ZW58MHx8MHx8fDA%3D"
              alt="avatar"
            />
          </div>
        </div>

        {/* Notification Icons */}
        <div className="flex items-center gap-x-4">
          {/* Email Notification */}
          <div className="relative">
            <MdOutlineEmail size={23} color="gray" />
            <span
              className="
                absolute -top-2 -right-2 
                bg-blue-500 text-white 
                rounded-full 
                w-5 h-5 
                flex items-center justify-center 
                text-xs
              "
            >
              1
            </span>
          </div>

          {/* Bell Notification */}
          <div className="relative">
            <FaRegBell size={23} color="gray" />
            <span
              className="
                absolute -top-2 -right-2 
                bg-orange-500 text-white 
                rounded-full 
                w-5 h-5 
                flex items-center justify-center 
                text-xs
              "
            >
              3
            </span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
