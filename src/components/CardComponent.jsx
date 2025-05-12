import React from 'react'

const CardComponent = (props) => {
    const { pStyles,textStyles,extraStyles,filledCol,cardHeading,cardBody,iconUrl } = props
  return (
    <div style={{border: "0.1px solid #017373"}} className={`${filledCol} rounded-xl shadow-aquaishDark generalCardEffect py-20 px-5 flex flex-col gap-5 col-span-1 
    lg:col-span-2`}>
        <div className="w-full flex items-start ">
            <img src={iconUrl} alt={"Icon"} />
        </div>
        <div  className={`${extraStyles} flex flex-col space-y-5 w-full flex flex-col gap-1 `}>
            <h1 className={`${textStyles} text-white poppins`}>
                {cardHeading}
            </h1>
            <p className={`text-white brightness-[80%] poppins ${pStyles}`}>
                {cardBody}
            </p>
        </div>
    </div>
  )
}

export default CardComponent