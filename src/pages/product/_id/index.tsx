import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'
import API from '@/fetch'

import '@/assets/styles/product.scss'

@Component
export default class ProductDetail extends Vue {
  private item: any = {}

  async asyncData({app, params}: nuxtContext) {
    const apiData = {...API.PRODUCT_ITEM, url:API.PRODUCT_ITEM.url + `${params.id}.json`}
    let res = await app.fetchOn(apiData, {})

    return {
      item: res.data
    }
  }

  render(h: CreateElement): VNode {
    return (
        <div class="product_detail">
          <h1>상품 상세</h1>
          <div class="image_wrap">
            <img src={this.item.image_link} alt={this.item.name}/>
          </div>
          <div class="txt_wrap">
            <span>{this.item.name}</span>
          </div>
          <nuxt-link to={`/product/list`} class="btn-back">뒤로가기</nuxt-link>
        </div>
    )
  }
}
