import { GraphQLClient } from 'graphql-request'
import { API_URL } from '@/services/config'

const client = new GraphQLClient(`${API_URL}`, {
  mode: 'cors',
});

const fetchAPI = async (mutation: string): Promise<{ error: boolean, result: any }> => {
  try {
    const result = await client.request(mutation)
    return { error: false, result }
  } catch (error) {
    console.log('Error While trying to fetch data from graphQL', JSON.stringify(error))
    return {
      error: true,
      result: [],
    }
  }
}

export { fetchAPI };