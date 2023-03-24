'use client'
import { FC, ReactElement } from 'react'
import NextLink from 'next/link'

const CustomNextLink: FC<{
  pageLink: string
  linkText: string
  className: string
  onClickFun?: any
}> = ({
  pageLink,
  linkText,
  className,
  onClickFun
}): ReactElement => {

    return (
      <NextLink href={pageLink} onClick={onClickFun ? onClickFun : ''} className={`inline-block text-base transition-all font-medium ${className}`}>{linkText}</NextLink>
    )
  }

export default CustomNextLink