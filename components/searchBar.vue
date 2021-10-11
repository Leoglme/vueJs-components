<template>
  <form class="search-form">
    <label for="search" class="search-label" v-if="!$fetchState.pending">
      <svg width="20" height="20" viewBox="0 0 20 20">
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </label>
    <b-spinner style="height: 18px; width: 18px; border-width: 2.5px" variant="primary"
               v-if="$fetchState.pending"/>
    <input type="search" id="search" :placeholder="placeholder" class="search-input" v-model="search">
  </form>
</template>


<script>
export default {
  name: 'searchBar',
  props: {
    value: {type: String, default: ''},
    placeholder: {type: String, default: 'Search...'}
  },
  data(){
    return {
      search: this.value ? this.value : ''
    }
  },
  fetchOnServer: false,
  async fetch() {
  },
}
</script>


<style lang="scss" scoped>
  .search-form {
    background-color: #fff;
    border: 1px solid #c4c4c4;
    border-radius: 8px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    height: 40px;
    padding: 0 12px;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    display: flex;
    align-items: center;
  }
  .search-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    color: #3b51d5;

    & svg {
      stroke-width: 2;
    }
  }
  .search-input {
    font-size: 16px;
    height: 100%;
    flex: 1;
    padding-left: 20px;
    appearance: none;
    background: transparent;
    border: 0;
    outline: none;
    box-shadow: none;
  }
</style>
