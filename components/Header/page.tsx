'use client'
import { FC, ReactElement, useState, useEffect } from 'react'
import NextLink from 'next/link'
import HeaderLogo from '../icons/HeaderLogo'
import HeaderLink from './HeaderLink/page'
import MenuToogleButton from './MenuToogleButton/page'
import OutlineLink from '../CommonButtons/OutlineLink/page'
import PrimaryLink from '../CommonButtons/PrimaryLink/page'
import NotificationsDropdown from '../NotificationsDropdown/page'
import UserDropdown from '../UserDropdown/page'
import { usePathname } from 'next/navigation'
import { GET_HEADER } from '@/constants/getHeader'

const Header: FC<{ sidebartoggleMenu: any, sidebarIsOpen: any }> = ({ sidebartoggleMenu, sidebarIsOpen }): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router: any = usePathname()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])
  return (

    <>
      {!GET_HEADER.includes(router) ? <>
        <header className={`header py-4 fixed w-fulltop-0 left-0 right-0 z-20 transition-colors bg-white  ${scroll ? 'bg-white shadow-sm' : 'bg-transparent shadow-none'}`}>
          <div className='mx-auto px-4'>
            <div className='flex justify-between items-center'>
              <div className='navbar-brand pr-2'>
                <NextLink href="/"><HeaderLogo /></NextLink>
              </div>
              <div className="right menu flex items-center">
                <div className='flex lg:hidden'>
                  <MenuToogleButton onclick={sidebartoggleMenu} sidebarIsOpen={sidebarIsOpen} />
                </div>
                <NotificationsDropdown />
                <UserDropdown />
              </div>
            </div>
          </div>
        </header>
      </> : <>
        <header className={`header py-4 fixed w-fulltop-0 left-0 right-0 z-20 transition-color  ${scroll ? 'bg-white shadow-sm' : 'bg-transparent shadow-none'}`}>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between items-center'>
              <div className='navbar-brand pr-2'>
                <NextLink href="/"><HeaderLogo /></NextLink>
              </div>
              <div className={`collaps-menu w-full ${isOpen ? 'menuShow' : 'hideMenu'}`}>
                <div className='lg:hidden'>
                  <MenuToogleButton onclick={toggleMenu} />
                </div>
                <div className='lg:flex'>
                  <HeaderLink />
                  <div className='nav-links lg:flex items-center lg:mt-0 mt-3'>
                    <div className='lg:mr-2 lg:mb-0 mb-3'><OutlineLink btnOutLineLink='/register' btnOutLineText='Register' /></div>
                    <div className='lg:ml-2 lg:mb-0 mb-3'><PrimaryLink btnPrimaryLink='/login' btnPrimaryText='Login' /></div>
                  </div>
                </div>
              </div>
              <div className='lg:hidden flex items-center'>
                <MenuToogleButton onclick={toggleMenu} />
              </div>
            </div>
          </div>
        </header >


      </>}
    </>
  )
}

export default Header

