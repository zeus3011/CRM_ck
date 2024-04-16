import React, { useState } from 'react'
import ck from "../assets/Images/ck.png"
import { GoEye, GoEyeClosed } from "react-icons/go";

const Login = () => {

    const[passwordType, setPasswordType] = useState(false);
    const handlePasswordVisibility =() =>{
        setPasswordType(!passwordType)
    }

  return (
    <>
    <div className='h-dvh flex'>
        <div className='flex-1 bg-gray-200 flex items-center'>
            <div className='h-3/4 flex ml-auto bg-gray-100 w-2/3 rounded-l-3xl'>
                <img src="" alt="" />
                <div className='flex flex-col m-auto w-3/4'>
                    <div className=' w-20 h-20 mx-auto mb-10'>
                        <img src={ck} alt="logo" className='rounded-xl'/>
                    </div>

                    <p className='text-center text-2xl'>Login to dashboard</p>

                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="" placeholder='enter your email' className='py-2 px-4 font-semibold placeholder:font-normal text-gray-500 my-2 rounded-md outline-none' required/>

                    <label htmlFor="password">Password</label>
                    <span className='flex justify-between'>                    
                        <input type={passwordType? "text" : "password"} name="" id="" placeholder='enter your password' className='py-2 px-4 font-semibold placeholder:font-normal text-gray-500 my-2 rounded-md outline-none w-full'/>
                        <button onClick={handlePasswordVisibility} className='py-2 px-4'>{passwordType ? <GoEye />:<GoEyeClosed />}</button>
                    </span>
                    
                    <button className='bg-[#7b98fe] p-2 mt-10 rounded-md text-xl text-white'>Login</button>
                </div>
            </div>
        </div>
        <div className='flex-1 bg-[#7b98fe] flex items-center'>
            <div className='h-3/4 bg-[#b9c5f4] bg-opacity-60 my-auto w-2/3 rounded-r-3xl'>
                <p className='text-[120px] font-bold tracking-wider text-white flex items-center justify-center w-full h-full'>CRM</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login