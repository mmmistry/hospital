'use client'
import { FC, ReactElement } from 'react'
import OutlineLink from '@/components/CommonButtons/OutlineLink/page'
import { CommonTitleBorderColorText } from '@/components/Typography/page'
import PopularSearchTabs from './PopularSearchTabs/page'


const PopularSearchHub: FC = () :ReactElement => {

   return (
     <div className='popularSearchTabs md:pt-20 pt-14'>
         <div className='container mx-auto px-4'>
            <div className='sm:flex items-center justify-between'>
                <div className='mr-4 sm:mb-0 mb-4'><CommonTitleBorderColorText text='Popular searches on' subText={`${process.env.NEXT_PUBLIC_PROJECT_NAME}`}/></div>
                <OutlineLink btnOutLineLink="/" btnOutLineText='VIEW ALL'/>
            </div>
            <PopularSearchTabs/>
         </div>
     </div>
  )
}

export default PopularSearchHub