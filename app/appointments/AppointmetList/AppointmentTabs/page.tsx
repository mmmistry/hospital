'use client'
import { FC, ReactElement} from 'react'
import { Tab } from '@headlessui/react'
import TodayList from './TodayList/page'
import UpcomingList from './UpcomingList/page'
import PastList from './PastList/page'

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

const tabs = [
  {
    id: 'Todays',
    label: 'Todays',
    content: <TodayList />,
  },
  {
    id: 'Upcoming',
    label: 'Upcoming',
    content: <UpcomingList />,
  },
  {
    id: 'Past',
    label: 'Past',
    content: <PastList />,
  },
];

const AppointmentTabs:FC = (): ReactElement => {
  return (
    <div className='appoinmentTabs rounded-10 shadow-6xl bg-white'>
            <Tab.Group>
                <Tab.List className="flex py-3 px-4">
                    {tabs.map(({ id, label }) => (
                        <Tab
                            key={id}
                            className={({ selected }) =>
                                classNames(
                                'rounded-none py-2.5 text-sm font-semibold leading-5 text-primary uppercase mr-6',
                                'focus:outline-none focus:ring-0 ',
                                selected
                                    ? 'bg-transparent shadow-none text-secondary border-b-2 border-secondary'
                                    : 'text-semilightgray hover:text-primary border-b-0'
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
    </div>
  )
}

export default AppointmentTabs