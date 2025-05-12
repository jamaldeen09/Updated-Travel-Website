import ButtonComponent from "./ButtonComponent";

const HeaderBody = () => {
  return (
    <div
      className="min-h-64 flex py-[15rem]
       max-sm: px-5 py-[5rem] sm:px-10  md:px-10 items-center lg:justify-between "
    >
      {/* header body text */}
      <div className="flex flex-col space-y-8 textHover max-w-4xl lg:px-10">
        <h1 style={{lineHeight: "1.2"}} className="text-white poppins font-bold max-sm: text-[2.161rem] sm:text-4xl max-w-6xl md:text-5xl 
        mid:text-4xl lg:text-5xl">
          <span className="text-aquaish">Intelligent</span> cloud-based <br />
          <span className="text-aquaish">note-taking </span>
          and <br />
          collaboration tool
        </h1>

        <p className="text-white brightness-[80%] poppins">
          Experience the power of smart note-taking and transform the way you
          work today
        </p>
        <div className="flex max-w-md flex-col items-start gap-3 ">
          <input
            type="email"
            className="relative h-[7.5vh] rounded-lg w-full px-4"
            placeholder="Enter your email"
          />
          <div className="">
            <ButtonComponent
              customPadding="px-4 py-2 text-white"
              font="font-bold"
              buttonTxt="Sign Up"
              bg="bg-gradient-to-br
                   from-aquaish to-aquaishDark"
              hoverEffect="generalScale"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex justify-center items-center h-[100vh] max-w-xl">
        <img
          src="/src/assets/images/Abstract Shapes.png"
          alt="Header Body Image"
          className="mid:h-[40vh] lg:max-w-md h-[60vh]"
        />
      </div>
    </div>
  );
};

export default HeaderBody;
