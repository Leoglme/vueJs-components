<template>
  <div style="display:flex; flex-direction: column; justify-content: center">
    <div class="mt-3">
      <button class="btn btn-primary"
              @click.prevent="handleOpen('openOne')"
              style="margin-left: 10px;">
        Ouvrir 1
      </button>
      valueOne: {{ valueOne }}
    </div>

    <div class="mt-3">
      <button class="btn btn-primary"
              @click.prevent="handleOpen('openTwo')"
              style="margin-left: 10px;">
        Ouvrir 2
      </button>
      valueTwo: {{ valueTwo }}
    </div>

    <AddButton
      ref="inputOne"
      v-model="valueOne"
      :open="openOne"
      @onClose="closeModal('openOne')"
      @onAdd="addProject"
      textButton="Ajouter un projet"
      placeholder="Enter the name for a new project or task..."
    />

    <AddButton
      ref="inputTwo"
      v-model="valueTwo"
      :open="openTwo"
      @onClose="closeModal('openTwo')"
      @onAdd="addProject"
      textButton="Ajouter un projet 2"
      placeholder="Enter the name for a new project or task..."
    />
  </div>
</template>


<script>
import AddButton from "~/components/AddButton";
export default {
  components: {AddButton},
  data(){
    return {
      openOne: false,
      valueOne: '',
      openTwo: true,
      valueTwo: '',
    }
  },
  methods: {
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
