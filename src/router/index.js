/**
 * Created by k186 on 2017/11/14.
 */
import pdSelectItem from '@/components/selectitem.vue'
import pdSelectBox from '@/components/selectBox.vue'

const components = [
  pdSelectItem,
  pdSelectBox
]
const install = function (Vue) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}
module.exports = {
  install,
  components,
  pdSelectItem,
  pdSelectBox
}
