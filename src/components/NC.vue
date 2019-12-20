<template>
  <div>
    <div
      class="l-captcha"
      :data-site-key="dataKey"
      data-width="100%"
      data-callback="getResponse"
    ></div>
  </div>
</template>

<script>
import { getSiteKey } from '@/api/user'
export default {
  data() {
    return {
      dataKey: ''
    }
  },
  methods: {
    dynamicLoadJs: function(url, callback) {
      var head = document.getElementsByTagName('head')[0],
        script = document.createElement('script')

      script.type = 'text/javascript'
      script.src = url
      if (typeof callback === 'function') {
        script.onload = script.onreadystatechange = function() {
          if (
            !this.readyState ||
            this.readyState === 'loaded' ||
            this.readyState === 'complete'
          ) {
            callback()
            script.onload = script.onreadystatechange = null
          }
        }
      }
      head.appendChild(script)
    },
    _getNCKeyFun() {
      const that = this

      getSiteKey().then(response => {
        if (response.success) {
          this.dataKey = response.data
          this.dynamicLoadJs('//captcha.luosimao.com/static/js/api.js')
          window.getResponse = (resp) => {
            var els = document.getElementsByName('luotest_response')

            if (els.length === 1 && els[0].value === resp) {
              that.$emit('success', resp)
            } else {
              // eslint-disable-next-line
              LUOCAPTCHA && LUOCAPTCHA.reset();
            }
          }
        }
      }).catch(() => {
      })
    }
  },
  created() {
    this._getNCKeyFun()
  },
  mounted() {}
}
</script>
