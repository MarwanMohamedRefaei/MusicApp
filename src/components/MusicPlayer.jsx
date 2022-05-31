import React from 'react'

const MusicPlayer = () => {
  return (
    <div className='musicPlayer flex flex-col px-5 w-[100%] border-2 border-black py-3 bg-[#232A4E] rounded-xl mt-5'>
        <div className="upperPart flex items-center justify-between">
                <div className="profile flex">
                    <img src={process.env.PUBLIC_URL+'/img/Mask Group 23.png'} alt=""
                    className='w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full' />
                    <div className="details flex flex-col ml-4">
                        <span className='text-[1rem]'>Trisam Bone Dry</span>
                        <span className='text-sm text-gray-500'>Unknown Artist</span>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL+'/img/path.png'} alt="" className='h-[1rem]' />
                </div>
        </div>
        <div className="lowerPart">
                <div className="track flex justify-between text-sm text-grey-500 flex-[2] items-center">
                    <span>2:30</span>
                    <img src={process.env.PUBLIC_URL+'/img/Group 9.png'} alt="" className='w-[16rem]' />
                    <span>4:30</span>
                </div>
        </div>
    </div>
  )
}

export default MusicPlayer
