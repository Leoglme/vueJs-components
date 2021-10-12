<template>
  <div>
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
        <div class="flex-right">
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

    <div class="table-header">
      <span class="small">1-48 sur 272 résultats</span>
      <div class="flex-right">
        <span class="small" style="margin-right: 12px">Résultats par page</span>
        <b-dropdown
          class="perPage-dropdown"
          :no-caret="true"
          variant="light">
          <template #button-content>
            <span style="flex: 1; text-align: left;margin-left: 4px;">{{ perPage }}</span>
            <i class="fas fa-chevron-down" style="font-size: 13px; margin-left: 5px;"/>
          </template>
          <b-dropdown-item v-for="page in pageViews"
                           :key="page"
                           :active="page === perPage" @click.prevent="perPage = page">
            {{ page }}
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <b-table hover :items="items" :fields="fields" head-variant="light" class="custom-table"></b-table>
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
      search: '',
      status: ['Status', 'Active Tasks 2', 'Active Tasks 3'],
      currentStatus: 'Status',
      client: ['Clients', 'Active Tasks 2', 'Active Tasks 3'],
      currentClient: 'Clients',
      billing: ['Oui', 'Active Tasks 2', 'Active Tasks 3'],
      billingClient: 'Oui',

      fields: [
        {
          key: 'last_name',
          label: 'lastname',
          sortable: true
        },
        {
          key: 'first_name',
          label: 'firstname',
          sortable: true
        },
        {
          key: 'age',
          label: 'Age',
          sortable: true,
        },
        {
          key: 'status',
          label: 'status',
          sortable: true,
        }
      ],
      pageViews: [10, 20, 30],
      perPage: 20,
      items: [
        {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', status: 'SUPERADMIN'},
        {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', status: 'Administrateur'},
        {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', status: 'Responsable'},
        {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', status: 'Utilisateur'}
      ]

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
