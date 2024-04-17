import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

const SearchBar = () => {
  return (
    <div className='h-dvh'>
        <div className='bg-[#7b98fe] py-8 text-center font-semibold text-2xl text-blue-950'>
            <p>Search Bar</p>
        </div>
        <div className='bg-[#7b98fe] py-4 mt-4 text-center items-center px-10 text-white flex justify-between'>
            <div>Creditklick 2.14.0 EN MBAC-IN RC →</div>
            <div className='flex gap-4'>
                <button className='text-gray-400 bg-white px-4 py-2 rounded-lg'>Chat</button>
                <span className='flex items-center'>
                <IoPerson />
                <p>Pawan Chauhan</p>
                </span>
                <button className='text-gray-400 bg-white px-4 py-2 rounded-lg'>Pause Bar</button>
                <button className='text-gray-400 bg-white px-4 py-2 rounded-lg flex items-center gap-1'>Logout <FaPowerOff /></button>
            </div>
        </div>

        <div className='container mx-auto flex border-4 border-[#3374bb] bg-[#7b98fe]'>
            <div className='grid grid-cols-3 w-full pr-6'>
                <div className='flex text-lg p-2 mx-4 justify-between'>
                    <p>Stefto Id:</p>
                    <input type="search" name="id" id="id" className='border-2 border-blue-700'/>
                </div>
                <div className='flex text-lg p-2 mx-4 justify-between'>
                    <p>City Name:</p>
                    <input type="search" name="id" id="id" className='border-2 border-blue-700'/>
                </div>
                <div className='flex text-lg p-2 mx-4 justify-between'>
                    <p>A/C Number:</p>
                    <input type="search" name="id" id="id" className='border-2 border-blue-700'/>
                </div>
                <div className='flex text-lg p-2 mx-4 justify-between'>
                    <p>Full Name:</p>
                    <input type="search" name="id" id="id" className='border-2 border-blue-700'/>
                </div>
                <div className='flex text-lg p-2 mx-4 justify-between'>
                    <p>Phone No.</p>
                    <input type="search" name="id" id="id" className='border-2 border-blue-700'/>
                </div>
                <div className='flex text-lg p-2 mx-4 justify-between'>
                    <p>Alloc. Month:</p>
                    <input type="month" name="id" id="id" className='border-2 border-blue-700'/>
                </div>
            </div>
            <div className='flex flex-col items-center px-6 gap-y-2 my-auto'>

                <button className='text-gray-600 bg-white px-4 py-2 rounded-lg flex items-center gap-2'>Reset <GrPowerReset /></button>

                <button className='text-gray-600 bg-white px-4 py-2 rounded-lg'>Search</button>
            </div>

        </div>

        <div>
            {/* Table */}
            <table className="w-full bg-[#3374bb] shadow-md rounded container mx-auto"> 
                <thead className='font-semibold text-sm text-white uppercase'>
                    <tr>
                        <th className="p-4 text-white mb-2 border-8 border-white">S.No.</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">Stefto Id</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">Full Name</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">Phone Number</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">City Name</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">Payment Status</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">A/C No.</th>
                        <th className="p-4 text-white mb-2 border-8 border-white">Status</th>                        
                    </tr>
                </thead>

                <tbody className='font-semibold text-xs text-white uppercase text-center'>                    
                    <tr>
                        <td className="p-4 border-8 border-white">1</td>
                        <td className="p-4 border-8 border-white">P30089053306</td>
                        <td className="p-4 border-8 border-white">Nikuj Singh</td>
                        <td className="p-4 border-8 border-white">9838373839</td>
                        <td className="p-4 border-8 border-white">Noida</td>
                        <td className="p-4 border-8 border-white">Paid</td>
                        <td className="p-4 border-8 border-white">8222882882</td>
                        <td className="p-4 border-8 border-white">Check</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default SearchBar