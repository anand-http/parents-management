import React, { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import ChildrensDetails from "./addParentsComponent/childrensDetails";
import ParentsDetails from "./addParentsComponent/parentsDetails";



const AddParents = () => {
  // State to manage whether the sidebar is open or closed
  const [isSidebarOpen, setSidebarOpen] = useState(false);


  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Sidebar Section */}
      <div
        className={`fixed top-0 overflow-y-scroll xl:overflow-hidden left-0 h-full bg-white z-50 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0 xl:relative w-56`}
      >
        <Sidebar />
      </div>



      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        {/* Header Component */}
        <Header toggleSidebar={toggleSidebar} />



        {/* Main Content Area */}
        <div className="flex-1 pt-0 px-4 bg-gray-100">

          <div className="bg-white w-full h-auto my-10 border-2 border-gray-300 rounded-md shadow-lg">


            {/* Header of the form */}
            <div className="py-5 px-8 border-b border-gray-300">
              <h3 className="font-semibold">Add New Parents</h3>
            </div>


            {/* Children's Details Section */}
            <div className="p-5">
              <div className="mb-6">
                <p className="font-semibold text-blue-500">Children's Details</p>
              </div>

              <ChildrensDetails />
              <ChildrensDetails />

              <div className="border-2 mt-4 border-gray-500 p-1 w-40 rounded-md text-gray-600 font-semibold">
                <button>+ Add Other Child</button>
              </div>
            </div>



            {/* Parents' Details Section */}
            <div className="p-5">

              <div className="mb-6">
                <p className="font-semibold text-blue-500">Parents Details</p>
              </div>

              <ParentsDetails />

              <div className="border-2 my-4 border-gray-500 p-1 w-44 rounded-md text-gray-600 font-semibold">
                <button>+ Add Other Parents</button>
              </div>


              {/* Action buttons save or discard */}
              <div className="flex items-center gap-x-6 my-6">

                {/* Save */}
                <button className="bg-blue-600 rounded-md py-2 px-8 font-semibold text-white">
                  Save
                </button>

                {/* Discard */}
                <button className="bg-gray-400 rounded-md py-2 px-8 font-semibold text-white">
                  Discard
                </button>
              </div>



              {/* Watermarks */}
              <div className="flex justify-center items-center my-4 ">
                <div className=" bg-black rounded-md py-1 w-60 text-center shadow-2xl cursor-pointer">
                  <a target='blank' href='https://anand-http.vercel.app' className="text-red-500 font-bold tracking-widest">Made by Anand ❤</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>



      {/* Overlay for mobile view */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
          onClick={toggleSidebar}
        ></div>
      )}


    </div>
  );
};

export default AddParents;
