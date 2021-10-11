<template>
  <div style="width: 100%">
    <Navbar title="Projets"/>
    <BootstrapTable/>
  </div>
</template>


<script>
import BootstrapTable from "~/components/BootstrapTable";
import Navbar from "~/components/Navbar";
export default {
  components: {BootstrapTable, Navbar},
  data() {
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
