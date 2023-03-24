'use client'
import { FC, ReactElement } from 'react'
import NextLink from 'next/link'
import MyProfileTabs from './MyProfileTabs/page'
import { SmallTitle } from '@/components/Typography/page'
import { ArrowLeftIcn } from '../../components/icons/CommonIcons/page'

const MyProfileDetails:FC = (): ReactElement => {

  return (
    <div className='max-w-6xl middle-max-layout'>
        <div className='mb-4'>
        <NextLink href='/' className='flex items-center'>
            <ArrowLeftIcn className='items-center mr-1'/>
            <SmallTitle text='My profile' className='font-bold '/>
        </NextLink>
        </div>
        <div className='myProfileTabs py-2 px-7 rounded-10 shadow-6xl bg-white'>
            <MyProfileTabs/>
        </div>
    </div>
  )
}

export default MyProfileDetails