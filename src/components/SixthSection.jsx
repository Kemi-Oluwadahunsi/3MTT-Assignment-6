import CircleDot from "../assets/Ellipse-117.png";
import BrandImage from "../assets/Group-66.png";

const SixthSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-[2em] lg:gap-[5em] items-center text-center justify-center text-gray-600 font-nunito py-10 lg:py-[10em] px-4 lg:px-[20em]">
        <h1 className="text-2xl lg:text-[3em] font-bold lg:w-[70%]">
          <span className="text-yellow-400">Integrate </span> with your existing
          tools in a few clicks
        </h1>

        <div className="flex flex-col gap-[2em]">
          <div className="object-cover relative">
            <img
              src={CircleDot}
              alt=""
              className="absolute left-[3em] lg:left-[10em] hidden lg:block"
            />
            <img src={BrandImage} alt="" className="pt-7" />
          </div>

          <div className="relative">
            <img
              src={CircleDot}
              alt=""
              className="absolute top-[55%] left-[74%] hidden lg:block"
            />
            <button className="py-1 px-4 lg:py-3 lg:px-7 bg-yellow-400  lg:text-xl rounded-lg text-black text-bold">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
