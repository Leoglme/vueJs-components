<template>
  <div class="wrap-ctn">
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal @hide="onHide"
             id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {
    onHide(evt) {
      if(evt.trigger === "backdrop"){
        evt.preventDefault();
        evt.target.classList.add("prevent-modal");
        setTimeout(() => {
          evt.target.classList.remove("prevent-modal");
        }, 400)
      }
    },
  }
}
</script>


<style lang="scss" scoped>
.wrap-ctn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
