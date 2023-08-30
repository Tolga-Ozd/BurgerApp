import React from 'react'
import {AiFillFacebook }from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import { Link } from 'react-router-dom'
 
const Footer = () => {
  return (
    <div className='footer'>
       <div className='icons'>
        <Link to=""> <AiFillFacebook /> </Link>
        <Link to=""> <AiOutlineInstagram /> </Link>
        <Link to=""> <AiOutlineTwitter /> </Link>
       </div>
       <div>
          <p className='footerText'>Tüm Hakları saklıdır</p>
       </div>
    </div>
  )
}

export default Footer