'use client'

import { FC, ReactElement, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCloseIcn } from '@/components/icons/CommonIcons/page'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'
import ApponImg from '../../../public/assets/images/dummy-image.png'
import Image from 'next/image'
import { LabelText } from '@/components/Typography/page'
import CustomInputBox from '@/components/CustomInputBox/page'
import CustomTextareaBox from '@/components/CustomTextareaBox/page'

const ReportIssueModal: FC<{ isOpenReportIssueModal: any, closeReportIssueModal: any }> = ({ isOpenReportIssueModal, closeReportIssueModal }): ReactElement => {
  return (
   <>
     <Transition appear show={isOpenReportIssueModal} as={Fragment}>
        <Dialog as="div" className="relative z-20" onClose={closeReportIssueModal}>
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
                <Dialog.Panel className="relative w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    type="button"
                    className="absolute right-4 top-4 focus:outline-none"
                    onClick={closeReportIssueModal}
                  >
                    <XCloseIcn className='w-6 h-6' />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold text-center"
                  >
                    Report Issue
                  </Dialog.Title>
                  <div className="mt-5">
                    <form>
                        <div className='py-5 sm:flex'>
                            <div className='mr-8 mb-4'>
                                <Image src={ApponImg} alt='Image' className='rounded-10 w-24 h-24'  />
                            </div>
                            <div className='patient-details sm:w-[calc(100%_-_104px)] border-b-2 border-midextralightgray'>
                                <div className='flex justify-between items-center flex-wrap'>
                                    <div className='flex items-center mb-3 w-full'>
                                        <div className='text-semilightgray pr-3 w-1/3 text-base md:text-lg'>Doctor Name:</div>
                                        <div className='font-bold w-2/3 text-base md:text-lg'>Dan Riley</div>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center flex-wrap'>
                                    <div className='flex items-center mb-3 w-full'>
                                        <div className='text-semilightgray pr-3 w-1/3 text-base md:text-lg'>Specialist:</div>
                                        <div className='font-bold w-2/3 text-base md:text-lg'>Cardiologist</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <LabelText text='Subject'/>
                            <CustomInputBox type='text'/>
                        </div>
                        <div className="mb-4">
                            <LabelText text='Description'/>
                            <CustomTextareaBox rows={5}/>
                        </div>
                        <div className="mt-4 text-center">
                           <PrimaryButton type="submit" btnPrimaryText2="SEND" />
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

export default ReportIssueModal