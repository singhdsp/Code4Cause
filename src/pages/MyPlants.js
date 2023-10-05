import React from 'react'

export default function MyPlants() {
  return (
    <div className='h-full flex-1'>
      <h1 className='text-3xl font-bold font-Ps uppercase tracking-wide'>My Plants</h1>
      <div className='py-4 px-4 flex-1 space-y-3 overflow-y-scroll mt-4 h-[35rem]'>
        {/* Item1 */}
        <div className='px-6 py-4 w-full bg-white shadow-2xl rounded-xl flex items-center'>
          <div className='h-32 w-32 object-contain rounded-xl'>
            <img src='https://mybageecha.com/cdn/shop/products/1_9a7fba2e-fcb5-4237-9e9d-4e416f8f0052_800x.jpg' className='rounded-xl'/>
          </div>
          <div className='flex-1 flex flex-col p-2'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
              <h1 className='font-semibold font-Ps'>24/09/23</h1>
              <h1 className='font-semibold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-6 py-4 w-full bg-white shadow-2xl rounded-xl flex items-center'>
          <div className='h-32 w-32 object-contain rounded-xl'>
            <img src='https://www.gardeningknowhow.com/wp-content/uploads/2008/05/rubber-plant.jpg' className='rounded-xl object-contain h-32 w-32'/>
          </div>
          <div className='flex-1 flex flex-col p-2'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
              <h1 className='font-semibold font-Ps'>24/09/23</h1>
              <h1 className='font-semibold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-6 py-4 w-full bg-white shadow-2xl rounded-xl flex items-center'>
          <div className='h-32 w-32 object-contain rounded-xl'>
            <img src='https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg'  className='rounded-xl object-contain h-32 w-32'/>
          </div>
          <div className='flex-1 flex flex-col p-2'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
              <h1 className='font-semibold font-Ps'>24/09/23</h1>
              <h1 className='font-semibold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-6 py-4 w-full bg-white shadow-2xl rounded-xl flex items-center'>
          <div className='h-32 w-32 object-contain rounded-xl'>
            <img src='https://mybageecha.com/cdn/shop/products/1_9a7fba2e-fcb5-4237-9e9d-4e416f8f0052_800x.jpg' className='rounded-xl'/>
          </div>
          <div className='flex-1 flex flex-col p-2'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Rose Gold</h1>
              <h1 className='font-Ps font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in purus fringilla, aliquam urna nec, lacinia augue. Aliquam erat volutpat. Aliquam erat volutpat.</h1>
              <h1 className='font-semibold font-Ps'>24/09/23</h1>
              <h1 className='font-semibold font-Ps'>23 Points</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
