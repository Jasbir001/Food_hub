import FastFoodList from "./FastFoodList"
import Header from "./Header";
import Footer from "./Footer";
import './Style.css'

const Food = () =>{
        const eatfood = FastFoodList();
    return(
      <>
        <Header/>
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
    <Footer/>
    </>
   
    )
}
export default Food