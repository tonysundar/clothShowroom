import React,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';


const LatestCollection = () => {

const {products}= useContext(ShopContext);
const [latestProducts,setLatestProducts]=useState([])

useEffect(()=>{
    setLatestProducts(products.slice(0,10))
},[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Forever is a clothing store that embodies timeless style and modern trends. With an extensive selection of apparel for men, women, and children, Forever offers everything from casual wear to sophisticated outfits, ensuring there’s something for every occasion. The store features a diverse range of fabrics, colors, and designs, making it easy for shoppers to express their unique tastes. In addition to clothing, Forever also stocks a variety of accessories, including bags, jewelry, and footwear, allowing customers to complete their looks with ease. With a welcoming atmosphere and dedicated staff ready to assist, Forever is the go-to destination for fashion lovers seeking pieces that last a lifetime.
        </p>
      </div>
 
     {/*Rendering Products*/}
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
       {
        latestProducts.map((item,index)=>(
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
        ))
       }
     </div>

    </div>
  )
}

export default LatestCollection
