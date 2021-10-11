<template>
  <div style="background: #fff">
    <div class="filter-container">
      <div class="filter-row first-row" style="justify-content: flex-end;">
        <button class="btn btn-light">
        <span class="text-bold">
          <span class="material-icons-round"
                style="font-size: 18px; padding-right: 8px;">print</span>Imprimer</span>
        </button>
        <button class="btn btn-light align-col">
          <span class="text-bold">Exporter<span class="icon material-icons-round">arrow_drop_down</span></span>
        </button>
        <button class="btn btn-primary">
        <span class="text-bold">
          <span class="material-icons-round"
                style="font-size: 18px; padding-right: 8px;">add</span>Ajouter un projet</span>
        </button>
      </div>

      <div class="filter-row">
        <searchBar v-model="search" placeholder="Rechercher un projet"/>
        <span class="vertical-separator"/>
        <div style="display: flex; flex: 1; justify-content: flex-end; align-items: center">
          <Dropdown :items="status"
                    icon="hourglass_empty"
                    color="light"
                    v-model="currentStatus">
          </Dropdown>
          <span class="vertical-separator"/>
          <Dropdown :items="client"
                    color="light"
                    icon="people_alt"
                    v-model="currentClient">
          </Dropdown>
          <span class="vertical-separator"/>
          <Dropdown :items="billing"
                    color="light"
                    icon="sell"
                    v-model="billingClient">
          </Dropdown>
        </div>

      </div>
    </div>
    <b-table
      :items="items"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      responsive="sm"
    ></b-table>

    <div>
      Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
      <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
    </div>
  </div>
</template>


<script>
import Dropdown from "~/components/Dropdown";
import searchBar from "~/components/searchBar";

export default {
  name: 'BootstrapTable',
  components: {Dropdown, searchBar},
  data() {
    return {
      sortBy: 'age',
      sortDesc: false,
      fields: [
        {key: 'last_name', sortable: true},
        {key: 'first_name', sortable: true},
        {key: 'age', sortable: true},
        {key: 'isActive', sortable: false}
      ],
      search: '',
      items: [
        {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
        {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
        {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
        {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
      ],
      status: ['Status', 'Active Tasks 2', 'Active Tasks 3'],
      currentStatus: 'Status',
      client: ['Clients', 'Active Tasks 2', 'Active Tasks 3'],
      currentClient: 'Clients',
      billing: ['Oui', 'Active Tasks 2', 'Active Tasks 3'],
      billingClient: 'Oui',

    }
  }
}
</script>


<style lang="scss" scoped>

.align-col {
  padding: 2px 14px;
  margin-right: 8px;
  margin-left: 8px;
}
.text-bold {
  display: flex;
  align-items: center;

  & .icon {
    font-size: 33px;
  }
}
</style>
