<template>
  <div class="wrap-ctn">
    <b-card style="margin: 24px;">
      <p class="mt-3" style="text-align: center;">Current Page: <b>{{ currentPage }}</b></p>

      <b-table
        hover
        head-variant="light" class="custom-table"
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small/>
      <b-pagination
        @change="handleChange"
        :hide-ellipsis="true"
        v-model="currentPage"
        :total-rows="100"
        :per-page="perPage"
        aria-controls="my-table"/>
    </b-card>
    <b-card style="margin: 24px;">
      <p class="mt-3" style="text-align: center;">Current Page: <b>{{ currentPage }}</b></p>
      <b-table
        hover
        head-variant="light" class="custom-table"
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small/>
      <b-pagination
        pills
        @change="handleChange"
        :hide-ellipsis="true"
        v-model="currentPage"
        :total-rows="100"
        :per-page="perPage"
        aria-controls="my-table"/>
    </b-card>
    <b-card style="margin: 24px;">
      <p class="mt-3" style="text-align: center;">Current Page: <b>{{ currentPage }}</b></p>
      <b-table
        hover
        head-variant="light" class="custom-table"
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small/>
      <b-pagination
        first-number
        last-number
        prev-class="pagination__goto"
        next-class="pagination__goto"
        @change="handleChange"
        :hide-ellipsis="true"
        v-model="currentPage"
        :total-rows="100"
        :per-page="perPage"
        aria-controls="my-table">

        <template #prev-text>
          <span class="material-icons-round" style="font-size: 14px;">arrow_back_ios</span>
        </template>
        <template #next-text>
          <span class="material-icons-round" style="font-size: 14px;">arrow_forward_ios</span>
        </template>
      </b-pagination>
    </b-card>
    <b-card style="margin: 24px;">
      <p class="mt-3" style="text-align: center;">Current Page: <b>{{ currentPage }}</b></p>
      <b-table
        hover
        head-variant="light" class="custom-table"
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small/>
      <b-pagination
        first-number
        last-number
        prev-class="pagination__goto"
        next-class="pagination__goto"
        @change="handleChange"
        :hide-ellipsis="true"
        v-model="currentPage"
        :total-rows="100"
        :per-page="perPage"
        aria-controls="my-table">

        <template #prev-text>
          <span class="material-icons-round prev-icon">arrow_back_ios</span>
          <span style="margin-right: 10px;">Précédent</span>
        </template>
        <template #next-text>
          <span style="margin-left: 10px;">Suivant</span>
          <span class="material-icons-round next-icon">arrow_forward_ios</span>
        </template>
      </b-pagination>
    </b-card>
  </div>
</template>


<script>
export default {
  name: 'BootstrapPagination',
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        {id: 1, first_name: 'Fred', last_name: 'Flintstone'},
        {id: 2, first_name: 'Wilma', last_name: 'Flintstone'},
        {id: 3, first_name: 'Barney', last_name: 'Rubble'},
        {id: 4, first_name: 'Betty', last_name: 'Rubble'},
        {id: 5, first_name: 'Pebbles', last_name: 'Flintstone'},
        {id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble'},
        {id: 7, first_name: 'The Great', last_name: 'Gazzoo'},
        {id: 8, first_name: 'Rockhead', last_name: 'Slate'},
        {id: 9, first_name: 'Pearl', last_name: 'Slaghoople'}
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
  },
  methods: {
    handleChange(ev) {
      console.log(ev);
    }
  }
}
</script>


<style lang="scss" scoped>
.wrap-ctn {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
