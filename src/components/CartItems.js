import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemInMenu from './ItemInMenu'
import { clearCart } from '../utils/cartSlice'
const CartItems = () => {
  
    // const {info}=props

    const cartData=useSelector((store)=>store.cart.items)
const dispatch=useDispatch();
    console.log(cartData);

const handleClearCart=()=>{
dispatch(clearCart())
}
  return (
    <div className=' m-10 p-10 mx-auto max-w-[50%] text-center'>
      <h1 className='text-[2.5rem] font-bold text-center' >Cart</h1>
      <button className='px-6 py-3 font-bold bg-black my-10  text-2xl text-white rounded-3xl '
      onClick={handleClearCart}
      >Clear Cart</button>
      {
        cartData?.length===0 &&
        <h2 className='font-bold text-3xl'>Your Cart is Empty Add Items</h2>
      }
<div className='text-start' >
{
        cartData?.map((data,index)=>(<ItemInMenu key={index} info={data}/>))
       }
</div>
       {/* <ItemInMenu info={cartData[0]}/> */}
       {/* hlo ji */}
    </div>
  )
}

export default CartItems