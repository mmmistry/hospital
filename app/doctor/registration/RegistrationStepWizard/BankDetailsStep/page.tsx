'use client'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import CustomInputBox from '@/components/CustomInputBox/page';
import { useSession } from 'next-auth/react';
import { LabelText, SmallTitle } from '@/components/Typography/page';
import Stats from '../Stats/page'
import { VALIDATION } from '@/constants/Validation';
import { addUpdateBankDetails } from '@/utils/api-handler/doctor/page';
import { MESSAGE } from '@/constants/Message';
import { ROUTES } from '@/constants/Routes';

interface FormData {
  user_id: string,
  bank_name: string,
  account_holder_name: string,
  account_number: string,
  confirm_account_number: string
  ifsc_code: string
}

const FormSchema = yup
  .object({
    bank_name: yup
      .string()
      .required(VALIDATION.BANK_NAME),
    account_holder_name: yup
      .string()
      .required(VALIDATION.ACCOUNT_HOLDER_NAME),
    account_number: yup
      .string()
      .required(VALIDATION.ACCOUNT_NUMBER)
      .matches(/^[0-9]+$/, "Must be only digits")
      .test('len', 'Must be exactly 12 characters', val => val?.length === 12),
    confirm_account_number: yup
      .string()
      .required(VALIDATION.CONFIRM_ACCOUNT_NUMBER)
      .oneOf([yup.ref('account_number')], VALIDATION.ACCOUNT_NUMBER_NOT_MATCH),
    ifsc_code: yup
      .string()
      .required(VALIDATION.IFSC_CODE)
      .matches(/^[a-zA-Z0-9]*$/,VALIDATION.ALPHA_NUMERIC_ONLY)
  })
  .required()

const BankDetailsStep = (props: any) => {

  const {
    handleSubmit,
    formState: { errors },
    control,
    register
  } = useForm<FormData>(
    {
      resolver: yupResolver(FormSchema),
    }
  )
 
  const router = useRouter()
  const { data: session }: any = useSession();

  const submit = async (data: {
    bank_name: string,
    account_holder_name: string,
    account_number: string,
    ifsc_code: string, user_id: string
  }) => {
    let payload = {
      user_id : session?.user?.id,
      bank_name : data.bank_name,
      account_holder_name: data.account_holder_name,
      ifsc_code : data.ifsc_code,
      account_number : data.account_number
    }

    try {
      let response = await addUpdateBankDetails(payload)

      if(response?.UpdateBankDetails?.user_id){
        toast.success(MESSAGE.REGISTRATION_COMPLETED)
        router.push(ROUTES.DOCTOR_APPOINMENTS)
        
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='stepwizardTabDetails'>
      <SmallTitle text='Bank Details' className='font-bold mb-4 !text-xl' />
      <form autoComplete="off">
        <div className='lg:pr-5'>
          <div className="grid md:grid-cols-2 md:gap-x-4">
            <div className="col-span-1">
              <div className='mb-4'>
                <LabelText text='Bank Name' />
                <CustomInputBox type="text" data={{ ...register("bank_name") }} />
                {errors.bank_name && <span className='inputError'>{errors.bank_name.message}</span>}
              </div>
            </div>
            <div className="col-span-1">
              <div className='mb-4'>
                <LabelText text='Account Holder Name' />
                <CustomInputBox type="text" data={{ ...register("account_holder_name") }} />
                {errors.account_holder_name && <span className='inputError'>{errors.account_holder_name.message}</span>}
              </div>
            </div>
            <div className="col-span-1">
              <div className='mb-4'>
                <LabelText text='Account Number' />
                <CustomInputBox type="text" data={{ ...register("account_number") }} />
                {errors.account_number && <span className='inputError'>{errors.account_number.message}</span>}
              </div>
            </div>
            <div className="col-span-1">
              <div className='mb-4'>
                <LabelText text='Confirm Account Number' />
                {/* <CustomInputBox type="password" data={{ ...register("confirm_account_number") }}/> */}
                  <input type="password" className="w-full outline-0 rounded p-4 h-12 border-2 border-midextralightgray transition-all focus:border-secondary" autoComplete='new-password'  { ...register("confirm_account_number") }/>
                {errors.confirm_account_number && <span className='inputError'>{errors.confirm_account_number.message}</span>}
              </div>
            </div>
            <div className="col-span-1">
              <div className='mb-4'>
                <LabelText text='Swift Code' />
                <CustomInputBox type="text" data={{ ...register("ifsc_code") }} />
                {errors.ifsc_code && <span className='inputError'>{errors.ifsc_code.message}</span>}
              </div>
            </div>
          </div>
        </div>
      </form>
      <Stats step={2} {...props} nextStep={submit} handleSubmit={handleSubmit(submit)} />
    </div>
  )
}

export default BankDetailsStep