'use client'
import Image from 'next/image'
import { FC} from 'react'
import UserImage from '../../../../public/assets/images/appUser.png'

const AppUserImage: FC = () => {
  return (
    <div className="appuserImage">
         <Image className='ml-auto'  src={UserImage} alt='App User' width="564" height='590'/>
    </div>
  )
}

export default AppUserImage