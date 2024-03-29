import Dropdown from "../assets/Vector-3.png";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <div className="hidden lg:flex justify-between px-[7rem] items-center py-16 ">
            <div>
              <img src={Logo} alt="logo" />
            </div>

            <ul className="flex gap-[2em] items-center text-white text-[1.05em]">
              <div className="flex gap-3 items-center">
                <li>Products</li>
                <img src={Dropdown} alt="dropdown" />
              </div>

              <div className="flex gap-3 items-center">
                <li>Solution</li>
                <img src={Dropdown} alt="dropdown" />
              </div>
              <li>Enterprise</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className=" flex justify-between items-center py-5 px-5 lg:hidden">
            <div>
              <img src={Logo} alt="logo" width={150} />
            </div>

            <i className="fa-solid fa-bars text-white text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
