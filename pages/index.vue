<template>
  <div>
    <div class="buttons" v-if="showButtons">
      <b-button type="is-primary" @click="updateView('timePicker')" expanded>Show TimePicker</b-button>
    </div>

    <div class="components" v-if="!showButtons">
      <b-button type="is-primary" @click="goBack()">Go back</b-button>
      <TimePicker v-if="isVisible.timePicker"/>
    </div>
  </div>

</template>

<script>

import TimePicker from "~/components/TimePicker";

export default {
  name: 'HomePage',

  components: {
    TimePicker
  },
  data(){
    return {
      isVisible: {
        timePicker: false
      },
      showButtons: true
    }
  },
  methods: {
    updateView(component){
      this.isVisible[component] = true
      this.showButtons = false;
    },
    goBack(){
      this.showButtons = true;
    },
  }
}
</script>
