'use client'
import Image from 'next/image'
import { FC} from 'react'
import { Services } from '@/constants/SericesMatchContants'

const ServicesMatchBlock: FC = () => {
  
  return (
    <div className="flex md:pt-16 pt-10 flex-wrap lg:flex-nowrap">
        {Services.map((service, i) => {
              return (
                <div key={i} className='lg:w-4/12 sm:w-6/12 w-full sm:px-4'>
                    <div className='servicesMatchBlock px-5 py-8 mb-6 rounded-3xl h-full bg-transparent transition-all shadow-none hover:bg-secondary hover:shadow-green-boxShadow hover:text-white'>
                        <div className='flex mb-4'>
                            <div className='servicesMatchBlock-img rounded-xl bg-extralightgray p-4 text-center flex items-center justify-center'>
                                <Image  src={service.servImg} alt={service.alt}width="48" height='48'/>
                            </div>
                        </div>
                        <div className='playfair-font 2xl:text-3xl text-2xl font-bold mb-5'>{service.servTitle}</div>
                        <div className='xl:text-lg text-md hover:text-white'>{service.servContent}</div>
                    </div>
                </div>
              )
           })}
    </div>
  )
}

export default ServicesMatchBlock