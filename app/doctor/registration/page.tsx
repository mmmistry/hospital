"use client"
import { FC, ReactElement } from 'react'
import SidebarImgBox from '@/components/SidebarImgBox/page'
import { SmallTitle } from '@/components/Typography/page'
import RegistrationStepWizard from './RegistrationStepWizard/page'


const Registration: FC = (): ReactElement => {

  return (
    <div className='lg:flex'>
      <div className='w-[calc(100%_-_0px)] lg:w-[calc(100%_-_288px)] 2xl:w-[calc(100%_-_320px)] lg:pr-5'>
        <SmallTitle text='Registration Details' className='font-bold mb-4' />
        <div className='py-6 rounded-10 shadow-6xl bg-white px-4 lg:px-6'>
          {/* Doctor Registration */}
          <RegistrationStepWizard />

          {/* Patient Registration */}
          {/* <PatientRegistrationStepWizard/> */}
        </div>
      </div>

      {/* Doctor Registration */}
      <SidebarImgBox />

      {/* Patient Registration */}
      {/* <PatientSidebarImgBox/> */}
    </div>

  )
}

export default Registration