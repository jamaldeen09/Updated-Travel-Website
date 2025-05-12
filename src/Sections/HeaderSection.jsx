import ScrollFadeIn from "../Animations/ScrollFadeIn"
import HeaderBody from "../components/HeaderBody"

import NavComponent from "../components/NavComponent"

const HeaderSection = () => {
  return (
    <header className="min-h-screen bg-black">
        <NavComponent />
        <ScrollFadeIn>
           <HeaderBody />
        </ScrollFadeIn>
    </header>
  )
}

export default HeaderSection