import React from 'react'


const FirstSection = () => {
  return (
    <>
      <div className="font-bold flex flex-col justify-center
      items-center w-full gap-2">
          <h4>
            CATEGORY
          </h4>

          <h1 className="font-bold text-4xl">
            We Offer Best Services
          </h1>
      </div>

      <div className="flex max-sm: flex-col sm:flex-col annoying:flex-col lg:flex-row min-h-32 justify-center items-center py-20 gap-20">


          {/* first card */}

          <div className="cardhover flex flex-col justify-center items-center px-5 gap-4">
             <img src={"/src/assets/images/Group 48.png"} alt="Weather Image"/>

             <div className="flex justify-center flex-col items-center gap-3 text-center">
                <h3 className="font-bold text-lg">Calculated Weather</h3>
                
                <h2 style={{lineHeight: "1.4",fontWeight: "500"}}>
                   Built Wicket longer <br /> admire do barton <br /> vanity itself do in it
                </h2>
             </div>
          </div>

          {/* second card */}
          <div className="cardhover flex flex-col justify-center items-center  px-[4.4rem] bg-white shadow-xl rounded-3xl py-8">
             <img src={"/src/assets/images/Group.png"} alt="Plane Image" className="w-[6rem]"/>

             <div className="flex justify-center flex-col items-center gap-3 text-center">
                <h3 className="font-bold text-lg">Best Flights</h3>
                
                <h2 style={{lineHeight: "1.4",fontWeight: "500"}}>
                   Engrossed listening. <br /> Park gate sell they <br /> west hard for the.
                </h2>
             </div>
          </div>

          {/* third card */}
          <div className="cardhover flex flex-col justify-center items-center px-5 gap-4">
             <img src={"/src/assets/images/Group 50.png"} alt="Plane Image"/>

             <div className="flex justify-center flex-col items-center gap-3 text-center">
                <h3 className="font-bold text-lg">Local Events</h3>
                
                <h2 style={{lineHeight: "1.4",fontWeight: "500"}}>
                   Barton Vanity itself do <br /> in it. Preferd to men it <br /> engrossed listening.
                </h2>
             </div>
          </div>

          {/* fourth card */}
          <div className="cardhover flex flex-col justify-center items-center px-5 gap-4">
             <img src={"/src/assets/images/Group 49.png"} alt="Plane Image"/>

             <div className="flex justify-center flex-col items-center gap-3 text-center">
                <h3 className="font-bold text-lg">Customization</h3>
                
                <h2 style={{lineHeight: "1.4",fontWeight: "500"}}>
                    We deliver outsourced <br /> aviation services for <br /> military customers.
                </h2>
             </div>
          </div>
      </div>
    </>
  )
}

export default FirstSection