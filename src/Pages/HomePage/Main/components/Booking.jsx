import React from 'react'

const Booking = (props) => {

    const { url,title } = props
  return (
    <div className="flex items-center gap-3">

        <img src={url} alt={title} />

        <div className="flex flex-col space-y-1 justify-center">
            <h3 className="font-bold">{title}</h3>
            <h4 style={{fontWeight: "400"}}>Lorem ipsum dolor sit amet, consecteur <br /> adispiscing elit. Urna, tortor tempus.</h4>
        </div>
    </div>
  )
}

export default Booking