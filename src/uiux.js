
import persona from './assets/images/persona.jpg';
import aggregate from './assets/images/aggregate.jpg';
import sketches from './assets/images/sketches.jpg';
import colorNu from './assets/images/colorpallet.jpg';
import typeNu from './assets/images/typeNumat.jpg';
import graphics from './assets/images/graphics.jpg';
import proto from './assets/images/prototype.gif';
import usability from './assets/images/usability.jpg';


function uiux() {
    return (
        <>
        <h1>Overview</h1>
            <p>
            NuMat Technologies needed to improve the navigation of its Intranet website. The project’s main aim is to enhance the site’s user experience. The overall state of the Intranet website was intricate, inefficient, and lacked of essential functions.

            To create a better user experience. I created a proposal to build an usable and click-able prototype for first-hand user testing. The user journey will have obstacle-free navigation without pain points or design bias. After the project close-out, collected user feedback will be the main contributor to boosting the performance expected from the website.
            <br />
            MEDIA:Adobe XD
            
            </p>
            

            <h1>Design Process</h1>

            <p>Developed an intranet website redesign prototype by emphasizing users’ needs. The main aim of the prototype was to create the enviroment of the usual workflow so that, evaluate the user experience. By conducting surveys and interviews, I articulated meaningful recommendations throughout executing research. I identified user pain points by empatizing and understanding how they interact with the interfase. Then, I created a second prototype incorporanting feedback and meaningful insights from the research. Finally, I coordinated with developers web design features that allowed the user to adjust preferences and shortcuts on the final product.</p>
            
                <div>
                    <h2>Understand</h2>    
                    <p>I followed the User Research approach by understanding the user's needs and preferences. I conducted usability studies, and interpreting feedback. Also, I collected data and turn it into insights that helped to design a prototype. </p>
                    <p>Here is a sample of the collected data; this person profile helps to identify what really matters in his usual workflow and expectations. </p>
                    <img src={persona}
                    alt= "persona"  
                    /> 

                    <p>To interpret the collected data in an interview, I utilized the user aggregate system, that sort users' insight into perception groups. </p>
                    <img src={aggregate}
                    alt= "aggregate"  
                    /> 
                            
                </div>
                <div>
                    <h2>Define</h2>
                    <h3>Problem Statement</h3>
                    <p>
                    NuMat requires a user friendly navigation of its Intranet website. To do so, it is required to user test a high resolution prototype that allow the developer to foreseen accessibility problems.
                    </p>
                
                    <h3>CHALLENGES</h3>
                    
                    <p>
                    Include features to intuitively navigate by allowing the user customize quick access.
                    <br />
                    Allow the user to be familiar with new interface at once.
                    <br />
                    Decide the main flocks of links, the most frequent quick access, and avoiding redundancy.
                    </p>
                   
                </div>

            
               
                <div>
                    <h2>Ideate</h2>
                    <img src={sketches}
                    alt= "sketches"  
                    /> 
                   
                

                </div>
                
                <div>
                    
                    <h2>Design</h2>
        
                    <p>Standards</p>
                    <p>Color Pallets</p>
                    <img src={colorNu}
                    alt= "color"  
                    /> 
                
                    <p>Type Treatment</p>
                    <img src={typeNu}
                    alt= "typeNu"  
                    /> 
                

                    <p>Graphic Elements</p>
                    <img src={graphics}
                    alt= "graph"  
                    /> 
                   
                    
                </div>

                <div>
                    <h2>Prototype</h2>
                    <img src={proto}
                    alt= "proto"  
                    /> 

                  
                    <h2>Usability</h2>
                    <img src={usability}
                    alt= "testNu"  
                    /> 
                   
                </div>

                <h1>CONCLUSION</h1>
                <p>SUMMARY
                The UX Research revealed areas of improvement in terms of navigation, identification, and recognition. Some users found features antiintuitive, scrolling down for instances, requires a signal. Also, some users prefer an accurte label instead of acroninms. Apparently, some app are difficult to diferenciate. In case, they are accessing the same location they could have a quick acces. In general, the most of the feedback resulted in a specific recommendation that developers must adjust in the final product.
                </p>

            <h1>Acknowledgements</h1>
            <p>NuMat Technologies always have my depest thanks for trust me on creating this prototype which contribute to the further development of the interface. 
        
            </p>
        </>
    )
}

export default uiux;