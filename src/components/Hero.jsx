import Header from "./Header";
import Lady from "../assets/Group-43.png";
import Man from "../assets/Group-55.png";
import LeftChat from "../assets/Group-46.png";
import RightChat from "../assets/Group-12.png";
import Ring from "../assets/Ellipse-9.png";
import Arrow from "../assets/Vector-2.png";
import Circle from "../assets/Ellipse-7.png";
import Triangle from "../assets/Polygon-2.png";
import CircleArrow from "../assets/Group-45.png";
import Square from "../assets/Rectangle-10.png";

const Hero = () => {
  return (
    <div className=" block lg:flex">
      <div className="hero-background lg:mx-5">
        <div className="relative">
          <Header />

          <div className="flex justify-between w-[100%] lg:w-[50%] lg:ml-[8em] ">
            <div className="flex flex-col gap-[1em] mt-[2em] items-center lg:items-start">
              <p className="bg-white p-2 w-[55%] rounded-lg">
                👋 Welcome to TeamFlow
              </p>
              <div className="flex flex-col gap-[2em] items-center lg:items-start">
                <h1 className="text-white text-[2em] lg:text-[3.7em] font-extrabold font-nunito text-center lg:text-start">
                  Work the way that works for you
                </h1>
                <hr className="w-[10%] h-1 bg-teal-400" />
                <p className="text-white lg:text-[1.4em] w-[85%] text-center lg:text-start">
                  Create, Build. Collaborate and ship products very faster
                </p>

                <button className="p-2 lg:py-3 lg:px-7 bg-yellow-400 w-[40%] text-xl rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute top-[5em] lg:top-[11em] left-[80%] lg:left-[45%]">
            <img src={Circle} alt="" className="w-[70%] lg:w-[100%]" />
          </div>
          <div className="absolute top-[10em] lg:top-[12em] left-[90%] lg:left-[70%]">
            <img src={Square} alt="" className="w-[70%] lg:w-[100%]" />
          </div>
          <div className="absolute top-[18em] lg:top-[25em] left-[30%] lg:left-[52%]">
            <img src={CircleArrow} alt="" className="w-[70%] lg:w-[100%]" />
          </div>
          <div className="absolute top-[25em] lg:top-[35em] left-[20%] lg:left-[45%]">
            <img src={Triangle} alt="" className="w-[70%] lg:w-[100%]" />
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-[30%]">
        <div className="flex items-center justify-center gap-[3em] py-16 text-[1.2em]">
          <button className="text-gray-500">Login</button>

          <button className="py-2 px-4 bg-yellow-400 rounded-lg">
            Sign up
          </button>
        </div>

        <div className="ml-[-10em] h-[40em] w-[38em] ">
          <div className="flex justify-end pl-20 w-[100%] ">
            <img
              src={Lady}
              alt=""
              className=" object-contain z-50 absolute right-[28%] "
              width={350}
            />

            <div className="z-50 relative ">
              <img
                src={RightChat}
                alt=""
                className="w-full object-cover "
                width={700}
              />

              <div className="absolute top-[8em] left-[23em]">
                <img src={Ring} alt="ring" />
              </div>
              <div className="absolute top-[8em] left-[21em]">
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </div>

          <div className="flex justify-end -mt-[5em] w-full ">
            <div className="absolute right-[13em] z-50 top-[25em] ">
              <img src={LeftChat} alt="" className=" w-full object-cover " />
            </div>
            <div className="">
              <img src={Man} alt="" className=" object-contain " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
