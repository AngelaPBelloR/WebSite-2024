import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import rose from './assets/images/chicagoRose.gif';
import overview from './assets/images/overview.gif';
import { Link } from 'react-router-dom';

function gallery() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            
            
            <h1>Gallery</h1>

            <h2>Chicago en Rosé</h2>
            <img src={rose}
            alt= "chicagoRose"  
            /> 
            <p>Sky pink caused by scatter phenomena where the shorter wavelenght blues and violets are scattered, leaving yellows. oranges, and red to be more visibles. The vibrant sunsets behind the skicrapers create this beatiful urban scenes... that I can not leave without paint them! 
            </p>
           
            <Link to="/rose">
                        <button>Learn more...
                        </button>
                        
            </Link>

             <h2>Overview Effect</h2>
            <img src={overview}
            alt= "overview"  
            /> 
            <p>
                Every era calls for its own way of seeing. In this moment, I believe it is essential to look at the world with renewed vision—one shaped by distance, scale, and perspective. My work is inspired by satellite imagery, offering a bird's-eye view that transforms familiar landscapes into abstract compositions. Through this lens, I invite viewers to reconsider their relationship with the Earth and the way we perceive our environment from above.
            </p>
           
          
           

        
           
        </motion.div>
    )
}

export default gallery