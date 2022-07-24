import React from 'react'
import data from './data'
import { useDispatch,useSelector } from 'react-redux'
import { addCart,totalPrice } from './store/cart'
const App = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart)
  const addToCart = (item)=>{
    dispatch(addCart(item))
    dispatch(totalPrice())
  }
  

  console.log(cart.total);
  return (
   <>
   <div className="cart px-4 py-2 bg-blue-500 text-blue-900 rounded shadow-md 
   w-24 ">{cart.total}</div>
    <div className='bg-red-500 flex gap-x-20 m-14 flex-wrap'>
     {data.map(item=>(
       <div key={item.id} className="cart m-12 bg-white h-72 w-48 rounded shadow-md flex flex-col items-center justify-center">
       <div className="title">{item.name}</div>
       <h2>{item.price} TL</h2>
       <button className='px-3 py-1 bg-red-500 text-white rounded shadow-md mt-5' onClick={()=>addToCart(item)}>Ekle</button>
     </div>
     ))}

    </div>

    <div className="cart px-4 py-2 bg-blue-500 text-blue-900 rounded shadow-md 
   w-24 ">
      {cart.items.map((item)=>(
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
   </>
  )
}

export default App