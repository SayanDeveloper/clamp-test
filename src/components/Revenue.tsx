import React from 'react'
import { FiDollarSign } from 'react-icons/fi'

const Revenue = () => {
  return (
    <div className='w-full bg-[#2c2c2c] p-[38px] py-[20px] rounded-[32px] flex items-center gap-12'>
      <div className='p-3 rounded-full bg-black'><FiDollarSign /></div>
      <div>
        <h3>Total Revenue</h3>
        <div className='text-[20px] font-[600]'>$92,983</div>
        <div className='w-[136px] h-[8px] mt-[18px] bg-white relative'>
          <div className='absolute top-0 left-0 h-full w-[75%] bg-[#3927af]'></div>
        </div>
      </div>
    </div>
  )
}

export default Revenue