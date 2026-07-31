import about from './assets/images/ab_about.jpg';
import experience from './assets/images/about_af.gif';
import paint from './assets/images/paint.gif';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from "./animation";




function About() {
    return (
        <>  <motion.div variants={fadeIn} initial="initial" animate="final">
          
           
            <div className='hero'>
                
            </div>
               
           



           
               
                <div className="framer">

                    <h1>About</h1>
                    <p>
                        I am a visual strategist with a unique professional evolution. My journey began in Mechanical Engineering, where I developed a foundational rigor for mathematics and analytical problem-solving. This technical background, combined with 5 years of experience in Visual Communication and Fine Arts, allows me to operate at the rare intersection of complex data processing and high-impact storytelling. However, working directly with non-traditional adult learners and ESL students at Triton College reshaped my vision. I saw firsthand how powerful, accessible design could break down educational barriers and build confidence.

                        Today, I combine visual hierarchy, UI/UX principles, and data storytelling with rigorous learning design frameworks to architect end-to-end learning experiences. Whether designing interactive multimedia modules or structuring equitable digital learning pathways, my goal is always the same: to create clear, intuitive, and measurable learning outcomes for diverse audiences.
                    </p>
                </div>
                <div className="framel">
                    <img src={about}
                        alt="ima"
                    />
                </div>


          
                <div className="framel">

                    <h1>Experience</h1>

                    <p>
                    With a career built on the technical foundations of Mechanical Engineering and 5 years of Visual Design, I specialize in transforming complex data into streamlined, actionable insights. During my recent tenure at Allured Business Media, I acted as a bridge between creative vision and operational efficiency, managing complex production workflows. My approach is defined by strategic thinking and a commitment to data-driven design. I am responsible for maintaining a digital asset library to ensure brand consistency or developing interactive. 

                    With a strong foundation in digital product design, front-end development, and data storytelling, I transform complex concepts into intuitive visual structures, interactive media, and accessible learning pathways. My work is grounded in the belief that effective learning design requires both compelling visual communication and research-backed educational frameworks.

                    </p>
                </div>
                <div className="framer">
                    <img src={experience}
                        alt="exp"
                    />
                </div>
        
                   <div className="framer">
                <h1>Gallery</h1>
                   
                   
             
                </div>


                <div className="framel">

                <p>Alongside design and web development, I love painting in oil on canvas. For several years,  I've learned art techniques and styles. My approach is realistic, illustrative, and colorfully displayed.</p>
                    
                    
                    <img
                        src={paint}
                        alt="paint"
                    />
                    
             
                </div>
                <Link to="/gallery">
                                       <button>Learn more...
                                       </button>
                    </Link>

             
            
            </motion.div> 
        </>
    )
}

export default About