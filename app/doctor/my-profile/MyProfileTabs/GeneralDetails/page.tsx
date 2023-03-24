'use client'
import { FC, ReactElement,useState } from 'react'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import GenderSelectDropDown from './GenderSelectDropDown/page'
import SpecialityMultiSelect from './SpecialityMultiSelect/page'
import SymptomsMultiSelect from './SymptomsMultiSelect/page'
import EducationsSelectDropDown from './EducationsSelectDropDown/page'
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText } from '@/components/Typography/page'
import { DateIc } from '@/components/icons/CommonIcons/page'

const GeneralDetails:FC = (): ReactElement => {
  const [value, onChange] = useState<Date>(new Date());

  return (
        <div className='my-profile-details'>
            <form>
                <div className='w-full xl:w-[calc(100%_-_303px)] xl:px-0'>
                  <div className="grid grid-cols-2 gap-x-4">
                      <div className="col-span-2">
                        <div className='mb-4'>
                            <LabelText text='Bio'/>
                            <CustomInputBox type="text"/>
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <div className='mb-4'>
                            <LabelText text='Gender'/>
                            <GenderSelectDropDown/>
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <div className='mb-4'>
                            <LabelText text='DOB'/>
                            <DatePicker
                              className="datePicker_custom w-full"
                              onChange={onChange} 
                              value={value}
                              clearIcon = {null}
                              format="dd/MM/y"
                              dayPlaceholder="DD"
                              monthPlaceholder="MM"
                              yearPlaceholder="YYYY"
                              calendarIcon={<DateIc />}
                            />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className='mb-4'>
                            <LabelText text='Speaciality'/>
                            <SpecialityMultiSelect/>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className='mb-4'>
                            <LabelText text='Symptoms'/>
                            <SymptomsMultiSelect/>
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <div className='mb-4'>
                            <LabelText text='Education Qualification'/>
                            <EducationsSelectDropDown/>
                        </div>
                      </div>
                      <div className="col-span-2 lg:col-span-1">
                        <div className='mb-4'>
                            <LabelText text='Total Experience'/>
                            <CustomInputBox type="text"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end"><button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base">CANCEL</button><button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base">SAVE CHANGES</button></div>
            </form>
        </div> 
  )
}

export default GeneralDetails