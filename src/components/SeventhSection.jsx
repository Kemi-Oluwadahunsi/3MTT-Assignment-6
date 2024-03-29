import MaskGroup from "../assets/Mask-Group.png";

const FourthSection = () => {
  return (
    <div className="flex items-center justify-center pt-[2em] pb-10 lg:pb-[10em]">
      <div className="flex flex-col items-center justify-center w-[75%] text-gray-600 font-nunito">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[10em]">
          <div className="lg:w-[50%]">
            <img src={MaskGroup} alt="" style={{ objectFit: "contain" }} />
          </div>

          <div className="flex flex-col justify-center gap-[1em] lg:w-[40%]">
            <h2 className=" font-bold text-lg lg:text-[2em]">
              Save time with Automations
            </h2>
            <hr className="w-[10%] bg-yellow-400 border-0 h-1" />
            <p>
              Automate the repetitive work in seconds so you can avoid human
              error and focus on what matters. It gives the impression of
              software that its highly automated which implies that it is good
              for client for who want to save time and manage team members
              easily.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
