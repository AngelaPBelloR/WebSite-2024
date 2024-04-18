import WebDesing from './assets/images/web01.gif';
import WebTrans from './assets/images/web02.gif';
import WebPort from './assets/images/web03.gif';

function WebDesignAndDev() {
    return (
        <>
            <h1>Web Design and Development </h1>

            <h2>JavaScript Transitions</h2>
            <p>
            From the most recent to the first one, here are the Portfolio Web Sites I developed in Visual Studio Code. I started from zero, which helped me to grasp development tools and experiment with different perspectives to solve the same problem: showcase my skills and projects. The image below shows the third website I encoded. My approach was mainly on JavaSrcipt transitions that portraited in the best way my projects.
            </p>
            <img src={WebPort}
            alt= "WebPort"  
            /> 

            <h2>Single Page</h2>
            <p>
            I created a single-page layout based on a template for my second website. Here, the transitions and dark mode utilize Javascript. To see more, please click on the GitHub link.
            </p>
            <img src={WebTrans}
            alt= "WebTrans"  
            /> 

            <h2>Basic Grid Web</h2>
            <p>
            Here is the first website I created. Simply grid showing projects animated by simple CCS effects.
            </p>
            <img src={WebDesing}
            alt= "WebDesign"  
            />
        </>
    )
}

export default WebDesignAndDev;