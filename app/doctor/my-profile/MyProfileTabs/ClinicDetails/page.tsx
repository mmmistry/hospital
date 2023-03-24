'use client'
import { FC, ReactElement, useState} from 'react'
import ClinicListing from './ClinicListing/page'
import AddNewClinicDetails from './AddNewClinicDetails/page'

const ClinicDetails:FC = (): ReactElement => {
  const [showAddNewClinicDetails, setShowAddNewClinicDetails] = useState(false);
  const handleShowAddNewClinicDetails = () => {
    setShowAddNewClinicDetails(true);
  };

  return (
    <div className='my-profile-details'>
      {showAddNewClinicDetails ? (
        <AddNewClinicDetails />
      ):(
        <ClinicListing handleShowAddNewClinicDetails={handleShowAddNewClinicDetails} />
        )}
    </div>
  )
}

export default ClinicDetails