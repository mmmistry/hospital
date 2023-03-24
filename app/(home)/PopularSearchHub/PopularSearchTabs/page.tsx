'use client'
import { FC, ReactElement } from 'react'
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Slider from 'react-slick'
import Image from 'next/image'


export function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
}

const PopularSearchTabs: FC = () :ReactElement => {
    const settings = {
        arrows: false, 
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              }
            },
          ]
     }
    let [categories] = useState({
        Specialists: [
          {
            id: 1,
            title: 'Allergist',
            img: '/assets/images/ic_allergist.png',
            alt: 'Allergist',
          },
          {
            id: 2,
            title: 'Neurology',
            img: '/assets/images/ic_neurology.png',
            alt: 'Neurology',
          },
          {
            id: 3,
            title: 'Gynecologist ',
            img: '/assets/images/ic_gynecologist.png',
            alt: 'Gynecologist',
          },
          {
            id: 4,
            title: 'Dentist',
            img: '/assets/images/ic_dentist.png',
            alt: 'Dentist',
          },
          {
            id: 5,
            title: 'Cardiologist',
            img: '/assets/images/ic_cardiologist.png',
            alt: 'Cardiologist',
          },
          {
            id: 6,
            title: 'Dermatologist',
            img: '/assets/images/ic_dermatologist.png',
            alt: 'Dermatologist',
          },
          {
            id: 7,
            title: 'Anesthesiologist',
            img: '/assets/images/ic_anesthesiologist.png',
            alt: 'Anesthesiologist',
          },
        ],
        Symptoms: [
          {
            id: 1,
            title: 'Neurology',
            img: '/assets/images/ic_neurology.png',
            alt: 'Neurology',
          },
          {
            id: 1,
            title: 'Allergist',
            img: '/assets/images/ic_allergist.png',
            alt: 'Allergist',
          },
          {
            id: 3,
            title: 'Gynecologist ',
            img: '/assets/images/ic_gynecologist.png',
            alt: 'Gynecologist',
          },
          {
            id: 4,
            title: 'Dentist',
            img: '/assets/images/ic_dentist.png',
            alt: 'Dentist',
          },
          {
            id: 5,
            title: 'Cardiologist',
            img: '/assets/images/ic_cardiologist.png',
            alt: 'Cardiologist',
          },
          {
            id: 6,
            title: 'Dermatologist',
            img: '/assets/images/ic_dermatologist.png',
            alt: 'Dermatologist',
          },
          {
            id: 7,
            title: 'Anesthesiologist',
            img: '/assets/images/ic_anesthesiologist.png',
            alt: 'Anesthesiologist',
          },
        ],
        Hospitals: [
          {
            id: 1,
            title: 'Allergist',
            img: '/assets/images/ic_allergist.png',
            alt: 'Allergist',
          },
          {
            id: 2,
            title: 'Neurology',
            img: '/assets/images/ic_neurology.png',
            alt: 'Neurology',
          },
          {
            id: 3,
            title: 'Gynecologist ',
            img: '/assets/images/ic_gynecologist.png',
            alt: 'Gynecologist',
          },
          {
            id: 4,
            title: 'Dentist',
            img: '/assets/images/ic_dentist.png',
            alt: 'Dentist',
          },
          {
            id: 5,
            title: 'Cardiologist',
            img: '/assets/images/ic_cardiologist.png',
            alt: 'Cardiologist',
          },
          {
            id: 6,
            title: 'Dermatologist',
            img: '/assets/images/ic_dermatologist.png',
            alt: 'Dermatologist',
          },
          {
            id: 7,
            title: 'Anesthesiologist',
            img: '/assets/images/ic_anesthesiologist.png',
            alt: 'Anesthesiologist',
          },
        ],
      })

    return (
    <div className="w-full lg:py-16 pt-14">
      <div className='lg:flex'>
        <Tab.Group>
            <Tab.List className="lg:w-3/12 flex lg:block lg:pr-2 lg:mr-4 lg:mb-0 mb-4 lg:border-r-4 lg:border-b-0 border-b lg:border-secondary border-lightgray">
            {Object.keys(categories).map((category) => (
                <Tab
                key={category}
                className={({ selected }) =>
                    classNames(
                    'w-full lg:pb-8 pb-4 lg:text-xl text-base leading-5 text-primary lg:text-left',
                    'ring-white focus:outline-none focus:ring-2 transition-colors',
                    selected
                        ? 'font-bold'
                        : 'text-semilightgray hover:text-primary '
                    )
                }
                >
                {category}
                </Tab>
            ))}
            </Tab.List>
            <Tab.Panels className="lg:w-9/12 lg:pl-3">
            {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                key={idx}
                className={classNames(
                    'p-0'
                )}
                >
                <Slider {...settings}>
                    {posts.map((post) => (
                        <div
                            key={post?.id}
                            className="docHubBox rounded-xl bg-extralightgray p-3"
                        >
                            <div className="mb-3">
                               <Image src={post.img} className="mx-auto" alt={post.alt} width='74' height='74'/>
                            </div>
                            <div className="text-base text-center">
                               {post.title}
                            </div>
                        </div>
                    ))}
                </Slider>
                </Tab.Panel>
            ))}
            </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default PopularSearchTabs

