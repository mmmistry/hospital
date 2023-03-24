import { FC, ReactElement } from 'react'
import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'

const MenuToogleButton: FC<{
    onclick: any
    sidebarIsOpen?: boolean
   }> = ({
    onclick
}): ReactElement => {
  return (
   <button className='outline-none' onClick={onclick}>
     <Bars3Icon className='bar-ic h-7 w-7 text-primary'/>
     <XMarkIcon className='close-ic h-7 w-7 text-primary'/>
   </button>
  )
}

export default MenuToogleButton