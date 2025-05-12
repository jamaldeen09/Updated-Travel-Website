import ButtonComponent from "./ButtonComponent"


const PricingCard = (props) => {
    const { doll,licol,hcol,textcolor,bg,cardHead,prices,isCredit,imgUrl,cardPrice,hoverEffect,cardDecs,Buttontxt,bcg } = props
  return (
    <div style={{border: "1.5px solid #017373"}} className={`${bg || "bg-white"} min-h-[20vh] w-full rounded-xl poppins
    pt-10 pb-10 px-10 space-y-6 flex flex-col card`}>

        <div className="flex flex-col gap-4">
            <div className="flex gap-3 poppins items-center">
                <img src={imgUrl} alt={cardHead} />
               <h1 className="text-aquaishDark">
                 {cardHead}
               </h1>
            </div>

            <div className="flex items-end gap-1">
                
                <h1 className={`${hcol} text-5xl font-bold`}>
                     {`${doll} ${cardPrice}`}
                </h1>
                <p className={`${textcolor || "text-gray-500"}`}>{cardDecs}</p>
            </div>
        </div>

        <div className="poppins">
            <ul className={`${licol} flex gap-2 flex-col`}>
                {prices}
            </ul>
        </div>

        <div className="justify-center items-center flex">
            <button className={`${bcg} w-full ${hoverEffect}`}>
                {Buttontxt}
            </button>
        </div>
        <div className="poppins text-xs text-gray-500 text-center">
            <p>
                {isCredit || "No Credit Card Required"}
            </p>
        </div>
    </div>
  )
}
// w-[27vw]
export default PricingCard