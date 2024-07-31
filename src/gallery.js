import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import rose from './assets/images/chicagoRose.gif';
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
           

        
           
        </motion.div>
    )
}

export default gallery