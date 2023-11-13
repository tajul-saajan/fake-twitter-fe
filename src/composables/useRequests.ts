import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

// const baseUrl = import.meta.env.BASE_URL
const baseUrl = 'http://localhost:8000/api'

const generateUrl = (endpoint: string) => {
  return `${baseUrl}/${endpoint}`
}
export default () => ({
  get: async function <Type>(endPoint: string, query: {} = {}, auth = true, headers: {} = {}) {
    return await handleRequest<Type>('GET', generateUrl(endPoint), auth, {}, query, headers)
  },

  post: async function <Type>(endPoint: string, body: {}, auth = true, headers: {} = {}) {
    return await handleRequest<Type>('POST', generateUrl(endPoint), auth, body, {}, headers)
  }
})

async function handleRequest<Type>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  endPoint: string,
  auth: boolean,
  data: {},
  params: {},
  headers: {} = {}
) {
  // headers['Content-Type'] = 'application/json'
  headers = { ...headers, 'Content-Type': 'application/json' }

  if (auth) {
    if (!useAuthStore().isAuthenticated) {
      await useRouter().push('/login')
    }

    headers = {
      ...headers,
      Authorization: `Bearer ${useAuthStore().tokenData?.access_token}`,
      params: 'include'
    }
  }

  let response,
    error: any | null = null

  try {
    response = await axios.request<Type>({
      url: endPoint,
      method,
      headers,
      params,
      data
    })
  } catch (e) {
    error = e
  }
  return { response, error }
}
