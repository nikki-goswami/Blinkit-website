import React from 'react'
const categories = [
    { name: "Wafer Chocolates", image: "https://cdn.grofers.com/da/cms-assets/cms/product/d2a6ef1e-2951-47a4-853b-798de2c8b4b9.png" },
    { name: "Filled Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e930270b-df49-4547-98fb-7a1e7d9eb35a.png" },
    { name: "Chocolate Packs", image: "https://cdn.grofers.com/da/cms-assets/cms/product/7daaea83-b276-4831-be30-366c38663add.png" },
    { name: "Chocolate Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/406269f4-afb7-4dbf-8272-75c315319420.png" },
    { name: "Stick", image: "https://cdn.grofers.com/da/cms-assets/cms/product/486f8b60-315e-46c7-acd3-6a362312cbcb.png" },
    { name: "Nutrition Bars", image: "https://cdn.grofers.com/da/cms-assets/cms/product/4e349673-fa72-48af-936a-f79ea36d00eb.png" },
    { name: "Chocolate Gift Pack", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e7e9cf6d-16c3-4d3a-9e0f-b449434afe82.png" },
    { name: "Shaped Chocolates", image: "https://cdn.grofers.com/da/cms-assets/cms/product/39425fe0-8100-4ec3-950f-f2b75995ed09.png" },
    { name: "Cups", image: "https://cdn.grofers.com/da/cms-assets/cms/product/edc40da2-8b95-416c-9ab6-3452dce93543.png" },
    { name: "Croissant & Rolls", image: "https://cdn.grofers.com/da/cms-assets/cms/product/e8a27e8a-e80f-40d2-8aa4-a34e5e715ab6.png" },
    { name: "Snacks & Munchies", image: "https://cdn.grofers.com/da/cms-assets/cms/product/2a55bb8b-bf09-454b-9233-cc00404c6a5c.png" },
    { name: "Fresh Milk", image: "https://cdn.grofers.com/da/cms-assets/cms/product/b29ac54f-74fb-4e33-9e68-cde5598bd529.png" },
    { name: "Tetra Milk", image: "https://cdn.grofers.com/da/cms-assets/cms/product/9a4088cc-db19-4add-b3ce-2edd4d09f4ae.png" },
    { name: "Poly Milk", image: "https://cdn.grofers.com/da/cms-assets/cms/product/ee25ea8f-8407-4821-87df-5415c18253cc.png" }
];

export default function Cattegory() {
  
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 my-4'>
        
        {
            categories.map((data,index)=>{
                return(
                    <div key={index} className=' flex flex-col items-center justify-center'>
            <img className='w-24 h-24 bg-sky-200 rounded-xl' src={data.image} alt="" />
            <h3 className='font-medium'>{data.name}</h3>

        </div>
                )
            })
        }
    </div>
  )
}
