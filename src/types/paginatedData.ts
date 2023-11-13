export interface PaginatedData<T> {
  data: T[]
  current_page: number
  next_page_url: string | null
  prev_page_url: string | null
  total: string | null
}
