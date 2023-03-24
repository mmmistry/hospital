'use client'
import Nextlink from 'next/link'
import { FC, ReactElement, useState} from 'react'
import { ChatIcn, VideoIcn, VisitIcn } from '@/components/icons/CommonIcons/page'
import { dateFormate } from '@/utils/helpers/common'
import { APPOINTMENTMODE } from '@/constants/AppointmentMode'
import { PhoneIcon } from '@heroicons/react/20/solid'
import ReportIssueModal from '@/components/Modals/ReportIssueModal/page'

const Appointment: FC<{ appointmentDetail: any }> = ({ appointmentDetail }): ReactElement => {

  const [isOpenReportIssueModal, setIsOpenReportIssueModal] = useState(false)
  const { slot_time, date, languageName, appointmentForDescription, GetAppointmentConsultation, GetSymptomDetails, GetHospitalDetails, GetMedicalRecord } = appointmentDetail || {}
  let appDate = date && slot_time ? new Date(date.concat(" " + slot_time)) : "";
  let appOn = appDate ? dateFormate(appDate) : ""
  const { VIDEO, AUDIO, CHAT, CLINIC } = APPOINTMENTMODE;

  const appointmentMode = (mode: string) => {
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
      default:
        appDetail = <> <VisitIcn className='mr-1' /> Visit us </>
        break;
    }
    return appDetail;
  }
  let appDetail = appointmentMode(GetAppointmentConsultation?.length && GetAppointmentConsultation[0]?.consultation_mode_name || "");

  const closeReportIssueModal= () => {
    setIsOpenReportIssueModal(false)
  }

  const openReportIssueModal = () =>{
      setIsOpenReportIssueModal(true)
  }

  return (
    <div className='appoinment-details'>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Appointment on:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{appOn ? appOn : "-"}</div>
      </div>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Location:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{GetHospitalDetails?.length ? GetHospitalDetails[0]?.clinic_location : "-"}</div>
      </div>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Appointment for:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{GetSymptomDetails?.length ? GetSymptomDetails[0]?.symptom_name : "-"} </div>
      </div>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Language:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{languageName ? languageName : "-"}</div>
      </div>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Appointment mode:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{GetAppointmentConsultation?.length ? (GetAppointmentConsultation[0]?.consultation_mode_name ? GetAppointmentConsultation[0]?.consultation_mode_name : "-") : "-"}</div>
      </div>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Description:</div>
        <div className='font-bold w-full sm:w-3/5 text-base 2xl:text-lg'>{appointmentForDescription ? appointmentForDescription : "-"}</div>
      </div>
      <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Medical Report:</div>
        <div className='flex font-bold w-full sm:w-3/5 text-base 2xl:text-lg'>
          {GetMedicalRecord && GetMedicalRecord[0]?.UserMedicalImagesGet[0].thumbnail &&
           GetMedicalRecord && GetMedicalRecord[0]?.UserMedicalImagesGet?.map((img: any) =>
            <div className='mr-3 mb-3 last:mr-0'>
                <img
                className="h-20 w-20 rounded-md"
                src={img.thumbnail} /> 
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-between'>
         <div className='mr-4 mb-3'>
            <button onClick={openReportIssueModal} className='flex text-lg text-semilightgray transition-all hover:text-black'>
               Report a Issue?
            </button>
          </div>
         <div className='flex flex-wrap justify-start sm:justify-end'>
          <Nextlink href='/' className='flex items-center justify-center w-32 px-1.5 py-1.5 mr-4 mb-3 border border-darkgray rounded transition-all  '>
            View Profile
          </Nextlink>
          <Nextlink href='/' className='flex items-center justify-center w-32 px-1.5 py-1.5 mb-3 border border-darkgray rounded transition-all  '>
            {appDetail}
          </Nextlink>
        </div>
      </div>
      <ReportIssueModal isOpenReportIssueModal={isOpenReportIssueModal}
       closeReportIssueModal={closeReportIssueModal} />
    </div>
  )
}

export default Appointment