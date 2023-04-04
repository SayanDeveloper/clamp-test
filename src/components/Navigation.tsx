import React from 'react'
import {BsFolder} from "react-icons/bs"
import {FiMail} from "react-icons/fi"
import {AiOutlineCalendar, AiOutlineForm} from "react-icons/ai"
import {GoGraph} from "react-icons/go"

interface NavigationProps {
  page: string
}

const Navigation = ({page} : NavigationProps) => {
  return (
    <div className='p-[40px] py-[30px] bg-[#2c2c2c] rounded-[32px] flex flex-col gap-6 text-[15px]'>
      <div className='flex items-center gap-4 nav-items'>
        <div className={`${page === "dashboard" && "bg-black"} p-2 px-3 rounded-md`}>
          <BsFolder fontSize={18} color='white'/>
        </div>
        <span>Dashboard</span>
      </div>
      <div className='flex items-center gap-4 nav-items'>
        <div className={`${page === "email" && "bg-black"} p-2 px-3 rounded-md`}>
          <FiMail fontSize={18} color='white'/>
        </div>
        <span>Email</span>
      </div>
      <div className='flex items-center gap-4 nav-items'>
        <div className={`${page === "cal" && "bg-black"} p-2 px-3 rounded-md`}>
          <AiOutlineCalendar fontSize={18} color='white'/>
        </div>
        <span>Calender</span>
      </div>
      <div className='flex items-center gap-4 nav-items'>
        <div className={`${page === "graph" && "bg-black"} p-2 px-3 rounded-md`}>
          <GoGraph fontSize={18} color='white'/>
        </div>
        <span>Graph</span>
      </div>
      <div className='flex items-center gap-4 nav-items'>
        <div className={`${page === "forms" && "bg-black"} p-2 px-3 rounded-md`}>
          <AiOutlineForm fontSize={18} color='white'/>
        </div>
        <span>Forms</span>
      </div>
    </div>
  )
}

export default Navigation