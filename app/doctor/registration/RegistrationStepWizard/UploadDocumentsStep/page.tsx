"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from "axios"
import { useRouter } from 'next/navigation';
import { SmallTitle } from '@/components/Typography/page'
import Stats from '../Stats/page'
import PhotoIdUploaded from './PhotoIdUploaded/page'
import { VALIDATION } from "@/constants/Validation";
import { MESSAGE } from '@/constants/Message';
import { UPLOAD_DOCUMENT_URL } from '@/services/config';
import { ROUTES } from '@/constants/Routes';

const UploadDocumentsStep = (props: any) => {
  const [photoId, setPhotoId] = useState<any>([]);
  const [buttonClicked, setButtonClicked] = useState<Boolean>(false)
  const router = useRouter()
  const [registerId, setRegisterId] = useState<any>([]);
 const userID : any = typeof window != "undefined" && localStorage?.getItem("userId")
  


  const handleFileSubmit = async () => {
    setButtonClicked(true)
    let formData = new FormData()
    formData.append("doctor_id", JSON.parse(userID))

    for (let i = 0; i < photoId.length; i++) {
      formData.append("registerDocument[]", photoId[i])
    }
    for (let i = 0; i < registerId.length; i++) {
      formData.append("photo_id_image[]", registerId[i])
    }

    if (photoId.length > 0 && registerId.length > 0) {
      try {
        let response = await axios.post(UPLOAD_DOCUMENT_URL, formData, {
          headers: {
            'content-type': 'multipart/form-data'
          }

        })
        if(response?.data?.id && response?.data?.id !== null){
         toast.success(MESSAGE.REGISTRATION_COMPLETED) 
         router.push(ROUTES.LOGIN)
        }
          else{
        toast.error(MESSAGE.TRY_AGAIN)
      }
      } catch (error) {
        console.log(error)
      }

    }
  }

  return (
    <div className='stepwizardTabDetails'>
      <SmallTitle text='Upload Documents' className='font-bold mb-4 !text-xl' />
      <form>
        <div className='max-w-4xl'>
          <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
            <div className='border-smextralightgray md:border-r md:pr-4'>
              <SmallTitle text='Photo ID' className='font-bold mb-4 !text-lg' />
              <PhotoIdUploaded filesDataFun={setPhotoId} />
              {photoId.length <= 0 && buttonClicked && <span className='inputError'>{VALIDATION.SELECT_PHOTOID}</span>}
            </div>
            <div className='md:pl-4'>
              <SmallTitle text='Registration Document' className='font-bold mb-4 !text-lg' />
              <PhotoIdUploaded filesDataFun={setRegisterId} />
              {registerId.length <= 0 && buttonClicked && <span className='inputError'>{VALIDATION.SELECT_REGISTER_DOCUMENT}</span>}
            </div>
          </div>
        </div>
      </form>
      <Stats step={2} {...props} handleSubmit={handleFileSubmit} />
    </div>
  )
}

export default UploadDocumentsStep