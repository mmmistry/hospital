'use client'
import React,{ FC, ReactElement} from 'react'
import { SmallTitle } from '@/components/Typography/page'
import Ratings from '@/components/Ratings/page'

const ReviewsDetails:FC = (): ReactElement => {

  return (
    <div>
      <SmallTitle className='text-lg font-bold lg:text-xl' text='Ratings and review' />
      <div className='py-5 sm:flex'>
          <div className='mb-4 sm:mr-16'>
            <img src="/assets/images/patient-photo.png" width={104} height={104} alt='Image' className='rounded-10' />
          </div>
          <div className='reviews-details sm:w-[calc(100%_-_104px)]'>
            <div className='flex justify-between items-start flex-wrap pb-7 mb-5 border-b-2 border-midextralightgray'>
              <div className='w-full mb-3 md:w-3/4 md:mb-0'>
                <div className='font-bold text-lg pr-3'>DR. Sophia Nil</div>
                <div className='flex items-center'>
                    <div className='text-semilightgray text-base'>Cardiologist</div>
                    <div className='text-semilightgray text-base pl-1 pr-1 leading-none -mt-1.5'>.</div>
                    <div className='text-semilightgray text-base'>Audiologist</div>
                    <div className='text-semilightgray text-base pl-1 pr-1 leading-none -mt-1.5'>.</div>
                    <div className='text-semilightgray text-base'>Dentist</div>
                </div>
                <div className='text-base mt-2 md:mt-5 sm:flex '>
                    <div className='text-base border-midextralightgray sm:pr-2 sm:mr-2 sm:border-r-2'>Total People Rated <span className='font-bold text-lg text-secondary pl-2'>04</span></div> 
                    <div className='text-base'>Appointment booked <span className='font-bold text-lg text-secondary pl-2'>09</span></div> 
                </div>
              </div>
              <div className='w-full sm:text-right md:w-1/4'>
                <div className='text-semilightgray text-base sm:text-left'>Avg. Review</div>
                <div className='flex font-bold text-lg items-center sm:text-left'>5.0 <span className='pl-2'><Ratings rating={5}/></span></div>
              </div>
            </div>
           
           <div className='sm:flex'>
                <div className='sm:mr-8'>
                    <img src="/assets/images/patient-photo.png" width={53} height={53} alt='Image' className='rounded-full' />
                </div>
                <div className='reviews-details sm:w-[calc(100%_-_104px)]'>
                    <div className='flex justify-between items-start flex-wrap pb-3 mb-3 border-b-2 border-midextralightgray'>
                        <div className='w-full sm:w-4/5 lg:w-10/12'>
                            <div className='font-bold text-lg pr-3'>Sophia Nil</div>
                            <div className='lg:flex'>
                               <div className='text-semilightgray text-base mr-3'>04-03-2023</div>
                               <div className='text-semilightgray text-base'>Visited For <span className='ml-1 text-black font-medium'>Cold Fever</span></div>
                            </div>
                            <div className='w-full text-base mt-2'>
                                It was really good no doubt appreciable too Knowledge with experience and honesty towards work. It was really good no doubt appreciable too Knowledge with experience and honesty towards work. It was really good no doubt appreciable too Knowledge with experience and honesty towards work.
                            </div>
                        </div>
                        <div className='w-full mt-3 md:mt-0 sm:text-right sm:w-auto'>
                            <div className='inline-block text-semilightgray text-base sm:text-left'>
                                <span className="confirm-badge flex font-bold text-lg items-center font-xs rounded-3xl px-2 py-1 text-center bg-secondary text-white ">5.0  <img src="/assets/images/icon-star.svg" alt='star' className='pl-2' /></span>
                            </div>
                        </div>
                    </div> 
                </div>
           </div>

           <div className='sm:flex'>
                <div className='sm:mr-8'>
                    <img src="/assets/images/patient-photo.png" width={53} height={53} alt='Image' className='rounded-full' />
                </div>
                <div className='reviews-details sm:w-[calc(100%_-_104px)]'>
                    <div className='flex justify-between items-start flex-wrap pb-3 mb-3 border-b-2 border-midextralightgray'>
                        <div className='w-full sm:w-1/2 lg:w-10/12'>
                            <div className='font-bold text-lg pr-3'>Dan Holland</div>
                            <div className='lg:flex'>
                               <div className='text-semilightgray text-base mr-3'>05-03-2023</div>
                               <div className='text-semilightgray text-base'>Visited For <span className='ml-1 text-black font-medium'>Cold Fever</span></div>
                            </div>
                            <div className='w-full text-base mt-2'>
                            It was really good no doubt appreciable too Knowledge with experience and honesty towards work.
                            </div>
                            
                        </div>
                        <div className='w-full mt-3 md:mt-0 sm:text-right sm:w-auto '>
                            <div className='inline-block text-semilightgray text-base sm:text-left'>
                              <span className="confirm-badge flex font-bold text-lg items-center font-xs rounded-3xl px-2 py-1 text-center bg-secondary text-white ">4.5  <img src="/assets/images/icon-star.svg" alt='star' className='pl-2' /></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
           </div>

           <div className='sm:flex'>
                <div className='sm:mr-8'>
                    <img src="/assets/images/patient-photo.png" width={53} height={53} alt='Image' className='rounded-full' />
                </div>
                <div className='reviews-details sm:w-[calc(100%_-_104px)]'>
                    <div className='flex justify-between items-start flex-wrap pb-3 mb-3 border-b-2 border-midextralightgray'>
                        <div className='w-full sm:w-1/2 lg:w-10/12'>
                            <div className='font-bold text-lg pr-3'>Louis Schneider</div>
                            <div className='lg:flex'>
                               <div className='text-semilightgray text-base mr-3'>06-03-2023</div>
                               <div className='text-semilightgray text-base'>Visited For <span className='ml-1 text-black font-medium'>Cold Fever</span></div>
                            </div>
                            <div className='w-full text-base mt-2'>
                                It was really good no doubt appreciable too Knowledge with experience and honesty towards work.
                            </div>
                        </div>
                        <div className='w-full mt-3 md:mt-0 sm:text-right sm:w-auto'>
                            <div className='inline-block text-semilightgray text-base sm:text-left'>
                              <span className="confirm-badge flex font-bold text-lg items-center font-xs rounded-3xl px-2 py-1 text-center bg-secondary text-white ">4.0  <img src="/assets/images/icon-star.svg" alt='star' className='pl-2' /></span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
          </div>
        </div>
    </div>
  )
}

export default ReviewsDetails
