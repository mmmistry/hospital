'use client'
import { FC, ReactElement } from 'react'
import Nextlink from 'next/link'
import Zoom from 'react-medium-image-zoom'
import { VideoIcn } from '@/components/icons/CommonIcons/page'
import 'react-medium-image-zoom/dist/styles.css'

const Medical: FC<{ medicalReportDetail: any  , appointmentDetail : any , patientDetail : any}> = ({ medicalReportDetail  , appointmentDetail , patientDetail}): ReactElement => {

    const {GetUserSelectSurgeries , GetUserSelectPastSymptoms , GetUserSelectInjuries , GetUserSelectCurrentSymptoms , GetUserSelectAllergies } = appointmentDetail || {}
    const { blood_group } = patientDetail || {}
    const {UserMedicalImagesGet } = medicalReportDetail || {}
    
  return (
    <div className='appoinment-details-medical'>
        <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Allergies:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>
            {
                GetUserSelectAllergies?.length ?
                <>
                 {GetUserSelectAllergies.map((allergies : any , index : number) => {
                    let allergie =  GetUserSelectAllergies[index + 1]
                    return(
                        allergies?.allergies_name +(allergie ?  " , " : " ") 
                    )
                    })}
                </> : '-'
            }
        </div>
        </div>
        <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Current symptoms:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>
            {
                GetUserSelectCurrentSymptoms?.length ?
                <>
                 {GetUserSelectCurrentSymptoms.map((currentSymptomsName : any, index : number) => {
                     let currentSymptom =  GetUserSelectCurrentSymptoms[index + 1]
                     return(
                        currentSymptomsName?.current_symptoms_name +(currentSymptom ?  " , " : " ") 
                     )
                    })}
                </> : '-'
            }
        </div>
        </div>
        <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Past symptoms:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>
            {
                GetUserSelectPastSymptoms?.length ?
                <>
                 {GetUserSelectPastSymptoms.map((pastSymptomsName : any, index : number) =>
                 {
                    let pastSymptom =  GetUserSelectPastSymptoms[index + 1]
                    return(
                        pastSymptomsName?.past_symptoms_name +(pastSymptom ?  " , " : " ") 
                    )
                 }
                )}
                </> : '-'
            }
        </div>
        </div>
        <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Injuries:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>
            {
                GetUserSelectInjuries?.length ?
                <>
                 {GetUserSelectInjuries.map((injuriesName : any, index : number) => 
                    {
                      let injurie =  GetUserSelectInjuries[index + 1]
                      return(
                        injuriesName?.injuries_name +(injurie ?  " , " : " ") 
                      )
                })}
                </> : '-'
            }
        </div>
        </div>
        <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Surgeries:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>
        {
                GetUserSelectSurgeries?.length ?
                <>
                 {GetUserSelectSurgeries.map((surgeriesName : any, index : number) => 
                   {
                    let surgerie =  GetUserSelectSurgeries[index + 1]
                    return(
                        surgeriesName?.surgeries_name +(surgerie ?  " , " : " ") 
                    )
                 })}
                </> : '-'
            }            
        </div>
        </div>
        <div className='flex flex-wrap mb-4'>
        <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Blood Group:</div>
        <div className='font-bold w-full sm:w-9/12 text-base 2xl:text-lg'>{blood_group ? blood_group : "-"}</div>
        </div>
        <div className='flex flex-wrap mb-4'>
            <div className='text-semilightgray pr-3 pb-3 sm:pb-0 w-full sm:w-3/12 text-base 2xl:text-lg'>Medical Reports:</div>
            <div className='flex w-3/5'>
                {
                    UserMedicalImagesGet && UserMedicalImagesGet?.length ? 
                    <>
                   {UserMedicalImagesGet.map((medical : any, key : any) => (
                    <div className='mr-7' key={`medical-${key}`}>
                        <Zoom>
                            <img
                            alt="image"
                            src={medical?.thumbnail}
                            className='rounded-10 w-20'
                            />
                        </Zoom>
                    </div>
                    ))}
                    </>
                    :"-"                    
                }
            </div>
        </div>
        <div className='flex flex-wrap justify-start sm:justify-end'>
            <Nextlink href='/' className='flex items-center justify-center w-32 px-1.5 py-1.5 border border-darkgray rounded transition-all'><VideoIcn className='mr-1'/> Video Call</Nextlink>
        </div>
    </div>  
  )
}

export default Medical