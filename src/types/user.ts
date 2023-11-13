import type { Tweet } from '@/types/tweet'

export interface User {
  id: number
  user_name: string
  email: string

  tweets?: Tweet[]
  following?: User[]
  followers?: User[]
}
