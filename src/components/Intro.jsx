import React, { useState } from 'react'
import './Intro.css'
import {Link} from 'react-router-dom'
import Carousel from './Carousel/Courasel'
const Intro = () => {
    return (
        <div className="intro">
                <Carousel/>
               
        </div>
    )
}

export default Intro