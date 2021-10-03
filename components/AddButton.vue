<template>
     <div class="new__box" :style="open ? null : 'height: 0; margin: 0'">
       <input id="text-box" type="text" :placeholder="placeholder"
              ref="input"
              @keydown.esc="$emit('onClose')"
              @input="$emit('input', $event.target.value)"
              @keypress.enter="$emit('onAdd', value)">
       <button class="btn btn-primary" style="margin-left: 10px;"
               @click="handleClick">
         {{ textButton }}
       </button>
       <button class="btn btn-outline-light" style="margin-left: 10px;"
               @click="$emit('onClose')">Annuler</button>
     </div>
</template>


<script>
 export default {
   name: 'AddButton',
   props: {
     placeholder: {type: String, default: ''},
     textButton: {type: String, default: 'Ajouter'},
     open: {type: Boolean, default: true},
     value: {type: String, default: ''}
   },
   methods: {
     handleClick(){
       this.$emit('onAdd', this.value)
     }
   }
 }
</script>

<style lang="scss" scoped>
   .new__box {
     display: flex;
     justify-content: space-between;
     overflow: hidden;
     height: 39px;
     margin: 20px 0;
     transition: all .2s;
     & input {
       height: 39px;
       flex: 1;
     }
   }
</style>
