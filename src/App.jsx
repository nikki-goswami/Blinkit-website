import React from 'react'
import Header from './Component/Header'
import Cattegory from './Component/Cattegory'
import ProductCard from './Component/ProductCard'
import Footer from './Component/Footer'

export default function App() {
  
  return (
    <div>
      <Header/>
      <div className='max-w-7xl mx-auto px-4'>
        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" />
      </div>
      <div className='max-w-7xl mx-auto md:flex gap-3 px-4 hidden '>
        <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" /></div>
        <div><img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" /></div>
        <div>
          <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
        </div>
      </div>
      <Cattegory/>
      <ProductCard/>
      <Footer/>
      
    </div>
  )
}
