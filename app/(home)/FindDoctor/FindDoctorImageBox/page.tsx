'use client'
import Image from 'next/image'
import { FC} from 'react'
import FindDoctor from '../../../../public/assets/images/finddoctor.png'

const FindDoctorImageBox: FC = () => {
  return (
    <div className="findDoctorImageBox">
         <Image className='ml-auto'  src={FindDoctor} alt='find doctor' width="647" height='832'/>
    </div>
  )
}

export default FindDoctorImageBox