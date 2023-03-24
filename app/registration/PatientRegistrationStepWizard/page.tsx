'use client'
import { getUserModuleStaticList } from '@/utils/api-handler/patient/page'
import { FC, ReactElement, useEffect, useState } from 'react'
import StepWizard from 'react-step-wizard'
import LifestyleInformationStep from './LifestyleInformationStep/page'
import MedicalInformationStep from './MedicalInformationStep/page'
import PersonalDetailsStep from './PersonalDetailsStep/page'
import StepNav from './StepNav/page'

const PatientRegistrationStepWizard: FC = (): ReactElement => {
  //Step Wizard
  const [userModuleStaticList, setUserModuleStaticList] = useState<any>([])
  const [state, updateState] = useState({
    form: {},
  });
  let noTransitions = {
    enterRight: '',
    enterLeft: '',
    exitRight: '',
    exitLeft: ''
  };
  const setInstance = (SW: any) =>
    updateState({
      ...state,
      form: SW,
    });

  useEffect(() => {
    getUserModuleStaticList().then((responce: any) => { setUserModuleStaticList(responce) })
  }, [])


  return (
    <div className='registration-stepWizard'>
      <StepWizard
        isHashEnabled={false}
        transitions={noTransitions}
        nav={<StepNav />}
        instance={setInstance}>
        <PersonalDetailsStep userModuleStaticList={userModuleStaticList} />
        <MedicalInformationStep userModuleStaticList={userModuleStaticList} />
        <LifestyleInformationStep userModuleStaticList={userModuleStaticList} />
      </StepWizard>
    </div>
  )
}

export default PatientRegistrationStepWizard