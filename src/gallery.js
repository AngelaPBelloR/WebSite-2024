import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import rose from './assets/images/chicagoRose.gif';
import bridge from './assets/images/ima01_600x450.jpg';
import scintillating from './assets/images/ima02_600x450.jpg';
import reflection from './assets/images/ima03_600x450.jpg';

function gallery() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            
            
            <h1>Gallery</h1>

            <h2>Chicago en Rosé</h2>
            <img src={rose}
            alt= "chicagoRose"  
            /> 
            <p>
                Sky pink caused by scatter phenomena where the shorter wavelenght blues and violets are scattered, leaving yellows. oranges, and red to be more visibles. The vibrant sunsets behind the skicrapers create this beatiful urban scenes... that I can not leave without take them! 
            </p>
           

            <div className="parallel">

            <div className="framel">
            <img
                    src={bridge}
                    alt="liftbridge"
                />

            </div>

            <div className="framer">
            <h3>Lift Bridge</h3>
                <p> 36”x24” oil on canvas </p>
                <p>One of the best views of Chicago from the South under a Pink Sky.</p>
               
               
            </div>
            </div>

            <div className="parallel">

            <div className="framel">
            <img
                    src={scintillating}
                    alt="lights"
            />

            </div>

            <div className="framer">
            <h3> Scintillating</h3>
                <p> 36”x24” oil on canvas </p>
                <p>Shining lights at sunset.</p>
             
            
            </div>
            </div>

            <div className="parallel">

            <div className="framel">
            <img
                    src={reflection}
                    alt="wet"
            />

            </div>

            <div className="framer">
            <h3>Sky Reflection</h3>
                <p> 36”x24” oil on canvas </p>
                <p>Wet surfaces creating a reflection effect.</p>
                
            
            </div>
            </div>

        
           
        </motion.div>
    )
}

export default gallery