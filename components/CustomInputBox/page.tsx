import { FC, ReactElement, useState } from 'react'

const CustomInputBox: FC<{
  type: any,
  data?: any,
  passwordField?: Boolean,
  placeholder?: string,
  className?: string,
}> = ({
  type,
  data,
  passwordField,
  placeholder,
  className= ''
}): ReactElement => {
    const [showError, setShowError] = useState<Boolean>(false)
    const [matched , setMatched] = useState<Boolean>(false)

    const matchCriteria = (event: any) => {
      let passwordValue = event.target.value
      if (passwordValue.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/)) {
        setShowError(false)
        setMatched(true)
      }
      else {
        setShowError(true)
        setMatched(false)

      }
    }
    return (
      <>
        {passwordField===true ? <input type={type} placeholder={placeholder} {...data} onClick={() => { !matched && setShowError(true) }} autoComplete={type=='password'?"new-password":""} onChange={(event) => { matchCriteria(event) }} className="w-full outline-0 rounded p-4 h-12 border-2 border-midextralightgray transition-all focus:border-secondary" />
          :
          <input type={type} placeholder={placeholder} {...data} autoComplete={type=='password'?"new-password":""} className={`w-full outline-0 rounded p-4 h-12 border-2 border-midextralightgray transition-all focus:border-secondary ${className}`} />}
        {showError && <span className='inputError'>Must Contain 7 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character</span>}
      </>
    )
  }

export default CustomInputBox