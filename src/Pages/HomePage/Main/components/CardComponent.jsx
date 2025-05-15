import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';


const CardComponent = (props) => {

    const { imgUrl, country,price,trip,hoverEffect } = props
  return (
    <div style={{borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem"}} className={` bg-white shadow-xl min-h-[20rem] ${hoverEffect} w-full max-w-xl`}>
        <img src={imgUrl} alt="Country" style={{borderTopLeftRadius: "2rem",borderTopRightRadius: "2rem"}} className="w-full max-sm: h-[40vh] sm:h-[55vh] md:h-[56vh] lg:h-[60vh]"/>

        <div className="flex flex-col p-8 flex-col gap-3">
            <div style={{fontWeight: "600"}} className="flex justify-between">
                <h3>{country}</h3>
                <h3>{price}</h3>
            </div>

            <div style={{fontWeight: "500"}} className="flex gap-2">
                <FontAwesomeIcon icon={faLocationArrow}/>
                <h3>{trip}</h3>
            </div>
        </div>
    </div>
  )
}

export default CardComponent