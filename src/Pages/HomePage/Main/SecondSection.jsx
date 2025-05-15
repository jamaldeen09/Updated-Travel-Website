
import React from 'react'
import CardComponent from './components/CardComponent'

const SecondSection = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col gap-5 pt-[10rem] pb-10">
        <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="font-bold">
                Top Selling
            </h3>

            <h1 className="font-bold text-4xl">
                Top Destinations
            </h1>
        </div>

        <div className="min-h-[90vh] p-10 flex gap-10 flex-col justify-center items-center annoying:flex-col lg:flex-row">
            <CardComponent hoverEffect="hoverPrimary" imgUrl="https://static.toiimg.com/photo/msid-53891769,width-96,height-65.cms" country="Rome,italy" price="$5,42k" trip="10 Days Trip"/>

            <CardComponent hoverEffect="hoverSecondary" imgUrl="https://plus.unsplash.com/premium_photo-1664303991463-36449a65d3d6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9uJTIwZW5nbGFuZHxlbnwwfHwwfHx8MA%3D%3D" country="London,UK" price="$4.2k" trip="12 Days Trip"/>

            <CardComponent hoverEffect="hoverPrimary" imgUrl="https://www.travelandleisure.com/thmb/008TMuCWpYImHX7FtHIjSj48LUw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/vienna-austria-BPEUROJAN1019-19c44e8a89cd48d28ef37d4d8ef28cf8.jpg" country="Full Europe" price="$15k" trip="28 Days Trip"/>
        </div>
      </section>
    </>
  )
}

export default SecondSection