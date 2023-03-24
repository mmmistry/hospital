'use client'
import Image from 'next/image'
import { FC, ReactElement} from 'react'
import registerImgBox from '../../public/assets/images/registration.png'

const SidebarImgBox:FC = (): ReactElement => {

  return (
    <div className='sidebarImgBox w-full lg:w-72 2xl:w-80 mt-12 hidden lg:block'>
        <Image src={registerImgBox} alt=''/>
    </div>
  )
}

export default SidebarImgBox