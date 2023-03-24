'use client'
import Image from 'next/image'
import { FC, ReactElement } from 'react'
import bannerApoinment from '../../../public/assets/images/banner.png'

const BannerAppoinment: FC = (): ReactElement => {

  return (
    <div className='mb-4'>
      <Image src={bannerApoinment} className='rounded-lg w-full' width='1144' height='178' alt='doctor' />
    </div>
  )
}

export default BannerAppoinment