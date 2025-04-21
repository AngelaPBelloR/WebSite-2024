import line from './assets/images/linebystate.gif';
import teens from './assets/images/teens.gif'
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
                <p></p>
                
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
                <p></p>
                
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