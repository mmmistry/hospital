'use client'
import { FC, ReactElement } from 'react'

const CustomCheckBox: FC<{
    lablecheckId: string
    checkBoxLabelText: string
    className: string
  }> = ({
    lablecheckId,
    checkBoxLabelText,
    className
}) :ReactElement => {
  
  return (
    <div className={`form-check ${className}`}>
        <input className="form-check-input" type="checkbox" id={lablecheckId}/>
        <label className="form-check-label font-medium text-primary" htmlFor={lablecheckId}>
            {checkBoxLabelText}
        </label>
     </div>
  )
}

export default CustomCheckBox