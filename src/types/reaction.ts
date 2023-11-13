export interface Reaction {
  id: number
  user_id: number
  tweet_id: number
  type: 'like' | 'other_to_add_later'
}
