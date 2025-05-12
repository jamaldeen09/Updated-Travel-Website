import ScrollFadeIn from "../Animations/ScrollFadeIn";

const FirstSection = () => {
  return (
    <div className="min-h-64 bg-black flex flex-col justify-center items-center px-2 bg-black">
      <div className="flex flex-col gap-10 textHover">
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
    </div>
  );
};

export default FirstSection;
