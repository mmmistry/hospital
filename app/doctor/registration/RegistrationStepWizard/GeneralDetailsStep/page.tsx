'use client'
import { useRef, useState } from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useForm, Controller } from 'react-hook-form'
import axios from "axios"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify';
import Image from 'next/image'
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText, SmallTitle } from '@/components/Typography/page'
import Stats from '../Stats/page'
import EducationsSelectDropDown from './EducationsSelectDropDown/page'
import GenderSelectDropDown from './GenderSelectDropDown/page'
import { DateIc } from '@/components/icons/CommonIcons/page'
import SpecialityMultiSelect from './SpecialityMultiSelect/page'
import SymptomsMultiSelect from './SymptomsMultiSelect/page'
import { VALIDATION } from '@/constants/Validation'
import { MESSAGE } from '@/constants/Message';
import { GENERALDETAIL_UPDATE_URL , EDIT_PROFILE_PIC } from '@/services/config';

type Props = {
  // handleSubmit :Function
  // Define props types here
}

interface FormData {
  bio: String,
  gender: String,
  dob: String,
  Doctorspecialitie: String[],
  Doctorsymptom: String[],
  DoctorEducation: String[],
  total_experience: String,
  profile_pic: File
}
const MAX_FILE_SIZE = 5 * 1024 * 1024;


const FormSchema = yup
  .object({
    bio: yup
      .string()
      .min(100, VALIDATION.BIO_CHARACTERS)
      .required(VALIDATION.BIO)
      .matches(/^(?=.*[a-z])/, VALIDATION.BIO_NOT_ONLY_NUMBERS),
    dob: yup
      .date()
      .required(VALIDATION.DOB),
    total_experience: yup
      .number()
      .positive(),
    gender: yup
      .string()
      .required(VALIDATION.GENDER),
    profile_pic: yup
      .mixed()
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
    Doctorspecialitie: yup
      .array()
      .required(VALIDATION.DOCTORSPECIALITY),
    Doctorsymptom: yup
      .array()
      .required(VALIDATION.DOCTORSYMPTOM),
    DoctorEducation: yup
      .array()
      .required(VALIDATION.DOCTOREDUCATION)
  })
  .required()




const GeneralDetailsStep: React.FC<Props> = (props: any) => {

  const [file, setFile] = useState<string | null>(null);
  const [fileData, setFileData] = useState<any>(null)
  const inputRef = useRef<HTMLInputElement | null>(null);
  const userID: any = typeof window != "undefined" && localStorage?.getItem("userId")
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() - 18);
  const minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 100);

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

  const { ref, onChange, ...rest } = register('profile_pic');


  function uploadSingleFile(e: React.ChangeEvent<HTMLInputElement>) {

    if (e.target.files && e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
      setFileData(e.target.files[0])
      onChange(e)
    }
  }

  function removeSelectedImage(e: React.MouseEvent<HTMLButtonElement>) {

    setFile(null);
    setFileData(null)
    // onChange()
  }

  const onUploadButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onSubmit = async (data: any) => {

    let formData = new FormData()
    let formDetails = new FormData()
    let birthDate = (data.dob).getDate()
    let birthMonth = JSON.stringify(data.dob.getMonth() + 1);
    let birthYear = JSON.stringify(data.dob.getFullYear())
    data.dob = [birthMonth, birthDate, birthYear].join("/")

    formData.append("user_id", JSON.parse(userID))
    formData.append("bio", data.bio)
    formData.append("gender", data.gender)
    formData.append("dob", data.dob)
    formData.append("total_experience", data.total_experience)
    
    for (let i = 0; i < data.Doctorspecialitie.length; i++) {
      formData.append(`Doctorspecialitie[${i}]`, data.Doctorspecialitie[i])
    }
    for (let i = 0; i < data.Doctorsymptom.length; i++) {
      formData.append(`Doctorsymptom[${i}]`, data.Doctorsymptom[i])
    }
    for (let i = 0; i < data.DoctorEducation.length; i++) {
      formData.append(`DoctorEducation[${i}]`, data.DoctorEducation[i])
    }
    
    formDetails.append("profile_pic", data.profile_pic[0])
    formDetails.append("id", JSON.parse(userID))
    
    try {
      let response = await axios.post(GENERALDETAIL_UPDATE_URL, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }

      })

      let responseData = await axios.post(EDIT_PROFILE_PIC,formDetails,{
           headers: {
          'content-type': 'multipart/form-data'
        }
      })

      if (response?.data?.id && response?.data?.id !== null && responseData?.data?.id && responseData?.data?.id !== null) {
        props.nextStep()

      }
      else {
        toast.error(MESSAGE.TRY_AGAIN)
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='stepwizardTabDetails'>
      <SmallTitle text='General Details' className='font-bold mb-4 !text-xl' />
      <form>
        <div className='xl:flex'>
          <div className='w-full xl:w-36'>
            <div className='get-upload-profile_box'>
              <div className='get-profile_pic relative mx-auto w-36	h-36 rounded-10'>
                <input
                  {...rest}
                  ref={(e) => {
                    ref(e),
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
                  <LabelText text='Bio' />
                  <CustomInputBox type="text" data={{ ...register('bio') }} />
                  {errors.bio && <span className='inputError'>{errors.bio.message}</span>}
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

                    name='dob'
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
                        maxDate={maxDate}
                        minDate={minDate}
                        calendarIcon={<DateIc />}
                        defaultActiveStartDate={maxDate}
                        showNavigation={true}


                      />
                    )}
                  />
                  {errors.dob && <span className='inputError'>{errors.dob.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Speaciality' />
                  <Controller
                    name="Doctorspecialitie"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <SpecialityMultiSelect data={{ onChange, value }} />
                    )}
                  />

                  {errors.Doctorspecialitie && <span className='inputError'>{errors.Doctorspecialitie.message}</span>}
                </div>
              </div>
              <div className="col-span-2">
                <div className='mb-4'>
                  <LabelText text='Symptoms' />
                  <Controller
                    name="Doctorsymptom"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <SymptomsMultiSelect data={{ onChange, value }} />
                    )}
                  />
                  {errors.Doctorsymptom && <span className='inputError'>{errors.Doctorsymptom.message}</span>}

                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Education Qualification' />
                  <Controller
                    name="DoctorEducation"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <EducationsSelectDropDown data={{ onChange, value }} />

                    )}
                  />
                  {errors.DoctorEducation && <span className='inputError'>{errors.DoctorEducation.message}</span>}
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className='mb-4'>
                  <LabelText text='Total Experience' />
                  <CustomInputBox type="text" data={{ ...register('total_experience') }} />
                  {errors.total_experience && <span className='inputError'>{VALIDATION.TOTAL_EXPERIENCE}</span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <Stats step={1}  {...props} handleSubmit={handleSubmit(onSubmit)} />
    </div>
  )
}

export default GeneralDetailsStep