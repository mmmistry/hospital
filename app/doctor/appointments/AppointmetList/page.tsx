'use client'    
import { FC, ReactElement } from 'react'
import { SmallTitle } from '@/components/Typography/page'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import AppoinmentTabs from './AppointmentTabs/page'

const AppointmetList:FC = (): ReactElement => {

  return (
    <div className='mb-4'>
        <div className='flex justify-between flex-wrap'>
          <SmallTitle text='Appointment List' className='font-bold mb-3 mr-3'/>
          {/* <form className='mb-3'>
                 <div className='searchBar relative'>
                    <MagnifyingGlassIcon className='absolute h-5 w-5 left-2 top-2.5 text-lightgray'/>
                    <input type='search' className='w-full outline-0 rounded py-4 pr-4 pl-8 h-10 bg-white border-2 border-midextralightgray transition-all focus:border-secondary' placeholder='Search'/>
                 </div>
           </form> */}
        </div>
        <AppoinmentTabs/>
    </div>
  )
}

export default AppointmetList