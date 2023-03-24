import React, { FC, ReactElement} from 'react';
import NextLink from 'next/link'
import { HeadLinksInterface } from '@/constants/HeadLinkContants';



const HeaderLink: FC = (): ReactElement => {
    return (
        <ul className='lg:flex items-center mx-auto'>
           {HeadLinksInterface.map((item: HeadLinksInterface) => (
            <li key={item?.id}>
              <NextLink className='inline-block text-darkgray font-bold uppercase text-base	 lg:px-4 py-2 lg:py-0 hover:transition-all hover:text-secondary' href={item.link}>{item.title}</NextLink>
            </li>
        ))}
    </ul>
    )
}

export default HeaderLink;