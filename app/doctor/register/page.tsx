'use client'
import { FC, ReactElement, useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import intlTelInput from 'intl-tel-input'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { registration } from '@/utils/api-handler/register/page'
import { FormSchema, FormData } from '../../register/common'
import { ROLE } from '@/constants/Role'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'
import CustomInputBox from '@/components/CustomInputBox/page'
import { LabelText } from '@/components/Typography/page'
import { MESSAGE } from '@/constants/Message'
import { ROUTES } from '@/constants/Routes'


const DoctorsRegister: FC = (): ReactElement => {
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter()
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
      resolver: yupResolver(FormSchema),
    }
  )

  const onSubmit = async (data: any) => {
    data.country_code = selectedCountryData ? selectedCountryData.dialCode : "1"
    data.role_user = ROLE.DOCTOR;
    try {
      const response = await registration(data)
   
      if (response?.Registration?.id !== null) {
    
        localStorage.setItem('userId', JSON.stringify(response?.Registration.id))
        toast.success(MESSAGE.DOCTOR_REGISTER_SUCCESS)
        router.push(ROUTES.DOCTOR_REGISTRATION)
      }
      else {
        toast.error(response?.Registration.message)
      }

    } catch (error) {
      console.log("error", error)

    }

  }

  const { ref, ...rest } = register('mobile_number');
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <LabelText text='Full Name*' />
        <CustomInputBox type="text" data={{ ...register('full_name') }} />
        {errors.full_name && <span className='inputError'>{errors.full_name.message}</span>}
      </div>
      <div className='mb-4'>
        <LabelText text='Email*' />
        <CustomInputBox type="email" data={{ ...register('email') }} />
        {errors.email && <span className='inputError'>{errors.email.message}</span>}
      </div>
      <div className='mb-4'>
        <LabelText text='Password*' />
        <CustomInputBox type="password" passwordField={true} data={{ ...register('password') }} />

      </div>
      <div className='mb-4'>
        <LabelText text='Confirm Password*' />
        <CustomInputBox type="password" data={{ ...register('password_confirmation') }} />
        {errors.password_confirmation && <span className='inputError'>{errors.password_confirmation.message}</span>}
      </div>
      <div className='mb-4'>
        <LabelText text='Mobile no*' />
        <div className='intelInput'><input className='inputIntel w-full outline-0 rounded h-12 border-2 border-midextralightgray transition-all focus:border-secondary' type="tel" {...rest}
          ref={(e) => {
            ref(e),
              phoneInputRef.current = e
          }} />
        </div>
        {errors.mobile_number && <span className='inputError'>{errors.mobile_number.message}</span>}
      </div>
      <div className='mb-4 mt-9'>
        <div className='full-w-btn'><PrimaryButton type="submit" btnPrimaryText2="SUBMIT" /></div>
      </div>
    </form>
  )
}

export default DoctorsRegister