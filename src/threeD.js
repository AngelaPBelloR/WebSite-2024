import blender from './assets/images/blender.gif';
import molecules from './assets/images/molecules.jpg'
import tdab from'./assets/images/logoabtd.gif'
function ThreeD() {
    return (
        <>
            <h1>3 Dimensional Design </h1>

            <h2>Blender</h2>
            <p>
                As I mention before, I love creating animations. These are models in Blender. Here a sample of wine bottle and label. As you can see, I create a model of a bottl, the biggest challenge was to create the illusion of glass. Also, I illustrate and design the label.
            </p>
            <img src={blender}
            alt= "threeD"  
            /> 

            <p>Here is an animation of my logo. My personal identiy contains AB, which stands for, of course, Angela Bello. Also, there a conection between both letters conforming the Eye of Horus, an Eghyp symbol of restoration. This idea reinforce my stand as adesigner “I create meaningful and compelling designs by combining symbols and colors to enlighten themind of the viewer”</p>

            <img src={tdab}
            alt= "logotd"  
            /> 

            <h2>Maya</h2>
            <p>
                For my senior year at NIU, I have created molecules animation for a collaboration with engineering faculty. For confidentially, unfortunatelly I can not show the whole project.
            </p>
            <img src={molecules}
            alt= "maya"  
            /> 


        </>
    )
}

export default ThreeD;