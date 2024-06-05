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


            <h1>Chicago en Rosé</h1>
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
            <h2>Lift Bridge</h2>
                <p> 36”x24” oil on canvas </p>
                <p>One of the best views of Chicago from the South under a Pink Sky.</p>
                <a href="https://www.etsy.com/listing/1395360138/chicago-in-rose-lift-bridge-oil-on?click_key=652f6306363ba63d3a858cc9d351451024a4e167%3A1395360138&click_sum=4b44d510&ref=shop_home_active_9&frs=1" target="_blank" rel="noreferrer">
                    <button>
                            Go shop...
                    </button>
                </a>
               
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
            <h2> Scintillating</h2>
                <p> 36”x24” oil on canvas </p>
                <p>Shining lights at sunset.</p>
                <a href="https://www.etsy.com/listing/1397394558/chicagoinrosescintillating?click_key=ceddb6a65a65d34c27804842526bd52346b72825%3A1397394558&click_sum=88e5eada&ref=shop_home_feat_4&frs=1" target="_blank" rel="noreferrer">
                    <button>
                            Go shop...
                    </button>
                </a>
            
            </div>
            </div>

            <div className="parallel">

            <div className="framel">
            <img
                    src={reflection}
                    alt="reflection"
            />

            </div>

            <div className="framer">
            <h2>Sky Reflection</h2>
                <p> 36”x24” oil on canvas </p>
                <p>Wet surfaces creating a reflection effect.</p>
                <a href="" target="_blank" rel="noreferrer">
                    <button>
                            Go shop...
                    </button>
                </a>
            
            </div>
            </div>

        
           
        </motion.div>
    )
}

export default gallery