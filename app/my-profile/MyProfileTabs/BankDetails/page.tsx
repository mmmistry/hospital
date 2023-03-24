'use client'
import { FC, ReactElement } from 'react'
import CustomInputBox from '@/components/CustomInputBox/page';
import { LabelText } from '@/components/Typography/page';

const BankDetails:FC = (): ReactElement => {

  return (
    <div className='my-profile-details'>
      <form>
        <div className='w-full xl:w-[calc(100%_-_303px)] xl:px-0'>
          <div className="grid md:grid-cols-2 md:gap-x-4">
                <div className="col-span-1">
                  <div className='mb-4'>
                      <LabelText text='Bank Name'/>
                      <CustomInputBox type="text"/>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='mb-4'>
                      <LabelText text='Account Holder Name'/>
                      <CustomInputBox type="text"/>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='mb-4'>
                      <LabelText text='Account Number'/>
                      <CustomInputBox type="text"/>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='mb-4'>
                      <LabelText text='Confirm Account Number'/>
                      <CustomInputBox type="text"/>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className='mb-4'>
                      <LabelText text='Swift Code'/>
                      <CustomInputBox type="text"/>
                  </div>
                </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end">
            <button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base">CANCEL</button>
            <button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base">SAVE CHANGES</button></div>
        </form>
    </div>
  )
}

export default BankDetails