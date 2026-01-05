import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";




export default function Header() {
  return (
    <div className='w-full p-4 bg-white border-b sticky top-0 left-0 z-40 '>
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-col md:flex-row gap-2 md:gap-0">
            <div className='hidden md:flex '>
            <span className="text-[#F5C400] font-extrabold text-3xl tracking-tight">
        blink
      </span>
      <span className="text-[#1DB954] font-extrabold text-3xl tracking-tight">
        it
      </span>
            </div>
            <div className='flex md:block '>
                <h2>Delivery in 8 minutes</h2>
                <p className='flex gap-2 items-center'>B62, Pocket B, South City I, Secto...<FaCaretDown />
</p>
            </div>
            <div className='bg-gray-300 md:w-xl flex  items-center gap-2 p-2 rounded-xl sm:w-[450px]'>
                <CiSearch className='font-bold text-2xl' />

                <input className='bg-transparent outline-0  w-full' type="text" placeholder='Search...' />
            </div>
            <div className='text-[#363636]  hidden md:block'>
                Login
            </div>
            <div className='bg-[#0c831f]  mx-4  md: mx-0  px-4 py-3 flex  justify-center items-center gap-2 rounded-xl text-white fixed bottom-0   md:static sm: w-full md:w-auto '>
                <FaShoppingCart />
                <span>My Cart</span>

            </div>
        </div>
    </div>


  )
}
 