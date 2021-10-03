<template>
  <div>
    <div class="buttons" v-if="showButtons">
      <b-button @click="updateView('timePicker')" expanded>Show TimePicker</b-button>
      <b-button @click="updateView('scrollTimer')" expanded>Show Scroll Timer</b-button>
      <b-button @click="updateView('tableList')" expanded>TableList</b-button>
      <b-button @click="updateView('bootstrapButton')" expanded>Custom Boostrap button</b-button>
      <b-button @click="updateView('boostrapDropdown')" expanded>Custom Boostrap dropdown</b-button>
      <b-button @click="updateView('addButton')" expanded>Add Item Button</b-button>
    </div>

    <div class="components" v-if="!showButtons">
      <b-button variant="primary" @click="goBack()">Go back</b-button>

      <TimePicker v-if="isVisible.timePicker"/>

      <ScrollTimerPicker v-if="isVisible.scrollTimer"/>

      <TableList v-model="datas" v-if="isVisible.tableList"/>

      <BootstrapButton v-if="isVisible.bootstrapButton"/>

      <Dropdown v-if="isVisible.boostrapDropdown"
                :items="items"
                color="outline-light"
                v-model="currentItems">
      </Dropdown>


      <div style="display:flex; flex-direction: column; justify-content: center">
        <div class="mt-3">
          <button class="btn btn-primary"
                  @click.prevent="handleOpen('openOne')"
                  style="margin-left: 10px;">
            Ouvrir 1
          </button>
          valueOne: {{valueOne}}
        </div>

        <div class="mt-3">
          <button class="btn btn-primary"
                  @click.prevent="handleOpen('openTwo')"
                  style="margin-left: 10px;">
            Ouvrir 2
          </button>
          valueTwo: {{valueTwo}}
        </div>

        <AddButton
          ref="inputOne"
          v-if="isVisible.addButton"
          v-model="valueOne"
          :open="openOne"
          @onClose="closeModal('openOne')"
          @onAdd="addProject"
          textButton="Ajouter un projet"
          placeholder="Enter the name for a new project or task..."
        />

        <AddButton
          ref="inputTwo"
          v-if="isVisible.addButton"
          v-model="valueTwo"
          :open="openTwo"
          @onClose="closeModal('openTwo')"
          @onAdd="addProject"
          textButton="Ajouter un projet 2"
          placeholder="Enter the name for a new project or task..."
        />
      </div>


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


export default {
  name: 'HomePage',

  components: {
    TimePicker,
    ScrollTimerPicker,
    TableList,
    BootstrapButton,
    Dropdown,
    AddButton
  },
  data() {
    return {
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
      },
      items: ['Active Tasks 1', 'Active Tasks 2', 'Active Tasks 3' ],
      currentItems: 'Active Tasks 1',
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
    dropdownAction(name){
      alert(name)
      return null;
    },
    goBack() {
      this.showButtons = true;
      for (const res in this.isVisible) {
        this.isVisible[res] = false
      }
    },
    closeModal(open){
      if (open === 'openOne'){
        this.openOne = false;
      }else if (open === 'openTwo'){
        this.openTwo = false;
      }
    },
    addProject(val){
      console.log(val);
    },
    handleOpen(open){
      if (open === 'openOne'){
        this.openOne = !this.openOne
        this.$refs.inputOne.$refs.input.focus()
      }else if (open === 'openTwo'){
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
