import blender from './assets/images/blender.gif';
import molecules from './assets/images/molecules.jpg'

function ThreeD() {
    return (
        <>
            <h1>3 Dimensional Design </h1>

            <h2>Blender</h2>
            <p>
                I've created models in 3D Blender. Here a sample of wine label.
            </p>
            <img src={blender}
            alt= "threeD"  
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