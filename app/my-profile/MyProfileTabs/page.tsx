'use client'
import { FC, ReactElement} from 'react'
import { Tab } from '@headlessui/react'
import ProfileDetails from '../MyProfileTabs/ProfileDetails/page'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

const tabs = [
  {
    id: 'ProfileDetails',
    label: 'Profile Details',
    content: <ProfileDetails />,
  },
  {
    id: 'MedicalInformation',
    label: 'Medical Information',
    content: <ProfileDetails />,
  },
  {
    id: 'LifestyleInformation',
    label: 'Lifestyle Information',
    content: <ProfileDetails />,
  },
];

const MyProfileTabs:FC = (): ReactElement => {
  return (
    <Tab.Group>
        <Tab.List className="flex mb-7 flex-row flex-wrap border-b-2 border-smextralightgray lg:flex-nowrap">
            {tabs.map(({ id, label }) => (
                
            <Tab
                key={id}
                className={({ selected }) =>
                    classNames(
                    'rounded-none leading-5 border-b-2 text-primary capitalize -mb-px',
                    'focus:outline-none focus:ring-0 w-full sm:w-auto text-base 2xl:text-lg py-2.5 sm:px-3 lg:px-3 xl:px-6 2xl:px-11',
                    selected
                    ? 'bg-transparent shadow-none text-secondary border-secondary font-bold'
                    : 'text-semilightgray hover:text-secondary border-transparent'
                    )
                }
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
                    'rounded-xl bg-white pb-3',
                    'ring-white focus:outline-none'
                )}
                >
                {content}
                </Tab.Panel>
            ))}
        </Tab.Panels>
    </Tab.Group>
  )
}

export default MyProfileTabs