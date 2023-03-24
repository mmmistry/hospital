'use client'
import Image from 'next/image'
import { FC, ReactElement} from 'react'
import PatientRegisterImgBox from '../../public/assets/images/patient-registration.png'

const PatientSidebarImgBox:FC = (): ReactElement => {

  return (
    <div className='sidebarImgBox w-full lg:w-72 2xl:w-80 mt-12 hidden lg:block'>
        <Image src={PatientRegisterImgBox} alt=''/>
    </div>
  )
}

export default PatientSidebarImgBox