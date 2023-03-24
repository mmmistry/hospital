import { gql } from 'graphql-request'

const GET_SPECIALITIES_LIST = (input?: { search: string }) => gql`
mutation{
    SearchSpecialitiesList(
        search:${JSON.stringify(input?.search)}
    ){
        id
        specialitie_name    
       
  }
}
`
const GET_SYMPTOMS_LIST = (input?: { search: string }) => gql`
mutation{
    SearchSymptomsList(
        search:${JSON.stringify(input?.search)}
    ){
        id
        symptom_name    
       
  }
}
`
const GET_EDUCATION_LIST = (input?: { search: string }) => gql`
mutation{
    SearchEducationList(
        search:${JSON.stringify(input?.search)}
    ){
        id
        education_name    
       
  }
}
`
const GET_CLINIC_LIST = () => gql`
mutation{
    HospitalList{
       id
       clinic_name
       clinic_location
       clinic_longitude
       clinic_latitude
       clinic_image

    }
}
`
const GET_CONSULTATION_MODE = () => gql`
{
    GetConsultationMode{
        id
        consultation_mode_name
    }
}
`

const ADD_UPDATE_BANK_DETAILS = (input?: { user_id: string, bank_name: string, account_holder_name: string, account_number: string, ifsc_code: string }) => gql`
mutation{
    UpdateBankDetails(
        user_id: ${JSON.stringify(input?.user_id)},
        bank_name:${JSON.stringify(input?.bank_name)},
        account_holder_name:${JSON.stringify(input?.account_holder_name)},
        account_number:${JSON.stringify(input?.account_number)},
        ifsc_code:${JSON.stringify(input?.ifsc_code)}
        )
    {
      user_id
      bank_name
      account_holder_name
      account_number
      ifsc_code 
                 
    }
   }
`

const GET_PAST_APPOINTMENT_LIST = (input?: { doctor_id: number }) => gql `
mutation{
    BookPastAppointment(
        doctor_id:${input?.doctor_id}
    ){
        slot_time	
        date
        status
        GetUserDetails{
            id
            full_name
        }   
        GetSymptomDetails{
            symptom_name
        }
        GetAppointmentConsultation{
            consultation_mode_name
        }
  }
}
`
const GET_UPCOMING_APPOINTMENT_LIST = (input?: { doctor_id: number }) => gql `
mutation{
    BookupcomingAppointment(
        doctor_id:${input?.doctor_id}
    ){
        slot_time	
        date
        status
        GetUserDetails{
            id
            full_name
        }   
        GetSymptomDetails{
            symptom_name
        }
        GetAppointmentConsultation{
            consultation_mode_name
        }
  }
}
`
const GET_TODAY_APPOINTMENT_LIST = (input?: { doctor_id: number }) => gql `
mutation{
    BookTodayAppointment(
        doctor_id:${input?.doctor_id}
    ){
        slot_time	
        date
        status
        GetUserDetails{
            id
            full_name
        }   
        GetSymptomDetails{
            symptom_name
        }
        GetAppointmentConsultation{
            consultation_mode_name
        }
  }
}
`

const GET_BOOK_APPOINTMENT_DETAIL = (input?: { book_appointment_id: number }) => gql `
mutation{
    BookAppointmentDetails(
        book_appointment_id: ${input?.book_appointment_id}
    ){
    slot_time	
    date
    languageName
    status
    appointmentForDescription
    GetSymptomDetails{
        id
        symptom_name
    } 
    GetUserDetails{
        full_name
        gender
        height
        age
        weight
        marital_status
        thumbnail
        blood_group
    }
    GetHospitalDetails{
        clinic_location
        consultation_fees
    }
    GetAppointmentConsultation{
        consultation_mode_name
    }
    GetMedicalRecord{
        id
        recordFor
        UserMedicalImagesGet{
            id
            thumbnail
        }
    }
    GetUserSelectAllergies{
        id
         allergies_name
    }
    GetUserSelectCurrentSymptoms{
        id
        current_symptoms_name
    }
    GetUserSelectPastSymptoms{
        id
        past_symptoms_name
    }
    GetUserSelectInjuries{
        injuries_name
    }
    GetUserSelectSurgeries{
        surgeries_name
    }
}
}
`
const GET_FACILITY_LIST = (input?: { search: string }) => gql`
mutation{
    SearchHospitalFacilitiesList(search:${JSON.stringify(input?.search)}){
            id
            facilities
  }
}
`

export { GET_SPECIALITIES_LIST, GET_SYMPTOMS_LIST, GET_EDUCATION_LIST , GET_PAST_APPOINTMENT_LIST , GET_UPCOMING_APPOINTMENT_LIST , GET_TODAY_APPOINTMENT_LIST, ADD_UPDATE_BANK_DETAILS, GET_CLINIC_LIST, GET_CONSULTATION_MODE , GET_BOOK_APPOINTMENT_DETAIL ,GET_FACILITY_LIST}
