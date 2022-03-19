import React from 'react'
import CartCountButton from '../../Components/common/CartCountButton'
// import Footer from '../../Components/common/Footer/indexFooter'
import Banner1 from '../../Components/common/Home/Banner/Banner1'
import Menu from '../../Components/common/Menu/indexMenu'
import Proceed from '../../Components/common/Proceed/indedx'
import './indexHome.css'

const index = () => {
  return (
    <div>
        <Banner1/>
        <Menu/>
        {/* <Footer/> */}
        <Proceed/>
        <CartCountButton/>
    </div>
  )
}

export default index