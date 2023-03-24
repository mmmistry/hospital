'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { FC, ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'
import CustomCheckBox from '@/components/CustomCheckBox/page'
import CustomInputBox from '@/components/CustomInputBox/page'
import CustomNextLink from '@/components/CustomNextLink/page'
import InputShowHidePassword from '@/components/InputShowHidePassword/page'
import { LabelText } from '@/components/Typography/page'
import { MESSAGE } from '@/constants/Message'
import { ROLE } from '@/constants/Role'
import { FormData, FormSchema } from '../../login/common'
import { ROUTES } from '@/constants/Routes'

const DoctorsLogin: FC = (): ReactElement => {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(FormSchema),
  })
  const onSubmit = async (data: any) => {
    data.role_user = ROLE.DOCTOR
    const loginDetails = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
      role_user: data.role_user,
    });
    const session: any = await getSession()
    if (loginDetails?.ok === true) {
      if (session.user.message === null) {
        if (session.user.isRegisterdCompleted === true && session.user.isVerifiedDoctor === true) {
          toast.success(MESSAGE.LOGIN_SUCCESS)
          if (session?.user?.clinic_details_add_status === true) {
            if (session?.user?.bank_details_add_status === true) {
              router.push(ROUTES.DOCTOR_APPOINMENTS)
            } else {
              router.push(`${ROUTES.DOCTOR_REGISTRATION}#step2`)
            }
          } else {
            router.push(`${ROUTES.DOCTOR_REGISTRATION}#step1`)
          }
        } else {
          toast.error(MESSAGE.LOGIN_ERROR)
        }
      } else {
        toast.error(session?.user?.message)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-4'>
        <LabelText text='Email*' />
        <CustomInputBox type="email" data={{ ...register("email") }} />
        {errors.email && <span className='inputError'>{errors.email.message}</span>}
      </div>
      <div className='mb-4'>
        <LabelText text='Password*' />
        <InputShowHidePassword data={{ ...register("password") }} />
        {errors.password && <span className='inputError'>{errors.password.message}</span>}
      </div>
      <div className='mb-4'>
        <div className='flex items-center justify-between flex-wrap'>
          <CustomCheckBox checkBoxLabelText='Remember me' lablecheckId="remember me" className='' />
          <CustomNextLink pageLink='/' linkText='Forgot password?' className='text-secondary hover:text-black' />
        </div>
      </div>
      <div className='mb-4 mt-9'>
        <div className='full-w-btn'><PrimaryButton type="submit" btnPrimaryText2="LOGIN" /></div>
      </div>
    </form>
  )
}

export default DoctorsLogin