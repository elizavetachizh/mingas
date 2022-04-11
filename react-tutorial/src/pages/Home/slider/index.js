import React, { useState, useEffect } from "react";
import { images } from "../../../assets/images";
import {Main, WindowDiv} from "./styles";

export default function Carousel() {
    const [count, setCount] = useState(0);
    const [mousedOver, setMousedOver] = useState(false);

    useEffect(() => {
        // set an interval timer if we are currently moused over
        if (mousedOver) {
            const timer = setInterval(() => {
                // cycle prevCount using mod instead of checking for hard-coded length
                setCount((prevCount) => (prevCount + 1) % images.length);
            }, 2000);
            // automatically clear timer the next time this effect is fired or
            // the component is unmounted
            return () => clearInterval(timer);
        } else {
            // otherwise (not moused over), reset the counter
            setCount(0);
        }
        // the dependency on mousedOver means that this effect is fired
        // every time mousedOver changes
    }, [mousedOver]);

    return (
        <Main>
            <WindowDiv
                // just set mousedOver here instead of calling update/origCount
                onMouseOver={() => setMousedOver(true)}
                onMouseOut={() => setMousedOver(false)}
            >
                <img src={images[count].source} alt={images.name} />
            </WindowDiv>
        </Main>
    );
}