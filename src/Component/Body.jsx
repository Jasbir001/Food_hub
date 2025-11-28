import { Link } from 'react-router-dom'
import './Style.css'
const Body = ()=>{
    return(
        <>
        <div className="body">
            <div className="container-image">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src="Img1.jpg" className="carousel-img" id="hi" alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="Img2.jpg" className="carousel-img" id="hi"alt="..."/>
                          </div>
                          <div className="carousel-item">
                            <img src="Img3.jpg" className="carousel-img" id="hi" alt="..."/>
                          </div>
                        </div>
                        
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                        </div>
            </div>
            <div className="container-text">
            <h2>Smart Way to Satisfy Your Cravings</h2>
                    <ul>
                        <li>
                        <p>One stop hub for every craving — from street food to gourmet meals.</p></li>
                        <li><p>AI-powered recommendations for your perfect meal — personalized, fast, and delicious.</p></li>
                        <li><p>Scroll, drool, and order. Your favorite food is just a click away!</p></li>
                    </ul>                        
                    <Link className="menu btn button" to="/Menu">Explore Menu</Link>
                    <Link className="btn button" to="/Recipe">Explore Receipe</Link>
            </div>
        </div>
        </>
    )
}

export default Body