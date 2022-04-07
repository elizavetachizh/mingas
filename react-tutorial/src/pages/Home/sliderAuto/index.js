import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import left from "../../../assets/icons/left.png"
import right from "../../../assets/icons/right.png"
//styles
import "./slick.css";
import styles from "./slick.module.css";

export default function SliderAuto(){
    return (
        <div className="App">
            {/*<h2>React Slick without CSS Modules</h2>*/}
            {/*<div>*/}
            {/*    <Slider {...settingsNoModules}>*/}
            {/*        <div>*/}
            {/*           <img src={left}/>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={right}/>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <img src={left}/>*/}
            {/*        </div>*/}
            {/*    </Slider>*/}
            {/*</div>*/}

            <h2>React Slick with CSS Modules</h2>
            <div>
                <Slider {...settingsWithModules}>
                    <div>
                        <p>Lorem Ipsum 1</p>
                    </div>
                    <div>
                        <p>Lorem Ipsum 2</p>
                    </div>
                    <div>
                        <p>Lorem Ipsum 3</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

const settingsNoModules = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false
};

const settingsWithModules = {
    ...settingsNoModules,
    dotsClass: styles.button__bar
};

