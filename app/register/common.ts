import * as yup from 'yup'
import { VALIDATION } from '@/constants/Validation'


export interface FormData {
    full_name: String,
    email: String,
    mobile_number: String,
    role_user: String,
    country_code?: String,
    password: String,
    password_confirmation: String
}

export const FormSchema = yup
    .object({
        email: yup
            .string()
            .required(VALIDATION.EMAIL)
            .email(VALIDATION.VALID_EMAIL)
            .max(255, ({ max }) => `Email must be at most ${max} characters`),
        full_name: yup
            .string()
            .required(VALIDATION.FULL_NAME)
            .min(4, 'Entered value should be greater then 4'),
        mobile_number: yup
            .string()
            .required(VALIDATION.MOBILE_NUMBER)
            .min(10, 'Mobile number must be at least 10 characters')
            .max(11, 'Mobile number may not be greater than 11 characters')
            .matches(/^[0-9]+$/, "Must be only digits"),
        password: yup
            .string()
            .required(VALIDATION.PASSWORD),
        password_confirmation: yup
            .string()
            .required(VALIDATION.CONFIRM_PASSWORD)
            .oneOf([yup.ref('password')], VALIDATION.PASSWORD_DOES_NOT_MATCH),
    })
    .required()
