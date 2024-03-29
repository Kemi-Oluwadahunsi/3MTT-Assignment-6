import GraphIcon from "../assets/graph_icon.png"
import FinanceIcon from "../assets/financial_icon.png"
import MarketIcon from "../assets/market_icon.png"
const ThirdSection = () => {
  return (
    <div className="">
      <div className="font-nunito lg:flex flex-col justify-center items-center gap-[5em] py-[5em] lg:py-[10em] text-center">
        <h1 className=" text-2xl lg:text-[3em] font-bold">
          What you <span className="text-yellow-400">can do?</span>
        </h1>

        <div className="lg:flex justify-between items-center gap-[5em] w-[75%] mx-auto mt-10 lg:mt-0">
          <div className="flex flex-col gap-8 text-center justify-center items-center lg:w-[33%]">
            <div className="">
              <img src={GraphIcon} alt="icons" width={50} />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              <h3 className="text-indigo-900 font-bold text-base lg:text-[1.5em]">
                Business Planning
              </h3>
              <p className="text-sm lg:text-lg leading-6 text-gray-600">
                Our Business Plan is a written document describing a company’s
                core business activities.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-center justify-center items-center lg:w-[33%] mt-10 lg:mt-0">
            <div className="">
              <img src={FinanceIcon} alt="icons" width={50} />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              <h3 className="text-indigo-900 font-bold text-base lg:text-[1.5em]">
                Financial Planning
              </h3>
              <p className="text-sm lg:text-lg leading-6 text-gray-600">
                Our expert team sensible decision about their money, to ensure
                they achieve the life goals. A financial plan.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-center justify-center items-center lg:w-[33%] mt-10 lg:mt-0">
            <div className="">
              <img src={MarketIcon} alt="icons" width={50} />
            </div>

            <div className="flex flex-col gap-3 lg:gap-8">
              <h3 className="text-indigo-900 font-bold text-base lg:text-[1.5em]">
                Market Analysis
              </h3>
              <p className="text-sm lg:text-lg leading-6 text-gray-600">
                A market analysis is a quantitative and qualitative assessment
                of a market. It looks into the size of the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection