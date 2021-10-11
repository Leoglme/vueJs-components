<template>
  <div style="width: 100%;">
    <TableList :datas="datas" :fields="fields" :filter="false"/>
    <TableList :datas="datas" :fields="fields" :filter="true"/>
  </div>

</template>


<script>
import TableList from "~/components/TableList";
export default {
  components: {TableList},
  data(){
    return {
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
        }, {
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
      ],
      fields: [
        {label: "day", key: "day"},
        {label: "user", key: "user"},
        {label: "task", key: "task"},
        {label: "time", key: "time"},
        {label: "timestamp", key: "timestamp"},
        {label: "notes", key: "notes"},
        {label: "tags", key: "tags"}],
    }
  }
}
</script>
