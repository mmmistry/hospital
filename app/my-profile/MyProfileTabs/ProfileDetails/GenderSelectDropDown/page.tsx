'use client'
import { FC, Fragment, ReactElement, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'


const gender = [
  { name: 'Male' },
  { name: 'Female' },
  { name: 'Other' },
]
const GenderSelectDropDown: FC<{ data?: any }> = ({ data }): ReactElement => {
  const [selected, setSelected] = useState<String>('Select')
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={(e: any) => {
        data?.onChange(e);
        setSelected(e);
      }}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full outline-0 rounded p-4 h-12 border-2 border-midextralightgray cursor-default bg-white py-2 pl-3 pr-10 text-left transition-all focus:border-secondary focus:outline-none">
            <span className="block truncate">{selected}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {gender.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-secondary text-white' : 'text-gray-900'
                    }`
                  }
                  value={person.name}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default GenderSelectDropDown