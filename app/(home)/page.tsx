'use client'
import { ReactElement } from 'react'
import AllServicesMatch from './AllServicesMatch/page'
import HeroBannerSection from './BannerSection/page'
import DownloadAppSection from './DownloadAppSection/page'
import FindDoctor from './FindDoctor/page'
import PopularSearchHub from './PopularSearchHub/page'
import SearchBarSection from './SearchBarSection/page'
import Testimonial from './Testimonial/page'


const HomePage = (): ReactElement => {

  return (
    <div>
      <HeroBannerSection />
      <SearchBarSection />
      <PopularSearchHub />
      <AllServicesMatch />
      <FindDoctor />
      <Testimonial />
      <DownloadAppSection />
    </div>
  )
}

export default HomePage