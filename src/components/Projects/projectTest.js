import React, { useEffect, useRef, useState } from 'react';
import { myProjects } from './myProjects';
import './wtf.css';

/*
export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    );
};
*/

const Carousel = (props) => {
    const {show, infiniteLoop} = props;
    const [index, setIndex] = useState(infiniteLoop ? show : 0);
    let length = myProjects.length;
    const [isRepeating, setIsRepeating] = useState(infiniteLoop && length > show);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    // const carouRef = useRef(null);
    // let carouselWidth;

    // Set the length to match current children from props
    useEffect(() => {
        setIsRepeating(infiniteLoop && length > show);
        // carouselWidth = carouRef.current.parentElement.offsetWidth; // 1345, doesn't work when we use this variable but ok with 1345
        // for troubelshooting                                         just specify the width to deal with this, don't use variable
        console.log(index);
        console.log(length);
    }, [show, infiniteLoop, isRepeating]);

    useEffect(() => {
        if (isRepeating) {
            if (index === show || index === length) {
                setTransitionEnabled(true);
            };
        };
    }, [index, isRepeating, show]);

    const next = () => {
        if (isRepeating || index < (length - show)) {
            setIndex(prevState => prevState + 1)
        };
    };

    const prev = () => {
        if (isRepeating || index > 0) {
            setIndex(prevState => prevState - 1)
        };
    };

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (index === 0) {
                setTransitionEnabled(false);
                setIndex(length);
            } else if (index === length + show) {
                setTransitionEnabled(false);
                setIndex(show);
            };
        };
    };
    
    const renderExtraPrev = () => {
        let output = [];
        for (let i = 0; i < show; i++) {
            output.push(myProjects[length - 1 - i]);
        }
        output.reverse();
        return output;
    };

    const renderExtraNext = () => {
        let output = [];
        for (let i = 0; i < show; i++) {
            output.push(myProjects[i]);
        }
        return output;
    };

    return (
        <div className="carousel-container">
            <div className='pTitleContainer'>
                <h1 className='pTitle'>Past Projects</h1>
            </div>

            <div className='indicators'>
                <button onClick={prev}>
                    Prev
                </button>
            </div>

            <div className='carousel'>
                <div 
                    className='inner'  
                    style={{transform: `translateX(-${index * 50}vw)`,
                            transition: !transitionEnabled ? 'none' : undefined,}}
                    onTransitionEnd={() => handleTransitionEnd()}        
                    > 
                    {myProjects.map((p) => {
                        return (
                            <div className='card-container'>
                                <div className='carousel-item'>
                                    <img className='carousel-image' src={p.screenshot} alt={p.name}/>
                                    <h3>{p.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        
            <div className='indicators'>
                <button onClick={next}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;