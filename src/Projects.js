import web from './assets/images/web.gif';
import covers from './assets/images/motioncovers.gif';
import logo from './assets/images/acorn.gif';
import editorial from './assets/images/ProjectEditorialEx.gif'
import uiux from './assets/images/uiux.gif';
import threeD from './assets/images/3d.gif'
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <>
            <div className='logoab'>
               
            </div>
            <div className="abhero">
                
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
                    <p>Here are my portfolio websites. I created all of them from scratch. I write the code utilizing HTML, JavaScript, and React. Even this one that you are looking at right now was personally crafted by myself utilizing Basic React. Since 2019,  I've relaunched my portfolio several times. The first website I created was only in HTML and CCS. On the second and the third one, I applied JavaScript libraries. Finally, this last one is a React app. You can see more on GitHub.</p>

                    <Link to="/webdesignanddev">
                        <button>Learn more...
                        </button>
                        </Link>

                </div>
            </div>

            <div className="parallel">
                <div className="framel">
                    <h1>Motion Graphics</h1>
                    <p>I created animated covers for WellSpa360 magazine incorporating Photoshop edition and motion graphics in AfterEffects. I also, collaborate with marketing campaigns by creating eblast and social media content. </p>

                    <Link to="/motion">
                        <button>Learn more...
                        </button>
                        </Link>
                </div>

                <div className="framer">
                    <img
                        src={covers}
                        alt="covers"
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
                <p>From my engineering backgroud, I learned computing aid design tools to visualize and design 3D objects. I'm quick and curious learner, I also utilized design tools as Blender and Maya.</p>
                <Link to="/threeD">
                        <button>Learn more...
                        </button>
                </Link>

            </div>

            </div>


            <div className="parallel">

                <div className="framel">
                    <h1>Editorial</h1>
                    <p>I created layouts for WellSpa360 magazine. I also created promotional this newsletter animation.</p>
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

                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="framer">
                    <h1>Logo Design</h1>
                    <p>This project facilitates graphics identity for the ACORN project at Fermilab Physics National Laboratory by conveying ideas of renovation, modernization, expansion, and cutting-edge technology.</p>
                    <Link to="/logoDesign">
                        <button>Learn more...
                        </button>
                     </Link>
                </div>
            </div>

            <div className="parallel">

                <div className="framel">
                    <h1>UI/UX</h1>
                    <p>User interface Design for Numat Technology was a project in which I created a prototype considering the user centered approach and UI/UX methodology</p>
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

           
         
        </>
    )
}

export default Projects