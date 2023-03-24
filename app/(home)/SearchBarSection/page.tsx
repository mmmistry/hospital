'use client'
import { FC, ReactElement } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import PrimaryButton from '@/components/CommonButtons/PrimaryButton/page'
import AutoCompleteSearch from './AutoCompleteSearch/page'

const SearchBarSection: FC = () :ReactElement => {
  return (
    <div className='searchBarSection relative z-10'>
        <div className='container mx-auto px-4'>
            <div className='bg-white sm:flex items-center p-4 rounded-lg shadow-3xl max-w-6xl mx-auto'>
                <AutoCompleteSearch/>
                <div className='relative sm:w-3/6 items-center sm:border-l border-slate-400 sm:pl-3 sm:my-0 my-4'>
                    <MagnifyingGlassIcon className="absolute top-0.5 sm:left-3 h-5 w-5 text-gray-400"/>
                    <input type="search" className='border-0 outline-0 pl-7 w-full font-semibold text-base' placeholder='Search your doctor, symptoms'/>
                </div>
                <div className='ml-auto'>
                    <PrimaryButton type="submit" btnPrimaryText2="SEARCH"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SearchBarSection
