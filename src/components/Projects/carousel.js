import React, { useEffect, useState } from 'react';
import { myProjects } from './myProjects';
import { useMediaQuery } from "react-responsive";
import SwipeableViews from 'react-swipeable-views';
import './carousel.css';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Carousel = (props) => {
    const {show, infiniteLoop} = props;
    const [index, setIndex] = useState(infiniteLoop ? show : 0);
    let length = myProjects.length;
    const [isRepeating, setIsRepeating] = useState(infiniteLoop && length > show);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [disBtn, setDisBtn] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "768px" });

    useEffect(() => {
        setIsRepeating(infiniteLoop && length > show);
    }, [show, infiniteLoop, isRepeating]);

    useEffect(() => {
        if (isRepeating) {
            if (index === show || index === length) {
                setTimeout(() => {
                    setTransitionEnabled(true);
                }, 250);
            };
        };
    }, [index, isRepeating, show, length]);

    const next = () => {
        if (isRepeating || index < (length - show)) {
            setIndex(prevState => prevState + 1);
            disableBtn();
        };
    };

    const prev = () => {
        if (isRepeating || index > 0) {
            setIndex(prevState => prevState - 1);
            disableBtn();
        };
    };

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (index === 0) {
                setTransitionEnabled(false);
                setTimeout(() => {
                    setIndex(length);
                }, 200);
            } else if (index === length + show) {
                setTransitionEnabled(false);
                setTimeout(() => {
                    setIndex(show);
                }, 200);
            };
        };
    };
    
    const renderExtraPrev = () => {
        let output = [];
        let htmlObj = []; // we need this extra steps since myProjects items aren't DOM elements by default, unlike the example
        for (let i = 0; i < show; i++) {
            output.push(myProjects[length - 1 - i]);
        }
        output.reverse();
        output.map((p) => {
            htmlObj.push(
                <div className='card-container'>
                    <div className='carousel-item'>
                        <a href={p.link} target='_blank' rel='noreferrer'>
                          <img className='carousel-image' src={p.screenshot} alt={p.name}/>  
                        </a>
                    </div>
                </div>
            );
        });
        return htmlObj;
    };

    const renderExtraNext = () => {
        let output = [];
        let htmlObj = []; // we need this extra steps since myProjects items aren't DOM elements by default, unlike the example
        for (let i = 0; i < show; i++) {
            output.push(myProjects[i]);
        }
        output.map((p) => {
            htmlObj.push(
                <div className='card-container'>
                    <div className='carousel-item'>
                        <a href={p.link} target='_blank' rel='noreferrer'>
                          <img className='carousel-image' src={p.screenshot} alt={p.name}/>  
                        </a>
                    </div>
                </div>
            );
        });
        return htmlObj;
    };

    const disableBtn = () => {
        setDisBtn(true);
        setTimeout(() => {
            setDisBtn(false);
        }, 600);
    };

    return (
        <div className="component-container">
            <div className='pTitleContainer'>
                <div className='pTitleBackground'>
                    <h1 className='pTitle'>Past Projects</h1>
                </div>
            </div>

            <div className='indicators'>
                <button onClick={prev} disabled={disBtn} className='left'>
                    <ArrowLeftIcon/>
                </button>
            </div>
            {/* renders a swipeable version of the carousel if the user is on a mobile device */}
            { isMobile ? 
                <SwipeableViews>
                    {(length > show && isRepeating) && renderExtraPrev()}
                    {myProjects.map((p) => {
                        return (
                            <div className='card-container'>
                                <a href={p.link} target='_blank' rel='noreferrer'>
                                    <img className='carousel-image' src={p.screenshot} alt={p.name}/>  
                                </a> 
                            </div>
                            );
                    })}
                    {(length > show && isRepeating) && renderExtraNext()}
                </SwipeableViews>
                : 
                <div className='carousel-container'>
                    <div className='carousel-wrapper'>
                        <div className='carousel-content-wrapper'>
                            <div className='prev-slides'></div>
                            <div 
                                className={`carousel-content show-${show}`}
                                style={{transform: isMobile ? `translateX(-${index * 80}vw)` : `translateX(-${index * 32}vw)`,
                                        transition: !transitionEnabled ? 'none' : 'all 150ms linear',
                                    }}
                                onTransitionEnd={() => handleTransitionEnd()}
                            >
                                {(length > show && isRepeating) && renderExtraPrev()}
                                {myProjects.map((p) => {
                                    return (
                                        <div className='card-container'>
                                            <a href={p.link} target='_blank' rel='noreferrer'>
                                            <img className='carousel-image' src={p.screenshot} alt={p.name}/>  
                                            </a> 
                                        </div>
                                    );
                                })}
                                {(length > show && isRepeating) && renderExtraNext()}
                            </div>
                            <div className='next-slides'></div>
                        </div>
                    </div>
                </div>
            }
        
            <div className='indicators'>
                <button onClick={next} disabled={disBtn} className='right'>
                    <ArrowRightIcon/>
                </button>
            </div>
        </div>
    );
};

//`translateX(-${index * (70 / show)}vw)`

export default Carousel;