import  React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios'
import {backendUrl, currency} from '../App'
import {toast} from 'react-toastify'
import { assets } from '../assets/assets'

const Orders = ({token}) => {

  const [orders,setOrders] = useState([])

  const fetchAllOrders = async () => {

    if(!token){
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers : {token}})
    
      if(response.data.success){
        setOrders(response.data.orders)
      }
       else{
        toast.error(response.data.message)
       }

    } catch (error) {
      toast.error(error.message)
    }

  }

  const statusHandler = async (event,orderId)=>{
    try {
      const response = await axios.post(backendUrl + '/api/order/status',{orderId, status:event.target.value},{headers:{token}})
       if(response.data.success){
        await fetchAllOrders();
       }

    } catch (error) {
      console.log(error)
      toast.error(reponse.data.message)
    }
  }


  useEffect(()=>{
      fetchAllOrders();
  },[token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {
          orders.map((order,index)=>(
            <div className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-col-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700' key={index}>
                <img className='w-12' src={assets.parcel_icon} alt=''/>
                <div>
                <div>
                  {order?.items?.map((item,index)=>{
                    if(index === order.items.length-1){
                       return <p className='py-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
                    }
                    else{
                      return <p className='py-0.5'  key={index}>{item.name} x {item.quantity} <span>{item.size}</span>,</p>
                    }
                  })}
                </div>
                     <p>{order.address.firstName + " " + order.address.lastName}</p>
                     <div>
                      <p>{order.address.street + ","}</p>
                      <p>{order.address.city + "," + order.address.state + "," + order.address.country + " " + order.address.pincode}</p>
                      </div>
                      <div>
                         <p>{order.address.phone}</p>
                      </div>
                      </div>
                      <div>
                        <p>items : {order.items.length}</p>
                        <p>Methos : {order.paymentMethod}</p>
                        <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
                        <p>Date : {new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <p>{currency}{order.amount}</p>
                      <div>
                      <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} className='p-2 font-semibold'>
                        <option value="OrderPlaced">Order Placed</option>
                        <option value="Packing">Packing</option>
                        <option value="Shipped">Shipped</option>
                        <option vlaue="Out for delivery">Out for delivery</option>
                        <option value="Delivered">Delivered</option>

                      </select>
                      </div>
                      
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default Orders
