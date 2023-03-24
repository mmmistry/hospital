'use client'
import { FC, ReactElement } from 'react'
import NextLink from 'next/link'
import MyReviews from './Reviews/page'
import { SmallTitle } from '@/components/Typography/page'
import { ArrowLeftIcn } from '@/components/icons/CommonIcons/page'


const ReviewsDetails:FC = (): ReactElement => {

  return (
    <div className='max-w-6xl middle-max-layout'>
        <div className='mb-4'>
        <NextLink href='/' className='flex items-center'>
            <ArrowLeftIcn className='items-center mr-1'/>
            <SmallTitle text='Reviews' className='font-bold '/>
        </NextLink>
        </div>
        <div className='myReviews py-5 px-7 rounded-10 shadow-6xl bg-white'>
            <MyReviews/>
        </div>
    </div>
  )
}

export default ReviewsDetails