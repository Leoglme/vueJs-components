<template>
  <div style="display: flex; flex-direction: column; align-items: center;">
    <h2 style="color: #2c3e50; margin-bottom: 20px;">Bienvenue sur Nuxt Js - Dibodev Components</h2>

    <div>
      <img style="width: 125px" src="@/assets/images/logo.png" alt="logo dibodev">
      <img style="width: 125px" src="/favicon.ico" alt="logo nuxt">
    </div>
  </div>
</template>

<script>

import TimePicker from "~/components/TimePicker";
import ScrollTimerPicker from "~/components/ScrollTimerPicker";
import TableList from "~/components/TableList";
import BootstrapButton from "~/components/BootstrapButton";
import Dropdown from "~/components/Dropdown";
import AddButton from "~/components/AddButton";
import SearchModal from "~/components/SearchModal";
import Notification from "~/components/Notification";
import DrawerNav from "~/components/DrawerNav";


export default {
  name: 'HomePage',

  components: {
    TimePicker,
    ScrollTimerPicker,
    TableList,
    BootstrapButton,
    Dropdown,
    AddButton,
    Notification,
    DrawerNav,
    SearchModal
  },
  data() {
    return {
      isLoading: false,
      openOne: false,
      valueOne: '',
      openTwo: true,
      valueTwo: '',
      isVisible: {
        timePicker: false,
        scrollTimer: false,
        tableList: false,
        bootstrapButton: false,
        boostrapDropdown: false,
        addButton: false,
        bootstrapModal: false,
        Notification: false,
        DrawerNav: false,
        searchModal: false,
      },
      items: ['Active Tasks 1', 'Active Tasks 2', 'Active Tasks 3'],
      currentItems: 'Active Tasks 1',
      showButtons: true,
      openSidebar: false,
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
      ]
    }
  },
  methods: {
    updateView(component) {
      console.log('component', component);
      this.isVisible[component] = true
      this.showButtons = false;
    },
    dropdownAction(name) {
      alert(name)
      return null;
    },
    goBack() {
      this.showButtons = true;
      for (const res in this.isVisible) {
        this.isVisible[res] = false
      }
    },
    closeModal(open) {
      if (open === 'openOne') {
        this.openOne = false;
      } else if (open === 'openTwo') {
        this.openTwo = false;
      }
    },
    addProject(val) {
      console.log(val);
    },
    handleOpen(open) {
      if (open === 'openOne') {
        this.openOne = !this.openOne
        this.$refs.inputOne.$refs.input.focus()
      } else if (open === 'openTwo') {
        this.$refs.inputTwo.$refs.input.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.buttons {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  & button {
    margin: 20px 0;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
