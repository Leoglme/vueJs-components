<template>
  <div>
    <div class="buttons" v-if="showButtons">
      <b-button type="is-primary" @click="updateView('timePicker')" expanded>Show TimePicker</b-button>
      <b-button type="is-primary" @click="updateView('scrollTimer')" expanded>Show Scroll Timer</b-button>
      <b-button type="is-primary" @click="updateView('tableList')" expanded>TableList</b-button>
    </div>

    <div class="components" v-if="!showButtons">
      <b-button type="is-primary" @click="goBack()">Go back</b-button>
      <TimePicker v-if="isVisible.timePicker"/>
      <ScrollTimerPicker v-if="isVisible.scrollTimer"/>
      <TableList v-model="datas" v-if="isVisible.tableList"/>
    </div>
  </div>

</template>

<script>

import TimePicker from "~/components/TimePicker";
import ScrollTimerPicker from "~/components/ScrollTimerPicker";
import TableList from "~/components/TableList";

export default {
  name: 'HomePage',

  components: {
    TimePicker,
    ScrollTimerPicker,
    TableList
  },
  data(){
    return {
      isVisible: {
        timePicker: false,
        scrollTimer: false,
        tableList: false,
      },
      showButtons: true,
      datas: [
        {
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },
        {
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },
        {
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },
        {
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },
        {
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },{
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },
        {
          day: '2021-09-30',
          user: 'leo guillaume',
          task: 'toto',
          tags: '',
          time: '2s',
          timestamp: '19:56-19:56',
          notes: '',
        },
      ]
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
