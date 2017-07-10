import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'
import SidebarRight from './common/SidebarRight'


const Main = props => (
  <div>
    <Navbar />
    <div className='wrapper-content'>
      <div className='container'>
        {props.children}
      </div>
    <Footer />
    </div>

  </div>
)

export default Main
