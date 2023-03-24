import Image from 'next/image'
import { FC, Fragment, ReactElement } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, Transition } from '@headlessui/react'
import userImg from '../../public/assets/images/user-ic.png'
import CustomNextLink from '../CustomNextLink/page'
import { ROUTES } from '@/constants/Routes'
import { GET_HEADER } from '@/constants/getHeader'
import { GET_PROFILE } from '@/constants/getProfile'
import { ExitIcn, KeyIcn, UserCircleIcn } from '../icons/CommonIcons/page'
import NextLink from 'next/link'

const UserDropdown: FC = (): ReactElement => {
  const { data: session }: any = useSession()
  const router = useRouter()
  const pathName: any = usePathname()
  const logout = () => {
    signOut()
    localStorage.removeItem("userId")
    router.push(ROUTES.LOGIN)

  }
  return (
    <>
      {!GET_PROFILE.includes(pathName) && <>
        <div className="notificationsDropdown text-right">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="relative inline-flex w-full justify-center rounded-md sm:px-2 text-sm font-medium text-darkgray focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className='flex items-center'>
                  <div className='userNameImg flex items-center justify-center w-8 h-8 rounded-full border border-secondary mr-2'><Image src={userImg} alt='user' className='rounded-full' /></div>
                  <div className='text-left hidden lg:block'>
                    <div className='text-sm font-medium text-darkgray'>{session?.user?.full_name}</div>
                    <div className='text-xs text-secondary'>{session?.user?.GetSpecialities && session?.user?.GetSpecialities[0]?.specialist_name}</div>
                  </div>
                </div>
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
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-10 bg-white shadow-2xl focus:outline-none">
                <div className="w-8 overflow-hidden inline-block absolute -top-4 right-1">
                  <div className="h-4 w-4 bg-white rotate-45 shadow transform origin-bottom-left" />
                </div>
                <div className="px-4 py-3 border-smextralightgray !border-b !border-t-0 lg:hidden">
                  <div className='flex items-center'>
                    <div className='userNameImg flex items-center justify-center w-8 h-8 rounded-full border border-secondary mr-2'>
                      <Image src={userImg} alt='user' className='rounded-full' />
                    </div>
                    <div className='text-left'>
                      <div className='text-sm font-medium text-darkgray'>{session?.user?.full_name}</div>
                      <div className='text-xs text-secondary'>{session?.user?.GetSpecialities && session?.user?.GetSpecialities[0]?.specialist_name}</div>
                    </div>
                  </div>
                </div>
                <div className="!border-t-0">
                  <Menu.Item>
                    <div className='itemsLink px-3 py-3 border-b border-smextralightgray last:border-b-0'>
                      <NextLink href={`${ROUTES.DOCTOR_MY_PROFILE}`} className='flex items-center text-sm font-medium text-darkgray transition-all hover:text-secondary'><UserCircleIcn className='mr-3' /> My profile</NextLink>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='itemsLink px-3 py-3 border-b border-smextralightgray last:border-b-0'>
                      <NextLink href='/' className='flex items-center text-sm font-medium text-darkgray transition-all hover:text-secondary'><KeyIcn className='mr-3' /> Change password</NextLink>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='itemsLink px-4 py-4 border-b border-smextralightgray last:border-b-0'>
                      <NextLink href='/' onClick={logout} className='flex items-center text-sm font-medium text-darkgray transition-all hover:text-secondary'><ExitIcn className='mr-3' /> Logout</NextLink>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </>}
    </>
  )
}

export default UserDropdown