import React from 'react'
import './indexMenu.css'
import { menuItemsData } from './data'
import MenuItem from './MenuItem'


const Menu = () => {
  return (
    <main>
      {menuItemsData.map((item)=>(
      <MenuItem key={item.id} item={item}/>
      ))}
     
    </main>
  )
}

export default Menu