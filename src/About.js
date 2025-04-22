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
                    I'm a visual designer with extensive computer literacy and hands-on experience, showcased here on my self-crafted website. This space reflects my web development skills and my ever-growing knowledge base. Over the past year, I’ve been working on data visualization projects while developing my data analysis skills—an exciting evolution made even more natural thanks to my background in engineering, which has helped me merge design and analytical thinking.

                    Most recently, I worked as a Designer for WellSpa360 at Allured Business Media. There, I designed captivating layouts for both print and digital magazines, and enhanced digital engagement by crafting responsive updates for mobile and desktop experiences. I also created interactive content, motion graphics, and animations. Collaborating closely with the marketing team, I developed innovative visuals—including social media assets, web banners, and animations—for high-impact events, webcasts, emails, and campaigns.

                    Previously, as a freelancer, I developed digital content that aligned tightly with brand identity. I edited images in Photoshop, enhanced visual appeal based on user feedback, and contributed to strategic marketing initiatives.

                    Another key role was as a UI/UX Designer, where I helped relaunch a company’s intranet UI. I translated user needs into clear, actionable design recommendations, working closely with developers and leveraging rigorous UX research.


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