import MapImage from "../assets/Group-71.png";

const FifthSection = () => {
  return (
    <div className="flex items-center justify-center pt-[2em] bg-blue-50 pb-[5em]">
      <div className="flex items-center justify-center w-[75%] text-gray-600 font-nunito">
        <div className="flex flex-col lg:flex-row gap-[2em] lg:gap-[10em]">
          <div className="flex flex-col justify-center gap-[1em] lg:w-[40%]">
            <h2 className=" font-bold text-xl lg:text-[2em]">Visualize work with Views</h2>
            <hr className="w-[10%] bg-blue-600 border-0 h-1" />
            <p>
              View data as a map, calendar, timeline, kanban, and more The
              easy-to-use, visual interface lets any team member jump in and get
              started, no training required.
            </p>
          </div>
          <div className="lg:w-[50%]">
            <img src={MapImage} alt="" style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
