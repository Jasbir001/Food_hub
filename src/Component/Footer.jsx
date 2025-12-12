
import './Style.css'
const Footer= ()=>{
    return(
        <>
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-about">
            <h2>Food<span>Hub</span></h2>
                <p>
                  Your one-stop destination for tasty delights — from local favorites to global flavors.
                  Order smart, eat happy, and satisfy every craving!
                </p>
            </div>

        <div className="footer-links">
            <h4>Quick Contact</h4>
            <ul>
              <li><a href="tel:+917494996995">📲Mobile</a></li>
              <li><a href="https://www.instagram.com/_jasbirrr"><i className="bi bi-whatsapp fs-5"></i>InstaGram</a></li>
              <li><a href="https://wa.me/917494996995"><i className="bi bi-whatsapp fs-5"></i>Whatsapp</a></li>
              <li><a href="https://www.linkedin.com/in/jasbir-verma"><i className="bi bi-git fs-5"></i>LinkeDin</a></li>
            </ul>
        </div>

        <div className="footer-contact">
            <h4>Contact</h4>
            <p> +91 74949-96995</p>
            <p> foodhub@contact.com</p>
        </div>
  </div>
 
    <p>@2015 FoodHub. All rights reserved.</p>

</footer>

        </>
    )
}
export default Footer