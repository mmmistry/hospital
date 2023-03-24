'use client'
import { FC, ReactElement } from 'react'
import ChatBox from '@/components/ChatBox/page'
import AppointmetList from './AppointmetList/page'
import BannerAppoinment from './BannerAppoinment/page'
import HeadMetaData from '../../../components/HeadMetaData'
import { METADATA_TEXTS } from '@/constants/metadata'

const Appointments: FC = (): ReactElement => {

  return (
    // <HeadMetaData meta={METADATA_TEXTS["/doctor/appointments"].meta}>
    <div className='lg:flex'>
      <div className='w-[calc(100%_-_0px)] lg:w-[calc(100%_-_288px)] 2xl:w-[calc(100%_-_320px)] lg:pr-5'>
        <BannerAppoinment />
        <AppointmetList />
      </div>
      <ChatBox />
    </div>
    // </HeadMetaData>
  )
}

export default Appointments