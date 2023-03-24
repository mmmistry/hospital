'use client'
import { FC, ReactElement } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { SmallTitle } from '../Typography/page'
import UserChat from './UserChat/page'

const ChatBox:FC = (): ReactElement => {

  return (
    <div className='chatBox w-full lg:w-72 2xl:w-80'>
       <SmallTitle text='Message' className='font-bold mb-3'/>
       <div className='chatBox-inner bg-white rounded-10 shadow-6xl'>
           <div className='px-4 pt-4 pb-1 border-b border-midextralightgray'>
              <form>
                 <div className='searchBar relative pb-3'>
                    <MagnifyingGlassIcon className='absolute h-5 w-5 left-2 top-3.5 text-lightgray'/>
                    <input type='search' className='w-full outline-0 rounded py-4 pr-4 pl-8 h-12 bg-secondaryLight border-2 border-midextralightgray transition-all focus:border-secondary' placeholder='Search'/>
                 </div>
              </form>
           </div>
           <div className='inner-chatBody pb-5'>
                <UserChat/>
           </div>
       </div>
    </div>
  )
}

export default ChatBox