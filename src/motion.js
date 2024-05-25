import Type from './assets/images/type.gif';
import Cover from './assets/images/cover.gif';
import Trip from './assets/images/triptothemoon.gif';
import Campaign from './assets/images/campaign.gif';
function motion() {
    return (
        <>

        <h1>Motion Graphics </h1>

        <h2>Cover Animation</h2>
        <p>
            Incorporating Photoshop edition, here are the latest covers, I have created for WellSpa360 in After Effects.
        </p>

        <img src={Cover}
        alt= "cover"  
        /> 

        <h2>Marketing Campaigns</h2>

        <p>
            Content creation sample of social media on AfterEffects 
        </p>
        <img src={Campaign}
        alt= "Campaign"  
        /> 

        <h2>After effects</h2>
        <p>
            For several years, I've experimented and manipulated type to create the illusion of movement in after effects. 
        </p>
        <img src={Type}
        alt= "type"  
        /> 


        

        <h2>Title Sequence</h2>
        <p>
           During my senior year, I've created this project, I'm so proud to share here. A title sequence for the first science fiction movie, The Trip to the Moon. 
           The typeface is Sunken Sans, a typeface, I had created previously.
        </p>

        <img src={Trip}
        alt= "triptothemoon"  
        /> 

        </>

        )
    }
    
export default motion;