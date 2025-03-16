import xImage from '../assets/1.png'
import facebookImage from '../assets/2.png'
import instagramImage from '../assets/3.png'
import githubImage from '../assets/4.png'
import visaImage from '../assets/Visa.png'
import mastercardImage from '../assets/MasterCard.png'
import paypalImage from '../assets/Paypal.png'
import applepayImage from '../assets/ApplePay.png'
import googlepayImage from '../assets/GooglePay.png'
import './footer.css'

export default function Footer(){

    return(
        <>
        <footer id="footer">
        <div className="wrap">
        <div className="menu_footer1">
                <h5>SHOP.CO</h5>
                <p className="footer_text">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <p id="browsers">
                    <a href=""><img src={xImage} alt="x"/></a>
                    <a href=""><img src={facebookImage} alt="Facebook"/></a>
                    <a href=""><img src={instagramImage} alt="Instagram"/></a>
                    <a href=""><img src={githubImage} alt="GitHub"/></a>
                </p>
            </div>

            <div className="menu_footer1">
                <h5>COMPANY</h5>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div className="menu_footer2">
                <h5>HELP</h5>
                <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy & Policy</a></li>
                </ul>
            </div>
            <div className="menu_footer3">
                <h5>FAQ</h5>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                </ul>
            </div>
            <div className="menu_footer4">
                <h5>RESOURCES</h5>
                <ul>
                    <li><a href="#">Free eBooks</a></li>
                    <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How to - Blog</a></li>
                    <li><a href="#">Youtube Playlist</a></li>
                </ul>
            </div>             
        </div>
        <div className="clearfix">

        </div>
        <hr className="separator2"/>

            <p>Shop.co &copy; 2000 - 2023. All Rights Reserved</p>
            
            <div className="payments">
                <p id="payoptions">
                    <a href=""><img src={visaImage} alt="Visa"/></a>
                    <a href=""><img src={mastercardImage} alt="MasterCard"/></a>
                    <a href=""><img src={paypalImage} alt="PayPal"/></a>
                    <a href=""><img src={applepayImage} alt="ApplePay"/></a>
                    <a href=""><img src={googlepayImage} alt="GooglePay"/></a>
                </p>
            </div>
        
    </footer>
    
        </>
    );

}