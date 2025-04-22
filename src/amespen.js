
import explor from './assets/images/DataExplr.jpg';
import clean from './assets/images/DataClean.jpg';
import dataviz from './assets/images/dataviz.jpg';
import expavg   from './assets/images/expavg.gif';
import line from './assets/images/linebystate.gif';
import show from './assets/images/presentation.gif'


function dataspen() {
    return (
        <>
      


        <h1>How Americans Spend</h1>
            <p>
            Following the U.S. Bureau of Economic Analysis, the release of Personal Consumption by State Measures the spending in goods and services purchased by, and on behalf of, households’ state of residence in the fifty states and the District of Columbia. 
            <br />
            MEDIA:Tableau, Google Spreadsheet
            </p>
            <h2>Source:</h2>
                <p>U.S. Bureau of Economic Analysis, Personal Consumption Expenditures: Services: Financial Services and Insurance for Hawaii [HIPCEFININS], retrieved from FRED, Federal Reserve Bank of St. Louis; https://fred.stlouisfed.org/series/HIPCEFININS, April 11, 2025.
                </p>

            
            
                <div>
                    <h1>Data Exploration</h1>

                    <p>The original tables contain records from 1997 to 2023. For the following analysis, consider the years from 2013 to 2023.</p>
                    
                    <img src={explor}
                    alt= "exp"  
                    /> 

                   <h1>Data Cleaning</h1> 
                   <p>Dataset size: 20 fields in 1224 rows
                    < br/>
                    No empty fields, consis data, correct type, and format.
                   </p>
                    <img src={clean}
                    alt= "clean"  
                    /> 

                    <h1>Analysis</h1>
                     <p>The following analysis considers the last update in February 2025 and considers years from 2013 to 2023. During the years 2013 and 2023, Annual Per Capita Expenditure Averages. After the District of Columbia, Massachusetts, Connecticut, and New Hampshire reported the highest Annual Per Capita Expenditure on Average between 2013 and 2023.</p>
                     <img src={dataviz}
                    alt= "dataviz"  
                    /> 
                    <p>Between 2013 and 2023, the major expenditure lines were Services (defined as products that cannot be stored or inventoried and are usually consumed at the place and time of their purchase), Goods(Tangible products that can be stored or inventoried ), and Household (consisting of the actual and imputed consumption expenditures for services and residents households). Food, Energy, and Health are not the largest contributors to the increase in the average spending. This trend goes through all states.</p>
                    <img src={expavg}
                    alt= "expavg"  
                    /> 

                    <p>This trend goes through all states. Finally, expenditure lines by state</p>
                    <img src={line}
                    alt= "line"  
                    /> 
                </div>
                <div>
                    <h1>Presentation</h1>
                    <p>Introducing the Annual Per Capita Expenditure Average 2023- 2023. Followed by dynamic visualizations of the expenditure lines on average, and finally, the highest lines of expenditure by state contrast 2022 and 2023. 
                    </p>
                     
                    <img src={show}
                    alt= "show"  
                    />   
                    
                   
                </div>

             

            
                
              

              


        
        </>
    )
}

export default dataspen;