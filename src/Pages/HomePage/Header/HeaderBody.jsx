import ButtonComponent from "../../../components/ButtonComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const HeaderBody = () => {
  return (
    <div className="headerBody min-h-[90vh] flex items-center justify-between
    max-sm: px-10 sm:px-12 md:px-20 lg:px-[6rem]">
      {/* header body text */}
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          <h3 className="text-red-500 font-bold">
            BEST DESTINATIONS AROUND THE WORLD
          </h3>

          <h1 className="max-sm: text-5xl sm:text-7xl md:text-6xl lg:text-7xl font-bold ">
            Travel, enoy <br /> and live a new <br /> and full life
          </h1>
        </div>

        <div className="flex flex-col space-y-5">
          <h3 style={{ lineHeight: "1.6" }} className="lg sm:xl">
            Built Wicket longer admire do barton vanity itself do in it. <br />{" "}
            Preferred to sportsmen it engrossed listening, Park gate <br /> 
            they west hard for the.
          </h3>

          <div className="flex space-x-10 sm:space-x-20">
            <button className="findOutBtn text-white px-3 py-3 rounded-md shadow-xl max-sm: text-sm sm:text-lg">
              Find out more
            </button>

            <div className="flex space-x-4 items-center">
              <button
                style={{ borderRadius: "50%" }}
                className="playBtn py-[0.6rem] px-3 text-sm shadow-xl"
              >
                <FontAwesomeIcon icon={faPlay} />
              </button>

              <h2>Play Demo</h2>
            </div>
          </div>
        </div>
      </div>

      {/* image container */}
      <div className="max-sm: hidden mid:hidden sm:hidden lg:flex justify-center items-center">
          <img src="/src/assets/images/Traveller 1.png" alt="" className="annoying:w-[39vmax] lg:w-[40max]"/>
      </div>
    </div>
  );
};

export default HeaderBody;


