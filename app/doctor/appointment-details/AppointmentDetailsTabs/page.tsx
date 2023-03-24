'use client'
import { FC, ReactElement} from 'react'
import { Tab } from '@headlessui/react'
import Appointment from './Appointment/page'
import Medical from './Medical/page'


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}


const AppointmentDetailsTabs: FC<{ medicalReportDetail: any , appointmentDetail: any  , patientDetail : any }> = ({ medicalReportDetail, appointmentDetail , patientDetail}): ReactElement => {

  const tabs = [
    {
      id: 'Appointment',
      label: 'Appointment',
      content: <Appointment appointmentDetail={appointmentDetail}/>,
    },
    {
      id: 'Medical',
      label: 'Medical',
      content: <Medical medicalReportDetail={medicalReportDetail} appointmentDetail={appointmentDetail} patientDetail={patientDetail}/>,
    },
  ];


  return (
    <Tab.Group>
        <Tab.List className="flex mb-5">
            {tabs.map(({ id, label }) => (
                
            <Tab
                key={id}
                className={({ selected }) =>
                    classNames(
                    'rounded-none py-2.5 text-sm font-semibold leading-5 border-b-2 text-primary uppercase px-5',
                    'focus:outline-none focus:ring-0 w-full sm:w-auto',
                    selected
                    ? 'bg-transparent shadow-none text-secondary border-secondary'
                    : 'text-semilightgray hover:text-secondary'
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

export default AppointmentDetailsTabs