import React from 'react'
import flower from "../assets/flower.png"
import { BsChevronDown } from 'react-icons/bs'

const CommunityJoiner = () => {
  return (
    <div className='p-[30px] py-[15px] bg-[#2c2c2c] rounded-[32px] flex items-center justify-between gap-10'>
      <img src={flower} className='w-[70px]' />
      <div className='flex gap-2'>
        <div>
          <div className='text-xl font-bold mb-[12px]'>Dear Client</div>
          <div className='text-sm text-[#d4d4d4] leading-6'>Join our online community. It helps in managing your projects</div>
        </div>
        <div>
          <BsChevronDown />
        </div>
      </div>
    </div>
  )
}

export default CommunityJoiner