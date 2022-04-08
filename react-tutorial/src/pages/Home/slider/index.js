import React, {Children, cloneElement, useEffect, useRef, useState} from "react";
import {Main, WindowDiv, PagesContainer,FaChevronLeft,FaChevronRight } from "./styles";
import left from "../../../assets/icons/left.png"
import right from "../../../assets/icons/right.png"
import { CarouselContext } from './carousel-context'
import Page from "./page";
const PAGE_WIDTH = 500;
const TRANSITION_DURATION = 300;
 export default function Carousel({children, infinite}) {
     const[pages, setPages] = useState([]);
     const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(500);
     const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
     const [transitionDuration, setTransitionDuration] = useState(300);

    const windowElRef = useRef();

    useEffect(()=> {
        if(infinite) {
            setPages([
                cloneElement(children[Children.count(children) - 1]),
                    ...children,
                cloneElement(children[0]),
            ])
            setClonesCount({ head: 1, tail: 1 })
            return
        }
        setPages(children)
    }, [children,infinite])

     useEffect(()=> {
         const resizeHandler = () => {
             const windowElWidth = windowElRef.current.offsetWidth
             setWidth(windowElWidth)
             setOffset(-(clonesCount.head * width)) // to prevent wrong offset
         }
         resizeHandler()
         window.addEventListener('resize', resizeHandler)
         return () => {
             window.removeEventListener('resize', resizeHandler)
         }
     }, [clonesCount, width])

     useEffect(() => {
         if (transitionDuration === 0) {
             setTimeout(() => {
                 setTransitionDuration(TRANSITION_DURATION)
             }, TRANSITION_DURATION)
         }
     }, [transitionDuration])

     useEffect(() => {
         if (!infinite) return

         // с элемента 0 (clone) -> к предпоследнему (реальный)
         if (offset === 0) {
             setTimeout(() => {
                 setTransitionDuration(0)
                 setOffset(-(width * (pages.length - 1 - clonesCount.tail)))
             }, TRANSITION_DURATION)
             return
         }
         // с элемента n (clone) -> к элементу 1 (реальный)
         if (offset === -(width * (pages.length - 1))) {
             setTimeout(() => {
                 setTransitionDuration(0)
                 setOffset(-(clonesCount.head * width))
             }, TRANSITION_DURATION)
             return
         }
     }, [offset, infinite, pages, clonesCount, width])

     const handleLeftArrowClick = () => {
         setOffset((currentOffset)=> {
             const newOffset = currentOffset + PAGE_WIDTH;
             return Math.min(newOffset, 0)
         })
     }
     const handleRightArrowClick = () => {
         setOffset((currentOffset) => {
             const newOffset = currentOffset - width
             const maxOffset = -(width * (pages.length - 1))
             return Math.max(newOffset, maxOffset)
         })
     }

     return(
         <CarouselContext.Provider value={{ width }}>
             <Main>
                 <FaChevronLeft src={left} onClick={handleLeftArrowClick}></FaChevronLeft>
                 <WindowDiv ref={windowElRef}>
                     <PagesContainer
                         style={{
                             transform: `translateX(${offset}px)`,
                             transitionDuration: `${transitionDuration}ms`,
                         }}>
                         {pages}

                     </PagesContainer>

                 </WindowDiv>
                 <FaChevronRight src={right} onClick={handleRightArrowClick}></FaChevronRight>
             </Main>
         </CarouselContext.Provider>

     )
 }
Carousel.Page = Page