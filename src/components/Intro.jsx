import React, { useState } from 'react'
// import './Intro.css'
import {Link} from 'react-router-dom'
import Carousel from './Carousel/Courasel'
import SomeArticle from './SomeArticle'
const Intro = () => {
    return (
        <div className="intro">
                <Carousel/>
                <SomeArticle/>
        </div>
    )
}

export default Intro