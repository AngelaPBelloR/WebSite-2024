import WebDesing from './assets/images/web01.gif';
import WebTrans from './assets/images/web02.gif';
import WebPort from './assets/images/web03.gif';

function WebDesignAndDev() {
    return (
        <>
            <h1>Web Design and Development </h1>

            <h2>JavaScript Transitions</h2>
            <p>
                From the most recent to the first one, here are the Portfolio Web Sites I've created. All of them from scratch, help me to better understand depelopment tools and experiment with different perspectives to solve the same problem: showcase my skills and projects. The third website I created, my approach was focus mainly on JavaSrcipt transitons. Also, portraiting in the best way my projects, I incorporated animation tools and profesional experience.
            </p>
            <img src={WebPort}
            alt= "WebPort"  
            /> 

            <h2>Single Page</h2>
            <p>
                For my second website, I created a single page layout based on a template. Here the transitons and dark mode utilizing Javascript. 
            </p>
            <img src={WebTrans}
            alt= "WebTrans"  
            /> 

            <h2>Basic Grid Web</h2>
            <p>
                Here is the first website I created. A basic grid showing projects animated by simple CCS effects.
            </p>
            <img src={WebDesing}
            alt= "WebDesign"  
            />
        </>
    )
}

export default WebDesignAndDev;