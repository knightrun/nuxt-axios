import {AxiosRequestConfig} from 'axios'

export interface IFetchResponse<T = any> {
  data: T
  config: AxiosRequestConfig
  headers: Headers
  statusText: string
  status: number
}