
"use client"
import React, { FC, ReactElement, useState  } from 'react';
import { SmallTitle } from '@/components/Typography/page'
import { CloseIcn, RemoveIcn } from '@/components/icons/CommonIcons/page';
import PhotoIdUploaded from './PhotoIdUploaded/page'


const UploadDocumentsStep = (props:any) => {
  const [files, setFile] = useState<File[]>([]);
  const removeImage = (name: string): void => {
    setFile(files.filter((file) => file.name !== name));
  };
  return (
    <div className='stepwizardTabDetails'>
       <SmallTitle text='Upload Documents' className='font-bold mb-0 !text-xl'/>

       <div className="pb-4 mb-4 border-b-2 border-midextralightgray">
       <div className="flex flex-wrap gap-2 mt-0">
          <div  className="overflow-hidden relative pt-3 pr-3">
            <div className="mdi mdi-close absolute right-1 top-2 hover:text-white cursor-pointer">
                <RemoveIcn className='w-4 h-4'/>
            </div>
            <img
              className="h-20 w-20 rounded-md"
              src="/assets/images/dummy-image.png"
            />
          </div>
          <div  className="overflow-hidden relative pt-3 pr-3">
            <div className="mdi mdi-close absolute right-1 top-2 hover:text-white cursor-pointer">
                <RemoveIcn className='w-4 h-4'/>
            </div>
            <img
              className="h-20 w-20 rounded-md"
              src="/assets/images/dummy-image.png"
            />
          </div>
          <div  className="overflow-hidden relative pt-3 pr-3">
            <div className="mdi mdi-close absolute right-1 top-2 hover:text-white cursor-pointer">
                <RemoveIcn className='w-4 h-4'/>
            </div>
            <img
              className="h-20 w-20 rounded-md"
              src="/assets/images/dummy-image.png"
            />
          </div>
        </div>
       </div>
        <form>
        <SmallTitle text='Add More Documents' className='font-bold mb-4 !text-xl'/>
          <div className='max-w-4xl'>
              <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2">
                <div className='border-smextralightgray md:border-r md:pr-4'>
                  <SmallTitle text='Photo ID' className='font-bold mb-4 !text-lg'/>
                  <PhotoIdUploaded/>
                </div>
                <div className='md:pl-4'>
                  <SmallTitle text='Registration Document' className='font-bold mb-4 !text-lg'/>
                  <PhotoIdUploaded/>
                </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end"><button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base">CANCEL</button><button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base">SAVE CHANGES</button></div>
        </form>
        
    </div>
  )
}

export default UploadDocumentsStep