"use client"
import { ROUTES } from "@/constants/Routes"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { FC, ReactElement } from "react"

const Stats: FC<{ nextStep: any, previousStep: any, totalSteps: any, step: any, handleSubmit?: any, goToStep:any,setErrorMode?:any}> = ({ nextStep, previousStep, totalSteps, step, handleSubmit , goToStep,setErrorMode }): ReactElement => {
    
    const router = useRouter()
    const handleOnNextClick = () => {
        setErrorMode?setErrorMode(true):""
        handleSubmit ? handleSubmit() : ""
    }
    const handleSkipButton = () => {
        if(step == 1) {
         goToStep("step2")
        }
        else{
           router.push(ROUTES.DOCTOR_APPOINMENTS)
        }
    }
    
    const {data:session}:any = useSession()

    return (
        <div className="mt-6 flex items-center justify-end">
            {step > 1 && step == 2 && (
                <button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base" onClick={previousStep}>
                    PREVIOUS
                </button>
            )}
            {session?.user?.id && (
                <button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base" onClick={handleSkipButton}>
                    SKIP
                </button>
            )}
            {step == 1 && step !== 2 ? (
                <button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base" onClick={handleOnNextClick}>
                    Next
                </button>
            ) : (
                <button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base" onClick={handleSubmit}>
                    SAVE & SUBMIT
                </button>
            )}

        </div>
    )
}

export default Stats