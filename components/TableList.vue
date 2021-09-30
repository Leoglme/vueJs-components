<template>
  <div class="table__container">
    <div class="table__header">
      <div class="header__cell" v-for="(row, key, index) of value[0]"
           :style="{
          flexGrow: isLastKey(key, value[0]) ? 1 : null,
          width: `calc(100% / ${Object.keys(value[0]).length + 1})`
        }">
        <span style="text-transform: capitalize">{{ key }}</span>
        <span class="right__divider" v-if="!isLastKey(key, value[0])"/>
      </div>
    </div>

    <div class="table__body">
      <div style="margin-top: 15px; white-space: nowrap;">
        <div class="table__row" v-for="(rows, index) in value">
          <div class="header__cell" v-for="(row, key, index) of rows" :style="{
            flexGrow: isLastKey(key, rows) ? 1 : null,
            width: `calc(100% / ${Object.keys(rows).length + 1})`}">
            <span>{{ row }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'TableList',
  props: {
    value: {type: Array, default: []},
  },
  methods: {
    isLastKey(key, obj){
      return Object.keys(obj)[Object.keys(obj).length-1] === key
    }
  }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');
$borderColor: #7957d5;
$fonts: 'Poppins';
.table__container {
  margin-top: 35px;
  font-family: $fonts;
  font-size: 14px;
  line-height: 1.42857143;
  color: #3e3e3e;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
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
    display: flex;
    white-space: nowrap;
    border-left: 2px solid transparent;

    &:hover {
      border-left-color: $borderColor;
      background-color: #eee;
    }
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
}

.right__divider {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  padding: 0 5px;
  cursor: ew-resize;
  border-right: 1px solid #eee;
}


</style>
