import { useState } from "react";

import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { HiUsers } from "react-icons/hi2";


import { SiGoogleclassroom } from "react-icons/si";
import { MdLibraryBooks } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaCalculator } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { FaBusAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";


import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";



const Sidebar = () => {
  const [openSubMenu, setOpenSubMenu] = useState(null);


  // Function to toggle the submenu's of Parents  
  const toggleSubMenu = (title) => {
    setOpenSubMenu(openSubMenu === title ? null : title);
  };


  // Main menu items with parents submenu
  const mainMenuItems = [
    { src: "/", title: "Admin Dashboard", icon: <MdDashboard /> },
    { src: "/", title: "Students", icon: <PiStudentFill /> },
    { src: "/", title: "Employees", icon: <LuUsers /> },
    {
      src: "/",
      title: "Parents",
      icon: <HiUsers />,
      submenu: [
        { src: "/", title: "> Add Parent" },
        { src: "/parents-details", title: "> Parent Details" },
      ],
    },
  ];

  // Products menu items
  const productsItems = [
    { src: "/", title: "Class", icon: <SiGoogleclassroom /> },
    { src: "/", title: "Subject", icon: <MdLibraryBooks /> },
    { src: "/", title: "Exams", icon: <IoIosDocument /> },
    { src: "/", title: "Accounts", icon: <FaCalculator /> },
    { src: "/", title: "Academics", icon: <HiAcademicCap /> },
    { src: "/", title: "Transportation", icon: <FaBusAlt /> },
    { src: "/", title: "Notice", icon: <HiOutlineMailOpen /> },
  ];

  // Management menu items
  const ManagementItems = [
    { src: "/", title: "Manage Admins", icon: <FaRegUserCircle /> },
    { src: "/", title: "Settings", icon: <IoSettingsOutline /> },

  ];

  return (
    <aside className="bg-white h-auto px-5 w-56 py-4">

      {/* Logo section */}
      <div className="flex mb-6 items-center gap-x-2 py-3 border-b border-gray-300">
        <img className="w-8 h-8" src={Logo} alt="Logo" />
        <span className="font-semibold">Zenthora Lab</span>
      </div>


      {/* Main Menu Section */}
      <MenuCard cardTitle={"MAIN MENU"} menuItems={mainMenuItems} toggleSubMenu={toggleSubMenu} openSubMenu={openSubMenu} />


      {/* Products Section */}
      <MenuCard cardTitle={"PRODUCTS"} menuItems={productsItems} />


      {/* Management Section */}
      <MenuCard cardTitle={"MANAGEMENT"} menuItems={ManagementItems} />


      {/* Logout */}
      <LinkComponent src={"/logout"} Icons={<MdLogout />} title={"Logout"} />

    </aside>
  );
};



// LinkComponent for individual links
const LinkComponent = ({ src, Icons, title }) => {
  return (
    <NavLink
      to={src}
      className={({ isActive }) =>
        isActive ? "text-blue-500 font-semibold" : "text-gray-700"

      }
    >
      <div className={`flex items-center gap-x-2 ${src == "/logout" && "text-red-500  font-semibold my-5"}`}>
        {Icons}
        {title}
      </div>
    </NavLink >
  );
};




// MenuCard component for grouped menu items
const MenuCard = ({ cardTitle, menuItems, openSubMenu, toggleSubMenu }) => {
  return (
    <div className="mb-6 pb-8 border-b border-gray-300">

      {/* Card Title */}
      <p className="text-gray-600 font-bold text-sm">{cardTitle}</p>

      {/* Menu Items */}
      <div className="flex flex-col ml-3 mt-5 gap-y-5 text-gray-500 font-semibold">
        {menuItems.map((item, index) => (
          <div key={index}>
            <div
              className="flex items-center gap-x-2 cursor-pointer"
              onClick={() => item.submenu && toggleSubMenu(item.title)}
            >
              {item.icon}
              <span className="text-sm">{item.title}</span>
              {/* Submenu indicator */}
              {item.submenu && (
                <span className="ml-auto">
                  {openSubMenu === item.title ? "v" : ">"}
                </span>
              )}
            </div>

            {/* Submenu */}
            {item.submenu && openSubMenu === item.title && (
              <div className="ml-6 mt-2 flex flex-col gap-y-2 text-sm">
                {item.submenu.map((subItem, subIndex) => (
                  <LinkComponent
                    key={subIndex}
                    src={subItem.src}
                    Icons={null}
                    title={subItem.title}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
