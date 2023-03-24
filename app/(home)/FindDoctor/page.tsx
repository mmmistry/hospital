'use client'
import { FC} from 'react'
import { CommonTitleBorder, PageInfo } from '@/components/Typography/page'
import FindDetails from './FindDetails/page'
import FindDoctorImageBox from './FindDoctorImageBox/page'

const FindDoctor: FC = () => {
  
  return (
    <div className="findDoctor md:pt-20 pt-14 md:pb-20 pb-14 bg-xlextralightgray">
        <div className='container mx-auto px-4'>
             <div className="grid md:grid-cols-2 gap-4">
                <div className='md:pr-14'>
                    <div className='mb-6'><CommonTitleBorder text='Find the right doctor at your fingertips' /></div>
                    <div className='mb-6'><PageInfo text='Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque tincidunt Nunc scelerisque tincidunt elit.'/></div>
                    <FindDetails/>
                </div>
                <div className='text-right'>
                   <FindDoctorImageBox/>
                </div>
              </div>
         </div>
         
    </div>
  )
}

export default FindDoctor