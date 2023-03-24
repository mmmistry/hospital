'use client'
import { useEffect, useRef, useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText, SmallTitle } from '@/components/Typography/page'
import Stats from '../Stats/page'
import { ChatIcn, MapIcn, VideoIcn, VisitIcn } from '@/components/icons/CommonIcons/page'
import CustomTextareaBox from '@/components/CustomTextareaBox/page';
import AvailabilityTimeList from './AvailabilityTimeList/page';
import ClinicSelectDropDown from './ClinicSelectDropdown/page'
import { getAllClinicList, getConsultationMode } from '@/utils/api-handler/doctor/page'
import { APPOINTMENTMODE } from '@/constants/AppointmentMode'
import { VALIDATION } from '@/constants/Validation'
import { ADD_CLINIC_DETAILS } from '@/services/config'
import ClinicModal from '@/components/Modals/ClinicModal/page'

interface ClinicList {
  id: string,
  clinic_name: string,
  clinic_location: string,
  clinic_longitude: string,
  clinic_latitude: string,
  clinic_image: string
}

interface FormData {
  clinic_name: string,
  consultation_fees: string,
  consultation_mode: [] | Boolean,
  DoctorAppoiment: any
}

interface ConsultationMode {
  id: string,
  consultation_mode_name: string,
}

type Props = {
  // Define props types here
}

const FormSchema = yup
  .object({
    clinic_name: yup
      .string()
      .required(VALIDATION.CLINIC_NAME),
    consultation_fees: yup
      .string()
      .required(VALIDATION.CONSULTAION_FEES),
    // consultation_mode : yup
    //    .array()
    //   //  .oneOf([true],VALIDATION.CONSULTAION_MODE)
    //   .of(yup.boolean().oneOf([true],VALIDATION.CONSULTAION_MODE))
    //   //  .required()

  })
  .required()

