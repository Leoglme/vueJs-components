<template>
  <div class="m-5">
    <b-dropdown
      :no-caret="true"
      :dropright="drop === 'right'"
      :dropleft="drop === 'left'"
      :dropup="drop === 'up'"
      :variant="color">
      <template #button-content>
        <i class="fas fa-chevron-down" v-if="drop === 'right'"/>
        {{ value }}
        <i class="fas fa-chevron-down" style=" font-size: 13px; margin-left: 5px;"/>
      </template>
      <template>
        <slot/>
        <b-dropdown-item v-for="item in items"
                         :key="item"
                         :active="item === value"
                         @click.prevent="$emit('input', item)">
          {{ item }}
        </b-dropdown-item>
      </template>
    </b-dropdown>
  </div>
</template>


<script>
   export default {
     name: 'Dropdown',
     props: {
       color: {type: String, default: 'primary'},
       drop: {type: String, default: ''},
       items: {type: Array || Object, default: null},
       value: {type: String, default: ''},
     },
   }
</script>

<style>

</style>
