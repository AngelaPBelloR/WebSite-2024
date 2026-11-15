import { motion } from "framer-motion";
import { fadeIn } from "./animation";
import bennylearn from './assets/images/bennylearning.gif';
import bennystory from './assets/images/bennyStory.gif';
import levelup from './assets/images/levelup.gif';

function PortfolioInst() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            
            <h2>Benedict Egg Crash Course</h2>
            <h1>Articulate Rise | Challenge 1</h1>

            
            <img src={bennylearn}
            alt= "bennylearn"  
            /> 
            <p>Built in Articulate Rise 360, this bite-sized course shows home cooks how to pull off a 5-star brunch without breaking a sweat. In three simple phases, you’ll master a  foolproof hollandaise, nail the perfect poached egg, and plate up a restaurant-worthy Benny. It looks like haute cuisine, but with the right steps, it’s completely effortless.</p>
           
               <a href="https://share.articulate.com/aZbj3wPozlTsDg_iOnuEd" target="_blank" rel="noreferrer" >
                        <button>Learn more...
                        </button>
                </a>
             <h2>Benedict Egg Crash Course</h2>
             <h1>Articulate Storyline  | Challenge 2</h1>

            <img src={bennystory}
            alt= "bennystory"  
            /> 
            <p>
                Same recipe, new experience. Built in Articulate Storyline, this course ensures meticulous attention to detail so no critical step is overlooked. Again, three main phases, broken down into simple steps.
            </p>
           
               <a href="https://360.articulate.com/review/content/722b0753-f0aa-4be2-95d9-6fac445d3b6b/review" target="_blank" rel="noreferrer" >
                        <button>Learn more...
                        </button>
                </a>
           

         <h2>Level Up Your Speech</h2>
            <h1>Articulate Rise | Proto</h1>

            
            <img src={levelup}
            alt= "levelup"  
            /> 
            <p>
                Designed for adult ESL learners, this prototype offers a foundational overview of English phonetics. By combining active listening with a breakdown of how the vocal organs produce sound, the project builds pronunciation awareness to help learners sharpen their diction.
	
            </p>
           
               <a href="https://share.articulate.com/8-Ll95SVZj79t_nRLCRtE" target="_blank" rel="noreferrer" >
                        <button>Learn more...
                        </button>
                </a>
           
        </motion.div>
    )
}

export default PortfolioInst;