'use client'
import { FC, ReactElement } from 'react'
import UploadDocumentsStep from './UploadDocumentsStep/page'

const MyDocuments:FC = (): ReactElement => {

  return (
    <div className='my-profile-details'>
      <UploadDocumentsStep/>
    </div>
  )
}

export default MyDocuments