'use client'
import { FC} from 'react'
import AppUserImage from './AppUserImage/page'
import DownloadAppInfo from './DownloadAppInfo/page'

const DownloadAppSection: FC = () => {
  
  return (
    <div className='container mx-auto px-4 md:pb-20 pb-14 md:pt-44 pt-40'>
        <div className="downloadAppSection bg-smextralightgray rounded-4xl">
            <div className="md:flex px-5">
                <div className='md:w-5/12 md:mb-0 mb-4'>
                    <AppUserImage/>
                </div>
                <div className='md:w-7/12 md:pl-14 self-center pt-5 pb-5'>
                    <DownloadAppInfo/>
                </div>
            </div>
        </div>
 </div>
  )
}

export default DownloadAppSection