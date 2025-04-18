import "./app.css";
import phone from "./assets/Iphone Image.png";
import Phones from "./assets/Phones.png";
import smartWatch from "./assets/Smart Watches.png";
import cameras from "./assets/Cameras.png";
import headphones from "./assets/Cameras.png";
import computer from "./assets/Computers.png";
import gaming from "./assets/Gaming.png";
import { Link } from "react-router";

export default function Home() {
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

        <div className="flex gap-8 max-[68rem]:flex-col max-[35rem]:flex-row max-[35rem]:gap-5">
          <div className="flex gap-8 max-[35rem]:flex-col max-[35rem]:gap-5 ">
            <div className="bg-neutral-300 pt-6 pb-6 pl-12 pr-12 w-fit rounded-xl max-[23rem]:pt-4 max-[23rem]:pb-4 max-[23rem]:pl-8 max-[23rem]:pr-8 ">
            <Link to={""}>
              <img src={Phones} alt="" className="w-12" />
              <p>Phones</p>
            </Link>
            </div>

            <div className="bg-neutral-300 pt-6 pb-6 pl-12 pr-12 w-fit rounded-xl max-[23rem]:pt-4 max-[23rem]:pb-4 max-[23rem]:pl-8 max-[23rem]:pr-8">
            <Link to={""}>
              <img src={smartWatch} alt="" className="w-12" />
              <p>Phones</p>
            </Link>
            </div>

            <div className="bg-neutral-300 pt-6 pb-6 pl-12 pr-12 w-fit rounded-xl max-[23rem]:pt-4 max-[23rem]:pb-4 max-[23rem]:pl-8 max-[23rem]:pr-8">
            <Link to={""}>
              <img src={cameras} alt="" className="w-12" />
              <p>Phones</p>
            </Link>
            </div>
          </div>

          <div className="flex gap-8 max-[35rem]:flex-col max-[35rem]:gap-5">
          <div className="bg-neutral-300 pt-6 pb-6 pl-12 pr-12 w-fit rounded-xl max-[23rem]:pt-4 max-[23rem]:pb-4 max-[23rem]:pl-8 max-[23rem]:pr-8">
            <Link to={""}>
              <img src={headphones} alt="" className="w-12" />
              <p>Phones</p>
            </Link>
            </div>

            <div className="bg-neutral-300 pt-6 pb-6 pl-12 pr-12 w-fit rounded-xl max-[23rem]:pt-4 max-[23rem]:pb-4 max-[23rem]:pl-8 max-[23rem]:pr-8">
            <Link to={""}>
              <img src={computer} alt="" className="w-12" />
              <p>Phones</p>
            </Link>
            </div>

            <div className="bg-neutral-300 pt-6 pb-6 pl-12 pr-12 w-fit rounded-xl max-[23rem]:pt-4 max-[23rem]:pb-4 max-[23rem]:pl-8 max-[23rem]:pr-8">
            <Link to={""}>
              <img src={gaming} alt="" className="w-12" />
              <p>Phones</p>
            </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 pb-20">
        <div>
          <h2 className="text-3xl underline">
            New Arrival
          </h2>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </div>
  )
}
