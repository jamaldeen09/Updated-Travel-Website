import React from 'react'

const Profile = (props) => {
    const { lastMount } = props
  return (
    <div className="bg-black flex flex-col btnHover sm: justify-center items-center gap-10 w-[30vw] h-[50vh] rounded-xl shadow-xl">

        <img className="w-1/2 rounded-3xl "src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg" alt="person" />

        <div style={{lineHeight: "2"}} className="text-3xl font-bold text-center">
            <h1>Name: James Di Maria</h1>
            <h1>Full Stack Web Developer</h1>
            <p>Last Mounted: {lastMount}</p>
        </div>
    </div>
  )
}

export default Profile