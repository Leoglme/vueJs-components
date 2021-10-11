<template>
  <div>
    <template v-if="isLoading">
      <div style="height: 80vh; align-items: center; display: flex; justify-content: center;">
        <b-spinner variant="primary" label="Text Centered"></b-spinner>
      </div>
    </template>

    <template v-else>

      <!--   Large and medium screen    -->
      <div class="table__container" v-if="window.width > 550">
        <div class="table__header">
          <div class="header__cell" :class="{'filter': filter}" v-for="(field, index) in fields"
               @click="sortBy(field.key)"
               :style="{flexGrow: index === fields.length ? 1 : null,
           width: `calc(100% / ${fields.length})`}">
            <span style="text-transform: capitalize">{{ field.label }}</span>
            <span class="right__divider" v-show="index !== fields.length"/>
          </div>
        </div>

        <div class="table__body">
          <div style="margin-top: 15px; white-space: nowrap;">
            <div class="table__row" v-for="(rows, index) in dataFiltered">
              <div class="header__cell" v-for="(row, key, index) of rows" v-if="fields.find(e => e.key.split('.')[0] === key)" :style="{
            flexGrow: isLastKey(key, rows) ? 1 : null,
            width: `calc(100% / ${Object.keys(rows).length - countRemoved(rows)})`}">
                <span>{{ splitDot(key) ? row['name'] : row}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--   small screen    -->
      <div class="table__container" v-else>
        <div v-for="rows in dataFiltered" style="display: flex; flex-direction: column;">
          <div class="table__card">
            <template v-for="(item, key) of rows" v-if="fields.find(e => e.key === key)">
              <div style="display: flex;">
                <div class="header__cell" style=" width: 25%;">
                  <span style="text-transform: capitalize">{{ key }}</span>
                  <span class="right__divider"/>
                </div>

                <div class="card__row">
                  <div class="header__cell">
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>

</template>


<script>
export default {
  name: 'TableList',
  props: {
    datas: {type: Array, default: []},
    fields: {type: Array, default: []},
    filter: {type: Boolean, default: false},
    showField: {type: Boolean, default: true},
  },
  data() {
    return {
      window: {
        width: null,
        height: null
      },
      isLoading: true,
      dataFiltered: this.datas,
      sortDesc: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    })
    this.isLoading = false;
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    isLastKey(key, obj) {
      return Object.keys(obj)[Object.keys(obj).length - 1] === key
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    sortBy(filter) {
      if (this.filter) {
        if (this.sortDesc){
          this.dataFiltered = this.datas.sort((a, b) => (a[filter] > b[filter]) ? -1 : ((b[filter] > a[filter]) ? 1 : 0));
          this.sortDesc = false;
        }else {
          this.dataFiltered = this.datas.sort((a, b) => (a[filter] > b[filter]) ? 1 : ((b[filter] > a[filter]) ? -1 : 0));
          this.sortDesc = true;
        }
      }
    },
    countRemoved(rows){
      let temp = [];
      for(const key in rows){
        let res = this.fields.find(e => e.key === key)
        if(!res && !temp.includes(key)) temp.push(key)
      }
      return temp.length;
    },
    splitDot(key){
      const res = this.fields.find(e => e.key.split('.')[0] === key)
      return res.key.split('.')[1]
    }
  },
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');

$borderColor: #7957d5;
$fonts: Poppins, 'Roboto, sans-serif';
.table__container, .table__card {
  margin-top: 35px;
  font-family: $fonts;
  font-size: 14px;
  line-height: 1.42857143;
  color: #3e3e3e;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.table__card {
  overflow-y: hidden;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  padding: 8px 0;
}

.table__header {
  overflow: hidden;
  margin-bottom: 10px;
  display: flex;
}

.table__body {
  overflow-y: hidden;
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  padding-bottom: 15px;

  & .table__row {
    white-space: nowrap;
    border-left: 2px solid transparent;

    &:hover {
      border-left-color: $borderColor;
      background-color: #eee;
    }
  }
}

.card__row {
  display: flex;
  white-space: nowrap;
  border-left: 2px solid transparent;
  flex-grow: 1;

  &:hover {
    border-left-color: $borderColor;
    background-color: #eee;
  }
}

.header__cell {
  text-align: left;
  padding: .5rem 1.2rem;
  font-weight: 400;
  color: #2e2e2e;
  vertical-align: bottom;
  font-size: 12px;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  line-height: 1.625;
  text-overflow: ellipsis;

  &.filter:hover {
    transition: all .10s ease;
    cursor: pointer;
    width: calc(25%);
    background: #ebecf7;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 20px 0px;
  }
}

.right__divider {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  padding: 0 5px;
  border-right: 1px solid #eee;
}


</style>
