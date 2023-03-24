import { FC, Fragment, ReactElement } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NotificationIcn } from '../icons/CommonIcons/page'
import { SmallTitle } from '../Typography/page'
import Image from 'next/image'
import UserNotificationImg from '../../public/assets/images/client1.png'
import { GET_PROFILE } from '@/constants/getProfile'
import { usePathname } from 'next/navigation'

const NotificationsDropdown: FC = (): ReactElement => {
  const pathName: any = usePathname()
  return (
    
    <div className="notificationsDropdown text-right">
      {!GET_PROFILE.includes(pathName) && <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="relative inline-flex w-full justify-center rounded-md py-3 px-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <NotificationIcn/>
            <span className='absolute flex items-center justify-center w-2.5 h-2.5 rounded-full bg-secondary text-8xs'>8</span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute p-1 right-0 mt-2 w-64 origin-top-right divide-y divide-gray-100 rounded-10 bg-white shadow-2xl	focus:outline-none md:w-500">
            <div className="w-8 overflow-hidden inline-block absolute -top-4 right-1">
              <div className="h-4 w-4 bg-white rotate-45 shadow transform origin-bottom-left"/>
            </div>
            <div className="inner_notifications !border-t-0">
              <SmallTitle text='Your notifications' className='font-bold text-center px-3 py-3'/>
              <Menu.Item>
                  <div className="group flex w-full bg-white px-2 py-2 border-b border-smextralightgray hover:bg-xsextralightgray transition-all last:border-b-0 md:px-3 md:py-3">
                      <div className='notification_user w-14 h-14 mr-3'><Image className='rounded-full' src={UserNotificationImg} alt="user"/></div>
                      <div className='notification_details'>
                         <div className='text-base font-bold group-hover:text-secondary md:text-lg'>Appointment confirmed</div>
                         <div className='text-sm'>Sophia Nil has cancelled appointment at 12 Jun, 10:00 AM</div>
                         <div className='text-xs text-semilightgray'>04-03-2023</div>
                      </div>
                  </div>
              </Menu.Item>
              <Menu.Item>
                  <div className="group flex w-full bg-white px-2 py-2 border-b border-smextralightgray hover:bg-xsextralightgray transition-all last:border-b-0 md:px-3 md:py-3">
                      <div className='notification_user w-14 h-14 mr-3'><Image className='rounded-full' src={UserNotificationImg} alt="user"/></div>
                      <div className='notification_details'>
                         <div className='text-base font-bold group-hover:text-secondary md:text-lg'>Appointment cancelled</div>
                         <div className='text-sm'>Sophia Nil has cancelled appointment at 12 Jun, 10:00 AM</div>
                         <div className='text-xs text-semilightgray'>04-03-2023</div>
                      </div>
                  </div>
              </Menu.Item>
              <Menu.Item>
                  <div className="group flex w-full bg-white px-2 py-2 border-b border-smextralightgray hover:bg-xsextralightgray transition-all last:border-b-0 md:px-3 md:py-3">
                      <div className='notification_user w-14 h-14 mr-3'><Image className='rounded-full' src={UserNotificationImg} alt="user"/></div>
                      <div className='notification_details'>
                         <div className='text-base font-bold group-hover:text-secondary md:text-lg'>Appointment cancelled</div>
                         <div className='text-sm'>Sophia Nil has cancelled appointment at 12 Jun, 10:00 AM</div>
                         <div className='text-xs text-semilightgray'>04-03-2023</div>
                      </div>
                  </div>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </>}
    </div>
  )
}

export default NotificationsDropdown