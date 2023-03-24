'use client'
import Image from 'next/image'
import { FC, ReactElement, useState } from 'react'
import { Tab } from '@headlessui/react'
import { InfoTextMd, TitleMd } from '@/components/Typography/page'
import PatientLogin from './PatientLogin/page'
import DoctorsLogin from '../doctor/login/page'
import PatinetImag from '../../public/assets/images/patients.png'
import DoctorImag from '../../public/assets/images/doctors.png'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const tabs = [
  {
    id: 'patient',
    label: 'Patient',
    content: <PatientLogin />,
  },
  {
    id: 'doctors',
    label: 'Doctors',
    content: <DoctorsLogin />,
  },
];

const Login: FC = (): ReactElement => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]?.id);
  return (
    <div className='login-register lg:pt-28 pt-24 lg:pb-16 pb-10'>
      <div className='container mx-auto px-4'>
        <div className='lg:flex'>
          <div className='left-col lg:w-1/2 lg:pr-5 lg:mb-0 mb-3'>
            {selectedTab === 'patient' && (
              <Image src={PatinetImag} alt="patient image" width={812} height={812} />
            )}
            {selectedTab === 'doctors' && (
              <Image src={DoctorImag} alt="doctor image" width={812} height={812} />
            )}
          </div>
          <div className='right-col lg:w-1/2 lg:pl-5 pt-4'>
            <div className='lg:max-w-xl mx-auto'>
              <div className='mb-3'><TitleMd text='Login' /></div>
              <InfoTextMd text='Log in to access your account and start using our services.' />
              <Tab.Group>
                <Tab.List className="flex p-1 lg:mt-10 mt-5">
                  {tabs.map(({ id, label }) => (
                    <Tab
                      key={id}
                      className={({ selected }) =>
                        classNames(
                          'w-full rounded-none py-2.5 text-sm font-semibold leading-5 border-b-2 text-primary uppercase',
                          'focus:outline-none focus:ring-0 ',
                          selected
                            ? 'bg-transparent shadow-none text-primary border-secondary'
                            : 'text-semilightgray hover:text-primary'
                        )
                      }
                      onClick={() => setSelectedTab(id)}
                    >
                      {label}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                  {tabs.map(({ id, content }) => (
                    <Tab.Panel
                      key={id}
                      className={classNames(
                        'rounded-xl bg-white p-3',
                        'ring-white focus:outline-none'
                      )}
                    >
                      {content}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login