'use client'
import { ChatIcn, CloseIcn, RemoveIcn, VideoIcn, VisitIcn } from '@/components/icons/CommonIcons/page'
import Image from 'next/image'
import { FC, ReactElement} from 'react'
import clinicImg from '../../../../../../public/assets/images/dummy.jpg'

const ClinicListing:FC<{handleShowAddNewClinicDetails:any}> = ({ handleShowAddNewClinicDetails}): ReactElement => {

  return (
    <div className='clinic-listing'>
        <div className="grid grid-cols-1 gap-5 mb-10 md:grid-cols-2">
            <div className='gridColsClinic relative border-2 border-midextralightgray rounded-10 p-4'>
                <button className="absolute -right-1 -top-2 hover:text-white cursor-pointer">
                   <CloseIcn className='w-4 h-4'/>
                </button>
                <div className='lg:flex inner-clinic-details'>
                    <div className='mr-4 mb-4 w-32 lg:w-20 xl:w-32 lg:mb-0'>
                        <Image src={clinicImg} alt="" width="128" height="128" className='rounded-10'/>
                    </div>
                    <div className='lg:w-[calc(100%_-_80px)] xl:w-[calc(100%_-_128px)]'>
                         <div className='text-lg font-bold text-black mb-2'>Life Line Hospital</div>
                          <div className='flex items-center border-b border-midextralightgray pb-2 mb-2'>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VideoIcn className='mr-1'/> Video Call
                             </div>
                             <div></div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VisitIcn className='mr-1' /> Visit Us
                             </div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <ChatIcn className='mr-1' /> Chat
                             </div>
                          </div>
                         <div className='text-base text-semilightgray'>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</div>
                    </div>
                </div>
            </div>
            <div className='gridColsClinic relative border-2 border-midextralightgray rounded-10 p-4'>
                <button className="absolute -right-1 -top-2 hover:text-white cursor-pointer">
                   <CloseIcn className='w-4 h-4'/>
                </button>
                <div className='lg:flex inner-clinic-details'>
                    <div className='mr-4 mb-4 w-32 lg:w-20 xl:w-32 lg:mb-0'>
                        <Image src={clinicImg} alt="" width="128" height="128" className='rounded-10'/>
                    </div>
                    <div className='lg:w-[calc(100%_-_80px)] xl:w-[calc(100%_-_128px)]'>
                         <div className='text-lg font-bold text-black mb-2'>Life Line Hospital</div>
                          <div className='flex items-center border-b border-midextralightgray pb-2 mb-2'>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VideoIcn className='mr-1'/> Video Call
                             </div>
                             <div></div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VisitIcn className='mr-1' /> Visit Us
                             </div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <ChatIcn className='mr-1' /> Chat
                             </div>
                          </div>
                         <div className='text-base text-semilightgray'>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</div>
                    </div>
                </div>
            </div>
            <div className='gridColsClinic relative border-2 border-midextralightgray rounded-10 p-4'>
                <button className="absolute -right-1 -top-2 hover:text-white cursor-pointer">
                   <CloseIcn className='w-4 h-4'/>
                </button>
                <div className='lg:flex inner-clinic-details'>
                    <div className='mr-4 mb-4 w-32 lg:w-20 xl:w-32 lg:mb-0'>
                        <Image src={clinicImg} alt="" width="128" height="128" className='rounded-10'/>
                    </div>
                    <div className='lg:w-[calc(100%_-_80px)] xl:w-[calc(100%_-_128px)]'>
                         <div className='text-lg font-bold text-black mb-2'>Life Line Hospital</div>
                          <div className='flex items-center border-b border-midextralightgray pb-2 mb-2'>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VideoIcn className='mr-1'/> Video Call
                             </div>
                             <div></div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VisitIcn className='mr-1' /> Visit Us
                             </div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <ChatIcn className='mr-1' /> Chat
                             </div>
                          </div>
                         <div className='text-base text-semilightgray'>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</div>
                    </div>
                </div>
            </div>
            <div className='gridColsClinic relative border-2 border-midextralightgray rounded-10 p-4'>
                <button className="absolute -right-1 -top-2 hover:text-white cursor-pointer">
                   <CloseIcn className='w-4 h-4'/>
                </button>
                <div className='lg:flex inner-clinic-details'>
                    <div className='mr-4 mb-4 w-32 lg:w-20 xl:w-32 lg:mb-0'>
                        <Image src={clinicImg} alt="" width="128" height="128" className='rounded-10'/>
                    </div>
                    <div className='lg:w-[calc(100%_-_80px)] xl:w-[calc(100%_-_128px)]'>
                         <div className='text-lg font-bold text-black mb-2'>Life Line Hospital</div>
                          <div className='flex items-center border-b border-midextralightgray pb-2 mb-2'>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VideoIcn className='mr-1'/> Video Call
                             </div>
                             <div></div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <VisitIcn className='mr-1' /> Visit Us
                             </div>
                             <div className='flex items-center text-sm border-r border-midextralightgray pl-3 pr-3 first:pl-0 last:border-0 last:pr-4'>
                               <ChatIcn className='mr-1' /> Chat
                             </div>
                          </div>
                         <div className='text-base text-semilightgray'>Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mb-3 text-center'>
            <button onClick={handleShowAddNewClinicDetails} className="inline-block primary-buttons text-white font-bold text-sm bg-secondary border border-secondary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base">ADD NEW CLINIC</button>
        </div>
    </div>
  )
}

export default ClinicListing