import React from 'react'
import Image from 'next/image'

// importing Image
import image1 from './images/image1.jpg'
import spider1 from './images/spider1.jpg'
import Slider from './ActiveSlider/Slider'

export default function Home_new() {

  const section1 = {
    minHeight: "84vh"
  }
  return (
    <div>
      {/* Section 1 ------ Start */}
      <section className='h-3/4 flex' style={section1}>
        <div className="hero bg-body ">
          <div className="hero-content flex-col lg:flex-row-reverse w-screen">
            <div className="w-1/2 \">
              <Image
                // src={image1}
                src={spider1}
                alt='spiderman'

                className="max-w-xs rounded-lg shadow-2xl  ml-auto transform transition duration-500 hover:scale-125 hover:shadow-blue-500"
              />
            </div>
            <div className="w-1/2">
              <h1 className="text-7xl font-bold mb-5">Box Office News!</h1>
              <p className="py-6">Here is the Spiderman New Movie. Hope you wil Love it </p>
              <button className="btn btn-primary my-3">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    {/* Section 1 ------ End */}
    
    {/* Section 2 ------ Start */}
      <section className="min-h-screen bg-gradient-to-r from-violet-800 to-fuchsia-700"> 
      {/* bg-gradient-to-r from-voilet-500 to-fuchsia-500 */}
        <Slider />
      </section>
    {/* Section 2 ------ Ends */}

    {/* Section 3 ------ Start */}
      <section className="min-h-screen"> 
      {/* bg-gradient-to-r from-voilet-500 to-fuchsia-500 */}
        <h1>Hello world! This is Section 3</h1>
      </section>
    {/* Section 3 ------ Ends */}
    </div>
  )
}

