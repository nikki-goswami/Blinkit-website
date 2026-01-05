import React from 'react'
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";




export default function Header() {
  return (
    <div className='w-full p-4 bg-white border-b sticky top-0 left-0 z-40 '>
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-col  gap-2 ">
            <div className='hidden  '>
            <span className="text-[#F5C400] font-extrabold text-3xl tracking-tight">
        blink
      </span>
      <span className="text-[#1DB954] font-extrabold text-3xl tracking-tight">
        it
      </span>
            </div>
            <div className='flex '>
                <h2>Delivery in 8 minutes</h2>
                <p className='flex gap-2 items-center'>B62, Pocket B, South City I, Secto...<FaCaretDown />
</p>
            </div>
            <div className='bg-gray-300 w-xl flex  items-center gap-2 p-2 rounded-xl'>
                <CiSearch className='font-bold text-2xl' />

                <input className='bg-transparent outline-0  w-full' type="text" placeholder='Search...' />
            </div>
            <div className='text-[#363636]  hidden '>
                Login
            </div>
            <div className='bg-[#0c831f]  mx-4  px-4 py-3 flex  justify-center items-center gap-2 rounded-xl text-white fixed bottom-0 left-[0px] sm: w-full  '>
                <FaShoppingCart />
                <span>My Cart</span>

            </div>
        </div>
    </div>
  )
}
 