import  { useState } from 'react'
import Sidebar from './sidebar';
import Header from './header';
import { useTable, useSortBy, usePagination } from 'react-table';
import { BsThreeDots } from "react-icons/bs";


// A reusable input component
const FormInput = ({
  id,
  type = 'text',
  placeholder,
  className = '',
  ...props
}) => {

  return (
    <div className="flex flex-col w-full">
      <div className="w-full focus-within:bg-white bg-gray-100 py-2 px-4 rounded-md focus-within:border-blue-500 focus-within:border focus-within:ring-2 focus-within:ring-blue-200 border border-transparent transition-all duration-300">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`text-sm outline-none w-full bg-transparent focus-within:bg-white ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};



// Sample data for the table
const data = [
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },
  {
    checkbox: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    id: "#1234Q5",
    photo: (
      <img className='w-10 h-10 rounded-full object-cover' src="https://images.pexels.com/photos/1279903/pexels-photo-1279903.jpeg?auto=compress&cs=tinysrgb&w=600" alt="pic" />
    ),
    name: "Rohan Joshi",
    gender: "Male",
    occupation: "Business man",
    relation: "Father",
    address: "Hauz khas village",
    phone: "+91 9892019100",
    email: "Rohan234@gmail.com",
    action: (<BsThreeDots size={23} />)
  },



]


// Column for the table
const columns = [
  {
    Header: (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
    ),
    accessor: "checkbox"
  },
  {
    Header: "ID",
    accessor: "id"
  },
  {
    Header: "Photo",
    accessor: "photo"
  },
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Gender",
    accessor: "gender"
  },
  {
    Header: "Occupation",
    accessor: "occupation"
  },
  {
    Header: "Relation",
    accessor: "relation"
  },
  {
    Header: "Address",
    accessor: "address"
  },
  {
    Header: "Phone No.",
    accessor: "phone"
  },
  {
    Header: "Email ID",
    accessor: "email"
  },
  {
    Header: "Action",
    accessor: "action"
  },
]


const ParentsDetailsPage = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);


  // Function to toggle sidebar 
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  //Using React Table hooks for sorting, pagination, and table properties
  const { getTableProps, gotoPage, state: { pageIndex }, pageCount, getTableBodyProps, headerGroups, page, prepareRow, nextPage, previousPage, canPreviousPage, canNextPage } = useTable({
    columns,
    data
  }, useSortBy, usePagination);


  return (
    <div className="min-h-screen flex flex-col lg:flex-row">

      {/* Sidebar section*/}
      <div
        className={`fixed top-0 overflow-y-scroll xl:overflow-hidden left-0 h-full bg-white z-50 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0 xl:relative w-56`}
      >
        <Sidebar />
      </div>


      {/* Main content section*/}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <div className="flex-1 pt-0 px-4 bg-gray-100">

          <div className='bg-white w-full h-auto my-10 border-2 border-gray-300 rounded-md'>

            {/* Page Header */}
            <div className='px-6 pt-6 pb-8 border-b border-gray-300'>
              <h3 className='font-semibold mb-8 text-xl'>All Parents Details</h3>

              {/* Search Inputs Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[3.5fr_3.5fr_3.5fr_auto] gap-x-8 gap-y-6 items-center">
                <FormInput
                  id="id"
                  type='number'
                  placeholder="Search by ID"
                />

                <FormInput
                  id="name"
                  type="text"
                  placeholder="Search by Name"
                />

                <FormInput
                  id="phone"
                  type="number"
                  placeholder="Search by phone Number"
                />

                <div>
                  <button className='bg-blue-600 rounded-md py-2 px-8 font-semibold text-white'>Search</button>
                </div>
              </div>

            </div>


            {/* Table section */}
            <div className='overflow-x-auto bg-white'>

              {/* Table */}
              <table {...getTableProps()} className='min-w-full table-auto border-collapse border border-gray-200'>
                <thead className='bg-gray-100'>
                  {
                    headerGroups.map((hg, i) => (

                      <tr key={i} {...hg.getHeaderGroupProps()} className="text-left text-gray-700">
                        {
                          hg.headers.map((header, i) => (
                            <th key={i}
                              {...header.getHeaderProps(header.getSortByToggleProps())}
                              className='px-4 py-2 font-semibold text-sm border-b border-gray-300'
                            >
                              {header.render("Header")}
                              {header.isSorted && (
                                <span>{header.isSortedDesc ? " ⬆" : " ⬇"}</span>
                              )}
                            </th>
                          ))
                        }
                      </tr>
                    ))
                  }
                </thead>

                <tbody {...getTableBodyProps()} className='divide-y divide-gray-200'>
                  {
                    page.map((row, i) => {
                      prepareRow(row);
                      return (
                        <tr key={i}
                          {...row.getRowProps()}
                          className="hover:bg-gray-50 transition duration-200"
                        >
                          {
                            row.cells.map((cell, i) => (
                              <td key={i}
                                {...cell.getCellProps()}
                                className='px-4 py-2 text-sm text-gray-800 whitespace-nowrap'
                              >
                                {cell.render("Cell")}
                              </td>
                            ))
                          }
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>


              {/* Pagenation controls */}
              <div className='flex gap-x-5 items-center justify-center my-5'>
                <button disabled={!canPreviousPage} onClick={previousPage} className=' text-gray-600'>{"<< Previous"}</button>
                {
                  [...Array(pageCount)].map((_, i) => (
                    <span
                      key={i}
                      onClick={() => gotoPage(i)}
                      className={`p-1 px-3 rounded-lg text-white cursor-pointer ${pageIndex === i ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-900"
                        }`}
                    >
                      {i + 1}
                    </span>
                  ))
                }
                <button disabled={!canNextPage} onClick={nextPage} className='  text-gray-600'>{"Next >>"}</button>

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
  )
}

export default ParentsDetailsPage;