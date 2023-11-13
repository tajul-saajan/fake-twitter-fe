import axios, { AxiosError, AxiosResponse } from 'axios'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const baseUrl = process.env.BASE_URL

const generateUrl = (endpoint: string) => {
  return `${baseUrl}/${endpoint}`
}
export default () => ({
  get: async function <Type>(
    endPoint: string,
    query: {} = {},
    auth: boolean = true,
    headers: {} = {}
  ) {
    return await handleRequest<Type>('GET', generateUrl(endPoint), { query }, auth, headers)
  },

  post: async function <Type>(endPoint: string, body: {}, auth: boolean = true, headers: {} = {}) {
    return await handleRequest<Type>('POST', generateUrl(endPoint), { body }, auth, headers)
  }
})

async function handleRequest<Type>(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  endPoint: string,
  params: {},
  auth: boolean,
  headers: {} = {}
) {
  // headers['Content-Type'] = 'application/json'
  headers = { ...headers, 'Content-Type': 'application/json' }

  if (auth) {
    if (!useAuthStore().isAuthenticated) {
      await useRouter().push('/login')
    }
    headers = { ...headers, Authorization: `Bearer ${useAuthStore().token}`, params: 'include' }
  }

  let response: AxiosResponse<Type>,
    error: AxiosError | null = null

  try {
    response = await axios.request({
      url: endPoint,
      method,
      headers,
      ...params
    })
  } catch (e) {
    error = e as unknown as AxiosError
  }
  return { response, error }
}
