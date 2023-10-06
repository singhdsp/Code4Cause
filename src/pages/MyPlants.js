import React from 'react'

export default function MyPlants() {
  return (
    <div className='h-full flex-1'>
      <h1 className='px-6 text-3xl font-bold font-Ps uppercase tracking-wide bg-gradient-to-br from-green-600 to-blue-800 bg-clip-text text-transparent'>My Plants</h1>
      <div className='py-4 px-4 flex-1 space-y-3 overflow-y-scroll mt-4 h-[35rem]'>
        {/* Item1 */}
        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://firebasestorage.googleapis.com/v0/b/auth-develop-1730b.appspot.com/o/c5014e369ec0795fd93c780a2efd0942dde5fddf8c6e20b9c8104a8cf1290d3f?alt=media&token=b80148b8-92be-4535-bf7b-0b3be6cb416f&_gl=1*vavme8*_ga*MTE1NzA0Mzc1Mi4xNjk2NTU4MDcw*_ga_CW55HF8NVT*MTY5NjU3MjUxOC40LjEuMTY5NjU3MjkwNi4xOS4wLjA.' className='rounded-xl h-40 w-40 object-cover' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Carry me seed</h1>
              <h1 className='font-Ps font-semibold'>Phyllanthus amarus Schumach. & Thann</h1>
              <h1 className='font-Ps font-semibold'>Phyllanthaceae</h1>
              <h1>Maharaja Surajmal Institute Of Technology, C-4 MARKET, Fire Station Rd, Janakpuri, New Delhi, Delhi, 110058</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>{localStorage.getItem("Points")} Points</h1>
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://firebasestorage.googleapis.com/v0/b/auth-develop-1730b.appspot.com/o/32fec09a98bb871f60aadd9635d2f6e0589c840931d5acced8ff567d0af75ad8?alt=media&token=65848aa2-f5ca-4234-9ef8-8494cf6869d6&_gl=1*uwzj6x*_ga*MTE1NzA0Mzc1Mi4xNjk2NTU4MDcw*_ga_CW55HF8NVT*MTY5NjU3MjUxOC40LjEuMTY5NjU3Mjg3Mi41My4wLjA.' className='rounded-xl h-40 w-40 object-cover' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>Tulasi</h1>
              <h1 className='font-Ps font-semibold'>Ocimum tenuiflorum L.</h1>
              <h1 className='font-Ps font-semibold'>Lamiaceae</h1>
              <h1>Netaji Subhas University of Technology, Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>20 Points</h1>
            </div>
          </div>
        </div>

        <div className='px-2 py-4 w-full bg-white shadow-2xl rounded-xl items-center grid grid-cols-5'>
          <div className='m-4 object-contain rounded-xl'>
            <img src='https://firebasestorage.googleapis.com/v0/b/auth-develop-1730b.appspot.com/o/8da1ea67385078c1e64194f5560138a9bd731169b2d34bcb6a0d3e4d26188aa0?alt=media&token=f0ac60fe-d94c-4e85-9dde-9207144b6d43&_gl=1*ipb6ip*_ga*MTE1NzA0Mzc1Mi4xNjk2NTU4MDcw*_ga_CW55HF8NVT*MTY5NjU3MjUxOC40LjEuMTY5NjU3MjU1NS4yMy4wLjA.' className='rounded-xl h-40 w-40 object-cover' />
          </div>
          <div className='flex flex-col col-span-3'>
            <div>
              <h1 className='font-bold font-Ps text-2xl'>SnakePlant</h1>
              <h1 className='font-Ps font-semibold'>Sansevieria trifasciata Prain</h1>
              <h1 className='font-Ps font-semibold'>Asparagaceae</h1>
              <h1>Netaji Subhas University of Technology, Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078</h1>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='px-2 py-1 bg-blue-600 border-2 border-blue-800 rounded-full font-bold font-Ps mx-auto text-white'>
              <h1>06/10/23</h1>
            </div>
            <div className='text-center'>
              <img className='h-32 object-contain' src={process.env.PUBLIC_URL + '/trophy.jpg'} />
              <h1 className='font-bold font-Ps'>14 Points</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
