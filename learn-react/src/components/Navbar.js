import logoIronhack from '../images/logoIronhack.png';
import menuIcon from '../images/menuIcon.png'

function Navbar() {
    return (
        <div className='navbar'>
            <img src={logoIronhack} id="logo"/>
            <img src={menuIcon}/>
        </div>
    );
  }
 
  
export default Navbar;
  