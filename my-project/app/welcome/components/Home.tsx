import "./app.css";
import phone from "./assets/Iphone Image.png";
import Phones from "./assets/Phones.png";
import smartWatch from "./assets/Smart Watches.png";
import cameras from "./assets/Cameras.png";
import headphones from "./assets/Cameras.png";
import computer from "./assets/Computers.png";
import gaming from "./assets/Gaming.png";
import { Link } from "react-router";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import Iphone14Pro from "./assets/Iphone 14 pro 1.png";
import Camera from "./assets/camera.png";
import SmartWatch from "./assets/smartwatch.png";
import HeadPhones from "./assets/headphones1.png";
import Watch from "./assets/watch.png";
import Zfold from "./assets/z-fold-5.png";
import earpods from "./assets/earpods.png";
import Ipad from "./assets/ipad9.png";
import { useState } from "react";
import img39 from "./assets/ChatGPT Image Apr 22, 2025, 01_23_54 PM.png";
import img63 from "./assets/image 64.png";
import img41 from "./assets/image 41.png";
import Macbook from "./assets/Macbook 1.png";
import iphoneGold from "./assets/Iphone 14 pro 1 (1).png";
import iphoneGray from "./assets/Iphone 14 pro 1 (2).png";
import Logo from "./assets/Logo Vector.png";


