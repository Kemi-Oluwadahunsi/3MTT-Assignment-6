import Email from "../assets/email-1.png";
import Arrow from "../assets/Group.png";

const EleventhSection = () => {
  return (
    <div className="bg-blue-50 flex flex-col items-center justify-center font-nunito py-[3em] lg:py-[8em] gap-10 px-5 lg:px-0">
      <div className="flex flex-col gap-1 items-center justify-center">
        <p className="text-orange-500 font-extrabold">Support</p>
        <p className="text-gray-700 font-extrabold text-[1.2em] lg:text-[2em]">
          Subscribe Newsletter & get
        </p>
        <p className="text-gray-700 text-[.9em] lg:text-[1.5em] font-medium">Company News</p>
      </div>

      <div className="px-3 py-2 bg-white lg:w-[30em] rounded-xl">
        <div className="flex items-center justify-between w-full gap-2">
          <img src={Email} alt="" />
          <input type="email" placeholder="Your email" className="w-[60%] text-gray-400 outline-none text-[.8em] lg:text-base"/>
          <div className="flex gap-1 lg:gap-2 py-1 px-3 items-center justify-center bg-indigo-500 text-white rounded-xl">
            <img src={Arrow} alt="" width={20}/>
            <button className="lg:px-1 text-sm lg:text-base">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EleventhSection;
