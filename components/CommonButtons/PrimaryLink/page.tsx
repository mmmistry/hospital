import { FC, ReactElement } from 'react'
import NextLink from 'next/link'

const PrimaryLink: FC<{
    btnPrimaryLink: string
    btnPrimaryText: string
  }> = ({
    btnPrimaryLink,
    btnPrimaryText
}) :ReactElement => {
  
  return (
    <NextLink href={btnPrimaryLink} className="inline-block primary-buttons text-white font-bold text-base bg-primary border border-primary uppercase rounded px-4 py-3 hover:transition-all hover:border-secondary hover:bg-secondary">{btnPrimaryText}</NextLink>
  )
}

export default PrimaryLink