'use client'
import { FC, ReactElement, useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import intlTelInput from 'intl-tel-input'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'
import CustomInputBox from '@/components/CustomInputBox/page'
import { ROLE } from '@/constants/Role'
import { LabelText } from '@/components/Typography/page'
import { registration } from '@/utils/api-handler/register/page'
import { FormSchema, FormData } from '../common'
import { MESSAGE } from '@/constants/Message'
import { ROUTES } from '@/constants/Routes'

const PatientRegister: FC = (): ReactElement => {
    const phoneInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedCountryData, setSelectedCountryData] = useState<any>();
    const router = useRouter()
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
        data.role_user = ROLE.USER;
        try {
            const response = await registration(data)

            if (response.Registration && response.Registration.id !== null) {
                toast.success(MESSAGE.USER_REGISTER_SUCCESS)
                localStorage.setItem('user_id', JSON.stringify(response?.Registration.id))
                router.push(ROUTES.REGISTRATION)
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

export default PatientRegister