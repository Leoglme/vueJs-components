<template>
  <div>
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>

    <b-modal
      v-model="isModalVisible"
      :modal-class="{'modal-fullscreen': fullscreen}"
      :hide-backdrop="hideBackdrop"
      :hide-footer="hideFooter"
      :hide-header="hideHeader"
      :hide-header-close="hideClose"
      :no-close-on-backdrop="noCloseOnBackdrop"
      :size="size"
      id="modal-1"
      title="BootstrapVue">
      <template #modal-header>
        <slot name="modal-title"/>
        <button class="close__modal" @click.prevent="closeModal()">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                  stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </svg>
        </button>
      </template>

      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>


<script>
export default {
  name: 'BootstrapModal',
  data() {
    return {
      isModalVisible: false,
    }
  },
  props: {
    hideBackdrop: {type: Boolean, default: false},
    hideFooter: {type: Boolean, default: false},
    hideHeader: {type: Boolean, default: false},
    hideClose: {type: Boolean, default: false},
    noCloseOnBackdrop: {type: Boolean, default: false},
    fullscreen: {type: Boolean, default: false},
    size: {type: String, default: 'md'},
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>


<style>
</style>
