'use client'

import { Fragment, ReactElement } from 'react'
import NextLink from 'next/link'
import FooterLogo from '../icons/FooterLogo'
import { SmallInfo } from '../Typography/page'
import LINKS from '@/constants/FooterLinkContants'
import { usePathname } from 'next/navigation'
import { GET_HEADER } from '@/constants/getHeader'

const Footer = (): ReactElement => {
  const router: any = usePathname()
  return (
    <>
      {!GET_HEADER.includes(router) ? <>
        <footer>
          <div className='bottom-footer bg-primary text-center pt-5 pb-4'>
            <SmallInfo text={`Copyright © 2023, ${process.env.NEXT_PUBLIC_PROJECT_NAME} All rights reserved.`} className='text-white ' />
          </div>
        </footer>
      </> : <>

        <footer className='bg-primary'>
          <div className='container mx-auto px-4'>
            <div className='top-footer md:pt-16 pt-12 md:pb-10 pb-6'>
              <div className='flex justify-center md:pb-12 pb-8'>
                <FooterLogo />
              </div>
              <div className="flex flex-row flex-wrap">
                <div className="md:w-30/12 w-full md:px-4 mb-5">
                  <div className='md:pr-5'>
                    <SmallInfo text='Maecenas interdum lorem eleifend orci aliquam mollis. Aliquam non rhoncus magna. Suspendisse aliquet tincidunt enim, ut commodo elit feugiat et. Maecenas interdum lorem eleifend orci aliquam mollis.' className='text-white ' />
                  </div>
                </div>
                {LINKS.FOOTER.DEFAULT.map(({ footerTitle, links }) => (
                  <Fragment key={footerTitle}>
                    <div className="md:w-14/12 w-full md:px-4 mb-5">
                      <div className='md:text-lg text-base	text-white font-bold mb-4'>{footerTitle}</div>
                      <ul>
                        {links.map(({ title, url }) => (
                          <li key={title} className='md:mb-3 mb-2'>
                            <NextLink href={url} className='md:text-base text-sm text-white transition-all hover:text-secondary'>{title}</NextLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div className='bottom-footer text-center pt-5 pb-4 border-t border-darkgray'>
              <SmallInfo text={`Copyright © 2023, ${process.env.NEXT_PUBLIC_PROJECT_NAME}. All rights reserved.`} className='text-white ' />
            </div>
          </div>
        </footer>
      </>}
    </>
  )
}
export default Footer


