// redundant, replaced by homeTest.js for scroll-linked animation
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './home.css';
import 'animate.css';

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='textContainer'>
                <AnimationOnScroll 
                    animateIn="animate__slideInLeft" 
                    animateOut="animate__slideOutLeft"
                    initiallyVisible={true}
                >
                    <h1>BRYAN HOW</h1>  
                </AnimationOnScroll>

                <AnimationOnScroll 
                    animateIn="animate__slideInRight" 
                    animateOut="animate__slideOutRight"
                    initiallyVisible={true}
                >
                    <h1>WEBSITE DEVELOPMENT</h1>  
                </AnimationOnScroll>
            </div>
        </div>
    );
}

export default Home;