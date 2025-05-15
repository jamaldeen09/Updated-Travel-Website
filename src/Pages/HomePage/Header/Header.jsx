import React from 'react'
import NavComponent from '../../../components/NavComponent'
import HeaderBody from './HeaderBody'
import ScrollFadeIn from "/src/Animations/ScrollFadeIn"

const Header = () => {
  return (
    <>
      <header className="min-h-screen">
         <NavComponent />
         <ScrollFadeIn>
            <HeaderBody />
         </ScrollFadeIn>
      </header>
    </>
  )
}

export default Header