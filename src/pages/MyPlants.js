import React from 'react'

export default function MyPlants() {
  return (
    <div className='h-full flex-1'>
      <h1 className='px-6 text-3xl font-bold font-Ps uppercase tracking-wide bg-gradient-to-br from-green-600 to-blue-800 bg-clip-text text-transparent'>My Plants</h1>
      <div className='py-4 px-4 flex-1 space-y-3 overflow-y-scroll mt-4 h-[35rem]'>
        {/* Item1 */}
        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://mybageecha.com/cdn/shop/products/1_9a7fba2e-fcb5-4237-9e9d-4e416f8f0052_800x.jpg' className='rounded-xl' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://mybageecha.com/cdn/shop/products/1_9a7fba2e-fcb5-4237-9e9d-4e416f8f0052_800x.jpg' className='rounded-xl' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://mybageecha.com/cdn/shop/products/1_9a7fba2e-fcb5-4237-9e9d-4e416f8f0052_800x.jpg' className='rounded-xl' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://thumbs.dreamstime.com/b/hands-child-holding-young-plants-back-soil-nature-park-growth-plant-hands-child-holding-young-plants-111399665.jpg' className='rounded-xl' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
