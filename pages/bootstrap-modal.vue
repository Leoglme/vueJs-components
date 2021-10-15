<template>
  <div class="wrap-ctn">
     <button class="btn btn-primary" @click="handleOne">Click</button>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    handleOne(){
      this.$bvModal.msgBoxConfirm('Please confirm that you want to delete everything.', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        noCloseOnBackdrop: true,
        hideHeaderClose: false,
        centered: true
      })
        .then(value => {
          console.log(value);
        })
        .catch(err => {
          console.log(err);
        })
    }
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
