import type { User } from '@/types/user'
import type { Reaction } from '@/types/reaction'

export interface Tweet {
  id: number
  content: string
  posted_by: number

  created_by: User
  reactions: Reaction[]
}
