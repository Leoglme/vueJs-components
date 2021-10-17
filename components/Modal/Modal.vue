<template>
  <b-modal @hide="onHide" @ok="handleOk" v-model="open" centered>
    <template #modal-title>
      {{ title }}
    </template>
    <template #modal-header-close>
      <i class="fas fa-times"/>
    </template>
     <p v-if="description.length">{{description}}</p>
    <div class="grid-form" v-if="action === 'prompt'">
      <input v-for="n in data" type="text" :placeholder="n.placeholder" v-model="n.value">
    </div>

    <template #modal-footer="{ ok, cancel, hide }">
      <button class="btn btn-link grey" @click="cancel()" v-if="action !== 'alert'" v-wave>Annuler</button>
      <button class="btn btn-link" :class="{'danger': variant === 'danger'}" @click="ok()" v-wave>Ok</button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "Modal",
  props: {
    value: {type: Boolean, default: false},
    action: {type: String, default: 'alert'},
    variant: {type: String, default: 'primary'},
    hideClickBackdrop: {type: Boolean, default: true},
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    data: {type: Array, default: () => []},
  },
  computed: {
    open: {
      get: function () {
        return this.value
      },
      set: function (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    onHide(evt) {
      if (evt.trigger === "backdrop" && this.hideClickBackdrop) {
        evt.preventDefault();
        evt.target.classList.add("prevent-modal");
        setTimeout(() => {
          evt.target.classList.remove("prevent-modal");
        }, 400)
      }
    },
    handleOk(evt){
      this.$emit('handleOk')
    }
  }
}
</script>

<style scoped>
 .grid-form {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 10px;
 }
</style>
