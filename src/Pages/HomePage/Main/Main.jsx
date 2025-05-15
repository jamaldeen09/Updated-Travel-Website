import React from 'react'
import FirstSection from './FirstSection'
import ScrollFadeIn from "/src/Animations/ScrollFadeIn"
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import SixthSection from './SixthSection'

const Main = () => {
  return (
    <main className=" min-h-64 flex flex-col py-20">

        <ScrollFadeIn>
          <FirstSection />
        </ScrollFadeIn>

        <ScrollFadeIn>
           <SecondSection />
        </ScrollFadeIn>

        <ScrollFadeIn>
           <ThirdSection />
        </ScrollFadeIn>

        <ScrollFadeIn>
           <FourthSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn>
          <FifthSection />
        </ScrollFadeIn>

        <ScrollFadeIn>
           <SixthSection />
        </ScrollFadeIn>
    </main>
  )
}

export default Main