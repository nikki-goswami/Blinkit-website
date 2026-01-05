import React, { useEffect, useState } from 'react'
import Card from './Card'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SnackCard from './SnackCard';
import Roolingpaper from './Roolingpaper';


export default function ProductCard() {
    const[chocolate, setChocoklate]= useState([])
    const[coldrind,setColdrink]= useState([])
    const[hookah,setHookah]= useState([])
    const[rooling,setRooling] =useState([])
    async function Apicard(){
       const response= await fetch(import.meta.env.VITE_API_URL)
        const data= await response.json()
        console.log(data)
   

       const Waferchocolates=[]
       for(let pro of data){
        if(pro.category ==="Wafer Chocolates"){
            Waferchocolates.push(pro)
        }
       }
       //console.log(Waferchocolates)
       const Coldrinks= []
       for(let col of data){
        if(col.category ==="Cold Drink Bottles"){
            Coldrinks.push(col)
        }
       }
      // console.log(Coldrinks)

      const Hookah=[]
      for(let hook of data){
        if(hook.category==="Hookah Accessories"){
            Hookah.push(hook)
        }
      }
      //console.log(Hookah)
      const Rooling= []
      for(let rol of data){
        if(rol.category==="Hookah Flavor (Tobacco Free)"){
            Rooling.push(rol)
        }
      }
      //console.log(Rooling)

      setChocoklate(Waferchocolates)
      setColdrink(Coldrinks)
      setHookah(Hookah)
      setRooling(Rooling)

    }
    useEffect(()=>{
        Apicard()
    },[])
  //  var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 6,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //   ]
  // };

  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,   
        slidesToScroll: 1
      }
    }
  ]
};

  return (
    
<>
    <div className='max-w-7xl mx-auto overflow-hidden'>
        <h2 className='font-bold text-2xl  mt-6 ml-3'>Cold Drinks & Juices</h2>
        {/* //<div className=' grid grid-cols-6  gap-2'> */}
        {/* //<Card/> */}
        <Slider {...settings}>
             {
            coldrind.map((item,index)=>{

                return(
                    <Card key={item.id} item={item}/>
                )
            })
        }
        </Slider>
       

    </div>
     {/* </div> */}

     <div className="max-w-7xl mx-auto overflow-hidden">
        <h2 className='font-bold text-2xl  mt-6 ml-4'> Chocklates Snacks & Munchies </h2>
        
            <Slider {...settings}>
            {
                chocolate.map((item,index)=>{
                    return(
                        <SnackCard key={item.id} item={item}/>
                    )
                })
            }

            </Slider>
        

     </div>

<div className="max-w-7xl mx-auto overflow-hidden">
        <h2 className='font-bold text-2xl  mt-6 mb-3 ml-4'> Hookah </h2>
        
            <Slider {...settings}>
            {
                hookah.map((item,index)=>{
                    return(
                        <SnackCard key={item.id} item={item}/>
                    )
                })
            }

            </Slider>
        

     </div>
     <div className="max-w-7xl mx-auto overflow-hidden">
        <h2 className='font-bold text-2xl  mt-6 mb-4 ml-3'> Rolling paper & tobacco
 </h2>
        
            <Slider {...settings}>
            {
                rooling.map((item,index)=>{
                    return(
                        <Roolingpaper key={item.id} item={item}/>
                    )
                })
            }

            </Slider>
        

     </div>

    </>
    
  )
}


