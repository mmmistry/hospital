'use client'
import { FC} from 'react'
import NextLink from 'next/link'
import { CommonTitle, PageInfo } from '@/components/Typography/page'
import { AppStore, GoogleStore } from '@/components/icons/CommonIcons/page'
import PhoneNumberInput from '@/components/PhoneNumberInput/page'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'

const DownloadAppInfo: FC = () => {
  
  return (
    <div className='downloadAppInfo'>
        <div className='mb-6'><CommonTitle text={`Download the ${process.env.NEXT_PUBLIC_PROJECT_NAME} app`} /></div>
        <div className='mb-6'><PageInfo text={`Access video consultation with India’s top doctors on the ${process.env.NEXT_PUBLIC_PROJECT_NAME} app. Connect with doctors online, available 24/7, from the comfort of your home.`}/></div>
        <div className='form-group mb-4'>
            <div className='font-bold mb-4'>Get the link to download the app</div>
            <form>
                <div className='sm:flex items-center'>
                    <div className='sm:pr-5 sm:w-2/4 md:mb-0 mb-3'>
                    <PhoneNumberInput/>
                    </div>
                    <PrimaryButton type="button" btnPrimaryText2="SEND SMS"/>
                </div>
            </form>
            <div className='flex md:mt-8 mt-5'>
                <NextLink href="#" className='md:pr-6 pr-4'><GoogleStore/></NextLink>
                <NextLink href="#"><AppStore/></NextLink>
            </div>

        </div>
    </div>
  )
}

export default DownloadAppInfo