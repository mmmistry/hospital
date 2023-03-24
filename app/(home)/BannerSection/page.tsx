'use client'
import Image from 'next/image'
import { FC, ReactElement } from 'react'
import HeroBannerInfo from './HeroBannerInfo/page'
import bannerDoctor from '../../../public/assets/images/girl-doctor.png'
import HeroBannerCounter from './HeroBannerCounter/page'


const HeroBannerSection: FC = () :ReactElement => {
  
  return (
    <div className="homeBanner min-h-[60vh] pt-24 lg:pb-0 md:pb-10" style={{ backgroundImage: 'url("/assets/images/home-banner.png")' }} >
        <div className='container mx-auto px-4'>
            <div className='flex md:flex-row flex-col'>
                <div className='md:w-5/12 self-center'>
                     <HeroBannerInfo  
                        subTitle="HEALTHY EVERYDAY"
                        title='Feel Better About Finding Healthcare'
                        subInfo='Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque tincidunt'/>
                </div>
                <div className='md:w-5/12 md:-order-none order-3 self-end'>
                  <Image  
                    src={bannerDoctor}
                    width={640}
                    height={724}
                    alt="Picture of the doctor"/>
                </div>
                <div className='md:w-2/12 self-center'>
                    <HeroBannerCounter/>
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default HeroBannerSection