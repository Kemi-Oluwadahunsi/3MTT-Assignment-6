import MaskGroup from "../assets/Group-76.png";

const FourthSection = () => {
  return (
    <div className="flex items-center justify-center pt-[2em]">
      <div className="flex flex-col items-center justify-center w-[75%] text-gray-600 font-nunito">
        <div className="flex flex-col lg:flex-row lg:gap-[10em]">
          <div className="lg:w-[50%]">
            <img src={MaskGroup} alt="" style={{ objectFit: "contain" }} />
          </div>

          <div className="flex flex-col lg:mt-[4em] gap-[1em] lg:w-[40%]">
            <h2 className=" font-bold text-[2em]">24/7 Customer Support</h2>
            <hr className="w-[10%] bg-yellow-400 border-0 h-1" />
            <p>
              Our team is here to give you personalized support within the hour
              available 24/7. In accordance with our commitment to providing
              superior and professional service. Join daily live webinars, watch
              our tutorials, or browse through our knowledge base
            </p>
            <div className="mt-2 lg:mt-5">
              <button className="py-1 px-4 lg:py-3 lg:px-7 bg-yellow-400  lg:text-xl rounded-lg text-black text-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
