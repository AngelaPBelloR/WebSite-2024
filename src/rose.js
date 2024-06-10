import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import bridge from './assets/images/ima01_600x450.jpg';
import scintillating from './assets/images/ima02_600x450.jpg';
import rain from './assets/images/ima03_600x450.jpg';

function gallery() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
                
            <h1>Chicago en Rosé</h1>
        
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

    
                <div className="framel">
                    <img
                            src={rain}
                            alt="rain"
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