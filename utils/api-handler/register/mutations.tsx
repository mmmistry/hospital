import { gql } from 'graphql-request'

const REGISTRATION = (input?: { full_name: string, email: string, mobile_number: string, role_user: string, country_code: string, password: string, password_confirmation: string }) => gql`
mutation{
    Registration(
        full_name:${JSON.stringify(input?.full_name)},
        email: ${JSON.stringify(input?.email)},
        mobile_number:${JSON.stringify(input?.mobile_number)},
        role_user: ${JSON.stringify(input?.role_user)},
        country_code: ${JSON.stringify(input?.country_code)},
        password: ${JSON.stringify(input?.password)},
        password_confirmation: ${JSON.stringify(input?.password_confirmation)},
    )
    {   
        message
        id
        uuid
        full_name
    }
}
`

export { REGISTRATION }