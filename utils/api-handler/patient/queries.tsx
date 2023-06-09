import { gql } from "graphql-request";

const GET_USER_MODULE_STATIC_LISTS = () => gql`
{
    getUserModuleStaticList{
        BloodGroupList{
            id
            blood_group_name
        }
        MartialStatusList{
            id
            martial_status_name
        }
        SmokingList{
            id
            smoking_name
        }
        AlcoholList{
            id
            alcohol_name
        }
        ActivityList{
            id
            activity_name
        }
        FoodPreferencesList{
            id
            food_preferences_name
        }
        OccupationList{
            id
            occupation_name
        }
        Allergies{
            id
            allergies_name
        }
        CurrentSymptoms{
            id
            symptom_name
        }
        PastSymptoms{
            id
            symptom_name
        }
        Chronicillness{
             id
             chronicillnesses_name
        }
        injuries{
            id
            injuries_name
        }
        Surgeries{
            id
            surgeries_name
        }
    }
}
`
const EDIT_USER_PROFILE = (input?: any) => gql`
mutation{
     EditUserProfiles(
        user_id: ${input?.user_id},
        full_name:${JSON.stringify(input.full_name)},
        email:${JSON.stringify(input.email)},
        gender:${JSON.stringify(input.gender)},
        dob:${JSON.stringify(input.DOB)},
        blood_group:${JSON.stringify(input.blood_group)},
        height:${JSON.stringify(input.height)},
        weight:${JSON.stringify(input.weight)},
        marital_status:${JSON.stringify(input.marital_status)},
        mobile_number: ${JSON.stringify(input.mobile_number)},
        address:${JSON.stringify(input.address)},
        longitude:"73.34",
        latitude:"74.25"
    ){
    id
    full_name
    dob
    email
    gender 
    
  } 
}
`
const ADD_LIFESTYLE_DETAILS = (input?: any) => gql`
mutation{
    AddLifeStyleDetails(
        user_id: ${input.user_id},
        smoking: ${input.smoking ? JSON.stringify(input?.smoking) : JSON.stringify("")},
        alcohol: ${input.alcohol ? JSON.stringify(input?.alcohol) : JSON.stringify("")}
        activity_level: ${input.activity_level ? JSON.stringify(input?.activity_level) : JSON.stringify("")}
        food_preferences: ${input.food_preferences ? JSON.stringify(input?.food_preferences) : JSON.stringify("")}
        occupation: ${input.occupation ? JSON.stringify(input?.occupation) : JSON.stringify("")}
        ){
            id
    }
}
`

const BOOK_USER_TODAY_APPOINTMENT = (input?: any) => gql`
mutation{
    BookUserTodayAppointment(user_id:${JSON.stringify(input?.user_id)}){
    slot_time	
    date
    doctor_id
    symptom_name
    languageName
    consultation_mode_name
    patient_id 

    GetDoctorDetails{
       id
       full_name 
    }
    GetHospitalDetails{
        clinic_name
        
        clinic_location
        clinic_longitude
        clinic_latitude
        consultation_fees
    }
    GetUserSelectAllergies{
        allergies_name
    }
    GetUserSelectCurrentSymptoms{
        current_symptoms_name
    }
    GetUserSelectPastSymptoms{
        past_symptoms_name
    }
    GetUserSelectInjuries{
        injuries_name
    }
    GetUserSelectSurgeries{
        surgeries_name
    }
    GetMedicalReport{
        id
        medical_id
        GetMedicalReportImage{
            thumbnail
        }
    }
}
}
`

const BOOK_USER_PAST_APPOINTMENT = (input?: any) => gql`
mutation{
    # BookUserPastAppointment(user_id:${JSON.stringify(input?.user_id)} ){
    BookUserPastAppointment(user_id:"599"){
    slot_time	
    date
    doctor_id
    languageName
    patient_id 
    GetDoctorDetails{
       id
       full_name 
    }
    GetSymptomDetails{
        id
        symptom_name
    }
    GetHospitalDetails{
        clinic_name
        clinic_location
        clinic_longitude
        clinic_latitude
        consultation_fees
    }
    GetAppointmentConsultation{
        consultation_mode_name
    }
    GetUserSelectAllergies{
        allergies_name
    }
    GetUserSelectCurrentSymptoms{
        current_symptoms_name
    }
    GetUserSelectPastSymptoms{
        past_symptoms_name
    }
    GetUserSelectInjuries{
        injuries_name
    }
    GetUserSelectSurgeries{
        surgeries_name
    }
    GetMedicalReport{
        id
        medical_id
        GetMedicalReportImage{
            thumbnail
        }
    }
}
}
`

const BOOK_USER_UPCOMING_APPOINTMENT = (input?: any) => gql`
mutation{
    BookUserUpcomingAppointment(user_id:${JSON.stringify(input?.user_id)}){
  slot_time	
    date
    doctor_id
    languageName
    patient_id 
    GetDoctorDetails{
       id
       full_name 
    }
    GetSymptomDetails{
        id
        symptom_name
    }
    GetHospitalDetails{
        clinic_name
        
        clinic_location
        clinic_longitude
        clinic_latitude
        consultation_fees
    }
    GetAppointmentConsultation{
        consultation_mode_name
    }
    GetUserSelectAllergies{
        allergies_name
    }
    GetUserSelectCurrentSymptoms{
        current_symptoms_name
    }
    GetUserSelectPastSymptoms{
        past_symptoms_name
    }
    GetUserSelectInjuries{
        injuries_name
    }
    GetUserSelectSurgeries{
        surgeries_name
    }
    GetMedicalReport{
        id
        medical_id
        GetMedicalReportImage{
            thumbnail
        }
    }
}
}
`

const GET_BOOK_APPOINTMENT_DETAIL = (input?: any) => gql`
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
    GetDoctorDetails{
        full_name
        thumbnail
        GetSpecialities{
        specialist_name
        }
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

export { GET_USER_MODULE_STATIC_LISTS, EDIT_USER_PROFILE, ADD_LIFESTYLE_DETAILS, BOOK_USER_TODAY_APPOINTMENT, BOOK_USER_PAST_APPOINTMENT, BOOK_USER_UPCOMING_APPOINTMENT, GET_BOOK_APPOINTMENT_DETAIL }