'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { LabelText, SmallTitle } from '@/components/Typography/page'
import Stats from '../Stats/page'
import SmokingSelectDropDown from './SmokingSelectDropDown/page'
import AlcoholSelectDropDown from './AlcoholSelectDropDown/page'
import ActivityLevelSelectDropDown from './ActivityLevelSelectDropDown/page'
import FoodPreferencesSelectDropDown from './FoodPreferencesSelectDropDown/page'
import OccupationSelectDropDown from './OccupationSelectDropDown/page'
import { AddLifeStyleDetails } from '@/utils/api-handler/patient/page'
import { MESSAGE } from '@/constants/Message'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants/Routes'

type Props = {
  // Define props types here
  userModuleStaticList?: any
}

export interface FormData {
  smoking: String,
  alcohol: String,
  activity_level: String,
  food_preferences: String,
  occupation: String
}

const FormSchema = yup
  .object({
    smoking: yup
      .string(),
    alcohol: yup
      .string(),
    activity_level: yup
      .string(),
    food_preferences: yup
      .string(),
    occupation: yup
      .string()
  })
  .required()

const LifestyleInformationStep: React.FC<Props> = (props: any) => {
  const SmokingList = props.userModuleStaticList.SmokingList;
  const AlcoholList = props.userModuleStaticList.AlcoholList;
  const ActivityList = props.userModuleStaticList.ActivityList;
  const FoodPreferencesList = props.userModuleStaticList.FoodPreferencesList;
  const OccupationList = props.userModuleStaticList.OccupationList;
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const userId: any = typeof window !== 'undefined' && localStorage.getItem('user_id');
  const router = useRouter()

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
    data.user_id = JSON.parse(userId)
    const updateDetails = await AddLifeStyleDetails(data ? data : '');
    if (updateDetails && updateDetails.id) {
      toast.success(MESSAGE.REGISTRATION_COMPLETE)
      router.push(ROUTES.LOGIN)
    } else {
      toast.error(MESSAGE.TRY_AGAIN)
    }
  };
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
              <div className="col-span-1">
                <div className='mb-4'>
                  <LabelText text='Smoking' />
                  <Controller
                    name="smoking"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <SmokingSelectDropDown SmokingList={SmokingList ? SmokingList : []} data={{ onChange }} />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className='mb-4'>
                  <LabelText text='Alcohol' />
                  <Controller
                    name="alcohol"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <AlcoholSelectDropDown AlcoholList={AlcoholList ? AlcoholList : []} data={{ onChange }} />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className='mb-4'>
                  <LabelText text='Activity Level' />
                  <Controller
                    name="activity_level"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <ActivityLevelSelectDropDown ActivityList={ActivityList ? ActivityList : []} data={{ onChange }} />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className='mb-4'>
                  <LabelText text='Food Preferences' />
                  <Controller
                    name="food_preferences"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <FoodPreferencesSelectDropDown FoodPreferencesList={FoodPreferencesList ? FoodPreferencesList : []} data={{ onChange }} />
                    )}
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className='mb-4'>
                  <LabelText text='Occupation' />
                  <Controller
                    name="occupation"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <OccupationSelectDropDown OccupationList={OccupationList ? OccupationList : []} data={{ onChange }} />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Stats step={3} {...props} nextStep={handleSubmit(onSubmit)} />
    </div>
  )
}

export default LifestyleInformationStep