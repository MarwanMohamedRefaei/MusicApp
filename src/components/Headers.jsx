import React from 'react'
import CenterMenu from './CenterMenu'

const Headers = () => {
  const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]'
  return (
    <div>
      <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
          <img className='logo w-[42px] h-[42px]' src={process.env.PUBLIC_URL+'/img/MuzicLogo.png'} alt=""  />
          <CenterMenu/>
          <div className="buttons flex">
              <button className={`mr-[35px] hover:bg-[#232A4E] `+buttonStyle}>Sign up</button>
              <button className={buttonStyle+` bg-[#232A4E] `}>Log in</button>
          </div>
      </div>
    </div>
  )
}

export default Headers
