<template>
  <div class="hello">
    <div class="timepicker-ui" ref="tm">
      <input v-model="inputValue" type="text" class="timepicker-ui-input"/>
    </div>
    {{ inputValue }}
  </div>
</template>

<script>


import {TimepickerUI} from "timepicker-ui";

export default {
  name: "TimePicker",
  data() {
    return {
      inputValue: "",
    };
  },
  mounted() {
    const test = new TimepickerUI(this.$refs.tm, {enableSwitchIcon: true});
    test.create();

    this.$refs.tm.addEventListener("accept", ({detail}) => {
      this.inputValue = `${detail.hour}:${detail.minutes} ${detail.type}`;
    });
  },
}
</script>

<style scoped>

</style>