export default function Home() {
  const [isLiked, setIsLiked] = useState(false);

  const Like = () => {
    setIsLiked(!isLiked)
  };

  

  return (
    <div className="grid">
          <section id="banner"
      className="text-white flex justify-center items-center gap-20 max-md:flex-col max-md:text-center  max-md:gap-1 overflow-hidden">
        <div className="gap-6 m-6">
          <div className="flex flex-col">
            <div className="text-[#909090] text-4xl max-[59rem]:text-2xl">Pro.Beyond.</div> <br />
            <div className="text-[#FFF] font-thin text-7xl max-[59rem]:text-5xl">IPhone 14 <span className="text-white font-bold">Pro</span></div>
          </div>

          <p className="text-[#909090] text-xl mt-6">Created to change everything for the better. For everyone</p>

          <button 
          className="mt-6 p-4 pl-13 pr-13 border-amber-50 border-2 rounded-sm cursor-pointer transition-all hover:-translate-y-0.5 duration-300 hover:shadow-lg shadow-amber-50">
            Shop Now
            </button>
        </div>

        <div className="m-3 mb-0">
          <img src={phone} alt="" className="max-md:h-[400px]" />
        </div>
          </section>

      <section 
      id="Categorys"
      className="grid w-full justify-center pt-20 pb-20">
        <div className="pb-8">
          <h2 className="text-2xl">
          Browse By Category
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center">

{/* პირველი ნაწილი */}
<div className="flex flex-wrap justify-center gap-8 max-[37rem]:flex-col items-center">
  <div className="bg-neutral-300 w-40 h-40 max-[370px]:w-32 max-[370px]:h-32 rounded-xl flex items-center justify-center">
    <Link to="/Contact" className="flex flex-col items-center text-center">
      <img src={Phones} alt="" className="w-12 mb-2" />
      <p>Phones</p>
    </Link>
  </div>

  <div className="bg-neutral-300 w-40 h-40 max-[370px]:w-32 max-[370px]:h-32 rounded-xl flex items-center justify-center">
    <Link to={""} className="flex flex-col items-center text-center">
      <img src={smartWatch} alt="" className="w-12 mb-2" />
      <p>Smart Watches</p>
    </Link>
  </div>

  <div className="bg-neutral-300 w-40 h-40 max-[370px]:w-32 max-[370px]:h-32 rounded-xl flex items-center justify-center">
    <Link to={""} className="flex flex-col items-center text-center">
      <img src={cameras} alt="" className="w-12 mb-2" />
      <p>Cameras</p>
    </Link>
  </div>
</div>

{/* მეორე ნაწილი */}
<div className="flex flex-wrap justify-center gap-8 max-[37rem]:flex-col items-center">
  <div className="bg-neutral-300 w-40 h-40 max-[370px]:w-32 max-[370px]:h-32 rounded-xl flex items-center justify-center">
    <Link to={""} className="flex flex-col items-center text-center">
      <img src={headphones} alt="" className="w-12 mb-2" />
      <p>Headphones</p>
    </Link>
  </div>

  <div className="bg-neutral-300 w-40 h-40 max-[370px]:w-32 max-[370px]:h-32 rounded-xl flex items-center justify-center">
    <Link to={""} className="flex flex-col items-center text-center">
      <img src={computer} alt="" className="w-12 mb-2" />
      <p>Computers</p>
    </Link>
  </div>

  <div className="bg-neutral-300 w-40 h-40 max-[370px]:w-32 max-[370px]:h-32 rounded-xl flex items-center justify-center">
    <Link to={""} className="flex flex-col items-center text-center">
      <img src={gaming} alt="" className="w-12 mb-2" />
      <p>Gaming</p>
    </Link>
  </div>
</div>
</div>
</section>
    


      <section className=" grid justify-evenly pt-20 pb-20">
      <div className="">
        <h2 className="text-3xl underline">New Arrival</h2>
      </div>

      <div className="grid grid-cols-4 max-[30rem]:grid-cols-1 gap-8 mt-12 max-xl:grid-cols-3 max-[60rem]:grid-cols-2 max-[30rem]:place-items-center">

         {/* ბარათი 1 */}
         <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px]  bg-neutral-200 rounded-xl p-6  flex flex-col justify-items-center items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <img src={Iphone14Pro} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Apple iPhone 14 Pro Max 128GB Deep Purple</p>
            <p className="mt-4 text-2xl font-bold">$900</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>

        {/* ბარათი 2 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
             <img src={Camera} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Blackmagic Pocket CinemaCamera 6k</p> <br />
            <p className="mt-4 text-2xl font-bold">$2535</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>

        {/* ბარათი 3 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <img src={SmartWatch} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Apple Watch Series 9 GPS <br /> 41mm Starlight Aluminium</p>
            <p className="mt-4 text-2xl font-bold">$399</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>

        {/* ბარათი 4 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <img src={HeadPhones} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Apple AirPods Max <br /> Over-Ear Headphones</p>
            <p className="mt-4 text-2xl font-bold">$549</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>    
    
    {/* ბარათი 5 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <img src={Watch} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Samsung Galaxy Watch6 Classic 47mm Black</p>
            <p className="mt-4 text-2xl font-bold">$369</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>

        {/* ბარათი 6 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
             <img src={Zfold} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Galaxy Z Fold5 Unlocked | 256GB | Phantom Black</p>
            <p className="mt-4 text-2xl font-bold">$900</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>

        {/* ბარათი 7 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <img src={earpods} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Galaxy Buds FE Graphite</p> <br />
            <p className="mt-4 text-2xl font-bold">$99.99</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>

        {/* ბარათი 8 */}
        <div className="w-[280px] max-[30rem]:w-[80%] max-[41rem]:w-[200px] max-[41rem]:h-[400px] h-[440px] bg-neutral-200 rounded-xl p-6 flex flex-col justify-between items-center text-center">
          <div className="w-full flex justify-end text-2xl text-gray-600 cursor-pointer transition-colors duration-300 hover:text-red-500">
            <FaRegHeart />
          </div>
          <div className="flex-grow flex flex-col items-center justify-center">
            <img src={Ipad} alt="" className="w-44 h-44 object-contain" />
            <p className="mt-4 text-sm">Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021</p>
            <p className="mt-4 text-2xl font-bold">$398</p>
          </div>
          <button className="mt-4 px-6 py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>
   
      </div>
      </section>


      <section>
      <div className="w-full flex justify-center">
      <div className="grid grid-cols-4 w-full max-w-[1440px] mx-auto max-[60rem]:grid-cols-2 max-[30rem]:grid-cols-1">
       
        <div className="bg-white h-[530px] p-6 box-border flex flex-col justify-between">
          <div className="grid justify-center overflow-hidden">
            <img src={img39} alt="" className="w-[280px]" />
          </div>
          <div className="grid gap-5">
            <h2 className="text-3xl">Popular Products</h2>
            <p className="text-[14px] text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="p-4 border-black border-2 rounded-sm cursor-pointer transition-all hover:-translate-y-0.5 duration-300 hover:shadow-lg shadow-amber-50">
              Shop Now
            </button>
          </div>
        </div>

    
        <div className="bg-[#F9F9F9] h-[530px] p-6 box-border flex flex-col justify-between">
          <div className="grid justify-center overflow-hidden">
            <img src={img63} alt="" className="w-[290px]" />
          </div>
          <div className="grid gap-5">
            <h2 className="text-3xl">Ipad Pro</h2>
            <p className="text-[14px] text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="p-4 border-black border-2 rounded-sm cursor-pointer transition-all hover:-translate-y-0.5 duration-300 hover:shadow-lg shadow-amber-50">
              Shop Now
            </button>
          </div>
        </div>
    
        <div className="bg-[#EAEAEA] h-[530px] p-6 box-border flex flex-col justify-between">
          <div className="grid justify-center overflow-hidden">
            <img src={img41} alt="" className="w-[290px]" />
          </div>
          <div className="grid gap-5">
            <h2 className="text-3xl">Samsung Galaxy </h2>
            <p className="text-[14px] text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="p-4 border-black border-2 rounded-sm cursor-pointer transition-all hover:-translate-y-0.5 duration-300 hover:shadow-lg shadow-amber-50">
              Shop Now
            </button>
          </div>
        </div>
    
        <div className="bg-[#2C2C2C] text-white h-[530px] p-6 box-border flex flex-col justify-between">
          <div className="grid justify-center overflow-hidden">
            <img src={Macbook} alt="" className="w-[290px] mt-10" />
          </div>
          <div className="grid gap-5">
            <h2 className="text-3xl">Macbook Pro</h2>
            <p className="text-[14px] text-[#909090]">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="p-4 border-white border-2 rounded-sm cursor-pointer transition-all hover:-translate-y-0.5 duration-300 hover:shadow-lg shadow-amber-50">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      </div>
      </section>



      <section>
        <div className="mt-20 grid justify-center px-2">
          <div>
            <h2 className="text-3xl">Discounts up to -50%</h2>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-8 mb-20 max-[56rem]:grid-cols-2 max-[29rem]:grid-cols-1">
            <div className="flex flex-col gap-6 px-4 py-6 bg-[#F6F6F6] w-fit text-center rounded-[10px]">
              <div className="flex justify-end text-2xl">
                <FaRegHeart/>
              </div>

              <div className="flex justify-center">
                <img src={iphoneGold} alt="" />
              </div>

              <div className="grid max-w-[236px] gap-4">
                <p className="text-[17px] font-medium max-[65rem]:text-[14px]">Apple iPhone 14 Pro 512GB Gold (MQ233)</p>
                <p className="font-semibold text-2xl">$1437</p>
                <button className="mx-4 py-4 bg-black text-white rounded-lg hover:cursor-pointer hover:shadow-2xl">Buy Now</button>
              </div>
            </div>

            <div className="flex flex-col gap-6 px-4 py-6 bg-[#F6F6F6] w-fit text-center rounded-[10px]">
            <div className="flex justify-end text-2xl">
                <FaRegHeart/>
              </div>

              <div className="flex justify-center">
                <img src={HeadPhones} alt="" />
              </div>

              <div className="grid max-w-[236px] gap-4">
                <p className="text-[17px] font-medium max-[65rem]:text-[14px]">AirPods Max Silver Starlight Aluminium </p>
                <p className="font-semibold text-2xl">$549</p>
                <button className="mx-4 py-4 bg-black text-white rounded-lg hover:cursor-pointer hover:shadow-2xl">Buy Now</button>
              </div>
            </div>

            <div className="flex flex-col gap-6 px-4 py-6 bg-[#F6F6F6] w-fit text-center rounded-[10px]">
            <div className="flex justify-end text-2xl">
                <FaRegHeart/>
              </div>

              <div className="flex justify-center">
                <img src={SmartWatch} alt="" />
              </div>

              <div className="grid max-w-[236px] gap-4">
                <p className="text-[17px] font-medium max-[65rem]:text-[14px]">Apple Watch Series 9 GPS 41mm Starlight Aluminium </p>
                <p className="font-semibold text-2xl">$399</p>
                <button className="mx-4 py-4 bg-black text-white rounded-lg hover:cursor-pointer hover:shadow-2xl">Buy Now</button>
              </div>
            </div>

            <div className="flex flex-col gap-6 px-4 py-6 bg-[#F6F6F6] w-fit text-center rounded-[10px]">
            <div className="flex justify-end text-2xl">
                <FaRegHeart/>
              </div>

              <div className="flex justify-center">
                <img src={iphoneGray} alt="" />
              </div>

              <div className="grid max-w-[236px] gap-4">
                <p className="text-[17px] font-medium max-[65rem]:text-[14px]">Apple iPhone 14 Pro 1TB Gold (MQ2V3)</p>
                <p className="font-semibold text-2xl">$1499</p>
                <button className="mx-4 py-4 bg-black text-white rounded-lg hover:cursor-pointer hover:shadow-2xl">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section 
      id="summerSale"
      className="w-full h-[448px]">
     <div className="grid place-items-center h-full">
       <div className="text-white flex flex-col items-center text-center gap-6 max-[50rem]:backdrop-blur-sm rounded-2xl p-2">
         <div>
           <h3 className="text-6xl font-thin max-[56rem]:text-5xl max-[35rem]:text-4xl ">
             Big Summer <span className="font-bold">Sale</span>
           </h3>
           <p className="text-[#787878] mt-2 max-[50rem]:text-white">
             Commodo fames vitae vitae leo mauris in. Eu consequat.
            </p>
          </div>

          <button className="text-white w-fit h-fit px-12 py-5 border-white border-2 rounded-sm cursor-pointer transition-all hover:-translate-y-0.5 duration-300 hover:shadow-lg shadow-amber-50">
           Shop Now
          </button>
        </div>
      </div>
    </section>

      <footer className="grid place-items-center max-[51]:h-fit bg-black text-white px-2 py-15 max-[51]:py-0">
        <div className="flex justify-around max-w-[1200px] w-full gap-7 max-[51rem]:flex-col max-[51rem]:place-items-center ">
          <div className="grid gap-3 max-[51rem]:text-center max-[51rem]:place-items-center">
            <img src={Logo} className="w-17"/>
            <p className="max-w-[355px] text-[#CFCFCF] -mt-24 max-[54rem]:max-w-[300px] max-[51rem]:-mt-0">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
          </div>

          <div className="grid grid-cols-2 max-[25rem]:grid-cols-1 max-[51rem]:text-center max-[25rem]:gap-y-8">
          <div>
            <ul className="grid gap-4">
              <li className="font-semibold">Services</li>
              <li><a href="#" className="text-[#CFCFCF]">Bonus program</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Gift cards</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Credit and payment</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Service contracts</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Non-cash account</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Payment</a></li>
            </ul>
          </div>

          <div>
            <ul className="grid gap-4">
              <li className="font-semibold">Assistance to the buyer</li>
              <li><a href="#" className="text-[#CFCFCF]">Find an order</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Terms of delivery</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Exchange and return of goods</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Guarantee</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Frequently asked questions</a></li>
              <li><a href="#" className="text-[#CFCFCF]">Terms of use of the site</a></li>
            </ul>
          </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
