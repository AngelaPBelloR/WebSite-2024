import blender from './assets/images/blender.gif';
import molecules from './assets/images/molecules.jpg'
import tdab from'./assets/images/logoabtd.gif'
function ThreeD() {
    return (
        <>
            <h1>3 Dimensional Design </h1>

            <h2>Blender</h2>
            <p>
                As I mention, I love crating animations. These are models in Blender. Here a sample of wine label.
            </p>
            <img src={blender}
            alt= "threeD"  
            /> 

            <p>Here is my logo animated</p>

            <img src={tdab}
            alt= "logotd"  
            /> 

            <h2>Maya</h2>
            <p>
                For my senior year at NIU, I've created molecules animation in collaboration with engineering faculty.
            </p>
            <img src={molecules}
            alt= "maya"  
            /> 


        </>
    )
}

export default ThreeD;