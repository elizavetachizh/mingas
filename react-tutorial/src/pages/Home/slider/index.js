import React, {Children, cloneElement, Component, useEffect, useState} from "react";
import {Main, WindowDiv, PagesContainer,FaChevronLeft,FaChevronRight } from "./styles";
import left from "../../../assets/icons/left.png"
import right from "../../../assets/icons/right.png"
const PAGE_WIDTH = 450;

 export default function Carousel({children}) {
     const[pages, setPages] = useState([]);
     const [offset, setOffset] = useState(0)

     const handleLeftArrowClick = () => {
         console.log('handleLeftArrowClick')
     }
     const handleRightArrowClick = () => {
         console.log('handleRightArrowClick')
         setOffset((currentOffset)=> {
             const newOffset = currentOffset - PAGE_WIDTH;
             console(newOffset)
             return newOffset
         })
     }



     useEffect(()=> {
         setPages(

             Children.map(children, child => {
                 return cloneElement(child, {
                     style: {
                         height: '100%',
                         minWidth: `${PAGE_WIDTH}px`,
                         maxWidth: `${PAGE_WIDTH}px`
                     }
                 })
             })
         )
     }, [])
     return(
        <Main>
            <WindowDiv>
                <FaChevronLeft src={left} onClick={handleLeftArrowClick}></FaChevronLeft>
                <PagesContainer
                style={{
                    transform: `translateX(${offset}px)`
                }}
                >
                    {pages}
                </PagesContainer>
                <FaChevronRight src={right} onClick={handleRightArrowClick}></FaChevronRight>
            </WindowDiv>
        </Main>

     )
 }