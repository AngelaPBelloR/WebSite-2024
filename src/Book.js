import HTMLFlipBook from "react-pageflip";
import React, { useRef } from 'react';

import page2a from "./assets/icons/icons_2.jpg";
import page3a from "./assets/icons/icons_3.jpg";
import page4a from "./assets/icons/icons_4.jpg";
import page5a from "./assets/icons/icons_5.jpg";
import page6a from "./assets/icons/icons_6.jpg";
import page7a from "./assets/icons/icons_7.jpg";
import page8a from "./assets/icons/icons_8.jpg";
import page9a from "./assets/icons/icons_9.jpg";
import page10a from "./assets/icons/icons_10.jpg";
import page11a from "./assets/icons/icons_11.jpg";
import page12a from "./assets/icons/icons_12.jpg";
import page13a from "./assets/icons/icons_13.jpg";
import page14a from "./assets/icons/icons_14.jpg";
import page15a from "./assets/icons/icons_15.jpg";
import page16a from "./assets/icons/icons_16.jpg";
import page17a from "./assets/icons/icons_17.jpg";
import page18a from "./assets/icons/icons_18.jpg";
import page19a from "./assets/icons/icons_19.jpg";
import page20a from "./assets/icons/icons_20.jpg";
import page21a from "./assets/icons/icons_21.jpg";
import page22a from "./assets/icons/icons_22.jpg";
import page23a from "./assets/icons/icons_23.jpg";
import page24a from "./assets/icons/icons_24.jpg";
import page25a from "./assets/icons/icons_25.jpg";
import page26a from "./assets/icons/icons_26.jpg";
import page27a from "./assets/icons/icons_27.jpg";
import page28a from "./assets/icons/icons_28.jpg";
import page29a from "./assets/icons/icons_29.jpg";
import page30a from "./assets/icons/icons_30.jpg";
import page31a from "./assets/icons/icons_31.jpg";
import page32a from "./assets/icons/icons_32.jpg";
import page33a from "./assets/icons/icons_33.jpg";
import page34a from "./assets/icons/icons_34.jpg";
import page35a from "./assets/icons/icons_35.jpg";
import page36a from "./assets/icons/icons_36.jpg";
import page37a from "./assets/icons/icons_37.jpg";
import page38a from "./assets/icons/icons_38.jpg";
import page39a from "./assets/icons/icons_39.jpg";
import page40a from "./assets/icons/icons_40.jpg";
import page41a from "./assets/icons/icons_41.jpg";
import page42a from "./assets/icons/icons_42.jpg";
import page43a from "./assets/icons/icons_43.jpg";
import page44a from "./assets/icons/icons_44.jpg";
import page45a from "./assets/icons/icons_45.jpg";
import page46a from "./assets/icons/icons_46.jpg";
import page47a from "./assets/icons/icons_47.jpg";
import page48a from "./assets/icons/icons_48.jpg";



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
                
                <div className="demoPage"><img src={page2a} alt="page2a" /></div>
                <div className="demoPage"><img src={page3a} alt="page3a" /></div>
                <div className="demoPage"><img src={page4a} alt="page4a" /></div>
                <div className="demoPage"><img src={page5a} alt="page5a" /></div>
                <div className="demoPage"><img src={page6a} alt="page6a" /></div>
                <div className="demoPage"><img src={page7a} alt="page7a" /></div>
                <div className="demoPage"><img src={page8a} alt="page8a" /></div>
                <div className="demoPage"><img src={page9a} alt="page9a" /></div>
                <div className="demoPage"><img src={page10a} alt="page10a" /></div>
                <div className="demoPage"><img src={page11a} alt="page11a" /></div>
                <div className="demoPage"><img src={page12a} alt="page12a" /></div>
                <div className="demoPage"><img src={page13a} alt="page13a" /></div>
                <div className="demoPage"><img src={page14a} alt="page14a" /></div>
                <div className="demoPage"><img src={page15a} alt="page15a" /></div>
                <div className="demoPage"><img src={page16a} alt="page16a" /></div>
                <div className="demoPage"><img src={page17a} alt="page17a" /></div>
                <div className="demoPage"><img src={page18a} alt="page18a" /></div>
                <div className="demoPage"><img src={page19a} alt="page19a" /></div>
                <div className="demoPage"><img src={page20a} alt="page20a" /></div>
               
                <div className="demoPage"><img src={page21a} alt="page21a" /></div>
                <div className="demoPage"><img src={page22a} alt="page22a" /></div>
                <div className="demoPage"><img src={page23a} alt="page23a" /></div>
                <div className="demoPage"><img src={page24a} alt="page24a" /></div>
                <div className="demoPage"><img src={page25a} alt="page25a" /></div>
                <div className="demoPage"><img src={page26a} alt="page26a" /></div>
                <div className="demoPage"><img src={page27a} alt="page27a" /></div>
                <div className="demoPage"><img src={page28a} alt="page28a" /></div>
                <div className="demoPage"><img src={page29a} alt="page29a" /></div>
                <div className="demoPage"><img src={page30a} alt="page30a" /></div>
              
                <div className="demoPage"><img src={page31a} alt="page31a" /></div>
                <div className="demoPage"><img src={page32a} alt="page32a" /></div>
                <div className="demoPage"><img src={page33a} alt="page33a" /></div>
                <div className="demoPage"><img src={page34a} alt="page34a" /></div>
                <div className="demoPage"><img src={page35a} alt="page35a" /></div>
                <div className="demoPage"><img src={page36a} alt="page36a" /></div>
                <div className="demoPage"><img src={page37a} alt="page37a" /></div>
                <div className="demoPage"><img src={page38a} alt="page38a" /></div>
                <div className="demoPage"><img src={page39a} alt="page39a" /></div>
                <div className="demoPage"><img src={page40a} alt="page40a" /></div>
                
                <div className="demoPage"><img src={page41a} alt="page41a" /></div>
                <div className="demoPage"><img src={page42a} alt="page42a" /></div>
                <div className="demoPage"><img src={page43a} alt="page43a" /></div>
                <div className="demoPage"><img src={page44a} alt="page44a" /></div>
                <div className="demoPage"><img src={page45a} alt="page45a" /></div>
                <div className="demoPage"><img src={page46a} alt="page46a" /></div>
                <div className="demoPage"><img src={page47a} alt="page47a" /></div>
                <div className="demoPage"><img src={page48a} alt="page48a" /></div>
         






                
            </HTMLFlipBook>
            <div className="buttons">
                <button onClick={flipPrev}>&lt;</button>
                <button onClick={flipNext}>&gt;</button>
            </div>
        </>
    );
}
export default IconBook;