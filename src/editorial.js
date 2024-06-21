import layout from './assets/images/editorial.gif';
import Editorialbook from './EditorialBook';

function LayoutDesign() {
    return (
        <>
            <h1>Editorial</h1>

            <h2>Layout Design</h2>
            <p>
            For the last year, I have designing layout utilizing InDesign templates for WellSpa360 magazine. Combining typeface mattching, color palllets, and Adobe Stock images. 

            </p>

            <img src={layout}
            alt= "editorial"  
            /> 

            <div className="flipBook">
            <h1>Editorial Book</h1>
            <Editorialbook />
           </div>
        </>
    )
}

export default LayoutDesign;