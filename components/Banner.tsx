import React from 'react';

function Banner() {
  return (
    <div className='flex h-screen' style={{ 
      backgroundImage: "url('https://images.pexels.com/photos/4458003/pexels-photo-4458003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height:"h-full",
    }}>
      <div className='pl-[20px] mt-[50px]'>
        <h1 className='text-8xl text-white'>Explore <br /> Beautiful <br /> world!</h1>
        <div className='bg-white h-[60px] flex items-center justify-between w-[580px] mt-[20px]'>
       <div className='flex flex-col items-center'>
       <label htmlFor='location'>Location</label>
        <select>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
        </select>
       </div>
       <div className='flex flex-col items-center'>
       <label htmlFor='location'>City</label>
        <select>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
        </select>
       </div>
       <div className='flex flex-col items-center'>
       <label htmlFor='location'>People</label>
        <select>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
          <option value='bangladesh'>Bangladesh</option>
        </select>
       </div>
        <button className='h-full w-[120px] bg-black text-white'>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