const ClinicDetailsStep: React.FC<Props> = (props: any) => {
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [consultationMode, setConsultationMode] = useState<ConsultationMode[]>([])
  const [clinicList, setClinicList] = useState<ClinicList[]>([])
  const [selectedClinic, setSelectedClinic] = useState<string>("")
  const [clinicFilterData, setClinicFilterData] = useState<ClinicList[]>([])
  const { VIDEO, AUDIO, CHAT, CLINIC } = APPOINTMENTMODE;
  const [errorMode , setErrorMode] = useState<boolean>(false)
  const [clinicAdded , setClinicAdded ] = useState<Boolean>(false)
  const { data: session }: any = useSession();

  useEffect(()=>{
    if(session?.user?.clinic_details_add_status === true){
      props.nextStep()
    }
  },[])

  useEffect(() => {
    try {
      getAllClinicList().then((clinicListData: any) => { setClinicList(clinicListData.HospitalList) })
      getConsultationMode().then((consultationDetail: any) => { setConsultationMode(consultationDetail.GetConsultationMode) })
    } catch (error) {
      console.log(error)
    }

  }, [clinicAdded])

  useEffect(() => {
    let filteredData = clinicList?.filter(clinic => clinic?.clinic_name === selectedClinic);
    setClinicFilterData(filteredData)
    setFile(filteredData[0]?.clinic_image)
  }, [selectedClinic])

  const consultation_Mode = (mode: string) => {
    let modeDetail;
    switch (mode) {
      case VIDEO:
        modeDetail = <> <VideoIcn className='mr-1' /> Video Call</>
        break;
      case AUDIO:
        modeDetail = <> <VideoIcn className='mr-1' /> Audio Call</>
        break;
      case CHAT:
        modeDetail = <> <ChatIcn className='mr-1' /> Chat </>
        break;
      case CLINIC:
        modeDetail = <> <VisitIcn className='mr-1' /> Visit us</>
        break;
      default:
        modeDetail = <> <VisitIcn className='mr-1' /> Visit us </>
        break;
    }
    return modeDetail;
  }

  const [DoctorAppoiment, setDoctorAppoiment] = useState<any>([])
  const [isOpenClinicModal, setIsOpenClinicModal] = useState(false)

  const {
    handleSubmit,
    formState: { errors },
    control,
    register
  } = useForm<FormData>(
    {
      resolver: yupResolver(FormSchema),
    }
  )

  function uploadSingleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  function removeSelectedImage(e: React.MouseEvent<HTMLButtonElement>) {
    setFile(null);
  }

  const onUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleCheckbox = (e:any) =>{
    
    setErrorMode(false)
  }

  const onSubmit = async (data: any) => {
    setErrorMode(data.consultation_mode.length>0?false:true)
    data.DoctorAppoiment = DoctorAppoiment
    let payload = {
      "user_id": session?.user?.id,
      "clinic_name": clinicFilterData[0]?.id,
      "consultation_mode": data.consultation_mode,
      "consultation_fees": data.consultation_fees,
      "DoctorAppoiment": data.DoctorAppoiment
    }
    try {
      if(data.consultation_mode.length>0){
        let response = await axios.post(ADD_CLINIC_DETAILS, payload)
  
        if (response?.data?.id && response.data?.id !== null) {
          props.goToStep(2)
        }

      }
    } catch (error) {
      console.log(error);
    }
  }

    const closeClinicModal= () => {
      setIsOpenClinicModal(false)
  }

  const openClinicModal = () =>{
      setIsOpenClinicModal(true)
  }

  return (
    
    <div className='stepwizardTabDetails'>
      <SmallTitle text='Clinic Details' className='font-bold mb-4 !text-xl' />
      <form>
        <div className='xl:flex'>
          <div className='w-full xl:w-36'>
            <div className='get-upload-profile_box'>
              <div className='get-profile_pic relative mx-auto w-36	h-36 rounded-10'>
                <input ref={inputRef}
                disabled
                  className="input-profile-fld absolute left-0 right-0 top-0 bottom-0 w-full h-full opacity-0"
                  type="file"
                  />
                <div className='input-profile-pic w-36 h-36 rounded-10 bg-secondaryLight border border-smextralightgray'>
                  {file && (
                    <Image className='w-full h-full rounded-10 object-cover' src={file} alt="uploaded profile picture" width='144' height='144' />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[calc(100%_-_150px)] xl:px-6'>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-2 md:col-span-1">
                <div className='mb-4'>
                <div className='flex justify-between items-center'>
                             <LabelText text='Clinic Name'/>
                             <button
                                type="button"
                                onClick={openClinicModal}
                                className="mb-1 text-base font-medium text-secondary border-b-2 border-secondary hover:border-darkgray hover:text-darkgray focus:outline-none"
                              >
                                Add New
                              </button>
                          </div>
                  <Controller
                    name="clinic_name"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <ClinicSelectDropDown data={{ onChange }} clinicList={clinicList} setSelectedClinicName={setSelectedClinic} />
                    )}
                  />
                  {errors.clinic_name && <span className='inputError'>{errors.clinic_name.message}</span>}
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Fees' />
                  <div className='relative'>
                    <CustomInputBox type="text" className="pr-10" data={{ ...register("consultation_fees") }} />
                    <span className='absolute top-3 right-3'>INR</span>
                  </div>
                  {errors.consultation_fees && <span className='inputError'>{errors.consultation_fees.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Address' />
                  <div className='relative'>
                    <CustomTextareaBox rows={1} className="pr-28" clinicAddress={clinicFilterData} />
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Consultation mode' className='!font-bold text-lg' />
                  <div className='flex items-center flex-wrap relative outline-0 rounded px-2 py-2 w-full border-2 border-midextralightgray'>
                    {consultationMode.length > 0 ?
                      <>
                        {
                          consultationMode.map((list: any, key: any) => {

                            const {  consultation_mode_name } = list;
                            let modeDetail = consultation_Mode(consultation_mode_name)

                            return (
                              <div className='customCunltCheckbox relative mx-1 my-1' key={key}>
                                <input type="checkbox" id={`${key}`} value={list?.id} onClick={handleCheckbox} className='checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 cursor-pointer' {...register("consultation_mode")} />
                                <div className='checkboxCunltLabel flex items-center justify-center px-3 py-2 rounded-3xl	text-sm bg-xsextralightgray min-w-28'>
                                  {modeDetail}
                                </div>
                              </div>
                            )
                          })
                        }
                      </>
                      : null
                    }
                  </div>
                  {errorMode && <span className='inputError'>{VALIDATION.CONSULTAION_MODE}</span>}

                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Availability' className='!font-bold text-lg' />
                  <div className='rounded px-3 py-4 w-full border-2 border-midextralightgray'>
                    <AvailabilityTimeList data={{ ...register("DoctorAppoiment") }} setDoctorAppoiment={setDoctorAppoiment} DoctorAppoiment={DoctorAppoiment} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Stats step={1} {...props} handleSubmit={handleSubmit(onSubmit)} setErrorMode={setErrorMode} />
      <ClinicModal 
        isOpenClinicModal={isOpenClinicModal}
        closeClinicModal={closeClinicModal} 
       setClinicAdded={setClinicAdded}
        />
    </div>
  )
}

export default ClinicDetailsStep