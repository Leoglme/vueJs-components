<template>
  <div style="display: flex">
    <DrawerNav v-model="open"/>
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
      open: true
    }
  }
}
</script>
