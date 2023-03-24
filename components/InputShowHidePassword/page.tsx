'use client'
import Image from 'next/image';
import { FC, ReactElement, useState } from 'react'
import CustomInputBox from '@/components/CustomInputBox/page'
import ShowPassword from '../../public/assets/images/vissible.svg'
import HidePassword from '../../public/assets/images/invissible.svg'

const InputShowHidePassword: FC<{data:any}> = ({data}) :ReactElement => {
    const [showPassword, setShowPassword] = useState({
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setShowPassword({
        showPassword:!showPassword.showPassword
        })
    };
  return (
    <div className='relative'>
        <CustomInputBox data={{...data}} type={showPassword.showPassword ? "text" : "password"}/>
        <button
            type='button'
            onClick={handleClickShowPassword}
            className="passwordshow_hide absolute right-3 top-3 h-6">
            {showPassword.showPassword ? <Image width="22" height="22" src={ShowPassword} alt="show password" /> : <Image width="22" height="22" src={HidePassword} alt="hide password" />}
        </button>
    </div>
  )
}

export default InputShowHidePassword