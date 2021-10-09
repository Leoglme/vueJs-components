<template>
   <div style="display:flex; flex-direction: column; width: 100%; justify-content: center; align-items: center">

     <div>
       <button class="btn btn-primary m-5" v-wave>Primary</button>
       <button class="btn btn-success m-5" v-wave>Success</button>
       <button class="btn btn-warning m-5" v-wave>Success</button>
     </div>
     <div>
       <button class="btn btn-outline-light m-5">Primary</button>
     </div>
   </div>
</template>

<script>
   export default {
     name: 'BootstrapButton'
   }
</script>

/*Change bootstrap color in assets/scss/custom.scss/
<style>



</style>
