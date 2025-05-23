import React from "react";
import Booking from "./components/Booking.jsx";

const ThirdSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-between sm:px-[5rem] annoying:px-[5rem] md:w-full pl-[4rem] pr-0 lg:px-[8rem] ">

      {/* first half */}
      <div className="flex flex-col space-y-10 md:w-full">
        <div className="flex flex-col space-y-4  ">
          <h2 className="text-gray-500 font-bold">Easy and fast</h2>
          <h1 style={{lineHeight: "1.2"}} className="max-sm: text-4xl smTab:text-5xl sm:text-5xl md:text-4xl lg:text-5xl font-bold">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h1>
        </div>

        <div className="flex flex-col gap-10">
          <Booking
            url="/src/assets/images/Group 7.png"
            title="Choose Destination"
          />
          <Booking url="/src/assets/images/Group 12.png" title="Make Payment" />
          <Booking
            url="/src/assets/images/Group 11.png"
            title="Reach Airport on Selected Date"
          />
        </div>
      </div>

      {/* image */}
      <div className="min-w-[1vw] hidden flex min-h-[60vh]  items-end smTab:hidden md:flex justify-end lg:w-full justify-center">
        <img src="/src/assets/images/Image.png" alt="Awesome Card" className="thirdSection w-full md:max-w-5xl annoying:max-w-lg lg:max-w-2xl "/>
      </div>
    </section>
  );
};

export default ThirdSection;
