import React from 'react'

export default function Rankings() {

  const UserAvatar = (props) => {
    return (
      <div className="h-10 w-10 rounded-full bg-white font-semibold font-Ps flex justify-center items-center tracking-wider ml-auto text-sm">
        <h1>{`${props.name.split(" ")[0][0]}${props.name.split(" ")[1][0]}`}</h1>
      </div>
    )
  }

  return (
    <div className='h-full flex-1'>
      <h1 className='px-6 text-3xl font-bold font-Ps uppercase tracking-wide bg-gradient-to-br from-green-600 to-blue-800 bg-clip-text text-transparent'>Rankings</h1>
      <div className='py-4 px-4 flex-1 space-y-3 overflow-y-scroll mt-4 h-[35rem]'>
        {/* Item1 */}
        <div className='px-2 py-4 w-full bg-gradient-to-br from-green-600 to-blue-800 shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <UserAvatar name="Manit Singh" />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl text-white'>Manit Singh</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-center flex text-white items-center justify-center'>
              <h1 className='font-bold font-Ps text-6xl pt-1'>421</h1>
              <img className='h-16 object-contain' src={process.env.PUBLIC_URL + '/trophy.png'} />
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-gradient-to-br from-green-600 to-blue-800 shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <UserAvatar name="Ajay Pal Singh" />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl text-white'>Ajay Pal Singh</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-center flex text-white items-center justify-center'>
              <h1 className='font-bold font-Ps text-6xl pt-1'>236</h1>
              <img className='h-16 object-contain' src={process.env.PUBLIC_URL + '/trophy.png'} />
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-gradient-to-br from-green-600 to-blue-800 shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <UserAvatar name="Deepak Singh" />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl text-white'>Deepak Singh</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-center flex text-white items-center justify-center'>
              <h1 className='font-bold font-Ps text-6xl pt-1'>172</h1>
              <img className='h-16 object-contain' src={process.env.PUBLIC_URL + '/trophy.png'} />
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-gradient-to-br from-green-600 to-blue-800 shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <UserAvatar name="Rahul Naithani" />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl text-white'>Rahul Naithani</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-center flex text-white items-center justify-center'>
              <h1 className='font-bold font-Ps text-6xl pt-1'>101</h1>
              <img className='h-16 object-contain' src={process.env.PUBLIC_URL + '/trophy.png'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
