import {Context, Plugin} from '@nuxt/types'

const axiosInterceptor: Plugin = (context: nuxtContext) => {
  context.$axios.onRequest((config) => {
    // console.log('AXIOS REQUEST SUCCESS', config.url, config.params)
  })

  context.$axios.onResponse((response) => {
    // console.log('SUCCESS RESPONSE')
  })

  context.$axios.onError((error) => {
    const code = error.response && error.response.status || ''
    // console.log('[AXIOS ERROR !!!!!!]', error, code, error.response)
  })
}

export default axiosInterceptor