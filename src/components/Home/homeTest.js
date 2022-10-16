import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './home.css';

const HomeT = () => {
    const [percentShown, setPercentShow] = useState({
        itemOne: 100,
        itemTwo: 100
    });
    const refOne = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        const div1Pos = topPos(refOne.current);
        const div1Height = getHeight(refOne.current);

        const onScroll = () => {
            const scrollPos = window.scrollY + window.innerHeight;

            // Element scrolled to
            if (div1Pos < scrollPos) {
                let itemPercent = ((scrollPos - div1Pos) * 100) / div1Height;
                // if (itemPercent > 100) itemPercent = 100;
                if (itemPercent < 0) itemPercent = 0;
                
                // seperating into itemOne and itemTwo in case I want to change some stuff
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
            <div className='textContainer' ref={refOne}>
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