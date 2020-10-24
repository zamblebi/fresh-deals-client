import React, { useState } from 'react'
import dataSlide from './DataSlider'
import prev from './arrow-icons/prev.svg'
import next from './arrow-icons/next.svg'
import './Slide.css'
import styled from 'styled-components'



const Slide = styled.div`
    background-image: url(${props => props.imageBck});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100%;
    height: 500px;
    color: #ffff;
    .carousel__slide--content{
        height: 100%;
        font-weight: bold;
        font-size: 1.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`



const Carousel = ({props}) => {
    
    const [activeIndex, setActiveIndex] = useState(0);

    // Data slide Length for get last element in Slide array 
    const dataSlideLength = dataSlide.length -1;

    // Index for get active Index in state 
    let index = activeIndex;
   
    
    // Method for go to any slide 
    function goToSlide(index){
        setActiveIndex(index)
    }
    
    
    // Method for go to Previous slide 
    const goToPrevSlide = (e) => {
        e.preventDefault();
        
        if(index < 1){
            index = dataSlideLength; 
        }else{
            index--;
        }
        setActiveIndex(index)
    }


    // Method for go to Next Slide 
    const goToNextSlide = (e) => {
        e.preventDefault();

        if(index == dataSlideLength){
            index = 0 
        }else{
            index++
        }
        setActiveIndex(index)


    }

    
    return (
        <div className="carousel">
                <a href="#" className="carousel__arrow carousel___arrow--left" onClick={e => goToPrevSlide(e)}> <img src={prev} alt=""/> </a>
                    <ul className="carousel__slides">
                    { dataSlide.map((slide,index) => (
                        <li className={index == activeIndex ? 'carousel__slide carousel__slide--active' : 'carousel__slide--inactive'} key={index}>
                                <Slide imageBck={index == activeIndex ? slide.image: ''}>
                                    {/* <img src={} alt=""/> */}
                                      <p className="carousel__slide--content">{slide.title}</p>
                                </Slide>
                                </li>
                    ))}
                    </ul>
                <a href="#" className="carousel__arrow carousel___arrow--right" onClick={e => goToNextSlide(e)}> <img src={next} alt=""/> </a>
        </div>
    )
}

export default Carousel;