import React from 'react'

const DownloadAds = () => {
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
  return (
    <div className='download'>
        <div className="download_images flex">
            <img className={downloadImgStyle+` mr-[2rem] `} src={process.env.PUBLIC_URL+'/img/App Store.png'} alt="" />
            <img className={downloadImgStyle} src={process.env.PUBLIC_URL+'/img/Google Play.png'} alt="" />
        </div>
    </div>
  )
}

export default DownloadAds
