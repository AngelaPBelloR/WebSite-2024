
import presentation from './assets/images/PressentationEnergy.gif'


function dataenergy (){
    return (
        <>
      
            <div>
                    

                  <h1>Objectives</h1>

                    <h2>Dataset Description:</h2>
                    <p>The dataset was built upon several datasets and processing steps. Statistical review of world energy, International energy data, Energy from fossil fuels, Yearly Electricity Data, Energy Mix, Our World in Data, Income groups, GDP. Refer to the data source.</p>
                    <h2>Usage Type:</h2>
                    <p>Our World in Data,  Creative Commons BY license.<br /> 
                    Energy By: Hannah Ritchie, Pablo Rosado, and Max Roser</p>
                    <h2>Source:</h2>
                    <p>https://github.com/owid/energy-data?tab=readme-ov-file 
                    Time frame 1800–2023 varies by country<br /> 
                    MEDIA:Tableau, Google Spreadsheet</p>        

                    <h1> Key Question for Analysis</h1>
                        
                    <p>What is the electricity consumption per capita?<br />                    
                    How has demand changed over the last few years?<br />    
                    Which one is the main source of Electricity production?<br />    
                    What about the role of renewable sources?</p>
                        

                        
                    <h1>Problem definition</h1>

                    <p>This study aims to visualize the trends in electricity consumption across countries, identify the dominant sources of energy used for electricity generation, and evaluate the evolving contribution of renewable energy sources.
                    </p>
                     <h1>Analysis</h1>

                    <p>Coal has served as the primary energy source for electricity production over the last 40 years, despite growing interest in alternative sources.<br /> 
                    Over the past three decades, the adoption of renewable energy sources has shown a consistent upward trend.<br /> 
                    There is an inverse proportionality between energy consumption and GDP, suggesting that higher levels of economic productivity are associated with reduced energy use.</p>

                     <h1>Solutions</h1>

                    <p>Anticipate future energy demands by analyzing current consumption patterns and identifying primary energy sources, while promoting the expansion of renewable energy initiatives to ensure a sustainable and reliable energy supply.</p>


                     <h1>Conclusion</h1>


                    <p>In conclusion, analyzing specific cases is crucial for evaluating the effectiveness of energy use. By examining current consumption patterns and energy sources, we can generate informed projections of future energy needs and guide sustainable energy planning.</p>
                                                                

              
            </div>
            <div>
                    <h1>Presentation</h1>
                  
                     
                    <img src={presentation}
                    alt= "presentation"  
                    />   
                    
                   
            </div>

             

            
                
              

              


        
        </>
    )
}

export default dataenergy;