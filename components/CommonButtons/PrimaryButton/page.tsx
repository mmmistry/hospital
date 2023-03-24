import { FC, ReactElement } from 'react'

const PrimaryButton: FC<{
    btnPrimaryText2: string
    type: any
    handleSubmit?:any
  }> = ({
    btnPrimaryText2,
    type,
    handleSubmit
}) :ReactElement => {
  
  return (
    <button type={type} className="inline-block primary-buttons text-white font-bold text-base bg-primary border border-primary uppercase rounded px-4 py-3 hover:transition-all hover:border-secondary hover:bg-secondary">{btnPrimaryText2}</button>
  )
}

export default PrimaryButton