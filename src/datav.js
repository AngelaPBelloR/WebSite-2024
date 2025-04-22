import line from './assets/images/introspen.jpg';
import teens from './assets/images/introteens.jpg'
import { Link } from 'react-router-dom';




function data() {
    return (
        <>
         <div className="parallel">
            <div className="framel">
            <img
                    src={line}
                    alt="line"
                /> 
        
            </div>
            <div className="framer">
                <h1>American Spending</h1>
                <p>Following the U.S. Bureau of Economic Analysis, the release of Personal Consumption by State Measures the spending in goods and services purchased by, and on behalf of, households’ state of residence in the fifty states and the District of Columbia.</p>
                
                <Link to="/amespen">
                    <button>Learn more...
                    </button>
                </Link>
                
            </div>
        </div>
        <div className="parallel">
            <div className="framel">
            <img
                    src={teens}
                    alt="teens"
                /> 
        
            </div>
            <div className="framer">
                <h1>Teens Support</h1>
                <p>The National Health Interview Survey-Teen (NHIS-Teen) was an online health survey of teenagers ages 12-17. NHIS-Teen was developed with the input of health and survey experts from both academia and the government, covering a range of health topics.</p>
                
                <Link to="/datateens">
                    <button>Learn more...
                    </button>
                </Link>
                
            </div>
        </div>


     

             

            
                
              

              


        
        </>
    )
}

export default data;