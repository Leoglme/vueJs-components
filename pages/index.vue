<template>
  <div>
    <div class="buttons" v-if="showButtons">
      <b-button type="is-primary" @click="updateView('timePicker')" expanded>Show TimePicker</b-button>
      <b-button type="is-primary" @click="updateView('scrollTimer')" expanded>Show Scroll Timer</b-button>
    </div>

    <div class="components" v-if="!showButtons">
      <b-button type="is-primary" @click="goBack()">Go back</b-button>
      <TimePicker v-if="isVisible.timePicker"/>
      <ScrollTimerPicker v-if="isVisible.scrollTimer"/>
      <timer v-if="isVisible.scrollTimer"/>
    </div>
  </div>

</template>

<script>

import TimePicker from "~/components/TimePicker";
import ScrollTimerPicker from "~/components/ScrollTimerPicker";

export default {
  name: 'HomePage',

  components: {
    TimePicker,
    ScrollTimerPicker,
  },
  data(){
    return {
      isVisible: {
        timePicker: false,
        scrollTimer: false,
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
