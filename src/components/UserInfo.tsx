import React from 'react'

const UserInfo = () => {
  return (
    <div className='p-[38px] py-[30px] bg-[#2c2c2c] rounded-[32px]'>
      <h2 className='text-[#e65c61] text-[20px] font-semibold mb-1'>
        Hira R.
      </h2>
      <h3 className='mb-[30px] text-[16px]'>
        UX/UI Designer
      </h3>

      <div className='flex gap-[40px]'>
        <div className='flex flex-col items-center'>
          <span className='text-bold'>
            125
          </span>
          <span className='text-[14px] mt-1'>
            Projects
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-bold'>
            $124
          </span>
          <span className='text-[14px] mt-1'>
            Revenue
          </span>
        </div>
      </div>

    </div>
  )
}

export default UserInfo