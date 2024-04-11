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
                    <p>Here my personal web sites. I created all of them from scratch. I write the code utilizing html, javascript, and react. Even this one that you are looking at rignt now was created utilizing Basic React. Since 2019, every year, I've relaunched my porfolio several times. The first website was created only in HTML and CCS. On second and third one, I applied javascript libraries. Finally on this last one is an app in React. All my work is could be found On GitHub.</p>

                    <Link to="/webdesignanddev">
                        <button>Learn more...
                        </button>
                        </Link>

                </div>
            </div>

            <div className="parallel">
                <div className="framel">
                    <h1>Motion Graphics</h1>
                    <p>I created animated covers for WellSpa360 magazine in AfterEffects incorporating Photoshop edition and motion graphics.Also, collaboration with marketing campaigns to create eblast and social media content. </p>

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
                <p>From my engineering backgroud, I learned computing aid design tools to visualize in 3D. I'm quick and curious learner, I also utilized design tools as Maya and Blender.</p>
                <Link to="/threeD">
                        <button>Learn more...
                        </button>
                </Link>

            </div>

            </div>


            <div className="parallel">

                <div className="framel">
                    <h1>Editorial</h1>
                    <p>I created layout for WellSpa360 magazine also I created promotional newsletter animation.</p>
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
                    <p>This project facilitates graphics identity and system icons for the ACORN project at Fermilab Physics National Laboratory by conveying ideas of renovation, modernization, expansion, and cutting-edge technology.The main objective of this project is create the visual aesthetics of the accelerator control system corresponding to ACORN  that reflect a world leader accelerator facility and a pioneer in physics research. </p>
                    <Link to="/logoDesign">
                        <button>Learn more...
                        </button>
                     </Link>
                </div>
            </div>

            <div className="parallel">

                <div className="framel">
                    <h1>UI/UX</h1>
                    <p>User interface Design for Numat technology was created considering the user centered approach and UI/UX methodology</p>
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