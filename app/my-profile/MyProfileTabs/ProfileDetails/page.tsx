'use client'
import DatePicker from 'react-date-picker/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import { FC, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import intlTelInput from 'intl-tel-input'
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText, SmallTitle } from '@/components/Typography/page'
import { DateIc } from '@/components/icons/CommonIcons/page'
import CustomTextareaBox from '@/components/CustomTextareaBox/page'
import GenderSelectDropDown from './GenderSelectDropDown/page'
import BloodGroupSelectDropDown from './BloodGroupSelectDropDown/page'
import MaritalStatusSelectDropDown from './MaritalStatusSelectDropDown/page'


type Props = {
  // Define props types here
}

const ProfileDetails: FC<Props> = () => {
  const [value, onChange] = useState(new Date());
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedCountryData, setSelectedCountryData] = useState<any>();

    useEffect(() => {
        const phoneInput = phoneInputRef.current;
        if (phoneInput) {
            const intalTelInput = intlTelInput(phoneInput, { separateDialCode: true });
            phoneInput.addEventListener('countrychange', () => {
                const countryData = intalTelInput.getSelectedCountryData();
                setSelectedCountryData(countryData)
            });
        }
    }, []);
    const {
      handleSubmit,
      formState: { errors },
      register
  } = useForm<FormData>(
      {
         // resolver: yupResolver(FormSchema),
      }
  )
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
  const { ref, ...rest } = register('mobile_number');

  return (
      <div className='my-profile-details'>
       <SmallTitle text='Personal Details' className='font-bold mb-4 !text-xl' />
        <form>
          <div className='xl:flex'>
            <div className='w-full xl:w-36 mb-4'>
              <div className='get-upload-profile_box'>
                  <div className='get-profile_pic relative mx-auto w-36	h-36 rounded-10'>
                      <input ref={inputRef}
                        className="input-profile-fld absolute left-0 right-0 top-0 bottom-0 w-full h-full opacity-0"
                        type="file"
                        onChange={uploadSingleFile}/>
                        <div className='input-profile-pic w-36	h-36 rounded-10 bg-secondaryLight border border-smextralightgray'>
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
                <div className="col-span-2">
                  <div className='mb-4'>
                    <LabelText text='Fullname' />
                    <CustomInputBox type="text"/>
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
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='Email*' />
                    <CustomInputBox type="email"/>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='Gender' />
                    <GenderSelectDropDown/>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='DOB' />
                    <DatePicker
                          className="datePicker_custom w-full"
                          onChange={onChange}
                          value={value}
                          clearIcon={null}
                          format="dd/MM/y"
                          dayPlaceholder="DD"
                          monthPlaceholder="MM"
                          yearPlaceholder="YYYY"
                          calendarIcon={<DateIc />}
                          showNavigation={true}
                        />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='Blood Group' />
                    <BloodGroupSelectDropDown/>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='Marital Status' />
                    <MaritalStatusSelectDropDown/>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='Height' />
                    <CustomInputBox type="text"/>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className='mb-4'>
                    <LabelText text='Weight' />
                    <div className='relative'>
                      <CustomInputBox type="text" className="pr-10"/>
                      <span className='absolute top-3 right-3 text-semilightgray'>KG</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className='mb-4'>
                    <LabelText text='Address' />
                    <CustomTextareaBox rows={1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end"><button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base">CANCEL</button><button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base">SAVE CHANGES</button></div>
        </form>
      </div>  
  )
}

export default ProfileDetails