import { gql } from 'graphql-request'

const LOGIN =(input:{email:string, password:string, role_user:string})=> gql` 
    mutation {
        Login(
            email:${JSON.stringify(input?.email)},
            password:${JSON.stringify(input?.password)}, 
            role_user:${JSON.stringify(input?.role_user)}
            )
            {   
                remember_token
                message
                id
                uuid
                roles
                full_name
                isRegisterdCompleted
                isVerifiedDoctor,
                clinic_details_add_status,
                bank_details_add_status
                
                

            }
    }
`

export { LOGIN }
