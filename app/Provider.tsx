'use client'
import { usePathname } from "next/navigation";
import { useState } from "react";
import Header from "@/components/Header/page";
import Sidebar from "@/components/Sidebar/page";
import { TChildrenProps } from 'types/components';
import { GET_HEADER } from "@/constants/getHeader";
import { GET_PROFILE } from "@/constants/getProfile";

export const Provider = ({ children }: TChildrenProps): JSX.Element => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const router: any = usePathname()
    const sidebartoggleMenu = () => {
        setSidebarIsOpen(!sidebarIsOpen);
    };

    return (
        <>
            <Header sidebartoggleMenu={sidebartoggleMenu} sidebarIsOpen={sidebarIsOpen} />
            {!GET_HEADER.includes(router) ? <>
                <div className='main-body flex flex-col flex-auto lg:pl-64 2xl:pl-72'>

                    {
                        /**  after registration show sidebar  */
                    }
                    {!GET_HEADER.includes(router) && !GET_PROFILE.includes(router) &&
                        <Sidebar sidebartoggleMenu={sidebartoggleMenu} sidebarIsOpen={sidebarIsOpen} />}
                    <div className='app-main'>
                        <div className='app-middle-content'>{children}</div>
                    </div>
                </div>
            </> : <>
                {/* before login load children */}

                {children}

            </>}
        </>
    )
}