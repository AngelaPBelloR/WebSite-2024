import HTMLFlipBook from "react-pageflip";
import React, { useRef } from 'react';
import page1a from "./assets/images/page1a.jpg";
import page2a from "./assets/images/page2a.jpg";
import page3a from "./assets/images/page3a.jpg";
import page4a from "./assets/images/page4a.jpg";
import page5a from "./assets/images/page5a.jpg";
import page6a from "./assets/images/page6a.jpg";
import page7a from "./assets/images/page7a.jpg";
import page8a from "./assets/images/page8a.jpg";
import page9a from "./assets/images/page9a.jpg";


function MyBook(props) {
    const bookRef = useRef();

    const flipPrev = () => {
        bookRef.current.pageFlip().flipController.flipPrev();
    }
    const flipNext = () => {
        bookRef.current.pageFlip().flipController.flipNext();
    }

    return (
        <>
            <HTMLFlipBook width={540} height={349} ref={bookRef}>
                <div className="demoPage"><img src={page1a} alt="page 1" /></div>
                <div className="demoPage"><img src={page2a} alt="page 2" /></div>
                <div className="demoPage"><img src={page3a} alt="page 3" /></div>
                <div className="demoPage"><img src={page4a} alt="page 4" /></div>
                <div className="demoPage"><img src={page5a} alt="page 5" /></div>
                <div className="demoPage"><img src={page6a} alt="page 6" /></div>
                <div className="demoPage"><img src={page7a} alt="page 7" /></div>
                <div className="demoPage"><img src={page8a} alt="page 8" /></div>
                <div className="demoPage"><img src={page9a} alt="page 9" /></div>
            </HTMLFlipBook>
            <div className="buttons">
                <button onClick={flipPrev}>&lt;</button>
                <button onClick={flipNext}>&gt;</button>
            </div>
        </>
    );
}
export default MyBook;