import { NavLink } from 'react-router-dom'
import './Style.css'

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#ff6600' : '#1a1919ff',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Header(){
    return(
      
    <>
    <nav className="navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar">
                <a className="navbar-brand" href="#">Food Hub</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={navLinkStyle}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Food' style={navLinkStyle}>Food</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/Drink' style={navLinkStyle}>Drinks</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/About' style={navLinkStyle}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </>
    )
}

export default Header