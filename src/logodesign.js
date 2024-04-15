import acornlogo from './assets/images/acorn1.jpg';
import client from './assets/images/client.png';
import mind from './assets/images/mindmap.png';
import matrix from './assets/images/matrix.png';
import variation from './assets/images/variation.png';
import standards from './assets/images/standards.png';
import color from './assets/images/color.png';
import treatment from './assets/images/typetreatment.png'
import question from './assets/images/question.png'
import final from './assets/images/final.png'
import philo from './assets/images/philosophy.gif'


function LogoDesign() {
    return (
        <>

            <h1>Overview</h1>
            <p>The ACORN Project team is comprised of specialists in high energy particle physics,
            engineering, information technology and software development. The logo mimicks the paths of the particle
            accelerators, core to ACORN's research and development.
            <br />
            MEDIA:Illustrator and Photoshop.
            <br />
            BOOK: InDesign.
            </p>
            <img src={acornlogo}
            alt= "logo"  
            /> 

            <h1>Design Process</h1>


            
                <div>
                    <h2>Understand</h2>    
                    <p>Objective: The main objective of this project is to create the visual aesthetics of the accelerator control system
                    corresponding to ACORN that reflect a world leader accelerator facility and a pioneer in physics research.
                    </p>
                    <p>Client: Fermi National Accelerator Laboratory is a high-energy physics facility that studies the fundamental nature
                    of matter and energy.
                    </p>
                    <img src={client}
                    alt= "client"  
                    /> 
                            
                </div>
                <div>
                    <h2>Problem Statement</h2>
                    <p>
                    ACORN requires a customized identification that represents its goals. This project facilitates graphics identity and system icons for the ACORN project at Fermilab Physics National Laboratory by conveying ideas of renovation, modernization, expansion, and cutting-edge technology.
                    </p>
                   
                </div>

            
                <div>
                    <h2>Define</h2>
                
                    <p>ACORN requires a customized identification that represents its goals. This project
                        facilitates graphics identity and system icons for the ACORN project at Fermilab Physics National Laboratory
                        by conveying ideas of renovation, modernization, expansion, and cutting-edge technology.</p>
        
        
                    <p>Mind Map</p>
                    <img src={mind}
                    alt= "mindmap"  
                    /> 
        
                </div>
                <div>
                    <h2>Ideate</h2>
                    <p>Attribution Matrix</p>
                    <img src={matrix}
                    alt= "matrix"  
                    /> 
        
                    <p>Variations</p>
                    <img src={variation}
                    alt= "variation"  
                    /> 

                

                </div>
                
                <div>
                    
                    <h2>Design</h2>
        
                    <p>Standards</p>
                    <img src={standards}
                    alt= "standards"  
                    /> 
        
                    <p>Color Pallets</p>
                   
                    <img src={color}
                    alt= "color"  
                    /> 
        
                    <p>Type Treatment</p>
                    <img src={treatment}
                    alt= "type"  
                    /> 
                    
                </div>
                <div>
                    <h2>Test</h2>
                    <p>Here samples of the surveys that help me to proof I found the best solution.</p>

                    <h3>Sample Question First Round</h3>
                    <p>How well does this pictogram fit with the project?</p>
                    <img src={question}
                    alt= "question"  
                    /> 

                    <h3>Sample Question Final test</h3>
                    <p>Which color pallet works best?</p>
                    <img src={final}
                    alt= "question"  
                    /> 

                    
                </div>

            <h1>Philosophy</h1>
            <p>ACORR stands for Accelerator Control Operation Reseaarch Network. The acronym conicide with the nut and its shape became the bundary of the logo. Internally we can see the paths of the particle accelerator at Fermilab. </p>
                    <img src={philo}
                    alt= "philosophy"  
                    /> 


            <h1>Acknowledgements</h1>
            <p>
            I’m extremely grateful to my dear and beloved husband, Jullian Badillo, for his enormous collaboration and network. Besides, I would like to extend my sincere thanks to the ACORN team:
            <br />
            Tony Tiradani, 
            Lila Anderson,
            Beau Harrison, 
            Eileen Crowley,  
            and Erik Gottschalk
            <br />
            Their practical suggestions and patience made possible the present work. 
            <br />
            Finally, I’d like to recognize the help and advice I received from my instructors:
            <br />
            Wendy Tritt 
            and Aleksandra Giza
            <br />
            who encouraged me throughout the design process of this project.
            </p>
                

        </>

    )
}

export default LogoDesign;