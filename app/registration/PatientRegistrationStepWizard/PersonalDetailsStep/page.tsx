'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import intlTelInput from 'intl-tel-input'
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText, SmallTitle } from '@/components/Typography/page'
import Stats from '../Stats/page'
import { VALIDATION } from '@/constants/Validation'
import { DateIc } from '@/components/icons/CommonIcons/page'
import BloodGroupSelectDropDown from './BloodGroupSelectDropDown/page';
import MaritalStatusSelectDropDown from './MaritalStatusSelectDropDown/page';
import CustomTextareaBox from '@/components/CustomTextareaBox/page';
import GenderSelectDropDown from './GenderSelectDropDown/page';
import { EditUserProfiles } from '@/utils/api-handler/patient/page';
import { PROFILE_UPDATE_URL } from '@/services/config';
import { MESSAGE } from '@/constants/Message';

type Props = {
  // Define props types here
  userModuleStaticList?: any
}

export interface FormData {
  full_name: String,
  country_code?: String,
  mobile_number: String,
  email: String,
  gender: String,
  DOB: String,
  blood_group: String
  marital_status: String
  height: String
  weight: String
  address: String
  profile_pic: File
}

const MAX_FILE_SIZE = 10 * 1024 * 1024
const FormSchema = yup
  .object({
    profile_pic: yup
      .mixed()
      .required(VALIDATION.PROFILE_PIC)
      .test("type", "Only the following formats are accepted: jpg, png, or jpeg ", (value: any) => {
        return value && (
          value[0]?.type === "image/jpeg" ||
          value[0]?.type === "image/jpg" ||
          value[0]?.type === "image/png"
        )
      })
      .test('fileSize', 'The size of the picture should not exceed 5 MB', (value: any) => {

        if (!value[0]) {
          return true;
        }
        return value[0].size <= MAX_FILE_SIZE;
      }),

    email: yup
      .string()
      .required(VALIDATION.EMAIL)
      .email(VALIDATION.VALID_EMAIL)
      .max(255, ({ max }) => `Email must be at most ${max} characters`),
    full_name: yup
      .string()
      .required(VALIDATION.FULL_NAME)
      .min(3, 'Entered value should be greater then 3'),
    mobile_number: yup
      .string()
      .required(VALIDATION.MOBILE_NUMBER)
      .min(10, 'Mobile number must be at least 10 characters')
      .max(11, 'Mobile number may not be greater than 11 characters')
      .matches(/^[0-9]+$/, "Must be only digits"),
    gender: yup
      .string()
      .required(VALIDATION.GENDER),
    DOB: yup
      .string()
      .required(VALIDATION.DOB),
    blood_group: yup
      .string()
      .required(VALIDATION.BLOOD_GROUP),
    marital_status: yup
      .string()
      .required(VALIDATION.MARITAL_STATUS),
    height: yup
      .string()
      .required(VALIDATION.HEIGHT)
      .min(1, 'Entered value should be greater then 3 inches'),
    weight: yup
      .string()
      .required(VALIDATION.WEIGHT)
      .min(1, "Entered value should be greater then 10KG")
    ,
    address: yup
      .string()
      .required(VALIDATION.ADDRESS),
  })
  .required()

