import ScrollFadeIn from "../Animations/ScrollFadeIn";

const ThirdSection = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col ">
      <div className="flex flex-col gap-10 textHover ">
        <ScrollFadeIn>
          <h1
            style={{ lineHeight: "1.5" }}
            className=" text-white font-bold poppins text-center verySmall:text-[1rem] max-sm: text-xl sm:text-2xl"
          >
            The real-time synchronization and Al-
            <br /> powered organization have made our <br /> workflow more
            efficient than ever.
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="flex space-x-5 text-md justify-center">
            <p className="text-white">Sarah Johnson</p>
            <p>
              <span className="text-white brightness-[80%] poppins">
                TechSavvv Solutions
              </span>
            </p>
          </div>
        </ScrollFadeIn>
      </div>

      <ScrollFadeIn>
      <div className="w-full min-h-[90vh] flex justify-center items-center px-10">
        <img src="/src/assets/images/Frame 4.png" alt="Awesome Picture of Phone On Table" className="img max-sm: w-[50vmax] sm:w-[70vmax] md:w-[70vmax] annoying:w-[70vmax] lg:w-[55vmax]"/>
      </div>
      </ScrollFadeIn>
    </section>
  );
};

export default ThirdSection;
