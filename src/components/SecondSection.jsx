
import React from 'react'
import CardComponent from './CardComponent'
import ScrollFadeIn from '../Animations/ScrollFadeIn'

const SecondSection = () => {
  return (
    <section className="pt-[15rem]
    min-h-screen bg-black pb-[5rem]">

        <ScrollFadeIn>
        <div className="text-center flex flex-col space-y-5 py-10 textHover">
            <h1 className="text-white poppins verySmall:text-[1.5rem] max-sm: text-4xl sm:text-3xl font-bold md:text-4xl">Discover the Power of <span className="text-aquaish">SmartNotes</span></h1>
            <p className="text-center text-white brightness-[80%] poppins verySmall:text-sm max-sm: text-md sm:text-xl">
                SmartNotes is packed with innovative features <br /> designed
                 to revolutionize the way you take notes.<br />
                 collaborate with others, and stay organized
            </p>
        </div>
        </ScrollFadeIn>

        {/* main section main awesoe part */}
        <ScrollFadeIn >

       
        <div className="min-h-screen grid gap-4 p-10 lg:grid-cols-4" >
            <CardComponent iconUrl="/src/assets/images/thumb-up-fill.png" 
            cardBody="Whether your're on your desktop, tablet or 
            smartphone. SmartNotes is accesile across all devices. Work seamlessly on the go and never miss a beat" 
            cardHeading="Cross-Platform Accesibility" 
            filledCol="generalCardEffect py-20 px-5 flex flex-col gap-5 lg:col-span-2"
            extraStyles="flex flex-col space-y-5"
            textStyles="max-sm: text-2xl font-bold sm:text-3xl font-bold"
            pStyles="sm:text-xl max-w-xl"/>

            <CardComponent cardBody="Create custom templates for your recurring tasks or projects to save time and
            ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences" cardHeading="Customizable Templates" 
            filledCol="generalCardEffect py-20 px-5 flex flex-col gap-5"
            extraStyles="flex flex-col space-y-5"
            textStyles="max-sm: text-2xl font-bold sm:text-3xl font-bold"
            pStyles="sm:text-xl max-w-xl"
            iconUrl="/src/assets/images/global-fill.png"/>

            <CardComponent cardBody="Rest easy knowing that your notes are securely
            stored in the clous. Access your information from any device, anytime, without worrying about losing 
            important data" cardHeading="Secure Cloud Storage"
            filledCol=" generalCardEffect py-20 px-5 flex flex-col gap-5"
            extraStyles="flex flex-col space-y-5"
            textStyles="max-sm: text-2xl font-bold sm:text-3xl "
            pStyles="sm:text-lg max-w-xl"
            iconUrl="/src/assets/images/flag-2-fill.png"/>

            <CardComponent cardBody="Collaborate seamlessly with your team members or classmates
            in real-time on shared notes and projects." cardHeading="Real-Time Collaboration"
            filledCol="generalCardEffect py-20 px-5 flex flex-col gap-5"
            extraStyles="flex flex-col space-y-5"
            textStyles="max-sm: text-2xl font-bold sm:text-3xl"
            pStyles="sm:text-lg max-w-xl"
            iconUrl="/src/assets/images/Layer_1.png"/>

            <CardComponent cardBody="Our AI-powered organization feature categorizes
            and prioritizes your notes, making it easy to find what you need when
            you need it" cardHeading="AI-Powered Organization"
            filledCol="generalCardEffect py-20 px-5 flex flex-col gap-5"
            extraStyles="flex flex-col space-y-5"
            textStyles="max-sm: text-2xl font-bold sm:text-3xl "
            pStyles="sm:text-lg max-w-xl"
            iconUrl="/src/assets/images/hashtag.png"/>

            <CardComponent cardBody="Connect Smartphones with your favourite productivity tools
            like Google Drive. Trello and Stack. Streamline your workflow
            by syncing data across platforms and enhancing collaborations
            " cardHeading="Integrations"
             filledCol="generalCardEffect py-20 px-5 flex flex-col gap-5"
            extraStyles="flex flex-col space-y-5"
            textStyles="max-sm: text-2xl font-bold sm:text-3xl "
            pStyles="sm:text-lg max-w-xl"
            iconUrl="/src/assets/images/git-branch-fill.png"/>
            
            
        </div>
        </ScrollFadeIn>
    </section>
  )
}

export default SecondSection