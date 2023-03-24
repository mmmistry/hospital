'use client'
import { ReactElement} from 'react'
import { CheckIcn } from '@/components/icons/CommonIcons/page';
import { useSession } from 'next-auth/react';

const StepNav = (props:any): ReactElement => {
    const {data:session} :any = useSession()
    

    const navNamesBeforeLogin = ["General Details", "Upload Documents", "Clinic Details", "Bank Details"]
    const navNamesAfterLogin = ["Clinic Details", "Bank Details"]
    const dots = [];

    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <div className='setpWizard-items mr-3 last:mr-0 mb-3 lg:mb-0' key={`step-${i}`}>
                <div className={"setpWizard-menu flex items-center " + (isActive ? 'active' : '')}>
                   <CheckIcn className='bg-semilightgray text-white rounded-full min-w-4 w-4 h-4 mr-2'/>
                   <span className="setp_name font-semibold text-semilightgray text-sm 2xl:text-base">
                    {!session?.user?.id ?navNamesBeforeLogin[i-1]:navNamesAfterLogin[i-1]}
                   </span>
                </div>
            </div>
        ));
    }
    return (
        <div className="setpWizard-tabs flex flex-row flex-wrap pb-4 mb-4 border-b border-smextralightgray lg:flex-nowrap">
            {dots}
        </div>
    );
};

export default StepNav;




