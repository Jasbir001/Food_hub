import Footer from "./Footer"
import Header from "./Header"
import './Style.css'


const About=()=>
{
    return(
        <>
        <Header/>
        <h1 className="about-title">About Us</h1>
        <div className="about">
            
                   <div className="about-text">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim soluta animi cupiditate amet quibusdam atque sit molestiae non? Voluptatem explicabo veniam, similique alias illum nesciunt et qui ratione porro animi neque? Officia quaerat nostrum excepturi, deserunt, sint nesciunt tenetur commodi, suscipit dolor aliquid vel? Iste, quidem velit. Harum exercitationem maiores tempora iure repellat. Fuga sequi laborum aliquid nesciunt consequatur non placeat quo. Nemo similique aliquid nostrum reiciendis aliquam officia necessitatibus?</p>
                    <div className="div-main"><div className="div"></div>
                    <div className="div"></div>
                    <div className="div"></div>
                    </div>
                    </div>
                    <div className="about-img">
                    <img  style={{height:"100%", width:"100%"}} src="samosa.jpg" alt="samosa" />
                    </div>
                    </div>
    
        <Footer/>
        </>
    )
}
export default About