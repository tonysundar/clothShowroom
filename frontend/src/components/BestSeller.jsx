import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller]=useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
          <Title text1={'BEST'} text2={'SELLER'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600'>
          Discover our best-selling oversized denim jackets, perfect for layering and adding a touch of effortless style to any outfit. Don't miss our sleek high-waisted leggings, designed for ultimate comfort and versatility, ideal for both workouts and everyday wear!
          </p>
        </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            bestSeller.map((item,index)=>(
                <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
            ))
          }
      </div>
    </div>
  )
}

export default BestSeller
