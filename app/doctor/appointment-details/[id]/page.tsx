'use client'
import { FC, ReactElement, useEffect, useState } from 'react'
import Nextlink from 'next/link'
import { SmallTitle } from '@/components/Typography/page'
import { ArrowLeftIcn } from '../../../../components/icons/CommonIcons/page'
import PatientImage from '../../../../public/assets/images/patient-photo.png'
import AppointmentDetailsTabs from '../AppointmentDetailsTabs/page'
import { getBookAppoinmentDetail } from '@/utils/api-handler/doctor/page'

const AppointmentDetails:FC = (prop : any): ReactElement => {
const [appointmentDetail, setAppointmentDetail] = useState<any>();
const [patientDetail, setPatientDetail] = useState<any>();
const [medicalReportDetail, setMedicalReportDetail] = useState<any>();
const { id } = prop?.params || {}

useEffect(() => {
  (async () => {
      try {
          let data = await getBookAppoinmentDetail({ book_appointment_id: id });
          if (data && data?.BookAppointmentDetails) {
              let details = data?.BookAppointmentDetails[0]
              setAppointmentDetail(details);
              setPatientDetail(details?.GetUserDetails && details?.GetUserDetails?.length ? details?.GetUserDetails[0] : {});
              setMedicalReportDetail(details?.GetMedicalRecord && details?.GetMedicalRecord?.length ? details?.GetMedicalRecord[0] : {});
          } else {
              setAppointmentDetail("");
          }
      } catch (error) {
          setAppointmentDetail("");
      }
  })();
}, [])

  const { full_name , thumbnail , gender , height , weight , marital_status , age } = patientDetail || {} 
  const { status } = appointmentDetail || {}

return (
    <div className='max-w-6xl middle-max-layout'>
    <div className='mb-4'>
      <Nextlink href='/doctor/appointments' className='flex items-center'>
        <ArrowLeftIcn className='items-center mr-1'/>
        <SmallTitle text='Appointment Details' className='font-bold '/>
      </Nextlink>
    </div>
    <div className='appoinmentTabs py-5 px-7 rounded-10 shadow-6xl bg-white'><SmallTitle className='text-lg lg:text-xl font-bold' text='Patient Details'/>

      <div className='py-5 sm:flex'>
        <div className='mr-16 mb-4'>
          <img  src={thumbnail ? thumbnail : PatientImage} alt='Image' className='rounded-10 w-24 h-24'/>
        </div>
        <div className='patient-details sm:w-[calc(100%_-_104px)]'>
          <div className='flex justify-between items-center flex-wrap'>
            <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
              <div className='text-lg text-semilightgray pr-3 w-1/2'>Patient Name:</div>
              <div className='font-bold text-lg w-1/2'>{ full_name ? full_name : "-"} </div>
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
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Gender:</div>
                <div className='font-bold w-1/2 text-base 2xl:text-lg'>{ gender ? gender : "-"}</div>
              </div>
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Age:</div>
                <div className='font-bold w-1/2 text-base 2xl:text-lg'>{ age ? age : "-"}</div>
              </div>
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Marital Status:</div>
                <div className='font-bold w-1/2 text-base 2xl:text-lg'>{ marital_status ? marital_status : "-"}</div>
              </div>  
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Height:</div>
                <div className='text-darkgray text-opacity-60 font-bold w-1/2 text-base 2xl:text-lg'>{ height ? height : "-"}</div>
              </div>  
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'>
                <div className='text-semilightgray pr-3 w-1/2 text-base 2xl:text-lg'>Weight:</div>
                <div className='font-bold w-1/2 text-base 2xl:text-lg'>{ weight ? weight : "-"} kg</div>
              </div> 
              <div className='flex items-center mb-3 w-full sm:w-1/2 lg:w-1/3'></div>
            </div> 
            <div className='pt-4 pb-4 border-t-2 border-midextralightgray'>
              <AppointmentDetailsTabs medicalReportDetail={medicalReportDetail} appointmentDetail={appointmentDetail} patientDetail={patientDetail}/>
            </div>      
          </div>
      </div>
    </div>
    </div>
  )
}

export default AppointmentDetails