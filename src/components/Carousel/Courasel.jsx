import React, { useState } from 'react'
import dataSlide from './DataSlider'
import './Slide.css'
const Carousel = ({props}) => {
    
    const [activeIndex, setActiveIndex] = useState(0);
    // const [index, setIndex] = useState(dateSlide.length)
    // let {dataSlide} = props;
    
    function goToSlide(index){
        setActiveIndex(index)
    }
    
    

    const goToPrevSlide = (e) => {
        e.preventDefault();
        
        let index = activeIndex;
        let dataSlideLength = dataSlide.length -1;
        
        if(index < 1){
            index = dataSlideLength; 
        }else{
            index--;
        }
        setActiveIndex(index)
    }

    const goToNextSlide = (e) => {
        e.preventDefault();
        
        let index = activeIndex;
        let dataSlideLength = dataSlide.length -1;

        if(index == dataSlideLength){
            // console.log(index == dataSlideLength)
            index = 0 
        }else{
            index++
        }
        setActiveIndex(index)


    }

    console.log(activeIndex)
    
    return (
        <div className="carousel">
            <a href="#" className="carousel__arrow carousel___arrow--left" onClick={e => goToPrevSlide(e)}>Prev</a>
                <ul className="carousel__slides">
                   { dataSlide.map((slide,index) => (
                       <li className={index == activeIndex ? 'carousel__slide carousel__slide--active' : 'carousel__slide--inactive'} key={index}>
                            <p className="carousel__slide--content">{slide.title}</p>
                        </li>
                   ))}
                </ul>
            <a href="#" className="carousel__arrow carousel___arrow--right" onClick={e => goToNextSlide(e)}>Next</a>
        </div>
    )
}

export default Carousel;