import { FC, ReactElement } from "react"

const Stats: FC<{ nextStep: any, previousStep: any, totalSteps: any, step: any, handleSubmit?: any, }> = ({ nextStep, previousStep, totalSteps, step, handleSubmit }): ReactElement => {

    const handleOnNextClick = () => {
        handleSubmit ? handleSubmit() : ""
    }
    return (
        <div className="mt-6 flex items-center justify-end">
            {step > 1 && (
                <button className="inline-block border-outlineBtntext-primary font-bold text-sm border border-primary uppercase rounded px-4 py-3 mr-4 hover:transition-all hover:border-secondary hover:text-secondary lg:text-base" onClick={previousStep}>
                    PREVIOUS
                </button>
            )}
            {step < totalSteps ? (
                <button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base" onClick={handleOnNextClick}>
                    Next
                </button>
            ) : (
                <button className="inline-block primary-buttons text-white font-bold text-sm bg-primary border border-primary uppercase rounded px-5 py-3 mr-4 hover:transition-all hover:border-secondary hover:bg-secondary lg:text-base" onClick={nextStep}>
                    SAVE & SUBMIT
                </button>
            )}
        </div>
    )
}

export default Stats