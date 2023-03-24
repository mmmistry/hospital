import { FC, ReactElement } from 'react'
import NextLink from 'next/link'

const OutlineLink: FC<{
    btnOutLineLink: string
    btnOutLineText: string
  }> = ({
    btnOutLineLink,
    btnOutLineText
}) :ReactElement => {
  
  return (
    <NextLink href={btnOutLineLink} className="inline-block border-outlineBtntext-primary font-bold text-base border border-primary uppercase rounded px-3 py-3 hover:transition-all hover:border-secondary hover:text-secondary">{btnOutLineText}</NextLink>
  )
}

export default OutlineLink