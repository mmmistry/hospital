'use client'
import { FC, ReactElement } from 'react'
import { PageInfo, PageTitle } from '@/components/Typography/page'


const HeroBannerInfo: FC<{ title: string, subTitle: string,  subInfo:string}> = ({ title, subTitle, subInfo}) :ReactElement => {
  
  return (
    <div className='heroBannerleftInfo'>
        <div className='pb-5 text-xl xl:text-2xl text-secondary uppercase'>{subTitle}</div>
        <div className='pb-6'><PageTitle text={title}/></div>
        <div className='pb-3'><PageInfo text={subInfo}/></div>
    </div>
  )
}

export default HeroBannerInfo