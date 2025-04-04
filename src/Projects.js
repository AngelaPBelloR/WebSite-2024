import web from './assets/images/web.gif';
import data from './assets/images/data.gif';
import uiux from './assets/images/uiux.gif'
import logo from './assets/images/acorn.gif';
import editorial from './assets/images/ProjectEditorialEx.gif'
import threeD from './assets/images/3d.gif';
import icons from './assets/images/icons.jpg';
import teaser from './assets/images/teaser.gif';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from "./animation";


function Projects() {
    return (
        <motion.div variants={fadeIn} initial="initial" animate="final">
            <div className='logoab'>
               
            </div>
            <div className="abhero">
                
            </div>
            
            <div className="parallel">
                <div className="framel">
                <img
                        src={teaser}
                        alt="teaser"
                    />
                    
                </div>

                <div className="framer">
                <h1>Motion Graphics</h1>
                    <p>For long time, I've been experimenting with after effects, welcome to see my personal and professional projects.</p>

                    <Link to="/motion">
                        <button>Learn more...
                        </button>
                        </Link>
                
                </div>
            </div>

            <div className="parallel">
                <div className="framel">
                <h1>Data Visualization and Infographics</h1>
                    <p>In these project my main aim was effectively assess, present, communicate and visualize data.</p>

                    <Link to="/datav">
                        <button>Learn more...
                        </button>
                    </Link>

                    

                </div>

                <div className="framer">
                <img
                        src={data}
                        alt="data"
                    />
                   
                </div>
            </div>
            <div className="parallel">
            <div className="framel">
                

                <img
                        src={web}
                        alt="web"
                    />
                   

                </div>

                <div className="framer">


                <h1>Web</h1>
                    <p>Here are my portfolio websites. I created all of them from scratch. I write the code utilizing HTML, JavaScript, and React. Even this one you are looking at right now, I crafted by myself utilizing Basic React. Since 2019,  I've relaunched my portfolio several times. The first website I created was only in HTML and CCS. On the second and the third one, I applied JavaScript libraries. Finally, this last one is a React app. You can see more on my profile at GitHub. (Click on the icon at the footer)</p>

                    <Link to="/webdesignanddev">
                        <button>Learn more...
                        </button>
                        </Link>
              
                </div>
            </div>

            <div className="parallel">
                <div className="framel">
                <h1>UI/UX</h1>
                    <p>Study case for a Client.</p>

                    <Link to="/uiux">
                        <button>Learn more...
                        </button>
                        </Link>

                    

                </div>

                <div className="framer">
                <img
                        src={uiux}
                        alt="uiux"
                    />
                   
                </div>
            </div>

           
        

             
        

            <div className="parallel">

           

                <div className="framel">
                     <h1>Editorial</h1>
                    <p>I created layouts for print and digital WellSpa360 magazine.</p>
                    <Link to="/editorial">
                        <button>Learn more...
                        </button>
                    </Link>
                    
                </div>

                <div className="framer">
                    <img
                        src={editorial}
                        alt="layouts"
                    />
                
                </div>
            </div>
           
            <div className="parallel">
            
                <div className="framel">
                    <img
                        src={threeD}
                        alt="3d"
                    />

                </div>
                <div className="framer">
                     <h1>3D Design</h1>
                    <p>My first career was in engineering, where  I learned computing aid design tools to create 3D objects and visualizations. I comfortably transferred these skills as a quick and curious learner by becoming proficient in Blender and Maya.</p>
                    <Link to="/threeD">
                            <button>Learn more...
                            </button>
                    </Link>
                   
                </div>

                
                

            </div>


          

            <div className="parallel">

                
                <div className="framel">
                    <h1>Logo Design</h1>
                    <p>In this project, I facilitated graphics identity for the ACORN project at Fermilab Physics National Laboratory by conveying ideas of renovation, modernization, expansion, and cutting-edge technology.</p>
                    <Link to="/logoDesign">
                        <button>Learn more...
                        </button>
                     </Link>
                </div>
                <div className="framer">
                    <img

                        src={logo}
                        alt="logo"
                    />
                </div>
            </div>

          

            <div className="parallel">

                <div className="framel">
                <img
                        src={icons}
                        alt="icons"
                    />

                </div>

                <div className="framer">
                <h1>Icons Book</h1>
                    <p>This is a collection of icons I have created for a variety of projects.</p>
                    <Link to="/icons">
                        <button>Learn more...
                        </button>
                    </Link>
                </div>
            </div>
          
         
        </motion.div>
    )
}

export default Projects