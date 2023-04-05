import React from 'react'
import user from "../assets/man.svg" 

const Category = () => {
  return (
    <div className='bg-[#2c2c2c] rounded-[28px] p-[20px] max-w-[calc(100%-8px)]'>
      <h3 className='font-bold mb-2'>Travel</h3>
      <section className='text-[12px] mb-2'>Mobile Application</section>
      <div className='text-[10px]'>Seen by</div>
      <div className='relative h-[30px] mt-3'>
        <img src={user} className='w-[30px] absolute' />
        <img src={user} className='w-[30px] absolute left-[15px]' />
        <img src={user} className='w-[30px] absolute left-[30px]' />
      </div>
      <div className='flex flex-wrap gap-2 mt-[13px]'>
        <div className='bg-[#3827b4] px-[12px] py-[2px] rounded-full text-[12px]'>Tour</div>
        <div className='bg-black px-[12px] py-[2px] rounded-full text-[12px]'>Trip</div>
        <div className='bg-black px-[12px] py-[2px] rounded-full text-[12px]'>Transport</div>
      </div>
    </div>
  )
}

export default Category