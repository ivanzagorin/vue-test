import M from 'materialize-css'
export default {
  install(Vue, options) {
    Vue.prototype.$message = function(html) {
      M.toast({html})
    }
    console.log(options);

    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}