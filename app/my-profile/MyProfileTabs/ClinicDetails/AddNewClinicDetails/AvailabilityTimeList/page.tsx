'use client'
import { FC, useState} from 'react'
import Slider from 'react-slick'

const AvailabilityTimeList: FC = () => {
    const settings = {
        arrows: false, 
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint: 1540,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
            }
          },
        ]
    }
    let [categories] = useState<{
      [key: string]: {
        id: number;
        timeSlot: string;
      }[]
    }>({
      Monday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
      Tuesday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
      Wednesday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
      Thursday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
      Friday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
      Saturday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
      Sunday: [
        {
          id: 1,
          timeSlot: '09:00 AM'
        },
        {
          id: 2,
          timeSlot: '09:30 AM'
        },
        {
          id: 3,
          timeSlot: '10:00 AM'
        },
        {
          id: 4,
          timeSlot: '10:30 AM'
        },
        {
          id: 5,
          timeSlot: '11:00 AM'
        },
        {
          id: 6,
          timeSlot: '12:00 AM'
        },
        {
          id: 7,
          timeSlot: '13:00 AM'
        },
        {
          id: 8,
          timeSlot: '14:00 AM'
        },
      ],
    });
  return (
        <div>
          {Object.keys(categories).map((dayTitle) => (
            <div className='items-center py-2 sm:py-0 sm:flex' key={dayTitle}>
                <div className='sm:w-28 sm:pr-3'>
                         <div key={dayTitle} className='font-bold text-base'>
                              {dayTitle}
                          </div>
                </div>
                <div className='sm:w-[calc(100%_-_112px)]'>
                     <div className="timeSlotSlider border-b border-smextralightgray py-3 sm:py-2" key={dayTitle}>
                        <Slider {...settings}>
                            {categories[dayTitle].map((post) => (
                                <div key={post.id} className="customTime">
                                    <div className='customCunltCheckbox relative'>
                                        <input type="checkbox" name="chat" id="chat" className='checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 cursor-pointer'/>
                                        <div className='checkboxCunltLabel flex items-center justify-center px-3 py-2 rounded-3xl	text-xs bg-xsextralightgray'>
                                            <span>{post.timeSlot}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
           </div>
          ))} 
        </div>
  )
}

export default AvailabilityTimeList