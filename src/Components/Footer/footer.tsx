import xImage from '../../assets/1.png';
import facebookImage from '../../assets/2.png';
import instagramImage from '../../assets/3.png';
import githubImage from '../../assets/4.png';
import visaImage from '../../assets/Visa.png';
import mastercardImage from '../../assets/MasterCard.png';
import paypalImage from '../../assets/Paypal.png';
import applepayImage from '../../assets/ApplePay.png';
import googlepayImage from '../../assets/GooglePay.png';
import './footer.css'

export default function Footer(){

    return(
        <>
        <footer className="bg-gray-200 py-6 mt-30 pb-20">
      <div className="max-w-[1110px] mx-auto h-100">
        {/* Newsletter Section */}
        <div className="relative bottom-25 bg-black text-white p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
            <div className="w-500 px-20">
                 <h2 className="h2titulo text-xl font-bold text-center md:text-left text-[40px]">
                     STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h2>
            </div>
          <div className="btnnew flex flex-col gap-2 w-full max-w-sm">
                <input
                type="email"
                placeholder="Enter your email address"
                className="border rounded-full p-3 w-full text-gray-500 bg-white"
                />
                <button className="bg-white text-black font-semibold p-3 rounded-full w-full">
                        Subscribe to Newsletter
                </button>
         </div>

         </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-30">
          <div>
            <h5 className="font-bold">SHOP.CO</h5>
            <p className="text-sm text-gray-600 mt-2">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-2 mt-2">
              <a href=""><img src={xImage} alt="X" /></a>
              <a href=""><img src={facebookImage} alt="Facebook" /></a>
              <a href=""><img src={instagramImage} alt="Instagram" /></a>
              <a href=""><img src={githubImage} alt="GitHub" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold">COMPANY</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">HELP</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">FAQ</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold">RESOURCES</h5>
            <ul className="text-sm text-gray-600 mt-2">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

    <div className="clearfix"></div>

    <hr className="separator2 my-4" />

    {/* Contenedor del copyright y métodos de pago */}
    <div className="flex justify-between items-center">
      <p>Shop.co &copy; 2000 - 2023. All Rights Reserved</p>
      <div className="payments flex gap-4">
        <a href="" className="w-16 h-10"><img src={visaImage} alt="Visa" /></a>
        <a href="" className="w-16 h-10"><img src={mastercardImage} alt="MasterCard" /></a>
        <a href="" className="w-16 h-10"><img src={paypalImage} alt="PayPal" /></a>
        <a href="" className="w-16 h-10"><img src={applepayImage} alt="ApplePay" /></a>
        <a href="" className="w-16 h-10"><img src={googlepayImage} alt="GooglePay" /></a>
      </div>
    </div>
  </div>
</footer>
  
        </>
    );

}