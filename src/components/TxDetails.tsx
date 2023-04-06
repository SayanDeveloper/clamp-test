import React from 'react'
import user from "../assets/man.svg"

const TxDetails = () => {
  return (
    <div className='p-[38px] py-[30px] bg-[#2c2c2c] rounded-[32px]'>
      <div className='flex justify-between'>
        <div>
          <h3 className='font-bold mb-[10px] text-[18px]'>Transaction Details</h3>
          <div className='mb-[13px]'>Hi Hira</div>
          <div className='font-bold mb-[2px]'>$4,763.40</div>
          <div className='text-[#d4d4d4] text-[13px]'>Available Balance</div>
        </div>
        <div className='flex flex-col items-end'>
          <img src={user} className='w-[50px] mb-[48px]' />
          <div className='text-[#e4e4e4] text-[14px]'>**** 3863</div>
        </div>
      </div>
      <div className='flex gap-3 mt-[30px] mb-[25px]'>
          <img src={user} className='w-[38px]' />
          <img src={user} className='w-[38px]' />
          <img src={user} className='w-[38px]' />
          <img src={user} className='w-[38px]' />
          <img src={user} className='w-[38px]' />
      </div>
      <div className='flex justify-end'>
        <button className='bg-[#ff535f] px-6 py-[5px] rounded-full'>Send</button>
      </div>
    </div>
  )
}

export default TxDetails