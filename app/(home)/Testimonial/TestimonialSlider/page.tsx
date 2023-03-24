'use client'
import Image from 'next/image'
import { FC} from 'react'
import Slider from 'react-slick'
import Ratings from '@/components/Ratings/page'
import { posts } from '@/constants/TestimonialsContants'

const TestimonialSlider: FC = () => {
    const settings = {
        arrows: false, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
  return (
    <div className="testimonialSlider">
         <Slider {...settings}>
                    {posts.map((post) => (
                        <div
                            key={post.clientTitle}
                            className="!grid sm:grid-cols-2 gap-4"
                        >
                            <div className="mb-3 pr-4">
                               <Image src={post.largeImg} className="mx-auto" alt={post.clientTitle} width='615' height='544'/>
                            </div>
                            <div className="testimonialSlider_inner_info self-center">
                                <div className='flex mb-6'>
                                    <div className='mr-4'>
                                      <Image src={post.smallImg} className="rounded-2xl" alt={post.clientTitle} width='120' height='120'/>
                                    </div>
                                    <div>
                                        <div className='xl:text-3xl sm:text-2xl text-xl mb-2 font-bold'>{post.clientTitle}</div>
                                        <div className='xl:text-2xl sm:text-xl text-lg mb-2 font-bold'>{post.clientSubTitle}</div>
                                        <div className='flex'>
                                            <Ratings rating={post.rating}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='xl:text-xl sm:text-lg text-base font-medium'>
                                   {post.clientInfo}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
         
    </div>
  )
}

export default TestimonialSlider