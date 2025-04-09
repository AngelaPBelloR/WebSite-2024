import HTMLFlipBook from "react-pageflip";
import React, { useRef } from 'react';

import p1 from "./assets/brand/p1.jpg";
import p2 from "./assets/brand/p2.jpg";
import p3 from "./assets/brand/p3.jpg";
import p4 from "./assets/brand/p4.jpg";
import p5 from "./assets/brand/p5.jpg";
import p6 from "./assets/brand/p6.jpg";
import p7 from "./assets/brand/p7.jpg";
import p8 from "./assets/brand/p8.jpg";
import p9 from "./assets/brand/p9.jpg";
import p10 from "./assets/brand/p10.jpg";
import p11 from "./assets/brand/p11.jpg";
import p12 from "./assets/brand/p12.jpg";
import p13 from "./assets/brand/p13.jpg";
import p14 from "./assets/brand/p14.jpg";





function IconBook(props) {
    const bookRef = useRef();

    const flipPrev = () => {
        bookRef.current.pageFlip().flipController.flipPrev();
    }
    const flipNext = () => {
        bookRef.current.pageFlip().flipController.flipNext();
    }

    return (
        <>
            <HTMLFlipBook width={648} height={648} ref={bookRef}>
                
                <div className="demoPage"><img src={p1} alt="page1" /></div>
                <div className="demoPage"><img src={p2} alt="page2" /></div>
                <div className="demoPage"><img src={p3} alt="page3" /></div>
                <div className="demoPage"><img src={p4} alt="page4" /></div>
                <div className="demoPage"><img src={p5} alt="page5" /></div>
                <div className="demoPage"><img src={p6} alt="page6" /></div>
                <div className="demoPage"><img src={p7} alt="page7a" /></div>
                <div className="demoPage"><img src={p8} alt="page8" /></div>
                <div className="demoPage"><img src={p9} alt="page9" /></div>
                <div className="demoPage"><img src={p10} alt="page10" /></div>
                <div className="demoPage"><img src={p11} alt="page11" /></div>
                <div className="demoPage"><img src={p12} alt="page12" /></div>
                <div className="demoPage"><img src={p13} alt="page13" /></div>
                <div className="demoPage"><img src={p14} alt="page14" /></div>
            
            

                
            </HTMLFlipBook>
            <div className="buttons">
                <button onClick={flipPrev}>&lt;</button>
                <button onClick={flipNext}>&gt;</button>
            </div>
        </>
    );
}
export default IconBook;