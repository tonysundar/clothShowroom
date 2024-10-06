import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Collection from './pages/Collection.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Login from './pages/Login.jsx'
import Placeorder from './pages/Placeorder.jsx'
import Orders from './pages/Orders.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7wv] lg:px-[9vw]'>
      <ToastContainer/>
       <Navbar/>
       <SearchBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Collection' element={<Collection/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Product/:productId'element={<Product/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Placeorder'element={<Placeorder/>}/>
       <Route path='/Orders'element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
