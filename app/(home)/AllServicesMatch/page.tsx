'use client'
import { FC, ReactElement } from 'react'
import { CommonTitleBorder, PageInfo } from '@/components/Typography/page'
import ServicesMatchBlock from './ServicesMatchBlock/page'

const AllServicesMatch: FC = () :ReactElement => {
  
  return (
    <div className="allServicesMatch md:pt-20 pt-14 md:pb-20 pb-14">
        <div className='container mx-auto px-4'>
            <div className='text-center'>
               <div className='inline-block mb-6'><CommonTitleBorder text='All services that match your needs' /></div>
               <div className='max-w-3xl mx-auto'><PageInfo text='Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque tincidunt Nunc scelerisque tincidunt elit.'/></div>
            </div>
            <ServicesMatchBlock/>
         </div>
         
    </div>
  )
}

export default AllServicesMatch