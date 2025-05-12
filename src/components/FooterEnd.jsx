import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterEnd = () => {
  return (
    <div className="min-h-16 bg-aquaishDark poppins flex justify-between px-10  items-center">
      <div className=" sm:w-[40vw] md:w-1/2 text-sm">
        <h1>&copy;2024 SmartNotes. All Rights Reserved. @Jamaldeen.o</h1>
      </div>

      <div className="flex gap-4">
        <FontAwesomeIcon icon={faFacebookF} className="max-sm: w-[2.5vw] sm:w-[2vw] md:w-[2vw] annoying:w-[1.5vw] lg:w-[1vw] text-white p-2 rounded-full bg-aquaish"/>
        <FontAwesomeIcon icon={faLinkedinIn} className="max-sm: w-[2.5vw] sm:w-[2vw] md:w-[2vw] annoying:w-[1.5vw] lg:w-[1vw] text-white p-2 rounded-full bg-aquaish" />
        <FontAwesomeIcon icon={faTwitter} className="max-sm: w-[2.5vw] sm:w-[2vw] md:w-[2vw] md:w-[2vw]  annoying:w-[1.5vw] lg:w-[1vw] text-white p-2 rounded-full bg-aquaish"/>
        <FontAwesomeIcon icon={faYoutube} className="max-sm: w-[2.5vw] sm:w-[2vw] md:w-[2vw]  annoying:w-[1.5vw] lg:w-[1vw] text-white p-2 rounded-full bg-aquaish"/>
      </div>
    </div>
  );
};

export default FooterEnd;
