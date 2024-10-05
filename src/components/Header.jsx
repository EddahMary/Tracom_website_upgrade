import "./NavBar.css"
import photo from "../assets/tracom_services_cover.jpg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='main-header'>
          <nav className="main-nav">
            <img src={photo} alt="tracom-logo" className="main-logo" />
            <ul id="main-nav-ul">
              <li><Link to={"/home"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/services"}>Services</Link></li>
              <li><Link to={"/team"}>Team</Link></li>
              <li><Link to={"/contact"}>Contact</Link></li>

              <button type="submit" style= {
                {
                  backgroundColor: 'lightblue',
                  border: 'none',
                  borderRadius: '20px',
                  width: '60px',
                  height: '30px',
                }
              }>
                <Link to={"/registrationform"}>Sign up</Link>
              </button>
              <button type = "submit" style={
                {
                  backgroundColor: 'lightblue',
                  border: 'none',
                  borderRadius: '20px',
                  width: '60px',
                  height: '30px',
                }
              }>
                <Link to={"/loginform"}>Log in</Link>
                </button>      
            </ul>
          </nav>
    </div>
  );
}

export default Header