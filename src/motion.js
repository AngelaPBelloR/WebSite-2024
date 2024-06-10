import Type from './assets/images/type.gif';
import Cover from './assets/images/cover.gif';
import Trip from './assets/images/triptothemoon.gif';
import Campaign from './assets/images/campaign.gif';

import teaser from './assets/images/teaser.gif';
function motion() {
    return (
        <>

        <h1>Motion Graphics </h1>


        <h2>Teaser Campaign</h2>
        <p>
        In my senior year, I illustrated May for a School project. Today, she is the protagonist of the teaser for my website relaunch. 
        </p>

        <img src={teaser}
        alt= "teaser"  
        /> 

        <h2>Cover Animation</h2>
        <p>
        I currently work for WellSpa360 Masgazine where I  creted motion grphics for digital magazine cover and features articles. I incorporate Photoshop edition and motion in AfterEffects. I also collaborated with marketing campaigns by creating eblast and social media content.
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
           During my senior year, I've created a title sequence for the first science fiction movie, The Trip to the Moon by Gorges Méliès. 
           Typeface: Sunken Sans, also by Angela Bello.
        </p>

        <img src={Trip}
        alt= "triptothemoon"  
        /> 

        </>

        )
    }
    
export default motion;