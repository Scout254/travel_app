import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center sticky top-0 bg-white h-[60px] z-50'>
      <div className=''>
        <h1 className='font-bold'>SAFE TOUR</h1>
      </div>
      <div>
        <ul className='flex gap-2'>
            <li>Home</li>
            <li>Destination</li>
            <li>About</li>
            <li>Tours</li>
            <li>Blog</li>
        </ul>
      </div>
      <div>
        <button className='bg-green-500 h-[40px] w-[120px] text-white hover:bg-green-600 p-2  '>Login</button>
      </div>
    </div>
  )
}

export default Navbar
