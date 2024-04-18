import blender from './assets/images/blender.gif';
import molecules from './assets/images/molecules.jpg'
import tdab from'./assets/images/logoabtd.gif'
function ThreeD() {
    return (
        <>
            <h1>3 Dimensional Design </h1>

            <h2>Blender</h2>
            <p>
                As I mentioned before, I love creating animations. These are models in Blender. Here is a sample of a bottle of wine and label. As you can see, I modeled a bottle. The biggest challenge was to create the illusion of glass. Also, I illustrate and design the label.
            </p>
            <img src={blender}
            alt= "threeD"  
            /> 

            <p>
            Here is an animation of my logo. My personal identity contains AB, which stands for, of course, Angela Bello. Also, there is a connection between both letters conforming to the Eye of Horus, an Eghyp symbol of restoration. This idea reinforces my stand as a designer: “I create meaningful and compelling designs by combining symbols and colors to enlighten the mind of the viewer.”
            </p>

            <img src={tdab}
            alt= "logotd"  
            /> 

            <h2>Maya</h2>
            <p>
            For my senior year at NIU, I created molecule animation in collaboration with the engineering faculty. For confidentially, unfortunately, I can not show the whole project.
            </p>
            <img src={molecules}
            alt= "maya"  
            /> 


        </>
    )
}

export default ThreeD;