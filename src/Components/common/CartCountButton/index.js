import React from 'react'
import './styled.css'

const CartCountButton = ({cartCount}) => {
  return (
    <div className='btnCartCount'>
      <div className='count'>5+{cartCount>=100?'99+': cartCount}</div>
      <i className='fas fa-shopping-cart'></i>
    </div>
  )
}

export default CartCountButton