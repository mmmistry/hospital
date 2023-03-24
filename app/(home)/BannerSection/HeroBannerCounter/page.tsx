import { FC, ReactElement } from 'react'

const counterItems = [
    { counter: '15+', text: 'Years of Experience' },
    { counter: '20K', text: 'Doctor Speacialists' },
    { counter: '100%', text: 'Patient Satisfaction' },
];
const HeroBannerCounter: FC = () :ReactElement => {

  return (
   <div className='heroBannerCounter flex flex-col md:items-end items-center md:mt-0 mt-5'>
        {counterItems.map((item, index) => (
            <div key={index} className='heroBannerCounter-box rounded-xl bg-lightgray text-center p-4 mb-5 max-w-[190px] last:mb-0'>
                <div className='text-4xl xl:text-5xl 2xl:text-6xl font-bold'>{item.counter}</div>
                <div className='text-sm xl:text-lg playfair-font font-bold'>{item.text}</div>
            </div>
        ))}
   </div>
  )
}

export default HeroBannerCounter