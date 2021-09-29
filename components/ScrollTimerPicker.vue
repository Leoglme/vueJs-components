<template>
  <div>
    <p>Date = <strong>{{ currentYear }}-{{ currentMonth }}-{{ currentDay }}</strong></p>
    <div class="picker-group">
      <ScrollPicker :options="years" v-model="currentYear" />
      <ScrollPicker :options="months" v-model="currentMonth" />
      <ScrollPicker :options="days" v-model="currentDay" />
    </div>
  </div>
</template>
<script>
import "vue-scroll-picker/dist/style.css";
export default {
  name: 'ScrollTimerPicker',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: 1,
      currentDay: 1,
    };
  },
  computed: {
    years() {
      const currYear = new Date().getFullYear()
      const lastYear = 1980
      return Array.from({ length: currYear - lastYear + 1 }, (_, index) => lastYear + index).reverse()
    },
    months() {
      return Array.from({ length: 12 }, (_, index) => index + 1)
    },
    days() {
      const lastDay = new Date(this.currentYear, this.currentMonth, 0).getDate()
      return Array.from({ length: lastDay }, (_, index) => index + 1)
    },
  },
}
</script>
<style scoped>
.picker-group {
  display: flex;
}
</style>
