import React from 'react'

const Slots = () => {
  return (
    <div className='bg-[#2c2c2c] p-5 px-[24px] rounded-[30px]'>
      <div className='flex justify-between mt-3'>
        <div className='font-bold text-[17px]'>Free Slots Available</div>
        <div className='w-[25px] h-[5px] bg-black relative top-1'>
          <div className='absolute right-0 w-3 h-3 rounded-full bg-[#3623b0] -translate-y-[5px]'></div>
        </div>
      </div>

      <div className='flex flex-wrap gap-[24px] justify-between my-[40px]'>
        <div className='bg-[#fe545f] py-[20px] rounded-[20px] w-[78px]'>
          <div className='text-center text-[22px] font-bold'>12</div>
          <div className='text-center'>June</div>
        </div>
        <div className='bg-black py-[20px] rounded-[20px] w-[78px]'>
          <div className='text-center text-[22px] font-bold'>18</div>
          <div className='text-center'>June</div>
        </div>
        <div className='bg-black py-[20px] rounded-[20px] w-[78px]'>
          <div className='text-center text-[22px] font-bold'>20</div>
          <div className='text-center'>June</div>
        </div>
        <div className='bg-black py-[20px] rounded-[20px] w-[78px]'>
          <div className='text-center text-[22px] font-bold'>2</div>
          <div className='text-center'>July</div>
        </div>
        <div className='bg-black py-[20px] rounded-[20px] w-[78px]'>
          <div className='text-center text-[22px] font-bold'>10</div>
          <div className='text-center'>July</div>
        </div>
        <div className='bg-black py-[20px] rounded-[20px] w-[78px]'>
          <div className='text-center text-[22px] font-bold'>15</div>
          <div className='text-center'>July</div>
        </div>
      </div>
    </div>
  )
}

export default Slots