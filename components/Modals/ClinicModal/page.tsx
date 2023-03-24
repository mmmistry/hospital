'use client'
import { FC, ReactElement, Fragment, useRef, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import axios from "axios"
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { Dialog, Transition } from '@headlessui/react'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'
import { MapIcn, XCloseIcn } from '@/components/icons/CommonIcons/page'
import { LabelText } from '@/components/Typography/page'
import CustomInputBox from '@/components/CustomInputBox/page'
import CustomTextareaBox from '@/components/CustomTextareaBox/page'
import FacilityMultiSelect from './FacilityMultiSelect/page'
import PhotoIdUploaded from 'app/doctor/registration/RegistrationStepWizard/UploadDocumentsStep/PhotoIdUploaded/page'
import { VALIDATION } from '@/constants/Validation'
import { ADD_NEW_CLINIC } from '@/services/config'
import { ROUTES } from '@/constants/Routes'



interface FormData {
  clinic_name: string,
  facilities: [],
  imageFiles: File
}

const FormSchema = yup
  .object({
    clinic_name: yup
      .string()
      .required(VALIDATION.CLINIC_NAME),
    facilities: yup
      .array()
      .required(VALIDATION.FACILITIES),
    imageFiles: yup
      .mixed()
      .test("type", "Only the following formats are accepted: jpg, png, or jpeg ", (value: any) => {
        return value && (
          value[0]?.type === "image/jpeg" ||
          value[0]?.type === "image/jpg" ||
          value[0]?.type === "image/png"
        )
      })
  }).required()

const ClinicModal: FC<{ isOpenClinicModal: any, closeClinicModal: any ,setClinicAdded?:any }> = ({ isOpenClinicModal, closeClinicModal ,setClinicAdded}): ReactElement => {

  const [file, setFile] = useState<string | null>(null);
  const [fileData, setFileData] = useState<any>(null)

  const inputRef = useRef<HTMLInputElement | null>(null);
  const { data: session }: any = useSession();
  const router = useRouter()
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


  const { ref, onChange, ...rest } = register('imageFiles');


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
    formData.append("user_id", session?.user?.id)
    for (let i = 0; i < data.facilities.length; i++) {
      formData.append(`clinic[facilities][${i}]`, data.facilities[i])
    }
    formData.append("clinic_name",data.clinic_name)
    formData.append("clinic_image[]", data.imageFiles[0])
    formData.append("clinic_latitude", "72.5855557")
    formData.append("clinic_longitude", "23.0903425")
    formData.append("clinic_location", "testing location, dummy location added 1")
    try {
      let response = await axios.post(ADD_NEW_CLINIC, formData, {
        headers: {
          'content-type': 'multipart/form-data'
        }
      })
      if (response.data.id) {

        toast.success("New clinic Added successfully")
        setClinicAdded?setClinicAdded(true):""
        closeClinicModal()
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Transition appear show={isOpenClinicModal} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeClinicModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-4xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute right-4 top-4 focus:outline-none"
                    onClick={closeClinicModal}
                  >
                    <XCloseIcn className='w-6 h-6' />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-center"
                  >
                    Add Clinic/ Hospital Details
                  </Dialog.Title>
                  <div className="mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='w-full'>
                        <div className='get-upload-profile_box'>
                          <div className='get-profile_pic relative mx-auto w-36 h-36 rounded-10'>
                            <input
                              {...rest}
                              ref={(e) => {
                                ref(e),
                                  inputRef.current = e
                              }}
                              className="input-profile-fld absolute left-0 right-0 top-0 bottom-0 w-full h-full opacity-0"
                              type="file"
                              onChange={uploadSingleFile} />
                            <div className='input-profile-pic w-36 h-36 rounded-10 bg-secondaryLight border border-smextralightgray'>
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
                        {errors.imageFiles && <span className='inputError'>{errors.imageFiles.message}</span>}
                      </div>
                      <div className='w-full'>
                        <div className="grid grid-cols-1 gap-x-4">
                          <div className="col-span-1 md:col-span-1">
                            <div className='mb-4'>
                              <LabelText text='Clinic Name' />
                              <CustomInputBox type="text" data={{ ...register("clinic_name") }} />
                            </div>
                            {errors.clinic_name && <span className='inputError'>{errors.clinic_name.message}</span>}

                          </div>
                          <div className="col-span-1">
                            <div className='mb-4'>
                              <LabelText text='Address' />
                              <div className='relative'>
                                <CustomTextareaBox rows={1} className="pr-28"/>
                              </div>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <div className='mb-4'>
                              <LabelText text='Facility' />
                              <Controller
                                name='facilities'
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                  <FacilityMultiSelect data={{ onChange, value }} />
                                )}
                              />
                              {errors.facilities && <span className='inputError'>{errors.facilities.message}</span>}

                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <PrimaryButton type="submit" btnPrimaryText2="SAVE" />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ClinicModal