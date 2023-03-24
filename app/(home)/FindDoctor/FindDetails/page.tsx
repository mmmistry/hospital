'use client'
import Image from 'next/image'
import { FC} from 'react'
import { items } from '@/constants/FindDoctorContants'

const FindDetails: FC = () => {
  
  return (
    <div className="findDetails pt-5">
           {items.map((item, i) => {
              return (
                <div key={i} className='findDetails-box pb-6 relative pl-16'>
                    <div className='absolute left-0 top-0'>
                        <Image  src={item.findImg} alt={item.alt} width="40" height='40'/>
                    </div>
                    <div className='font-bold md:text-2xl text-xl mb-3'>{item.findTitle}</div>
                    <div className='md:text-xl text-base'>{item.findContent}</div>
                </div>
              )
           })}
    </div>
  )
}

export default FindDetails