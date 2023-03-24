import { FC, ReactElement } from 'react'
const CustomTextareaBox: FC<{
  rows: number,
  className?: string,
  clinicAddress?: any
  data?: any
}> = ({
  clinicAddress,
  rows,
  className = '',
  data
}): ReactElement => {
    return (
      <textarea {...data} className={`w-full outline-0 rounded p-4 h-auto resize-none border-2 border-midextralightgray transition-all focus:border-secondary ${className}`} rows={rows} disabled={clinicAddress ? true : false} defaultValue={clinicAddress ? clinicAddress[0]?.clinic_location : ""} />
    )
  }
export default CustomTextareaBox