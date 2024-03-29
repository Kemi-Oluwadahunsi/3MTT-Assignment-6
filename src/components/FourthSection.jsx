import CircleRoll from "../assets/Group-32.png";

const FourthSection = () => {
  return (
    <div className="flex items-center justify-center pb-7 lg:pb-[10em]">
      <div className="flex flex-col gap-[5em] items-center justify-center w-[75%] text-gray-600 font-nunito">
        <h1 className="text-2xl lg:text-[3em] font-bold">
          Our <span className="text-yellow-400">Features</span>
        </h1>

        <div className="lg:flex gap-[10em]">
          <div className="lg:w-[50%]">
            <img src={CircleRoll} alt="" style={{ objectFit: "contain" }} />
          </div>

          <div className="flex flex-col justify-center gap-[1em] lg:w-[40%] mt-10 lg:mt-0">
            <h2 className=" font-bold text-lg lg:text-[2em]">
              Manage everything in one workspace
            </h2>
            <hr className="w-[10%] bg-yellow-400 border-0 h-1" />
            <p className="text-base">
              Planning, tracking and delivering your team’s best work has never
              been easier. An integrated workspace that’s simple to use,
              TeamFlow lets you spend less time managing your work and more time
              actually doing it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
