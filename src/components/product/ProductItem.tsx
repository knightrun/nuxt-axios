import {CreateElement, VNode} from 'vue'
import {Component, Vue, Prop} from 'nuxt-property-decorator'

import '@/assets/styles/product.scss'

@Component
export default class ProductItem extends Vue {
  @Prop({type: Object, required: true})
  readonly item: any

  render(h: CreateElement): VNode {
    return (
        <div class="product_item">
          <nuxt-link to={`/product/${this.item.id}`}>
            <div class="image_wrap">
              <img src={this.item.image_link} alt={this.item.name}/>
            </div>
            <div class="txt_wrap">
              <span>{this.item.name}</span>
            </div>
          </nuxt-link>
        </div>
    )
  }
}
