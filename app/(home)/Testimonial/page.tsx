'use client'
import { FC} from 'react'
import { CommonTitleBorder, PageInfo } from '@/components/Typography/page'
import TestimonialSlider from './TestimonialSlider/page'

const Testimonial: FC = () => {
  
  return (
    <div className="testimonial md:pt-20 pt-14 md:pb-20 pb-14">
        <div className='container mx-auto px-4'>
            <div className='text-center md:pb-14 pb-5'>
                   <div className='mb-6 inline-block'><CommonTitleBorder text='What our users have to say' /></div>
                   <div className='mb-6 max-w-3xl mx-auto'><PageInfo text='Nunc scelerisque tincidunt elit. Vestibulum non mi ipsum. Cras pretium suscipit tellus sit amet aliquet. Nunc scelerisque..'/></div>
            </div>
            <TestimonialSlider/>
         </div>
         
    </div>
  )
}

export default Testimonial