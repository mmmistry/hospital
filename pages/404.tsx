'use client'
import '@/styles/global.scss'
import Image from 'next/image'
import { FC, ReactElement} from 'react'
import Error404Img from '../public/assets/images/404.svg'

const Error404:FC = (): ReactElement => {
  return (
    <div className='flex items-center justify-center py-4 px-4 hfl-screen'>
        <Image src={Error404Img} alt='404'/>
    </div>
  )
}

export default Error404