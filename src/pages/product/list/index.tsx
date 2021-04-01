import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'
import API from '@/fetch'

import ProductItem from '@/components/product/ProductItem'
import '@/assets/styles/product.scss'

@Component
export default class ProductList extends Vue {
  private items: any[] = []

  async asyncData({app}: nuxtContext) {
    let res = await app.fetchOn(API.PRODUCT_LIST, {})

    return {
      items: res.data
    }
  }

  render(h: CreateElement): VNode {
    return (
        <div class="product_list">
          <h1>상품 리스트</h1>
          {
            this.items.length && this.items.slice(0, 12).map((item, index) => (
              <ProductItem item={item} key={index} />
            ))
          }
        </div>
    )
  }
}
