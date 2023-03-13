import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import WifiIcon from '@mui/icons-material/Wifi';
import HotTubIcon from '@mui/icons-material/HotTub';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
function Explore() {
  return (
    <div className='flex space-x-4'>
      <div>
   
        <div>
            <img src="https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" 
            className=''
            />
        </div>
        <div className='flex bg-white rounded-lg shadow-lg p-4 w-[400px] relative bottom-8'>
        <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""
            className='h-[50px] w-[50px] rounded-full'
            />
        <div className=''>
        <h1>wolrd best agency</h1>
           <div className='flex'>
           <StarOutlinedIcon className='text-orange-600'/>
            <StarOutlinedIcon  className='text-orange-600'/>
            <StarOutlinedIcon className='text-orange-600'/>
            <StarHalfOutlinedIcon className='text-orange-600'/>
           </div>
        </div>
            
        </div>
      </div>
      <div>
        <h1 className='text-6xl py-[20px]'>Explore all corners of <br /> the World with us</h1>
        <p>travel is fatal to prejudice and narrow mindeness,and many of our people need it sorely on these accounts and many of our people need it sorely.</p>
     
        <div className='flex gap-[70px] py-[40px] '>
        <div className=']'>
            <div className='flex gap-[20px]'>
                <LanguageIcon className='h-[40px] w-[40px]  border border-red-200 text-red-600'/>
                <h1>Flight</h1>
            </div>
            <div className='flex gap-[20px] py-4'>
                <HotTubIcon className='h-[40px] w-[40px]  border border-red-200 text-red-600'/>
                <h1>Hotel</h1>
            </div>
        </div>
        <div>
            <div className='flex gap-[20px]'>
                <WifiIcon className='h-[40px] w-[40px]  border border-red-200 text-red-600'/>
                <h1>Wifi</h1>
            </div>
            <div className='flex gap-[20px] py-4'>
                <RestaurantIcon className='h-[40px] w-[40px]  border border-red-200 text-red-600'/>
                <h1>Food</h1>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
