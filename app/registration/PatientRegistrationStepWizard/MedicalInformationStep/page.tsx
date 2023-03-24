'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { LabelText, SmallTitle } from '@/components/Typography/page'
import Stats from '../Stats/page'
import AllergiesMultiSelect from './AllergiesMultiSelect/page';
import CurrentSymptomsMultiSelect from './CurrentSymptomsMultiSelect/page';
import PastSymptomsMultiSelect from './PastSymptomsMultiSelect/page';
import ChronicIllnessMultiSelect from './ChronicIllnessMultiSelect/page';
import InjuriesMultiSelect from './InjuriesMultiSelect/page';
import SurgeriesMultiSelect from './SurgeriesMultiSelect/page';
import { VALIDATION } from '@/constants/Validation'
import { REST_URL } from '@/services/config'
import { MESSAGE } from '@/constants/Message'

type Props = {
  // Define props types here
  userModuleStaticList?: any
}

export interface FormData {
  allergies: String,
  current_symptoms: String,
  past_symptoms: String,
  chronic_illness: String,
  injuries: String,
  surgeries: String
}
const FormSchema = yup
  .object({
    allergies: yup
      .array()
      .required(VALIDATION.ALLERGIES),
    current_symptoms: yup
      .array()
      .required(VALIDATION.CURRENT_SYMPTOMS),
    past_symptoms: yup
      .array()
      .required(VALIDATION.PAST_SYMPTOMS),
    chronic_illness: yup
      .array()
      .required(VALIDATION.CHRONIC_ILLNESS),
    injuries: yup
      .array()
      .required(VALIDATION.INJURIES),
    surgeries: yup
      .array()
      .required(VALIDATION.SURGERIES),
  })
  .required()

const MedicalInformationStep: React.FC<Props> = (props: any) => {
  const Allergies = props.userModuleStaticList.Allergies
  const Chronicillness = props.userModuleStaticList.Chronicillness
  const injuries = props.userModuleStaticList.injuries
  const Surgeries = props.userModuleStaticList.Surgeries
  const CurrentSymptoms = props.userModuleStaticList.CurrentSymptoms
  const PastSymptoms = props.userModuleStaticList.PastSymptoms
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userId: any = typeof window !== 'undefined' && localStorage.getItem('user_id');

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

  const { handleSubmit, control, formState: { errors }, register } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
  })

  const onSubmit = async (data: any) => {
    let formData = new FormData()
    formData.append("user_id", JSON.parse(userId))
    for (let i = 0; i < data.allergies.length; i++) {
      formData.append(`allergies[${i}][allergies_name]`, data.allergies[i].id)
    }
    for (let i = 0; i < data.current_symptoms.length; i++) {
      formData.append(`current_symptoms[${i}][current_symptoms]`, data.current_symptoms[i].id)
    }
    for (let i = 0; i < data.past_symptoms.length; i++) {
      formData.append(`past_symptoms[${i}][past_symptoms]`, data.past_symptoms[i].id)
    }
    for (let i = 0; i < data.chronic_illness.length; i++) {
      formData.append(`chronic_illness[${i}][chronic_illness]`, data.chronic_illness[i].id)
    }
    for (let i = 0; i < data.injuries.length; i++) {
      formData.append(`injuries[${i}][injuries]`, data.injuries[i].id)
    }
    for (let i = 0; i < data.surgeries.length; i++) {
      formData.append(`surgeries[${i}][surgeries]`, data.surgeries[i].id)
    }

    const responce = await axios.post(`${REST_URL}/AddUpdateMedicalDetails`, formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    if (responce.data.user_id) {
      toast.success(MESSAGE.PROFILE_UPDATE_SUCCESS)
      props.nextStep()
    } else {
      toast.error(MESSAGE.TRY_AGAIN)
    }
  }
  return (
    <div className='stepwizardTabDetails'>
      <SmallTitle text='Personal Details' className='font-bold mb-4 !text-xl' />
      <form>
        <div className='xl:flex'>
          <div className='w-full xl:w-36'>
            <div className='get-upload-profile_box'>
              <div className='get-profile_pic relative mx-auto w-36	h-36 rounded-10'>
                <input ref={inputRef}
                  className="input-profile-fld absolute left-0 right-0 top-0 bottom-0 w-full h-full opacity-0"
                  type="file"
                  onChange={uploadSingleFile} />
                <div className='input-profile-pic w-36	h-36 rounded-10 bg-secondaryLight border border-smextralightgray'>
                  {file && (
                    <Image className='w-full h-full rounded-10 object-cover' src={file} alt="uploaded profile picture" width='144' height='144' />
                  )}
                </div>
              </div>
              <div className='flex items-center justify-center mt-2'>
                <button type='button' onClick={onUploadButtonClick} className='px-2 text-semilightgray shadow-none'>Upload</button>
                {file && (
                  <button type='button' onClick={removeSelectedImage} className='px-2 text-semilightgray shadow-none'>Remove</button>
                )}
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[calc(100%_-_150px)] xl:px-6'>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Allergies' />
                  <Controller
                    name="allergies"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <AllergiesMultiSelect Allergies={Allergies ? Allergies : []} data={{ onChange }} />
                    )}
                  />
                  {errors.allergies && <span className='inputError'>{errors.allergies.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Current Symptoms' />
                  <Controller
                    name="current_symptoms"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <CurrentSymptomsMultiSelect CurrentSymptoms={CurrentSymptoms ? CurrentSymptoms : []} data={{ onChange }} />
                    )}
                  />
                  {errors.current_symptoms && <span className='inputError'>{errors.current_symptoms.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Past Symptoms' />
                  <Controller
                    name="past_symptoms"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <PastSymptomsMultiSelect PastSymptoms={PastSymptoms ? PastSymptoms : []} data={{ onChange }} />
                    )}
                  />
                  {errors.past_symptoms && <span className='inputError'>{errors.past_symptoms.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Chronic Illness' />
                  <Controller
                    name="chronic_illness"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <ChronicIllnessMultiSelect Chronicillness={Chronicillness ? Chronicillness : []} data={{ onChange }} />
                    )}
                  />
                  {errors.chronic_illness && <span className='inputError'>{errors.chronic_illness.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Injuries' />
                  <Controller
                    name="injuries"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <InjuriesMultiSelect injuries={injuries ? injuries : []} data={{ onChange }} />
                    )}
                  />
                  {errors.injuries && <span className='inputError'>{errors.injuries.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Surgeries' />
                  <Controller
                    name="surgeries"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <SurgeriesMultiSelect Surgeries={Surgeries ? Surgeries : []} data={{ onChange }} />
                    )}
                  />
                  {errors.surgeries && <span className='inputError'>{errors.surgeries.message}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Stats step={2} {...props} handleSubmit={handleSubmit(onSubmit)} />
    </div>
  )
}

export default MedicalInformationStep