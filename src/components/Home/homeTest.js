import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './home.css';

const HomeT = () => {
    const [percentShown, setPercentShow] = useState({
        itemOne: 100,
        itemTwo: 100
    });
    const refOne = useRef(null);

    // consider switching to useEffect for better performance
    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.getBoundingClientRect().height; // offsetHeight if I want element's layout height instead of render
        const div1Pos = topPos(refOne.current);
        const div1Height = getHeight(refOne.current);
        const initEqua = div1Height - (window.scrollY + window.innerHeight);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight; // consider using pageYOffset for cross-browser compatibility
            console.log(scrollPos);
            console.log(`div1Pos is ${div1Pos}`);
            console.log(`div1Height is ${div1Height}, window height is ${window.innerHeight}`);
            console.log(`initEqua is ${initEqua}`);
            // Element scrolled to
            if (div1Pos < scrollPos) {
                let itemPercent = (((scrollPos + initEqua - div1Pos) / div1Height) * 100);
                // if (itemPercent > 100) itemPercent = 100;
                if (itemPercent < 0 || itemPercent === 0) itemPercent = 0;
                
                // seperating into itemOne and itemTwo in case I want to animate both items separately
                setPercentShow((prevState) => ({
                    ...prevState, 
                    itemOne: itemPercent,
                    itemTwo: itemPercent,
                }));
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className='homeContainer'>
            <div className='homeTextContainer' ref={refOne}>
                <SlideLeft 
                    className='fontSize'
                    animatePercent={percentShown.itemOne}
                >
                    <h1 className='name'>BRYAN HOW</h1>
                </SlideLeft>

                <SlideRight 
                    animatePercent={percentShown.itemTwo}
                >
                    <h1 className='wd'>WEBSITE DEVELOPMENT</h1>
                </SlideRight>
            </div>
        </div>
    );
}

const SlideLeft = styled.div`
    height: auto;
    transform: translateX(${({ animatePercent }) => (animatePercent ? `-${animatePercent - 100}vh` : '-100vw')});
`;

const SlideRight = styled.div`
    height: auto;
    transform: translateX(${({ animatePercent }) => (animatePercent ? `${animatePercent - 100}vh` : '100vw')});
`; 

export default HomeT;