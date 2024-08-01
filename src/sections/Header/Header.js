import './Header.css';
import  logo from '../../assets/images/logo.png';
import Navitem ,{ NavitemDropDown } from '../../components/nav-item/Navitem';
import{Link}  from 'react-router-dom'
 
function Header(props) {
  return (
    <>
    
    <div className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
        <div className="container">
            <a href="#" className="navbar-brand"><img src={logo}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <Navitem><Link to="#hero" className="nav-link">Get Started</Link></Navitem>
                    <Navitem><Link to="/" className="nav-link">Home</Link></Navitem>
                    <NavitemDropDown >
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Learn</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </NavitemDropDown>
                    <Navitem><Link to="/profile" className="nav-link">Profile</Link></Navitem>
                    <Navitem><a href="./index-ar.html" className="nav-link">عربي</a></Navitem>
                </ul>
            </div>
        </div>
    </div>
      
    
    </>
  );
}

export default Header;