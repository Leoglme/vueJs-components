import Vue from "vue"
import Toasted from 'vue-toasted';
// set your iconPack, defaults to material. material|fontawesome|custom-class
const GlobalOptions = {
  iconPack: 'fontawesome',
}

Vue.use(Toasted, GlobalOptions)

const defaultOptions = {
  position: 'bottom-right',
  duration: 2500,
  keepOnHover: true,
  action: {
    icon: 'times',
    class: 'toasted__action',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  },
}

const errorOptions = {
  icon: 'exclamation-triangle',
  position: 'bottom-right',
  duration: 2500,
  keepOnHover: true,
  type: 'error',
  singleton: true,
  fitToScreen: true,
  action: {
    icon: 'times',
    class: 'toasted__action',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  },
}

const succesOptions = {
  icon: 'check',
  position: 'bottom-right',
  duration: 2500,
  keepOnHover: true,
  type: 'success',
  singleton: true,
  fitToScreen: true,
  action: {
    icon: 'times',
    class: 'toasted__action',
    onClick: (e, toastObject) => {
      toastObject.goAway(0);
    }
  },
}

Vue.toasted.register('default', (payload) => {
  return payload.message;
}, defaultOptions)
Vue.toasted.register('error', (payload) => {
  if (!payload.message) return "Oups... Quelque chose s'est mal passé..."
  return payload.message;
}, errorOptions)
Vue.toasted.register('success', (payload) => {
  if (!payload.message) return "Tout s'est déroulé comme prévu."
  return payload.message;
}, succesOptions)
