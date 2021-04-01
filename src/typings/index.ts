export interface IAPI {
  [item: string]: {
    method: 'get' | 'post'
    url: string
  }
}