import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SixthSection = () => {

  // handling form validation

  const [ errorMessage,setErrorMessage ] = useState("");

  const handleSubscribeReq = (event) => {

    event.preventDefault();
    const extractedEmail = email;

    // validation

    if (!extractedEmail){
      setErrorMessage("Please Enter a valid Email Address")
    }
    else if (!extractedEmail.includes("@") || !extractedEmail.includes(".")){
      setErrorMessage("Invalid Email Address")
    }
    else{
      
      const userInfo = {
        emailOfUser: extractedEmail,
      }

      setErrorMessage("");
      setEmail("");
    }
  }

  // handle users email
  const [ email,setEmail ] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  return (
    <section className="min-h-screen flex justify-center items-center px-10">
      <form 
        style={{
          borderTopLeftRadius: "10rem",
          borderTopRightRadius: "1.25rem",
          borderBottomLeftRadius: "1rem",
          borderBottomRightRadius: "1rem",
        }}
        onSubmit={handleSubscribeReq}
        className="subscribeForm w-full   min-h-[490px]  space-y-[6rem] lex flex-col max-sm: max-w-md sm:max-w-2xl md:max-w-3xl px-0 py-0 annoying:max-w-5xl lg:max-w-7xl"
      >
        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-white bg-gradient-to-br from-purple-400 to-purple-700 p-[1.1rem] rounded-full text-lg"
          />
        </div>

        <div className="text-center">
          <h1 className=" font-bold px-5 sm:text-xl md:text-2xl annoying:text-3xl lg:text-4xl">
            Subscribe to get information, latest news and other <br />{" "}
            interesting offers about Jadoo
          </h1>
        </div>

        <div className=" flex justify-center space-x-5 flex-col w-full">
          <div className="flex justify-center space-x-5 px-10">
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              className="h-[7vh] w-full pl-8 rounded-md font-bold sm:max-w-xs  md:max-w-sm "
              placeholder="Your email"
            />
            <button type="submit" className="bg-gradient-to-b from-orange-500 to-red-500 text-white rounded-lg subscribeBtn max-sm: px-4 sm:py-3 px-8 ">
              Subscribe
            </button>
          </div>

          {/* validation */}
          <div className="flex justify-center py-3">
            <p className="text-red-500">{errorMessage}</p>
          </div>
        </div>

        
      </form>
    </section>
  );
};

export default SixthSection;
