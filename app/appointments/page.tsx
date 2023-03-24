'use client'
import { FC, ReactElement } from 'react'
import ChatBox from '@/components/ChatBox/page'
import AppointmetList from './AppointmetList/page'
import BannerAppoinment from './BannerAppoinment/page'

const Appointments: FC = (): ReactElement => {

  return (
    <div className='lg:flex'>
      <div className='w-[calc(100%_-_0px)] lg:w-[calc(100%_-_288px)] 2xl:w-[calc(100%_-_320px)] lg:pr-5'>
        <BannerAppoinment />
        <AppointmetList />
      </div>
      <ChatBox />
    </div>
  )
}

export default Appointments