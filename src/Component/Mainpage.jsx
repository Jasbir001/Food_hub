import { Link } from 'react-router-dom'
import './Style.css'
import Menu from './Menu'
const Mainpage= ()=>{
    return(
        <>
        <div className="main">
            <h1 className="main-title">Fuel Your Cravings, Instantly </h1>
            <h4 className="main-text">
                Discover, taste, and order your favorite meals — all in one smart hub made for food lovers.
            </h4>
            <Link className="btn" to="/Menu">Explore Menu</Link>
        </div>
        </>
    )
}
export default Mainpage