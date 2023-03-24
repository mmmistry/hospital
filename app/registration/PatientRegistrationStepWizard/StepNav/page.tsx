'use client'
import { ReactElement } from 'react'
import { CheckIcn } from '@/components/icons/CommonIcons/page';

const StepNav = (props: any): ReactElement => {
    const navNames = ["Personal Details", "Medical Information", "Lifestyle Information"]
    const dots = [];
    for (let i = 1; i <= props.totalSteps; i += 1) {
        const isActive = props.currentStep === i;
        dots.push((
            <div className='setpWizard-items mr-3 last:mr-0 mb-3 lg:mb-0' key={`step-${i}`}>
                <div className={"setpWizard-menu flex items-center " + (isActive ? 'active' : '')}>
                    <CheckIcn className='bg-semilightgray text-white rounded-full min-w-4 w-4 h-4 mr-2' />
                    <span className="setp_name font-semibold text-semilightgray text-sm 2xl:text-base">{navNames[i - 1]}</span>
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




