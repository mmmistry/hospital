'use client'
import { FC, ReactElement, useState } from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Links } from '@/constants/SidebarLinkContants'
import MenuToogleButton from '../Header/MenuToogleButton/page'

const Sidebar:FC<{sidebarIsOpen:boolean, sidebartoggleMenu: any}> = ({sidebarIsOpen, sidebartoggleMenu}): ReactElement => {
  const [activeMenuItem, setActiveMenuItem] = useState(1);

  return (
   <div className={`sidebar bg-white w-64 fixed top-0 bottom-0 left-0 z-10 shadow-4xl 2xl:w-72 h-[calc(100%_-_0px)] lg:h-[calc(100vh_-_0px)] ${sidebarIsOpen ? 'sidebarMenuShow' : 'hideMenuSidebarMenu'}`}>
       <div className='lg:hidden text-right'><MenuToogleButton onclick={sidebartoggleMenu} sidebarIsOpen={sidebarIsOpen} /></div>
       <div className='sidebar-menu-wrapper h-[calc(100%_-_60px)] overflow-x-hidden overscroll-y-contain custom-scrollbar'>
          <ul>
             {Links.map(({ title, path, img, id}) => (
                 <li key={id} className="mb-1">
                   <div className={` sidebar-menu ${activeMenuItem === id ? "sidebar-menu-active" : ""}`} onClick={() => setActiveMenuItem(id)}>
                    <NextLink href={path} className='sidebar-menu-links flex item-center text-base text-black font-medium px-3 py-3 transition-all hover:text-secondary'>
                       <Image src={img} alt={title} width='24' height='24' className='mr-2' />
                        {title}
                    </NextLink>
                  </div>
                 </li>
              ))} 
          </ul>
       </div>
   </div>
  )
}

export default Sidebar