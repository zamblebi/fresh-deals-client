import React, { useState } from 'react'
// import './Intro.css'
import {Link} from 'react-router-dom'
import Carousel from './Carousel/Courasel'
import SomeArticle from './SomeArticle'
import About from './About'
import Footer from './Footer'
const Intro = () => {
    return (
        <div className="intro">
                <Carousel/>
                <SomeArticle/>
                <About/>
                <Footer/>
        </div>
    )
}

export default Intro