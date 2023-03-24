
import { fetchAPI } from "../fetchAPI"
import { LOGIN } from "./mutations";

const Login = async (input:{email:string, password:string, role_user:string}) => {
    const { result, error } = await fetchAPI(LOGIN(input))
    return error ? null : result.Login
  }

export {Login}