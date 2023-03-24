'use client'
import { useSession } from 'next-auth/react'
import { FC, ReactElement, useState } from 'react'
import StepWizard from 'react-step-wizard'
import BankDetailsStep from './BankDetailsStep/page'
import ClinicDetailsStep from './ClinicDetailsStep/page'
import GeneralDetailsStep from './GeneralDetailsStep/page'
import StepNav from './StepNav/page'
import UploadDocumentsStep from './UploadDocumentsStep/page'

interface noTransitions {
  enterRight: string,
  enterLeft: string,
  exitRight: string,
  exitLeft: string
}

const RegistrationStepWizard:FC = (): ReactElement => {
//Step Wizard
const [state, updateState] = useState({
    form: {},
 });
  let noTransitions:noTransitions = {
    enterRight: '',
    enterLeft: '',
    exitRight: '',
    exitLeft: ''
  };
  const setInstance = (SW:any) =>
      updateState({
        ...state,
        form: SW,
  });
  const {data:session} :any = useSession()
  
  return (
    <div className='registration-stepWizard'>
        <StepWizard 
            isHashEnabled
            transitions={noTransitions}
            nav={<StepNav />}
            instance={setInstance}>

            {!session?.user?.id?<GeneralDetailsStep/>:<ClinicDetailsStep/>}
            {!session?.user?.id?<UploadDocumentsStep/>:<BankDetailsStep/>}
            
         </StepWizard>
    </div>
  )
}

export default RegistrationStepWizard