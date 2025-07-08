import energy from './assets/images/introenergy.jpg';
import line from './assets/images/introspen.jpg';
import { Link } from 'react-router-dom';




function data() {
    return (
        <>
         <div className="parallel">
            <div className="framel">
            <img
                    src={energy}
                    alt="energy"
                /> 
        
            </div>
            <div className="framer">
                <h1>Study Case Energy</h1>
                <p>The indicators presented in this analysis encompass key data related to overall energy consumption, the energy mix, and the electricity mix, along with additional metrics that offer broader context. For this case study, the focus is specifically on electricity, examining trends in consumption patterns, sources of electricity generation, and the evolving role of renewables within the electricity sector.</p>
                
                <Link to="/energy">
                    <button>Learn more...
                    </button>
                </Link>
                
            </div>
        </div>
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


     

             

            
                
              

              


        
        </>
    )
}

export default data;