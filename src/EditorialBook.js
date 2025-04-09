import HTMLFlipBook from "react-pageflip";
import React, { useRef } from 'react';

import page2b from "./assets/editorial/EditorialBook_Page_01.jpg";
import page3b from "./assets/editorial/EditorialBook_Page_02.jpg";
import page4b from "./assets/editorial/EditorialBook_Page_03.jpg";
import page5b from "./assets/editorial/EditorialBook_Page_04.jpg";
import page6b from "./assets/editorial/EditorialBook_Page_05.jpg";
import page7b from "./assets/editorial/EditorialBook_Page_06.jpg";
import page8b from "./assets/editorial/EditorialBook_Page_07.jpg";
import page9b from "./assets/editorial/EditorialBook_Page_08.jpg";
import page10b from "./assets/editorial/EditorialBook_Page_09.jpg";
import page11b from "./assets/editorial/EditorialBook_Page_10.jpg";
import page12b from "./assets/editorial/EditorialBook_Page_11.jpg";
import page13b from "./assets/editorial/EditorialBook_Page_12.jpg";
import page14b from "./assets/editorial/EditorialBook_Page_13.jpg";
import page15b from "./assets/editorial/EditorialBook_Page_14.jpg";
import page16b from "./assets/editorial/EditorialBook_Page_15.jpg";
import page17b from "./assets/editorial/EditorialBook_Page_16.jpg";
import page18b from "./assets/editorial/EditorialBook_Page_17.jpg";
import page19b from "./assets/editorial/EditorialBook_Page_18.jpg";
import page20b from "./assets/editorial/EditorialBook_Page_19.jpg";
import page21b from "./assets/editorial/EditorialBook_Page_20.jpg";
import page22b from "./assets/editorial/EditorialBook_Page_21.jpg";
import page23b from "./assets/editorial/EditorialBook_Page_22.jpg";
import page24b from "./assets/editorial/EditorialBook_Page_23.jpg";
import page25b from "./assets/editorial/EditorialBook_Page_24.jpg";





function Editorialbook(props) {
    const bookRef = useRef();

    const flipPrev = () => {
        bookRef.current.pageFlip().flipController.flipPrev();
    }
    const flipNext = () => {
        bookRef.current.pageFlip().flipController.flipNext();
    }

    return (
        <>
            <HTMLFlipBook width={600} height={600} ref={bookRef}>
                
                <div className="demoPage"><img src={page2b} alt="page2b" /></div>
                <div className="demoPage"><img src={page2b} alt="page3b" /></div>
                <div className="demoPage"><img src={page3b} alt="page3b" /></div>
                <div className="demoPage"><img src={page4b} alt="page4b" /></div>
                <div className="demoPage"><img src={page5b} alt="page5b" /></div>
                <div className="demoPage"><img src={page6b} alt="page6b" /></div>
                <div className="demoPage"><img src={page7b} alt="page7b" /></div>
                <div className="demoPage"><img src={page8b} alt="page8b" /></div>
                <div className="demoPage"><img src={page9b} alt="page9b" /></div>
                <div className="demoPage"><img src={page10b} alt="page10b" /></div>
                <div className="demoPage"><img src={page11b} alt="page11b" /></div>
                <div className="demoPage"><img src={page12b} alt="page12b" /></div>
                <div className="demoPage"><img src={page13b} alt="page13b" /></div>
                <div className="demoPage"><img src={page14b} alt="page14b" /></div>
                <div className="demoPage"><img src={page15b} alt="page15b" /></div>
                <div className="demoPage"><img src={page16b} alt="page16b" /></div>
                <div className="demoPage"><img src={page17b} alt="page17b" /></div>
                <div className="demoPage"><img src={page18b} alt="page18b" /></div>
                <div className="demoPage"><img src={page19b} alt="page19b" /></div>
                <div className="demoPage"><img src={page20b} alt="page20b" /></div>
                <div className="demoPage"><img src={page21b} alt="page21b" /></div>
                <div className="demoPage"><img src={page22b} alt="page22b" /></div>
                <div className="demoPage"><img src={page23b} alt="page23b" /></div>
                <div className="demoPage"><img src={page24b} alt="page24b" /></div>
                <div className="demoPage"><img src={page25b} alt="page24b" /></div>
                
               
            
              


                
            </HTMLFlipBook>
            <div className="buttons">
                <button onClick={flipPrev}>&lt;</button>
                <button onClick={flipNext}>&gt;</button>
            </div>
        </>
    );
}
export default Editorialbook;