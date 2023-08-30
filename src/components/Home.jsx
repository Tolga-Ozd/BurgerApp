import React from 'react'
import FastFood from "../assets/FAST-FOOD2.jpg"
import "../styles/Home.css"
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage: `url(${FastFood})`}}>
        <div className='order'>
            <Link to="/menü">
              <button>Sipariş Ver</button>
            </Link>
        </div>

    </div>
  )
}

export default Home