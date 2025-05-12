import ScrollFadeIn from "../Animations/ScrollFadeIn";
import ButtonComponent from "./ButtonComponent";

const SixthSection = () => {
  return (
    <section style={{borderBottom: "1px solid #017373"}} className="min-h-screen flex flex-col gap-[6rem] pt-20 pb-10">
      <div className="flex flex-col gap-10 textHover ">
        <ScrollFadeIn>
          <h1
            style={{ lineHeight: "1.5" }}
            className=" text-white font-bold poppins text-center verySmall:text-[1.5rem] max-sm: text-xl sm:text-2xl"
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
       <div className="flex justify-between min-h-[60vh] max-sm: px-[2rem] sm:px-[3rem] lg:px-[10rem]" >
        {/* big screens */}
        <div className="flex flex-col items-start justify-center gap-10 textHover">
            <h1 style={{lineHeight: "1.2"}} className="text-white font-bold max-sm: text-4xl sm:text-4xl md:text-5xl lg:text-5xl">
                Unlock the Full <br /> 
                Potential of <br />
                <span className="text-aquaish">
                    SmartNotes
                </span>
            </h1>
            
            <p className="text-white brightness-[80%]">
                Ready to streamline your waterflow and boost your productivity?<br />
                Start your free trial of SmartNotes today and experience  the power <br />
                of smart note-taking.
            </p>

            <ButtonComponent buttonTxt="Sign Up for Free"
            bg="bg-gradient-to-r from-aquaish to-aquaishDark py-3 "
            hoverEffect="generalScale"/>
        </div>

        <div className="flex justify-center items-center hidden lg:flex">
           <img src="/src/assets/images/CTA shapes.png" alt="" className="annoying:h-[30vh] lg:h-[50vh]"/>
        </div>
      </div>
      </ScrollFadeIn>
    </section>
  );
};

export default SixthSection;
