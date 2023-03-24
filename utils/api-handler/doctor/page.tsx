import { fetchAPI } from "../fetchAPI"
import { ADD_UPDATE_BANK_DETAILS, GET_BOOK_APPOINTMENT_DETAIL, GET_CLINIC_LIST, GET_CONSULTATION_MODE, GET_EDUCATION_LIST, GET_FACILITY_LIST, GET_PAST_APPOINTMENT_LIST, GET_SPECIALITIES_LIST, GET_SYMPTOMS_LIST, GET_TODAY_APPOINTMENT_LIST, GET_UPCOMING_APPOINTMENT_LIST } from "./queries"


const getAllSpecialitites: any = async (input?: { search: string }) => {

    const { result, error } = await fetchAPI(GET_SPECIALITIES_LIST(input))
    return error ? null : result

}

const getAllSymptoms: any = async (input?: { search: string }) => {

    const { result, error } = await fetchAPI(GET_SYMPTOMS_LIST(input))
    return error ? null : result

}

const getAllEducatioList: any = async (input?: { search: string }) => {

    const { result, error } = await fetchAPI(GET_EDUCATION_LIST(input))
    return error ? null : result

}

const getAllClinicList: any = async () => {

    const { result, error } = await fetchAPI(GET_CLINIC_LIST())
    return error ? null : result

}

const getConsultationMode: any = async () => {

    const { result, error } = await fetchAPI(GET_CONSULTATION_MODE())
    return error ? null : result

}

const addUpdateBankDetails: any = async (input?: { user_id: string, bank_name: string, account_holder_name: string, account_number: string, ifsc_code: string }) => {

    const { result, error } = await fetchAPI(ADD_UPDATE_BANK_DETAILS(input))
    return error ? null : result

}


const getPastAppoinmentList: any = async (input?: { doctor_id: number }) => {

    const { result, error } = await fetchAPI(GET_PAST_APPOINTMENT_LIST(input))
    return error ? null : result
}

const getUpcomingAppoinmentList: any = async (input?: { doctor_id: number }) => {

    const { result, error } = await fetchAPI(GET_UPCOMING_APPOINTMENT_LIST(input))
    return error ? null : result
}

const getTodayAppoinmentList: any = async (input?: { doctor_id: number }) => {

    const { result, error } = await fetchAPI(GET_TODAY_APPOINTMENT_LIST(input))
    return error ? null : result
}

const getBookAppoinmentDetail: any = async (input?: { book_appointment_id: number }) => {

    const { result, error } = await fetchAPI(GET_BOOK_APPOINTMENT_DETAIL(input))
    return error ? null : result
}

const getAllFacilityList: any = async (input?: { search: string }) => {

    const { result, error } = await fetchAPI(GET_FACILITY_LIST(input))
    return error ? null : result

}

export { getAllSpecialitites, getAllSymptoms, getAllEducatioList, getPastAppoinmentList, getUpcomingAppoinmentList, getTodayAppoinmentList, addUpdateBankDetails, getConsultationMode, getAllClinicList, getBookAppoinmentDetail, getAllFacilityList }
