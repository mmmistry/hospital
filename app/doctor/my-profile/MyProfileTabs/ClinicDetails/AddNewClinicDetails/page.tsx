'use client'
import { FC, ReactElement,useRef, useState } from 'react'
import Image from 'next/image'
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText } from '@/components/Typography/page'
import { ChatIcn, MapIcn, VideoIcn, VisitIcn } from '@/components/icons/CommonIcons/page'
import CustomTextareaBox from '@/components/CustomTextareaBox/page'
import AvailabilityTimeList from './AvailabilityTimeList/page'
import ClinicModal from '@/components/Modals/ClinicModal/page'

const AddNewClinicDetails: FC = (): ReactElement => {
  const [isOpenClinicModal, setIsOpenClinicModal] = useState(false)
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const closeClinicModal= () => {
      setIsOpenClinicModal(false)
  }

  const openClinicModal = () =>{
      setIsOpenClinicModal(true)
  }
  return (
    <div className='add-clinic-details'>
      <form>
            <div className='xl:flex'>
               <div className='w-full xl:w-36'>
                  <div className='get-upload-profile_box'>
                        <div className='get-profile_pic relative mx-auto w-36	h-36 rounded-10'>
                            <input ref={inputRef}
                              className="input-profile-fld absolute left-0 right-0 top-0 bottom-0 w-full h-full opacity-0"
                              type="file"
                              onChange={uploadSingleFile}/>
                              <div className='input-profile-pic w-36 h-36 rounded-10 bg-secondaryLight border border-smextralightgray'>
                              {file && (
                                <Image className='w-full h-full rounded-10 object-cover' src={file} alt="uploaded profile picture" width='144' height='144'/>
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
                          <CustomInputBox type="text"/>
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className='mb-4'>
                          <LabelText text='Fees'/>
                          <div className='relative'>
                             <CustomInputBox type="text" className="pr-10"/>
                             <span className='absolute top-3 right-3'>$</span>
                          </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className='mb-4'>
                          <LabelText text='Address'/>
                          <div className='relative'>
                             <CustomTextareaBox rows={1} className="pr-28"/>
                              <button className='flex items-center absolute top-5 right-3 text-sm text-secondary font-medium'><MapIcn className='w-5 h-5 mr-2'/>Get Location</button>
                          </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className='mb-4'>
                          <LabelText text='Consultation mode' className='!font-bold text-lg'/>
                          <div className='flex items-center flex-wrap relative outline-0 rounded px-2 py-2 w-full border-2 border-midextralightgray'>
                              <div className='customCunltCheckbox relative mx-1 my-1'>
                                  <input type="checkbox" name="videoCall" id="videoCall" className='checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 cursor-pointer'/>
                                  <div className='checkboxCunltLabel flex items-center justify-center px-3 py-2 rounded-3xl	text-sm bg-xsextralightgray min-w-28'>
                                    <VideoIcn className='mr-1'/>
                                    <span>Video Call</span>
                                  </div>
                              </div>
                              <div className='customCunltCheckbox relative mx-1 my-1'>
                                  <input type="checkbox" name="visitUs" id="visitUs" className='checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 cursor-pointer'/>
                                  <div className='checkboxCunltLabel flex items-center justify-center px-3 py-2 rounded-3xl	text-sm bg-xsextralightgray min-w-28'>
                                    <VisitIcn className='mr-1'/>
                                    <span>Visit us</span>
                                  </div>
                              </div>
                              <div className='customCunltCheckbox relative mx-1 my-1'>
                                  <input type="checkbox" name="chat" id="chat" className='checkboxCunltInput absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 cursor-pointer'/>
                                  <div className='checkboxCunltLabel flex items-center justify-center px-3 py-2 rounded-3xl	text-sm bg-xsextralightgray min-w-28'>
                                    <ChatIcn className='mr-1'/>
                                    <span>Chat</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className='mb-4'>
                          <LabelText text='Availability' className='!font-bold text-lg'/>
                            <div className='rounded px-3 py-4 w-full border-2 border-midextralightgray'>
                            <AvailabilityTimeList/>
                          </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
            <div className="mt-6 flex items-center justify-end"><button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base">CANCEL</button><button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base">SAVE CHANGES</button></div>
        </form>
        <ClinicModal 
        isOpenClinicModal={isOpenClinicModal}
        closeClinicModal={closeClinicModal} 
        />
    </div>
  )
}

export default AddNewClinicDetails