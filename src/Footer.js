import ink from './assets/images/in.png';
import inst from './assets/images/insta.jpg';
import { Link } from "react-router-dom";
import git from './assets/images/github.jpg';
import etsy from './assets/images/etsy.jpg';


function Footer() {
    return (
        <>

            <div className="foot">
                <div className='logoab'>
               
               </div>
                <div className='banner'>
                    <table>
                        <tr>
                            <th>
                                <Link to="/" className="nav-item">Home</Link>
                            </th>
                            <th>
                                <Link to="/about" className="nav-item">About</Link>
                            </th>
                            <th>
                                <Link to="/projects" className="nav-item">Projects</Link>
                            </th>
                            <th>
                                <Link to="/contact" className="nav-item">Contact</Link>
                            </th>
                            <th>
                                <Link to="/gallery" className="nav-item">Gallery</Link>
                            </th>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td><a href="https://www.etsy.com/shop/AngelaBelloR" target="_blank" rel="noreferrer">Shop</a></td>
                            <td>
                                <Link to="/webdesignanddev" className="nav-item">Web Design</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>

                                <Link to="/motion" className="nav-item">Motion Graphics</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>

                                <Link to="/threeD" className="nav-item">3D Design</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>

                                <Link to="/editorial" className="nav-item">Editorial</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>

                                <Link to="/logodesign" className="nav-item">Logo Design</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>

                                <Link to="/uiux" className="nav-item">UI/UX</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>

                                <Link to="/icons" className="nav-item">Icons Book</Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                </div>

                <div className='icon'>

                    <div>
                        <a href="https://www.linkedin.com/in/angela-patricia-bello-rodriguez/" target="_blank" rel="noreferrer"  ><img src={ink}
                            alt="linkedin"
                        /></a>
                    </div>
                    <div>
                        <a href="https://github.com/AngelaPBelloR" target="_blank" rel="noreferrer" ><img src={git}
                            alt="github"
                        /></a>
                    </div>
                    <div>
                        <a href="https://www.etsy.com/shop/AngelaBelloR" target="_blank" rel="noreferrer"><img src={etsy}
                            alt="etsy"
                        /></a>
                    </div>

                    <div>
                        <a href="https://www.instagram.com/angela52911/" target='_blank' rel="noreferrer"><img src={inst}
                            alt="instagram"
                        /></a>

                    </div>



                </div>
                <p>© 2024 Angela Bello All Rights Reserved.</p>
                
            </div>
        </>
    )
}

export default Footer