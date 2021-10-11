<template>
  <div style="display: flex">
<!--    <DrawerNav v-model="openSidebar" :showToggle="false"/>-->
    <div style="width: 100%">
      <Nuxt />
    </div>

  </div>
</template>

<script>
import DrawerNav from '~/components/DrawerNav'
export default {
  components: {DrawerNav},
  data () {
    return {
      openSidebar: true
    }
  }
}
</script>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu {
    background: #ede7f6;
    transition: all .2s ease-in-out;
    border-radius: 8px;
    padding: 0;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #5e35b1;
    width: 34px;
    cursor: pointer;
    height: 34px;
    top: 20px;
    left: 20px;

    &:hover span {
      color: #ede7f6;
    }
  }
</style>
