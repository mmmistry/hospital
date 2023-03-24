import * as yup from 'yup'; 
import { VALIDATION } from '@/constants/Validation';

export interface FormData {
    email: string
    password: string
  }

export const FormSchema = yup.object({
    email: yup.string().required(VALIDATION.EMAIL).email(VALIDATION.VALID_EMAIL),
    password: yup.string().required(VALIDATION.PASSWORD),
  }).required()