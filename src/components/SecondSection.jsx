import Image1 from "../assets/image-1.png";
import Image2 from "../assets/image-2.png";
import Image3 from "../assets/image-3.png";
import Image4 from "../assets/image-4.png";

const SecondSection = () => {
  return (
    <>
      <div className="lg:flex justify-between p-5 lg:pl-[10em] lg:pr-[5em] lg:py-[5em] items-center mt-5 lg:mt-0">
        <div className="flex flex-col gap-4">
          <hr className="w-[10%] bg-yellow-400 border-0 h-1" />
          <p className="font-bold font-nunito w-[100%] text-lg lg:w-[80%] text-gray-600">
            See why over 100,000 teams choose TeamFlow.com
          </p>
        </div>

        <div className="mt-5 lg:mt-0 flex justify-between lg:w-[50%]">
          <img src={Image1} alt="" width={50} />
          <img src={Image2} alt="" width={50} />
          <img src={Image3} alt="" width={50} />
          <img src={Image4} alt="" width={50} />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
