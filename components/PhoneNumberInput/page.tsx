'use client'
import { FC, useEffect, useRef } from 'react'
import intlTelInput from 'intl-tel-input'


  const PhoneNumberInput: FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (inputRef.current) {
        intlTelInput(inputRef.current, {
          separateDialCode: true,
        });
      }
    }, []);
    
  return (
    <div className='intelInput'><input className='inputIntel w-full outline-0 rounded h-12 border-2 border-midextralightgray transition-all focus:border-secondary' type="tel" id="phone" ref={inputRef}/></div>
  )
}

export default PhoneNumberInput