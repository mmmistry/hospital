
"use client";
import { FC, useState } from "react";
import Slider from "react-slick";

const AvailabilityTimeList: FC<{ data: any, setDoctorAppoiment: any, DoctorAppoiment: any }> = ({ data, setDoctorAppoiment, DoctorAppoiment }) => {
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
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1540,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  let [categories] = useState<{
    [key: string]: {
      id: number;
      from_time: string;
      to_time: string;
      day: number;
    }[];
  }>({
    Monday: [
      {
        id: 1,
        from_time: "09:00 AM",
        to_time: "09:30 AM",
        day: 1
      },
      {
        id: 2,
        from_time: "10:00 AM",
        to_time: "10:30 AM",
        day: 1
      },
      {
        id: 3,
        from_time: "11:00 AM",
        to_time: "11:30 AM",
        day: 1
      },
      {
        id: 4,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 1
      },
      {
        id: 5,
        from_time: "01:00 PM",
        to_time: "01:30 PM",
        day: 1
      },
      {
        id: 6,
        from_time: "02:00 PM",
        to_time: "02:30 PM",
        day: 1
      },
      {
        id: 7,
        from_time: "03:00 PM",
        to_time: "03:30 PM",
        day: 1
      },
      {
        id: 8,
        from_time: "04:00 PM",
        to_time: "04:30 PM",
        day: 1
      },
      {
        id: 9,
        from_time: "05:00 PM",
        to_time: "05:30 PM",
        day: 1
      },
      {
        id: 10,
        from_time: "06:00 PM",
        to_time: "06:30 PM",
        day: 1
      },
      {
        id: 11,
        from_time: "07:00 PM",
        to_time: "07:30 PM",
        day: 1
      },
      {
        id: 12,
        from_time: "08:00 PM",
        to_time: "08:30 PM",
        day: 1
      },
      {
        id: 13,
        from_time: "09:00 PM",
        to_time: "09:30 PM",
        day: 1
      },
      {
        id: 14,
        from_time: "10:00 PM",
        to_time: "10:30 PM",
        day: 1
      },
      {
        id: 15,
        from_time: "11:00 PM",
        to_time: "11:30 PM",
        day: 1
      },
      {
        id: 16,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 1
      },
      {
        id: 17,
        from_time: "01:00 AM",
        to_time: "01:30 AM",
        day: 1
      },
        {
        id: 18,
        from_time: "02:00 AM",
        to_time: "02:30 AM",
        day: 1
      },
         {
        id: 19,
        from_time: "03:00 AM",
        to_time: "03:30 AM",
        day: 1
      },
        {
        id: 20,
        from_time: "04:00 AM",
        to_time: "04:30 AM",
        day: 1
      },
        {
        id: 21,
        from_time: "05:00 AM",
        to_time: "05:30 AM",
        day: 1
      },
        {
        id: 22,
        from_time: "06:00 AM",
        to_time: "06:30 AM",
        day: 1
      },
        {
        id: 23,
        from_time: "07:00 AM",
        to_time: "07:30 AM",
        day: 1
      },
        {
        id: 24,
        from_time: "08:00 AM",
        to_time: "08:30 AM",
        day: 1
      },
    ],
    Tuesday: [
      {
        id: 1,
        from_time: "09:00 AM",
        to_time: "09:30 AM",
        day: 2
      },
      {
        id: 2,
        from_time: "10:00 AM",
        to_time: "10:30 AM",
        day: 2

      },
      {
        id: 3,
        from_time: "11:00 AM",
        to_time: "11:30 AM",
        day: 2

      },
      {
        id: 4,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 2

      },
      {
        id: 5,
        from_time: "01:00 PM",
        to_time: "01:30 PM",
        day: 2

      },
      {
        id: 6,
        from_time: "02:00 PM",
        to_time: "02:30 PM",
        day: 2

      },
      {
        id: 7,
        from_time: "03:00 PM",
        to_time: "03:30 PM",
        day: 2
      },
      {
        id: 8,
        from_time: "04:00 PM",
        to_time: "04:30 PM",
        day: 2
      },
      {
        id: 9,
        from_time: "05:00 PM",
        to_time: "05:30 PM",
        day: 2
      },
      {
        id: 10,
        from_time: "06:00 PM",
        to_time: "06:30 PM",
        day: 2
      },
      {
        id: 11,
        from_time: "07:00 PM",
        to_time: "07:30 PM",
        day: 2
      },
      {
        id: 12,
        from_time: "08:00 PM",
        to_time: "08:30 PM",
        day: 2
      },
      {
        id: 13,
        from_time: "09:00 PM",
        to_time: "09:30 PM",
        day: 2
      },
      {
        id: 14,
        from_time: "10:00 PM",
        to_time: "10:30 PM",
        day: 2
      },
      {
        id: 15,
        from_time: "11:00 PM",
        to_time: "11:30 PM",
        day: 2
      },
      {
        id: 16,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 2
      },
      {
        id: 17,
        from_time: "01:00 AM",
        to_time: "01:30 AM",
        day: 2
      },
        {
        id: 18,
        from_time: "02:00 AM",
        to_time: "02:30 AM",
        day: 2
      },
         {
        id: 19,
        from_time: "03:00 AM",
        to_time: "03:30 AM",
        day: 2
      },
        {
        id: 20,
        from_time: "04:00 AM",
        to_time: "04:30 AM",
        day: 2
      },
        {
        id: 21,
        from_time: "05:00 AM",
        to_time: "05:30 AM",
        day: 2
      },
        {
        id: 22,
        from_time: "06:00 AM",
        to_time: "06:30 AM",
        day: 2
      },
        {
        id: 23,
        from_time: "07:00 AM",
        to_time: "07:30 AM",
        day: 2
      },
        {
        id: 24,
        from_time: "08:00 AM",
        to_time: "08:30 AM",
        day: 2
      },
    ],

    Wednesday: [
      {
        id: 1,
        from_time: "09:00 AM",
        to_time: "09:30 AM",
        day: 3

      },
      {
        id: 2,
        from_time: "10:00 AM",
        to_time: "10:30 AM",
        day: 3

      },
      {
        id: 3,
        from_time: "11:00 AM",
        to_time: "11:30 AM",
        day: 3

      },
      {
        id: 4,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 3

      },
      {
        id: 5,
        from_time: "01:00 PM",
        to_time: "01:30 PM",
        day: 3

      },
      {
        id: 6,
        from_time: "02:00 PM",
        to_time: "02:30 PM",
        day: 3

      },
      {
        id: 7,
        from_time: "03:00 PM",
        to_time: "03:30 PM",
        day: 3
      },
      {
        id: 8,
        from_time: "04:00 PM",
        to_time: "04:30 PM",
        day: 3
      },
      {
        id: 9,
        from_time: "05:00 PM",
        to_time: "05:30 PM",
        day: 3
      },
      {
        id: 10,
        from_time: "06:00 PM",
        to_time: "06:30 PM",
        day: 3
      },
      {
        id: 11,
        from_time: "07:00 PM",
        to_time: "07:30 PM",
        day: 3
      },
      {
        id: 12,
        from_time: "08:00 PM",
        to_time: "08:30 PM",
        day: 3
      },
      {
        id: 13,
        from_time: "09:00 PM",
        to_time: "09:30 PM",
        day: 3
      },
      {
        id: 14,
        from_time: "10:00 PM",
        to_time: "10:30 PM",
        day: 3
      },
      {
        id: 15,
        from_time: "11:00 PM",
        to_time: "11:30 PM",
        day: 3
      },
      {
        id: 16,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 3
      },
      {
        id: 17,
        from_time: "01:00 AM",
        to_time: "01:30 AM",
        day: 3
      },
        {
        id: 18,
        from_time: "02:00 AM",
        to_time: "02:30 AM",
        day: 3
      },
         {
        id: 19,
        from_time: "03:00 AM",
        to_time: "03:30 AM",
        day: 3
      },
        {
        id: 20,
        from_time: "04:00 AM",
        to_time: "04:30 AM",
        day: 3
      },
        {
        id: 21,
        from_time: "05:00 AM",
        to_time: "05:30 AM",
        day: 3
      },
        {
        id: 22,
        from_time: "06:00 AM",
        to_time: "06:30 AM",
        day: 3
      },
        {
        id: 23,
        from_time: "07:00 AM",
        to_time: "07:30 AM",
        day: 3
      },
        {
        id: 24,
        from_time: "08:00 AM",
        to_time: "08:30 AM",
        day: 3
      },
    ],
    Thursday: [
      {
        id: 1,
        from_time: "09:00 AM",
        to_time: "09:30 AM",
        day: 4

      },
      {

        id: 2,
        from_time: "10:00 AM",
        to_time: "10:30 AM",
        day: 4

      },
      {
        id: 3,
        from_time: "11:00 AM",
        to_time: "11:30 AM",
        day: 4

      },
      {
        id: 4,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 4

      },
      {
        id: 5,
        from_time: "01:00 PM",
        to_time: "01:30 PM",
        day: 4

      },
      {
        id: 6,
        from_time: "02:00 PM",
        to_time: "02:30 PM",
        day: 4

      },
      {
        id: 7,
        from_time: "03:00 PM",
        to_time: "03:30 PM",
        day: 4
      },
      {
        id: 8,
        from_time: "04:00 PM",
        to_time: "04:30 PM",
        day: 4
      },
      {
        id: 9,
        from_time: "05:00 PM",
        to_time: "05:30 PM",
        day: 4
      },
      {
        id: 10,
        from_time: "06:00 PM",
        to_time: "06:30 PM",
        day: 4
      },
      {
        id: 11,
        from_time: "07:00 PM",
        to_time: "07:30 PM",
        day: 4
      },
      {
        id: 12,
        from_time: "08:00 PM",
        to_time: "08:30 PM",
        day: 4
      },
      {
        id: 13,
        from_time: "09:00 PM",
        to_time: "09:30 PM",
        day: 4
      },
      {
        id: 14,
        from_time: "10:00 PM",
        to_time: "10:30 PM",
        day: 4
      },
      {
        id: 15,
        from_time: "11:00 PM",
        to_time: "11:30 PM",
        day: 4
      },
      {
        id: 16,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 4
      },
      {
        id: 17,
        from_time: "01:00 AM",
        to_time: "01:30 AM",
        day: 4
      },
        {
        id: 18,
        from_time: "02:00 AM",
        to_time: "02:30 AM",
        day: 4
      },
         {
        id: 19,
        from_time: "03:00 AM",
        to_time: "03:30 AM",
        day: 4
      },
        {
        id: 20,
        from_time: "04:00 AM",
        to_time: "04:30 AM",
        day: 4
      },
        {
        id: 21,
        from_time: "05:00 AM",
        to_time: "05:30 AM",
        day: 4
      },
        {
        id: 22,
        from_time: "06:00 AM",
        to_time: "06:30 AM",
        day: 4
      },
        {
        id: 23,
        from_time: "07:00 AM",
        to_time: "07:30 AM",
        day: 4
      },
        {
        id: 24,
        from_time: "08:00 AM",
        to_time: "08:30 AM",
        day: 4
      },
    ],
    Friday: [
      {
        id: 1,
        from_time: "09:00 AM",
        to_time: "09:30 AM",
        day: 5

      },
      {
        id: 2,
        from_time: "10:00 AM",
        to_time: "10:30 AM",
        day: 5

      },
      {
        id: 3,
        from_time: "11:00 AM",
        to_time: "11:30 AM",
        day: 5

      },
      {
        id: 4,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 5

      },
      {
        id: 5,
        from_time: "01:00 PM",
        to_time: "01:30 PM",
        day: 5

      },
      {
        id: 6,
        from_time: "02:00 PM",
        to_time: "02:30 PM",
        day: 5

      },
      {
        id: 7,
        from_time: "03:00 PM",
        to_time: "03:30 PM",
        day: 5
      },
      {
        id: 8,
        from_time: "04:00 PM",
        to_time: "04:30 PM",
        day: 5
      },
      {
        id: 9,
        from_time: "05:00 PM",
        to_time: "05:30 PM",
        day: 5
      },
      {
        id: 10,
        from_time: "06:00 PM",
        to_time: "06:30 PM",
        day: 5
      },
      {
        id: 11,
        from_time: "07:00 PM",
        to_time: "07:30 PM",
        day: 5
      },
      {
        id: 12,
        from_time: "08:00 PM",
        to_time: "08:30 PM",
        day: 5
      },
      {
        id: 13,
        from_time: "09:00 PM",
        to_time: "09:30 PM",
        day: 5
      },
      {
        id: 14,
        from_time: "10:00 PM",
        to_time: "10:30 PM",
        day: 5
      },
      {
        id: 15,
        from_time: "11:00 PM",
        to_time: "11:30 PM",
        day: 5
      },
      {
        id: 16,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 5
      },
      {
        id: 17,
        from_time: "01:00 AM",
        to_time: "01:30 AM",
        day: 5
      },
        {
        id: 18,
        from_time: "02:00 AM",
        to_time: "02:30 AM",
        day: 5
      },
         {
        id: 19,
        from_time: "03:00 AM",
        to_time: "03:30 AM",
        day: 5
      },
        {
        id: 20,
        from_time: "04:00 AM",
        to_time: "04:30 AM",
        day: 5
      },
        {
        id: 21,
        from_time: "05:00 AM",
        to_time: "05:30 AM",
        day: 5
      },
        {
        id: 22,
        from_time: "06:00 AM",
        to_time: "06:30 AM",
        day: 5
      },
        {
        id: 23,
        from_time: "07:00 AM",
        to_time: "07:30 AM",
        day: 5
      },
        {
        id: 24,
        from_time: "08:00 AM",
        to_time: "08:30 AM",
        day: 5
      },
    ],
    Saturday: [
      {
        id: 1,
        from_time: "09:00 AM",
        to_time: "09:30 AM",
        day: 6

      },
      {
        id: 2,
        from_time: "10:00 AM",
        to_time: "10:30 AM",
        day: 6

      },
      {
        id: 3,
        from_time: "11:00 AM",
        to_time: "11:30 AM",
        day: 6

      },
      {
        id: 4,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 6

      },
      {
        id: 5,
        from_time: "01:00 PM",
        to_time: "01:30 PM",
        day: 6

      },
      {
        id: 6,
        from_time: "02:00 PM",
        to_time: "02:30 PM",
        day: 6

      },
      {
        id: 7,
        from_time: "03:00 PM",
        to_time: "03:30 PM",
        day: 6
      },
      {
        id: 8,
        from_time: "04:00 PM",
        to_time: "04:30 PM",
        day: 6
      },
      {
        id: 9,
        from_time: "05:00 PM",
        to_time: "05:30 PM",
        day: 6
      },
      {
        id: 10,
        from_time: "06:00 PM",
        to_time: "06:30 PM",
        day: 6
      },
      {
        id: 11,
        from_time: "07:00 PM",
        to_time: "07:30 PM",
        day: 6
      },
      {
        id: 12,
        from_time: "08:00 PM",
        to_time: "08:30 PM",
        day: 6
      },
      {
        id: 13,
        from_time: "09:00 PM",
        to_time: "09:30 PM",
        day: 6
      },
      {
        id: 14,
        from_time: "10:00 PM",
        to_time: "10:30 PM",
        day: 6
      },
      {
        id: 15,
        from_time: "11:00 PM",
        to_time: "11:30 PM",
        day: 6
      },
      {
        id: 16,
        from_time: "12:00 PM",
        to_time: "12:30 PM",
        day: 6
      },
      {
        id: 17,
        from_time: "01:00 AM",
        to_time: "01:30 AM",
        day: 6
      },
        {
        id: 18,
        from_time: "02:00 AM",
        to_time: "02:30 AM",
        day: 6
      },
         {
        id: 19,
        from_time: "03:00 AM",
        to_time: "03:30 AM",
        day: 6
      },
        {
        id: 20,
        from_time: "04:00 AM",
        to_time: "04:30 AM",
        day: 6
      },
        {
        id: 21,
        from_time: "05:00 AM",
        to_time: "05:30 AM",
        day: 6
      },
        {
        id: 22,
        from_time: "06:00 AM",
        to_time: "06:30 AM",
        day: 6
      },
        {
        id: 23,
        from_time: "07:00 AM",
        to_time: "07:30 AM",
        day: 6
      },
        {
        id: 24,
        from_time: "08:00 AM",
        to_time: "08:30 AM",
        day: 6
      },
    ],
  });

  const handleArrayValue = (post: any) => {

    setDoctorAppoiment([...DoctorAppoiment, post])

  }

  return (
    <div>
      {Object.keys(categories).map((dayTitle) => (
        <div className="items-center py-2 sm:flex sm:py-0" key={dayTitle}>
          <div className="sm:w-28 sm:pr-3">
            <div key={dayTitle} className="text-base font-bold">
              {dayTitle}
            </div>
          </div>
          <div className="sm:w-[calc(100%_-_112px)]">
            <div
              className="timeSlotSlider border-b border-smextralightgray py-3 sm:py-2"
              key={dayTitle}
            >
              <Slider {...settings}>
                {categories[dayTitle].map((post:any , index:any) => (
                  <div key={post?.id} className="customTime">
                    <div className="customCunltCheckbox relative">
                      <input
                        type="checkbox"
                        {...data}
                
                        value={""}
                        onClick={() => handleArrayValue(post)}
                        className="checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full cursor-pointer opacity-0"
                      />
                      <div className="checkboxCunltLabel flex items-center justify-center rounded-3xl bg-xsextralightgray px-3	py-2 text-xs">
                        <span>
                          {post.from_time} - {post.to_time}
                        </span>
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
  );
};

export default AvailabilityTimeList;
