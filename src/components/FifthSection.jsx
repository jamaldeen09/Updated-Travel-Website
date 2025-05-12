import ScrollFadeIn from "../Animations/ScrollFadeIn"

const FifthSection = () => {
  return (
    
    <section className="min-h-screen flex flex-col items-center gap-[12rem] py-10 ">
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
      <div className="textHover flex flex-col gap-3 poppins text-center px-5">
        <h1 className="text-white font-bold max-sm: text-2xl sm:text-3xl md:text-4xl">Frequently Asked <span className="text-aquaish">
             Questions
            </span>
        </h1>

        <h1 style={ { lineHeight:"1.7" }} className="text-white brightness-[80%] sm:text-sm md:text-md annoying:text-sm lg:text-xl">We've complied
            a list of the most frequently asked questions about SmartNotes to help 
            you get the <br /> information you need. If you have any other questions, feel free
            to reach out to our support team.
        </h1>
      </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
      <div className="min-h-64 poppins flex flex-col gap-4 max-w-7xl max-sm: px-3 md:px-3">

        <div style={{border: "1px solid #017373"}} className="generalCardEffect items-center px-4 py-4 text-white flex justify-between rounded-lg">
            <p className="font-bold md:text-lg">
                What is SmartNotes?
            </p>
            <img src="/src/assets/images/Arrow-2.png" alt="" />
        </div>

        <div  className="bg-white flex-col flex rounded-lg gap-2 px-4 py-4">
            <div className="flex justify-between w-full ">
            <p className="font-bold max-sm: text-sm  md:text-lg">
                How do i get started with smartNotes?
            </p>
            <img src="/src/assets/images/Arrow-3.png" alt="" />
            </div>

            <div>
                <p className="text-gray-500 max-sm: text-sm sm:text-sm md:text-md lg:text-lg">
                    Get started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and <br />
                    start exploring features, Our intuitive interface and comprehensive onboarding materials <br />
                    will guide you through the process.
                </p>
            </div>
        </div>

        <div style={{border: "1px solid #017373"}} className="generalCardEffect items-center px-4 py-4 text-white flex justify-between rounded-lg">
            <p className="font-bold  max-sm: text-sm  md:text-lg">
                What are the key features of SmartNotes?
            </p>
            <img src="/src/assets/images/Arrow-2.png" alt="" />
        </div>

        <div style={{border: "1px solid #017373"}} className="generalCardEffect items-center px-4 py-4 text-white flex justify-between rounded-lg">
            <p className="font-bold  max-sm: text-sm  md:text-lg">
                How much does SmartNotes cost?
            </p>
            <img src="/src/assets/images/Arrow-2.png" alt="" />
        </div>

        <div style={{border: "1px solid #017373"}} className="generalCardEffect items-center px-4 py-4 text-white flex justify-between rounded-lg">
            <p className="font-bold  max-sm: text-sm  md:text-lg">
                Who is SmartNotes know for?
            </p>
            <img src="/src/assets/images/Arrow-2.png" alt="" />
        </div>

        <div style={{border: "1px solid #017373"}} className="generalCardEffect items-center px-4 py-4 text-white flex justify-between rounded-lg">
            <p className="font-bold  max-sm: text-sm  md:text-lg">
                What is SmartNotes?
            </p>
            <img src="/src/assets/images/Arrow-2.png" alt="" />
        </div>
      </div>
      </ScrollFadeIn>


    </section>
  )
}

export default FifthSection