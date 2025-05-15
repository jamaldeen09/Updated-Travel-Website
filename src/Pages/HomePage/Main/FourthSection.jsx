import React from 'react'

const FourthSection = () => {
  return (
    <section className="min-h-screen
    flex justify-center items-center max-sm: flex-col sm:flex-col space-y-[10rem] annoying:px-[5rem] lg:flex-row gap-0 px-[10rem]">

        <div className="flex flex-col space-y-4 lg:w-full">
            <h3 className="font-bold text-gray-500">
                TESTIMONIALS
            </h3>
            <h1 className="font-bold max-sm: text-2xl sm:text-4xl md:text-5xl annoying:text-5xl lg:text-6xl">
                What People Say <br /> About Us.
            </h1>
        </div>

        {/* image */}
        <div className="flex  annoying:pt-[10rem] max-sm: w-[60vmax] sm:w-[60vmax] md:w-[70vmax] lg:w-full">
            <img src="/src/assets//images/Group 64.png" alt="" className="w-full cardhover" />
        </div>
    </section>
  )
}

export default FourthSection