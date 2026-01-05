import React from 'react'
import { CiClock1 } from "react-icons/ci";


export default function Hookah({item}) {
  return (
     <div className='shadow-md bg-white p-4 m-4'>
               <div className='flex justify-center items-center'> <img className='w-full h-full object-cover" ' src={item.images[1]} alt="" /></div>
                <div className='flex flex-col gap-2'>
            <button className='px-2 py-1 shadow bg-gray-100 flex gap-1 items-center'> <CiClock1 />8 MINS</button>
            <h3>{item.name}</h3>
            <p>{item.inventory}</p>
            <div className='flex justify-between items-center '>
                <span>Ru 500</span>
                <button className=' border border-green-500 px-2 py-1'>ADD</button>
            </div>
         </div>
            </div>
  )
}


