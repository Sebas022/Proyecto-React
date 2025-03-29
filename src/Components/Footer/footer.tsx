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
        <footer className="bg-gray-200 py-6 mt-30 h-120">
      <div className="max-w-[1110px] mx-auto  ">
        {/* Newsletter Section */}
        <div className="relative -mt-25 mb-15 bg-black text-white p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center">
            <div className="w-500 px-20">
                 <h2 className="h2titulonew text-xl font-bold text-center md:text-left text-[40px]">
                     STAY UP TO DATE ABOUT OUR LATEST OFFERS
                </h2>
            </div>
          <div className="btnnew flex flex-col gap-2 w-full max-w-sm">
                <input
                type="email"
                placeholder="Enter your email address"
                className="border rounded-full p-3 w-full text-gray-500 bg-white"
                />
                <button className="subscribebutton bg-white text-black font-semibold p-3 rounded-full w-full">
                        Subscribe to Newsletter
                </button>
         </div>

         </div>

        {/* Footer Content */}
        <div className="grid grid-cols-6 md:grid-cols-5 gap-10">
          <div className=''>
            <h5 className="shopcofooter relative -top-2.5 text-[32px]">SHOP.CO</h5>
            <p className="text-sm text-gray-600 mt-2">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-2 mt-10">
              <a href=""><img src={xImage} alt="X" /></a>
              <a href=""><img src={facebookImage} alt="Facebook" /></a>
              <a href=""><img src={instagramImage} alt="Instagram" /></a>
              <a href=""><img src={githubImage} alt="GitHub" /></a>
            </div>
          </div>

          <div className='text-start ml-10'>
            <h5 className="h5titulofooter">COMPANY</h5>
            <ul className="text-sm text-gray-600 flex flex-col mt-5 gap-y-5">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className=''>
            <h5 className="h5titulofooter">HELP</h5>
            <ul className="text-sm text-gray-600 mt-5 flex flex-col gap-y-5">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h5 className="h5titulofooter">FAQ</h5>
            <ul className="text-sm text-gray-600 mt-5 flex flex-col gap-y-5">
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div>
            <h5 className="h5titulofooter">RESOURCES</h5>
            <ul className="text-sm text-gray-600 mt-5 flex flex-col gap-y-5">
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
        <hr className="w-500 text-gray-300 mt-10 mb-5" />
      </div>
    {/* Contenedor del copyright y métodos de pago */}
    <div className="flex justify-between items-center">
      <p className='text-gray-500'>Shop.co &copy; 2000 - 2023. All Rights Reserved</p>
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