
import FastFoodList from './FastFoodList'
import Header from './Header'
import './Style.css'
import DrinkList from './DrinkList'
const Menu= ()=>{
     const eatfood = FastFoodList();
     const takedrink = DrinkList();
    return(
        <>
        <Header/>
        <h3 className="about-title">Menu</h3> <br/>

        <div className="card-main">
                        {
                        eatfood.map((fast)=>{
                                return(
                                <div className="card-food">
                                      <div className="text-card">
                                        <h2 className="card-title">{fast.name}</h2>
                                        <p className="card-text">{fast.des}</p>
                                        <p>Rs. {fast.price}</p>
                                      </div>
                                      <div className="image-card">
                                        <img  style={{height:"100%", width:"100%"}} src={fast.src} alt={fast.name} />
                                      </div>
                                </div>

                                )
                            })
                        }
        </div>
        
                                        <br/>
                                        <br/>
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
        </div>
        <br />
        <br/>
        </>
    )
}
export default Menu