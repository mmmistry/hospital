import { FC, ReactElement } from 'react'

const OutLineButton: FC<{
  btnOutLineText3: string
  type: any
  }> = ({
    type,
    btnOutLineText3
}) :ReactElement => {
  
  return (
    <button type={type} className="inline-block border-outlineBtntext-primary font-bold text-base border border-primary uppercase rounded px-3 py-3 hover:transition-all hover:border-secondary hover:text-secondary">{btnOutLineText3}</button>
  )
}

export default OutLineButton