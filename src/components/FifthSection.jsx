import RightImage from "../assets/Group-65.png";

const FifthSection = () => {
  return (
    <div className="flex items-center justify-center pt-[2em] bg-blue-50 pb-10 lg:pb-0">
      <div className="flex items-center justify-center lg:w-[75%] text-gray-600 font-nunito">
        <div className="flex flex-col-reverse lg:flex-row gap-2 lg:gap-[10em]">
          <div className="flex flex-col justify-center gap-[1em] lg:w-[40%] px-10 lg:px-0">
            <h2 className=" font-bold text-lg lg:text-[2em]">Set up in minutes</h2>
            <hr className="w-[10%] bg-yellow-400 border-0 h-1" />
            <p>
              Get started fast with hundreds of visual and customizable
              templates - or create your own. Use our free online template maker
              to create beautiful template in minutes. Choose from hundreds of
              pre-made templates and tell stories with data with our easy
              drag-and-drop infographic creator.
            </p>
          </div>
          <div className="lg:w-[50%] px-2 lg:px-0">
            <img src={RightImage} alt="" style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
