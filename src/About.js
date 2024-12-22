import about from './assets/images/ab_about.jpg';
import experience from './assets/images/about_af.gif';
import paint from './assets/images/paint.gif';
import { motion } from "framer-motion";
import { fadeIn } from "./animation";



function About() {
    return (
        <>  <motion.div variants={fadeIn} initial="initial" animate="final">
            <div className="logoab">
                
            </div>
           
            <div className='hero'>
                
            </div>
               
           



            <div className="parallel">
                <div className="framel">
                    <img src={about}
                        alt="ima"
                    />
                </div>
                <div className="framer">

                    <h1>About</h1>
                    <p>I am a Visual Designer with a track record in creative solutions to challenging projects. What makes me unique is my background in engineering. As an engineer, I developed critical thinking, problem-solving, time management, organizational, and interpersonal communication skills. This combination of education and experience enables me to approach visual design challenges with strategy.
                    </p>
                </div>
            </div>


            <div className="parallel">
                <div className="framel">

                    <h1>Experience</h1>

                    <p>
                    My current role is Designer for WellSpa360 at Allured Media Bussines. I crafted captivating layouts for print and digital magazines. Even more, I contribute to elevating digital engagement through dynamic updates for digital magazine mobile and desktop views. I also crafted interactive content, motion graphics, and animations. I aligned with marketing, innovating motion graphics, social media posts, animations, and web banners for high-impact events, webcasts, emails, and campaigns. Previously, as a freelancer, I created impactful digital content, meticulously embodying brand identity and editing images in Photoshop, amplifying their appeal to align with marketing strategies and user feedback. Another remarkable experience I had as a UI/UX Designer. I contributed to relaunching the intranet UI design by translating user needs into compelling and actionable recommendations from rigorous UX research synchronized with developers.
                    </p>
                </div>
                <div className="framer">
                    <img src={experience}
                        alt="exp"
                    />
                </div>
            </div>

            <div className="parallel">

                <div className="framel">
                <img
                        src={paint}
                        alt="paint"
                    />
             
                </div>

                <div className="framer">
                <h1>Gallery</h1>
                    <p>Alongside design and web development, I love painting in oil on canvas. For several years,  I've learned art techniques and styles. My approach is realistic, illustrative, and colorfully displayed.</p>
                   
                   
             
                </div>
            </div>
            </motion.div> 
        </>
    )
}

export default About