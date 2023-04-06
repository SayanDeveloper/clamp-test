import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ProjectDetails = () => {
  return (
    <div className='w-[50%] bg-[#2c2c2c] rounded-[28px] p-[20px] pt-[28px] pl-[25px]'>
      <div className='flex justify-between items-center'>
        <div className='text-[15px]'>
          Project Details
        </div>
        <BsThreeDotsVertical />
      </div>
      <h2 className='text-[#e65c61] text-[20px] my-2 font-semibold'>
        Hira R.
      </h2>
      <h3 className='mb-[30px] text-[16px]'>
        UX/UI Designer
      </h3>
      <div className='font-semibold text-sm mb-3'>Projects Progress</div>
      <div className='float-right font-semibold text-sm'>75%</div>
      <div className='w-[100%] h-[8px] mt-[18px] bg-white relative rounded-full top-6'>
          <div className='absolute top-0 -left-0 h-full w-[75%] bg-[#3927af] rounded-full'></div>
        </div>
    </div>
  )
}

export default ProjectDetails