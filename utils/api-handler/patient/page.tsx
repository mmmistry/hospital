import { fetchAPI } from "../fetchAPI"
import { ADD_LIFESTYLE_DETAILS, BOOK_USER_PAST_APPOINTMENT, BOOK_USER_TODAY_APPOINTMENT, BOOK_USER_UPCOMING_APPOINTMENT, EDIT_USER_PROFILE, GET_BOOK_APPOINTMENT_DETAIL, GET_USER_MODULE_STATIC_LISTS } from "./queries"

const getUserModuleStaticList: any = async () => {
  const { result, error } = await fetchAPI(GET_USER_MODULE_STATIC_LISTS())
  return error ? null : result.getUserModuleStaticList[0]
}

const EditUserProfiles: any = async (input: any) => {
  const { result, error } = await fetchAPI(EDIT_USER_PROFILE(input))
  return error ? null : result
}

const AddLifeStyleDetails: any = async (input?: any) => {
  const { result, error } = await fetchAPI(ADD_LIFESTYLE_DETAILS(input));
  return error ? null : result.AddLifeStyleDetails
}

const bookUserTodayAppointment = async (input?: any) => {
  const { result, error } = await fetchAPI(BOOK_USER_TODAY_APPOINTMENT(input));
  return error ? null : result
}

const bookUserPastAppointment = async (input?: any) => {
  const { result, error } = await fetchAPI(BOOK_USER_PAST_APPOINTMENT(input));
  return error ? null : result
}
const bookUserUpcomingAppointment = async (input?: any) => {
  const { result, error } = await fetchAPI(BOOK_USER_UPCOMING_APPOINTMENT(input));
  return error ? null : result
}

const getBookAppoinmentDetail = async (input?: any) => {
  const { result, error } = await fetchAPI(GET_BOOK_APPOINTMENT_DETAIL(input));
  return error ? null : result
}

export { getUserModuleStaticList, EditUserProfiles, AddLifeStyleDetails, bookUserTodayAppointment, bookUserPastAppointment, bookUserUpcomingAppointment, getBookAppoinmentDetail }