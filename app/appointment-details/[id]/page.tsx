'use client'
import { FC, ReactElement, useEffect, useState } from 'react'
import Nextlink from 'next/link'
import { SmallTitle } from '@/components/Typography/page'
import { ArrowLeftIcn } from '../../../components/icons/CommonIcons/page'
import AppointmentDetailsTabs from '../AppointmentDetailsTabs/page'
import { getBookAppoinmentDetail } from '@/utils/api-handler/patient/page'

const AppointmentDetails: FC = (prop: any): ReactElement => {
  const [appointmentDetail, setAppointmentDetail] = useState<any>();
  const [patientDetail, setPatientDetail] = useState<any>();
  const [fees, setFees] = useState<any>();
  const { id } = prop?.params || {}
  useEffect(() => {
    (async () => {
      try {
        let data = await getBookAppoinmentDetail({ book_appointment_id: id });
        if (data && data?.BookAppointmentDetails) {
          let details = data?.BookAppointmentDetails[0]
          setAppointmentDetail(details);
          setFees(details.GetHospitalDetails ? details.GetHospitalDetails[0].consultation_fees : '')
          setPatientDetail(details?.GetDoctorDetails && details?.GetDoctorDetails?.length ? details?.GetDoctorDetails[0] : {});
        } else {
          setAppointmentDetail("");
        }
      } catch (error) {
        setAppointmentDetail("");
      }
    })();
  }, [])

  const { full_name, GetSpecialities, thumbnail } = patientDetail || {}
  const { status } = appointmentDetail || {}

  return (
    <div className='max-w-6xl middle-max-layout'>
      <div className='mb-4'>
        <Nextlink href='/doctor/appointments' className='flex items-center'>
          <ArrowLeftIcn className='items-center mr-1' />
          <SmallTitle text='Appointment Details' className='font-bold ' />
        </Nextlink>
      </div>
      <div className='appoinmentTabs py-5 px-7 rounded-10 shadow-6xl bg-white'><SmallTitle className='text-lg lg:text-xl font-bold' text='Patient Details' />

        <div className='py-5 sm:flex'>
          <div className='mr-16 mb-4'>
            <img src={thumbnail ? thumbnail : ""} alt='Image' className='rounded-10 w-24 h-24' />
          </div>
          <div className='patient-details sm:w-[calc(100%_-_104px)]'>
            <div className='flex justify-between items-center flex-wrap'>
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-lg text-semilightgray pr-3 w-1/2'>Doctor Name:</div>
                <div className='font-bold text-lg w-1/2'>{full_name ? full_name : "-"} </div>
              </div>
              <div className='w-full sm:w-1/3'></div>
              <div className='sm:text-right mb-3 w-full sm:w-1/3'>
                {
                  status && status === "Confirm" ?
                    <span className='confirm-badge font-xs rounded-3xl px-2 py-1 text-center inline-block bg-lightsuccess text-mdsuccess'>Confirmed</span>
                    :
                    <span className='warning-badge font-xs rounded-3xl px-2 py-1 text-center inline-block bg-lightwarning text-mdwarning'>Cancelled</span>
                }
              </div>
            </div>
            <div className='flex justify-between items-center flex-wrap'>
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Specialist:</div>
                <div className='font-bold w-1/2 text-base 2xl:text-lg'>{GetSpecialities ? GetSpecialities[0].specialist_name : "-"}</div>
              </div>
              <div className="w-full sm:w-1/3" />
              <div className="w-full sm:w-1/3" />
            </div>
            <div className='flex justify-between items-center flex-wrap'>
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Fees:</div>
                <div className='text-secondary text-opacity-60 font-bold w-1/2 text-base 2xl:text-lg'>{fees ? fees : "-"}</div>
              </div>
              <div className="w-full sm:w-1/3" />
              <div className="w-full sm:w-1/3" />
            </div>
            <div className='pt-4 pb-4 border-t-2 border-midextralightgray'>
              <AppointmentDetailsTabs appointmentDetail={appointmentDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentDetails