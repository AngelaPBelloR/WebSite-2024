
import exploration from './assets/images/exploration.jpg';
import bubbles from './assets/images/explo.jpg';
import teens from './assets/images/teens.gif'




function data() {
    return (
        <>
        <h1>Overview</h1>
            <p>
            The National Health Interview Survey-Teen (NHIS-Teen) was an online health survey of teenagers ages 12-17. NHIS-Teen was developed with the input of health and survey experts from both academia and the government, covering a range of health topics. This included doctor visits, sleep, physical activity, injuries, mental health, social and emotional supports, experiences with bullying, discrimination, and other life stressors. This data visualization project I developed analitical and persuation skills by recommeding practical solutions to skateholders. 
            <br />
            MEDIA:Tableau, Excel
            
            </p>
            

            <h1>Design Process</h1>

            <p>.</p>
            
                <div>
                    <h2>Exploration</h2>    
                    <p>Based on the survey findings, segments of the teen population are being under-supported</p>
                    <p>Here is a sample of the data exploration analysis:</p>
                    
                    <img src={exploration}
                    alt= "exp"  
                    /> 

                   <p>Here a bubble diagram helps to emphasize main stresors and under-support areas</p>
                    <img src={bubbles}
                    alt= "bubbles"  
                    /> 
                     
                </div>
                <div>
                    <h2>Presentation</h2>
                    <p>Here we can infer from the data conclusions and recommendations</p>
                     
                    <img src={teens}
                    alt= "teens"  
                    />   
                    
                   
                </div>

             

            
                
              

              


        
        </>
    )
}

export default data;