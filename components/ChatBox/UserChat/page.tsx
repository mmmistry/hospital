'use client'
import Image from 'next/image'
import { FC, ReactElement } from 'react'
import { userChat } from '@/constants/UserChatContants'

const UserChat:FC = (): ReactElement => {

  return (
    <div className='scrollable-chatBody h-[calc(500px_-_0px)] overflow-y-auto custom-scrollbar px-3'>
       {userChat.map(({ title, img, subTitle, time, id}) => (
            <div key={id} className='UserChat flex items-center py-3 border-b border-midextralightgray'>
                <div className='mr-3 w-11'>
                    <Image src={img} width='46' height='46' alt={title} className='rounded-md'/>
                </div>
                <div className='flex justify-between items-center w-[calc(100%_-_44px)]'>
                    <div className='mr-2'>
                        <div className='font-bold text-sm 2xl:text-base'>{title}</div>
                        <div className='text-xs 2xl:text-sm'>{subTitle}</div>
                    </div>
                    <div className='text-xs text-secondary'>{time}</div>
                </div>
            </div>
      ))}      
    </div>
  )
}

export default UserChat