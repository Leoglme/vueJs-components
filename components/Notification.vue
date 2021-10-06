<template>
  <div>
    <button @click="handleDefault" class="btn btn-success">default</button>
    <button @click="handleError" class="btn btn-danger">Danger</button>
    <button @click="handleSuccess" class="btn btn-danger">Success</button>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  methods: {
    handleSuccess() {
      this.$toasted.global.success({
        message: `
          <div style="display: flex; flex-direction: column">
            <h4 class="toasted-title">Documentation Vuesax 4.0+</h4>
         <p class="toasted-content">These documents refer to the latest version of vuesax (4.0+),
         to see the documents of the previous versions you can do it here 👉 Vuesax3.x</p>
    </div>`
      });
    },
    handleError() {
      this.$toasted.global.error({
        message: `
          <div style="display: flex; flex-direction: column">
            <h4 class="toasted-title">Documentation Vuesax 4.0+</h4>
         <p class="toasted-content">These documents refer to the latest version of vuesax (4.0+),
         to see the documents of the previous versions you can do it here 👉 Vuesax3.x</p>
    </div>`
      });
    },
    handleDefault(){
      this.$toasted.global.default({
        message: `
          <div style="display: flex; flex-direction: column">
            <h4 class="toasted-title">Documentation Vuesax 4.0+</h4>
         <p class="toasted-content">These documents refer to the latest version of vuesax (4.0+),
         to see the documents of the previous versions you can do it here 👉 Vuesax3.x</p>
    </div>`
      });
    }
  }
}
</script>
