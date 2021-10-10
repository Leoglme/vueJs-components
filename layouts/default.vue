<template>
  <div style="display: flex">
    <DrawerNav v-model="openSidebar" :showToggle="false"/>
    <div class="container column is-10">
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

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
