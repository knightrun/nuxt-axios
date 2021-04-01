import {IAPI} from '@/typings'

/**
 * 여기서 모든 API 리스트를 상수로서 관리한다.
 * ex) { url: '', method: '' }
 */

const API: IAPI = {
  PRODUCT_LIST: {
    url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    method: 'get'
  },
  PRODUCT_ITEM: {
    url: 'http://makeup-api.herokuapp.com/api/v1/products/',
    method: 'get'
  }
}

export default API