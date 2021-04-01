import {IAPI} from '@/typings'
import {IFetchResponse} from '@/typings/response';

declare module 'vue/types/vue' {
  interface Vue {
    [key: string]: any

    fetchOn(api: IAPI['item'], data: { [key: string]: any }): IFetchResponse
  }
}