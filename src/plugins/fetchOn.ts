import {VueConstructor} from 'vue'
import {Vue} from 'nuxt-property-decorator'

// typings
import {AxiosResponse} from 'axios'
import {Plugin} from '@nuxt/types'
import {IAPI} from '@/typings'

type IOptions = { [key: string]: any }

const FetchOnPlugin: Plugin = ({app, store, req, $axios}, inject) => {

  const fetchOn = async (api: IAPI['item'], options: IOptions = {}) => {
    let res: AxiosResponse
    let mergedOptions = Object.assign({}, options)

    if (api.method === 'post') {
      let formData = new FormData()

      if (process.client) {
        Object.keys(mergedOptions).forEach(name => {
          let value = mergedOptions[name]
          if (typeof value === 'object' && !(value instanceof File)) {
            value = JSON.stringify(value)
          }
          formData.append(name, value)
        })
      }

      res = await $axios.post(api.url, process.client ? formData : mergedOptions)
    } else {
      res = await $axios.get(api.url, {params: mergedOptions})
    }

    const {data, config, headers, statusText, status} = res
    return {data, config, headers, statusText, status}
  }

  app.fetchOn = fetchOn

  Vue.use({
    install(vueApp: VueConstructor) {
      vueApp.prototype.fetchOn = app.fetchOn
    }
  })
}

export default FetchOnPlugin