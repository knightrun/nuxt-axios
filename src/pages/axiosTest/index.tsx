import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class AxiosTest extends Vue {
  render(h: CreateElement): VNode {
    return (
        <div id="content" class="content">
        </div>
    )
  }
}
