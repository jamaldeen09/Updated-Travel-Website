import ScrollFadeIn from "../Animations/ScrollFadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "./ButtonComponent";
import PricingCard from "./PricingCard";
import { firstPriceCard } from "../content";
import { secondPriceCard } from "../content";
import { thirdPriceCard } from "../content";
const FourthSection = () => {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center gap-20 py-20 mt-20">
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
      <div className="text-white min-h-64 flex flex-col justify-center items-center poppins text-center">
        <div className="flex gap-3 flex-col py-20">
          <h1 className="text-5xl font-bold">
            <span className="text-aquaish">Pricing </span>& Plans
          </h1>
          <p className="text-white brightness-[80%]">
            With lots of unique blocks, you can easily build a page <br />
            without coding.Build your next landing page.
          </p>
        </div>

        <div className="poppins flex gap-5">
          <div className="flex items-center font-bold gap-3">
            <h1>Monthly</h1>

            <FontAwesomeIcon icon={faToggleOff} className="tetx-gray-500 h-[5vh]"/>
          </div>
          
          <div className="flex items-center gap-3 font-bold">
            <h1>Yearly</h1>
            <ButtonComponent
          buttonTxt="Get Started"
          bg="bg-gradient-to-br
            from-aquaish to-aquaishDark"
          hoverEffect="generalScale"
          customPadding="px-3 py-1 rounded-full"
        />
          </div>
        </div>
      </div>

      <div className="max-w-9xl min-h-screen justify-center items-center px-10 grid py-10 gap-20 annoying:grid-cols-1  lg:grid-cols-3 ">
        <PricingCard imgUrl="/src/assets/images/Layer_1-2.png" 
        cardHead="individual plan" cardPrice="9.99"
        cardDecs="/ month" prices={firstPriceCard.map((price) => {
          return <li className="flex gap-2">
            <img src="/src/assets/images/Path.png" width={20}/>{`${price}`}
          </li>
        })} 
        Buttontxt="Start Free Trial"
        bcg="w-full bg-coralPeach py-3 rounded-lg border border-black"
        hoverEffect="btnPrices"
        doll="$"/>
        
        <PricingCard imgUrl="/src/assets/images/Layer_1-2.png" 
        cardHead="individual plan" cardPrice="19.99"
        cardDecs="/ month" prices={secondPriceCard.map((price) => {
          return <li className="flex gap-3">
            <img src="/src/assets/images/Path.png" width={20}/>{`${price}`}
          </li>
        })} 
        Buttontxt="Start Free Trial"
        bcg="w-full bg-gradient-to-r from-aquaish to-aquaishDark py-3 rounded-lg border border-black"
        hoverEffect="btnPrices"
        bg="bg-black"
        textcolor="text-aquaishDark"
        hcol="text-white"
        licol="text-white"
        doll="$"/>

        <PricingCard imgUrl="/src/assets/images/Layer_1-3.png" 
        cardHead="individual plan" cardPrice="Custom"
        prices={thirdPriceCard.map((price) => {
          return <li className="flex gap-2">
            <img src="/src/assets/images/Path.png" width={20}/>{`${price}`}
          </li>
        })} 
        Buttontxt="Contact support"
        bcg="w-full bg-coralPeach py-3 rounded-lg border border-black"
        hoverEffect="btnPrices"
        doll=" "
        />    
      </div>
      </ScrollFadeIn>
    </section>
  );
};

export default FourthSection;
