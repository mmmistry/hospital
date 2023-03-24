"use client"
import { FC, ReactElement } from 'react'
import { SmallTitle } from '@/components/Typography/page'
import PatientRegistrationStepWizard from './PatientRegistrationStepWizard/page'
import PatientSidebarImgBox from '@/components/PatientSidebarImgBox/page'


const Registration: FC = (): ReactElement => {

  return (
    <div className='lg:flex'>
      <div className='w-[calc(100%_-_0px)] lg:w-[calc(100%_-_288px)] 2xl:w-[calc(100%_-_320px)] lg:pr-5'>
        <SmallTitle text='Registration Details' className='font-bold mb-4' />
        <div className='py-6 rounded-10 shadow-6xl bg-white px-4 lg:px-6'>

          {/* Patient Registration */}
          <PatientRegistrationStepWizard />
        </div>
      </div>

      {/* Patient Registration */}
      <PatientSidebarImgBox />
    </div>

  )
}

export default Registration