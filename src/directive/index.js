import directive from './directives'

const importDirective = Vue => {
  Vue.directive('img-show', directive.imgshow)
}

export default importDirective
