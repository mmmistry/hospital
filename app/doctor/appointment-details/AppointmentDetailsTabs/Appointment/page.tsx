'use client'
import Nextlink from 'next/link'
import { FC, ReactElement } from 'react'
import { ChatIcn, VideoIcn, VisitIcn } from '@/components/icons/CommonIcons/page'
import { dateFormate } from '@/utils/helpers/common'
import { APPOINTMENTMODE } from '@/constants/AppointmentMode'
import { PhoneIcon } from '@heroicons/react/20/solid'

const Appointment:FC<{ appointmentDetail: any }> = ({ appointmentDetail}): ReactElement => {

  const { slot_time , date , languageName , appointmentForDescription , GetAppointmentConsultation , GetSymptomDetails , GetHospitalDetails } = appointmentDetail || {}
  let appDate = date && slot_time ? new Date(date.concat(" " + slot_time)) : "";
  let appOn = appDate ? dateFormate(appDate) : ""
  const {VIDEO , AUDIO , CHAT , CLINIC } = APPOINTMENTMODE;

  const appointmentMode = (mode : string) => {
    let appDetail;
    switch (mode) {
      case VIDEO:
          appDetail = <> <VideoIcn className='mr-1' /> Video Call</>
          break;
      case AUDIO:
          appDetail = <> <PhoneIcon className='mr-1 w-4 h-4' /> Audio Call</>
          break;
      case CHAT:
          appDetail = <> <ChatIcn className='mr-1' /> Chat </>
          break;
      case CLINIC:
          appDetail = <> <VisitIcn className='mr-1' /> Visit us</>
          break;
      default :
          appDetail = <> <VisitIcn className='mr-1' /> Visit us </>
          break;
    }
    return appDetail;
  }
  let appDetail = appointmentMode(GetAppointmentConsultation?.length && GetAppointmentConsultation[0]?.consultation_mode_name || "");

  return (
            <div className='appoinment-details'>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Appointment on:</div>
                <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{appOn ? appOn : "-"}</div>
              </div>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Location:</div>
                <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{GetHospitalDetails?.length ?  GetHospitalDetails[0]?.clinic_location : "-"}</div>
              </div>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Appointment for:</div>
                <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{ GetSymptomDetails?.length ? GetSymptomDetails[0]?.symptom_name : "-"} </div>
              </div>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Language:</div>
                <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{languageName ? languageName : "-" }</div>
              </div>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Fees:</div>
                <div className='text-secondary w-full sm:w-9/12 text-base 2xl:text-lg'>{GetHospitalDetails?.length ?  (GetHospitalDetails[0]?.consultation_fees ? GetHospitalDetails[0]?.consultation_fees : "-") : "-" }</div>
              </div>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Appointment mode:</div>
                <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{GetAppointmentConsultation?.length ?  (GetAppointmentConsultation[0]?.consultation_mode_name ? GetAppointmentConsultation[0]?.consultation_mode_name : "-") : "-" }</div>
              </div>
              <div className='flex flex-wrap mb-4'>
                <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Description:</div>
                <div className='font-bold w-full sm:w-3/5 text-base 2xl:text-lg'>{appointmentForDescription ? appointmentForDescription : "-"}</div>
              </div>
                <div className='flex flex-wrap justify-start sm:justify-end'>
                <Nextlink href='/' className='flex items-center justify-center w-32 px-1.5 py-1.5 border border-darkgray rounded transition-all  '>
                  {appDetail}
                </Nextlink>
                </div>
            </div>  
  )
}

export default Appointment