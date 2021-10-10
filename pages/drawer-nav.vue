<template>
  <DrawerNav v-model="openSidebar"/>
</template>


<script>
import DrawerNav from "~/components/DrawerNav";
export default {
  components: {DrawerNav},
  data(){
    return {
      openSidebar: false,
    }
  }
}
</script>
