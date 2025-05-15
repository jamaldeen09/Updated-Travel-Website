import { footerInfo } from "../../../MapLinks/LinksMapping";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="min-h-64  py-4 px-4 flex justify-between max-sm: flex-col sm:flex-col md:flex-col annoying:flex-col space-y-10 lg:flex-row ">
      <div className="flex justify-center space-y-5 w-full pl-14 max-w-xs  flex-col ">
        
          <h1 className="text-4xl font-bold">Jadoo.</h1>

          <h3 style={{ fontWeight: "500" }}>
            Book your trip in minute, get full <br /> Control for much longer
          </h3>
        
      </div>

      <div className="flex justify-between flex-wrap items-center w-full  max-w-9xl px-6 max-sm: gap-10 sm:gap-10  md:space-y-0">
        {footerInfo.map((infoObject, index) => {
          return (
            <div  key={index} className="flex flex-col space-y-4 px-10">
              <h1 className="font-bold text-xl">{infoObject.infoHead}</h1>

              <ul>
                <li>{infoObject.infoOne}</li>
                <li>{infoObject.infoTwo}</li>
                <li>{infoObject.infoThree}</li>
              </ul>
            </div>
          );
        })}

        <div className="flex flex-col space-y-6">
          <div className="flex space-x-5">
            <FontAwesomeIcon
              icon={faFacebookF}
              style={{ borderRadius: "50%" }}
              className="py-[0.6rem] px-[0.8rem] bg-white shadow-md"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ borderRadius: "50%" }}
              className="py-[0.6rem] px-[0.8rem] bg-gradient-to-br from-purple-500 via-yellow-400 to-blue-300 text-white"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={{ borderRadius: "50%" }}
              className="py-[0.6rem] px-[0.8rem] bg-white shadow-md"
            />
          </div>

          <div className="flex flex-col space-y-4">
            <h3 style={{ fontWeight: "600" }} className="text-md">
              Discover our app
            </h3>

            <div className="flex space-x-3  items-center justify-center">
              <div className="bg-black text-white flex items-center rounded-xl px-3 py-2 space-x-2">
                <img
                  src="/src/assets/images/google-play 1.png"
                  alt=""
                  className=""
                />

                <div className="flex flex-col">
                  <h4 className="font-bold text-sm">GET IT ON</h4>
                  <h4>GOOGLE PLAY</h4>
                </div>
              </div>

              <div className="bg-black text-white flex items-center rounded-xl px-3 py-2 space-x-3">
                <FontAwesomeIcon icon={faAppleAlt} className="text-2xl" />
                <div className="flex flex-col space-y-1">
                  <h4 className="font-bold text-[0.7rem]">Available on the</h4>

                  <h4 className="font-bold text-md">Apple Store</h4>
                </div>
              </div>
            </div>

            {/* footer icons ending  */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
