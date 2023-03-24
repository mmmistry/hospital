import { fetchAPI } from "../../api-handler/fetchAPI"
import { REGISTRATION } from "./mutations"




const registration: any = async (input?: { full_name: string, email: string, mobile_number: string, role_user: string, country_code: string, password: string, password_confirmation: string }) => {

    const { result, error } = await fetchAPI(REGISTRATION(input))
    return error ? null : result

}

export { registration }