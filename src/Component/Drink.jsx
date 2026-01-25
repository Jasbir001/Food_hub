import DrinkList from "./DrinkList";
import Footer from "./Footer"
import Header from "./Header"

const Drink = ()=>{
     const takedrink = DrinkList();
     
    return(
        <>
    
    <Header/>
        <div className="card-main" >
        {
        takedrink.map((vibe)=>{
                return(
                    <div className="card-drink">
                        <div className="text-card">
                            <h2 className="card-title">{vibe.name}</h2>
                            <p className="card-text">{vibe.des}</p>
                            <p className="card-price">Rs. {vibe.price}</p>
                        </div><br/>
                        <div className="image-card">
                            <img  style={{height:"100%", width:"100%"}} src={vibe.src} alt={vibe.name} />
                        </div>
                    </div>
                )
            })
        }
        </div><br />
    <Footer/>
        </>
        
    )
}
export default Drink