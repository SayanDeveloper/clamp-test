import React, { useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const ProjectProgress = () => {

  return (
    <div className='w-[50%] bg-[#2c2c2c] rounded-[28px] p-[20px] pt-[28px] h-[258px]'>
      <div className='flex justify-between items-center'>
        <div className='font-semibold text-sm'>Projects Progress</div>
        <BsThreeDotsVertical />
      </div>
      <div className="circular-progress">
        <div className='w-[64px] h-[64px] rounded-full bg-[#ff535f] z-10 flex justify-center items-center'>75%</div>
      </div>
      <div className='mt-[23px] text-[12px] text-[#e4e4e4]'>3 Remaining Projects</div>
    </div>
  )
}

export default ProjectProgress