const PersonalDetailsStep: React.FC<Props> = (props: any) => {
  const bloodGroupList = props?.userModuleStaticList?.BloodGroupList;
  const MartialStatusList = props?.userModuleStaticList?.MartialStatusList;
  const userId: any = typeof window !== 'undefined' && localStorage.getItem('user_id');
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const phoneInput = phoneInputRef.current;
    if (phoneInput) {
      const intalTelInput = intlTelInput(phoneInput, { separateDialCode: true });
      phoneInput.addEventListener('countrychange', () => {
        const countryData = intalTelInput.getSelectedCountryData();
      });
    }
  }, []);

  const { handleSubmit, control, formState: { errors }, register } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
  })

  function uploadSingleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      onChange(e)
    }
  }

  function removeSelectedImage(e: React.MouseEvent<HTMLButtonElement>) {
    setFile(null);
    onChange(e)
  }

  const onUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const { ref, ...rest } = register('mobile_number');
  const { ref: reft, onChange, ...restFile } = register('profile_pic');

  const onSubmit = async (data: any) => {
    let formData = new FormData()
    let birthDate = new Date(data.DOB).getDate()
    let birthMonth = JSON.stringify(new Date(data.DOB).getMonth() + 1);
    let birthYear = JSON.stringify(new Date(data.DOB).getFullYear())
    data.DOB = [birthYear, birthMonth, birthDate].join("-")
    formData.append("profile_pic", data.profile_pic[0])
    formData.append("id", JSON.parse(userId))
    data.user_id = JSON.parse(userId);
    try {
      if (formData) {
        await axios.post(`${PROFILE_UPDATE_URL}/editProfilePicture`, formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
      }
      const updateProfileDetails = await EditUserProfiles(data)
      if (updateProfileDetails) {
        toast.success(MESSAGE.PROFILE_UPDATE_SUCCESS)
        props.nextStep()
      }
    } catch (error) {
      toast.error(MESSAGE.CUSTOM_ERROR)
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
                <input
                  {...restFile}
                  ref={(e) => {
                    reft(e),
                      inputRef.current = e
                  }}
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
            {errors.profile_pic && <span className='inputError'>{errors.profile_pic.message}</span>}
          </div>
          <div className='w-full xl:w-[calc(100%_-_150px)] xl:px-6'>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Fullname' />
                  <CustomInputBox type="text" data={{ ...register('full_name') }} />
                  {errors.full_name && <span className='inputError'>{errors.full_name.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Mobile no*' />
                  <div className='intelInput'><input className='inputIntel w-full outline-0 rounded h-12 border-2 border-midextralightgray transition-all focus:border-secondary' type="tel" id="phone" {...rest}
                    ref={(e) => {
                      ref(e),
                        phoneInputRef.current = e
                    }}
                  /></div>
                  {errors.mobile_number && <span className='inputError'>{errors.mobile_number.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Email*' />
                  <CustomInputBox type="email" data={{ ...register('email') }} />
                  {errors.email && <span className='inputError'>{errors.email.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Gender' />
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <GenderSelectDropDown data={{ onChange }} />
                    )}
                  />
                  {errors.gender && <span className='inputError'>{errors.gender.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='DOB' />
                  <Controller
                    control={control}
                    name='DOB'
                    render={({ field }: any) => (
                      <DatePicker
                        className="datePicker_custom w-full"
                        onChange={field.onChange}
                        value={field.value}
                        clearIcon={null}
                        format="dd/MM/y"
                        dayPlaceholder="DD"
                        monthPlaceholder="MM"
                        yearPlaceholder="YYYY"
                        calendarIcon={<DateIc />}
                        showNavigation={true}
                      />
                    )}
                  />
                  {errors.DOB && <span className='inputError'>{errors.DOB.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Blood Group' />
                  <Controller
                    name="blood_group"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <BloodGroupSelectDropDown bloodGroupList={bloodGroupList ? bloodGroupList : []} data={{ onChange }} />
                    )}
                  />
                  {errors.blood_group && <span className='inputError'>{errors.blood_group.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Marital Status' />
                  <Controller
                    name="marital_status"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <MaritalStatusSelectDropDown MartialStatusList={MartialStatusList ? MartialStatusList : []} data={{ onChange }} />
                    )}
                  />
                  {errors.marital_status && <span className='inputError'>{errors.marital_status.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Height' />
                  <CustomInputBox type="text" data={{ ...register('height') }} />
                  {errors.height && <span className='inputError'>{errors.height.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Weight' />
                  <div className='relative'>
                    <CustomInputBox type="text" className="pr-10" data={{ ...register('weight') }} />
                    {errors.weight && <span className='inputError'>{errors.weight.message}</span>}
                    <span className='absolute top-3 right-3 text-semilightgray'>KG</span>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Address' />
                  <CustomTextareaBox rows={1} data={{ ...register('address') }} />
                  {errors.address && <span className='inputError'>{errors.address.message}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Stats step={1} {...props} handleSubmit={handleSubmit(onSubmit)} />
    </div>
  )
}

export default PersonalDetailsStep