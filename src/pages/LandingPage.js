import React from 'react'
import NavHeader from '../Components/nav/NavHeader'
import { motion } from 'framer-motion'
export default function LandingPage() {

  return (
    <div className='overflow-x-hidden'>
      <div className={`absolute top-0 -z-20 h-screen w-full overflow-x-hidden bg-black`}>
        <img src='./new.jpg' className='z-0 bg-cover h-screen w-full  overflow-x-hiddenS -scale-x-100' />
      </div>
      <div>
        <div className={`flex flex-col z-10 text-black.500 h-screen w-full bg-[rgba(248,248,249,0)]`}>
          <NavHeader />
          <div className='flex-1  p-10 grid grid-cols-2 '>
            <div className='space-y-6 flex flex-col justify-center'>
              <div className='text-green-800 backdrop-blur-sm drop-shadow-sm p-20 bg-[rgba(133,133,135,0.1)] rounded-3xl relative inset-x-20 ml-20 space-y-8'>

              <div >
                <h1 className='text-7xl font-bold'>Planters Go</h1>
                <h1 className='text-5xl font-semibold'>Something For Everyone</h1>
              </div>
              <h1 className='text-xl font-semibold text-amber-800'>Welcome to 'Planters Go' – Your green companion in the world of flora! Explore, identify, and learn about plants effortlessly with our cutting-edge AI-powered plant scanner. Discover nature like never before!</h1>
              <div className='py-2 px-4 font-bold text-xl border-2 border-blue-700 rounded-md w-fit hover:bg-amber-700 hover:border-none  hover:text-white cursor-pointer'>
                <h1>Get Started</h1>
              </div></div>
            </div>
            <div className='flex justify-center items-center'>
              <img src='' className=' w-[35rem] bg-cover' />
            </div>
          </div>
        </div>
        <div className='w-full p-10 font-Poppins'>
          <h1 className='text-5xl font-bold text-center'>Go scan some plants now!</h1>
        
          <div className='m-10 p-10 shadow-2xl'>
            <div className='grid grid-cols-3 gap-8 pt-16'>
              <div className='flex flex-col items-center border-t-2 border-sky-600 text-justify font-Poppins'>
                <div className='rotate-45 overflow-hidden my-8 h-32 w-32 p-4 bg-sky-600 rounded-md -mt-[4rem]'>
                  <img src='https://cdn3d.iconscout.com/3d/premium/thumb/product-design-4889674-4076851.png' className='-rotate-45' />
                </div>
                <h1 className='font-bold font-Poppins text-3xl my-2 text-center'>Plant</h1>
                <h1>
Planting plants is a rewarding and eco-friendly endeavor. It contributes to cleaner air, biodiversity, and a healthier planet. By selecting the right species for your climate and nurturing them with care, you not only beautify your surroundings but also create habitats for wildlife, making a positive impact on the environment.</h1>
              </div>
              <div className='flex flex-col items-center border-t-2 border-purple-600 text-justify font-Poppins'>
                <div className='rotate-45 overflow-hidden my-8 h-32 w-32 p-4 bg-purple-600 rounded-md -mt-[4rem]'>
                  <img src='https://cdn3d.iconscout.com/3d/premium/thumb/product-review-3856392-3212580.png' className='-rotate-45' />
                </div>
                <h1 className='font-bold font-Poppins text-3xl my-2 text-center'>Scan</h1>
                <h1>scanning plants with AI revolutionizes the way we interact with nature. This technology enables instant plant identification, offering valuable information about species, care instructions, and even potential medicinal uses. It empowers both novice and seasoned gardeners, fostering a deeper connection with the botanical world while promoting conservation efforts.</h1>
              </div>
              <div className='flex flex-col items-center border-t-2 border-yellow-600 text-justify font-Poppins'>
                <div className='rotate-45 overflow-hidden my-8 h-32 w-32 p-4 bg-yellow-600 rounded-md -mt-[4rem]'>
                  <img src='https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png' className='-rotate-45' />
                </div>
                <h1 className='font-bold font-Poppins text-3xl my-2 text-center'>Win</h1>
                <h1>Our Application allows you to be placed in a ranking, and also earn points depending on how rare the plants are</h1>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
