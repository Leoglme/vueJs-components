<template>
  <Dropdown :items="items"
            color="outline-light"
            v-model="currentItems">
  </Dropdown>
</template>


<script>
import Dropdown from "~/components/Dropdown";
export default {
  components: {Dropdown},
  data(){
    return {
      items: ['Active Tasks 1', 'Active Tasks 2', 'Active Tasks 3'],
      currentItems: 'Active Tasks 1',
    }
  }
}
</script>

