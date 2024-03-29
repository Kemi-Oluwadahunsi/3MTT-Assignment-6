import Logo from "../assets/Company_Logo-blue.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <div className=" text-purple-900 pt-[2em] lg:pt-[5em] pb-[1em] lg:pb-[3em] px-5 lg:px-[5em] font-poppins">
      <div className="flex flex-col lg:flex-row justify-between gap-[2em] lg:gap-0">
        <div className="flex flex-col gap-[2em] lg:gap-[5em]  ">
          <div className="flex flex-col gap-[1em]">
            <img src={Logo} alt="" width={200}/>
            <p>All Rights Reserved © teamflow.com</p>
          </div>

          <div>
            <h3 className="font-bold">Address</h3>
            <p>26 W 12th St. New York, NY 10342, NYC</p>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-bold">Social Media</h3>
            <div className="flex justify-between items-center w-[60%] lg:w-[70%]">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
              <img src={Youtube} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold">Product</h3>
          <ul className="flex flex-col gap-[1em]">
            <li>Product</li>
            <li>Pricing</li>
            <li>Enterprice</li>
            <li>Partners</li>
            <li>Affiliate</li>
            <li>Integrations</li>
            <li>Developers</li>
            <li>Students</li>
            <li>Work OS</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3  className="font-bold">Team</h3>
          <ul className="flex flex-col gap-[1em]">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Find a Partner</li>
            <li>In the News</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3  className="font-bold">Solutions</h3>
          <ul className="flex flex-col gap-[1em]">
            <li>Project Management</li>
            <li>Marketing</li>
            <li>CRM and Sales</li>
            <li>Software Development</li>
            <li>Constructions</li>
            <li>Creative Production</li>
            <li>Remote Work</li>
            <li>HR</li>
            <li>IT</li>
            <li>See More Solutions</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3  className="font-bold">Resources</h3>
          <ul className="flex flex-col gap-[1em]">
            <li>Knowledge Base</li>
            <li>Guides</li>
            <li>Daily Webminars</li>
            <li>Community</li>
            <li>Customer Stories</li>
            <li>Templates</li>
            <li>Professional Services</li>
            <li>Video Tutorials</li>
            <li>Blog</li>
            <li>Podcast</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
