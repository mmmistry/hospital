import { FC } from 'react'

export const PageTitle: FC<{ text: string }> = ({
  text,
}) => {
  return (
    <h1 className="page-title text-darkgray playfair-font text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold">
      {text}
    </h1>
  )}
export const PageInfo: FC<{ text: string }> = ({
    text,
  }) => {
    return (
      <div className="page-info text-darkgray text-lg xl:text-xl">
        {text}
      </div>
    )
}
export const CommonTitle: FC<{ text: string }> = ({
  text,
}) => {
  return (
    <div className='text-darkgray playfair-font text-3xl lg:text-4xl 2xl:text-5xl	font-bold'>{text}</div>
  )
}
export const CommonTitleBorderColorText: FC<{ subText:string, text: string }> = ({
  subText,
  text,
}) => {
  return (
    <div className='commonTitleBorder text-darkgray playfair-font text-3xl lg:text-4xl 2xl:text-5xl	font-bold'>
      {text}
      <span className='text-secondary pl-2'>{subText}</span>
     </div>
  )
}
export const CommonTitleBorder: FC<{ text: string }> = ({
  text,
}) => {
  return (
    <div className='commonTitleBorder text-darkgray playfair-font text-3xl lg:text-4xl 2xl:text-5xl	font-bold'>{text}</div>
  )
}
export const SmallInfo: FC<{ text: string, className: string}> = ({
  text,
 className
}) => {
  return (
    <div  className={`text-sm lg:text-base ${className}`}>
       {text}
    </div>
  )
}
export const SmallTitle: FC<{ text: string, className?: string}> = ({
  text,
  className= ''
}) => {
  return (
    <div  className={`text-lg lg:text-2xl ${className}`}>
       {text}
    </div>
  )
}
export const TitleMd: FC<{ text: string }> = ({
  text,
}) => {
  return (
    <div className='text-darkgray playfair-font text-3xl lg:text-4xl-md font-bold'>{text}</div>
  )
}
export const InfoTextMd: FC<{ text: string }> = ({
  text,
}) => {
  return (
    <div className='text-semilightgray text-lg lg:text-xl'>{text}</div>
  )
}
export const LabelText: FC<{ text: string, className?: string}> = ({
  text,
  className= ''
}) => {
  return (
    <div className={`text-black text-base mb-2 font-medium ${className}`}>{text}</div>
  )
}