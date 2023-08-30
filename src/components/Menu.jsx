import React from 'react'
import {Data} from "../helpers/Data"


const Menu = () => {
  // console.log(Data)
  return (
    <div className='menuDiv'> 
      {
      Data.map(({name, image,content,price})=>(
        <div className='cardMenu'>
        <img src={image} alt=""  />
        <h3 >{name}</h3>
        <p>{content}</p>
        <h5 >{price}</h5>
      </div>
      ))}
    </div>
  )
}

export default Menu