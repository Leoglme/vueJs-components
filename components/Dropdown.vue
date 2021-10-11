<template>
  <div>
    <b-dropdown
      :no-caret="true"
      :dropright="drop === 'right'"
      :dropleft="drop === 'left'"
      :dropup="drop === 'up'"
      :variant="color">
      <template #button-content>
        <i class="fas fa-chevron-down" v-if="drop === 'right'"/>
        <span class="material-icons-outlined" style="font-size: 18px;" v-if="icon">{{icon}}</span>
        <span style="flex: 1; text-align: left;margin-left: 4px;" v-if="color === 'light'">{{ value }}</span>
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
       icon: {type: String, default: null},
     },
   }
</script>

<style scoped>


</style>
