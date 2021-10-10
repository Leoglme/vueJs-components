<template>
  <div class="drawerMenu-container">
    <div class="drawerMenu-navigation" :class="{'active': value}">
      <div class="drawerMenu-header">
        <img src="@/assets/images/logo.png" alt="logo time">
      </div>
      <hr style="margin-top: 0;"/>
      <ul>
        <li v-for="link in links"
            :class="{'active': currentRouteName === link.to}"
            v-b-tooltip.hover.left="link.title" v-wave>
          <nuxt-link :to="link.to" :style="link.icon ? null : 'margin-left: 16px;'">
            <span class="material-icons-outlined drawerMenu-icon" v-if="link.icon">{{ link.icon }}</span>
            <span class="drawerMenu-title" :class="value ? 'active': 'disabled'">{{ link.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-if="showToggle" class="drawerMenu-toggle" :class="{'active': value}" @click="$emit('input', !value)"/>
  </div>
</template>

<script>
import {mapState} from "vuex";
import route from "~/mixins/route";
export default {
  name: 'DrawerNav',
  props: {
    value: {type: Boolean, default: false},
    showToggle: {type: Boolean, default: true},
  },
  mixins: [route],
  computed: {
    ...mapState('drawerMenu', ['links']),
  }
}
</script>

<style lang="scss" scoped>
.drawerMenu-container {
  position: relative;
  height: 100vh;
}
.drawerMenu-toggle {
  position: absolute;
  top: 17px;
  z-index: 1030;
  box-shadow: 0 4px 15px 0 rgba(0,0,0,.1);
  border: 1px solid #e9e8e8;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.5s ease;
  width: 32px;
  height: 32px;
  left: 63px;
  cursor: pointer;
  &.active {
    left: 280px;
  }
  &::before {
    content: '\e5cc';
    font-family: 'Material Icons';
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 30px;
    text-align: center;
    font-size: 24px;
    color: var(--primary);
  }
  &.active::before {
    content: '\e5cb';
  }
}
.drawerMenu-navigation {
  position: relative;
  width: 80px;
  height: 100%;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease;
  user-select: none;
  &.active {
    width: 300px;
  }
  & ul {
    width: 100%;
    padding: 0;
    margin: 0;
    & li {
      position: relative;
      list-style: none;
      margin: 4px 13px;
      border-radius: 10px;
      cursor: pointer;
      transition: all .25s ease;

      &::after{
        content: "";
        position: absolute;
        left: -4px;
        top: 0;
        width: 6px;
        height: 100%;
        background: #6f32c9;
        border-radius: 0 20px 20px 0;
        transform: translate(-20px);
        transition: all .25s ease;
        z-index: 60;
      }

      &.active {
        & a {
          color: #6f32c9;
        }
        &::after {
          transform: translate(-5px);
        }
      }



      &:hover {
        background: #e7e9f8;
        transform: translateX(5px);
        & a {
          color: #6f32c9;
        }
      }
      & a {
        position: relative;
        padding: 9px 0;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #6b6b6b;
        font-size: 15px;
        & .drawerMenu-icon {
          position: relative;
          display: block;
          min-width: 54px;
          text-align: center;
          font-size: 22px;
        }
        & .drawerMenu-title {
          position: relative;
          display: block;
          white-space: nowrap;
          margin-left: 5px;
          &.disabled {
            visibility: hidden;
            opacity: 0;
            transition: visibility 0s linear 250ms, opacity 250ms;
          }
          &.active {
            visibility: visible;
            opacity: 1;
            transition: visibility 0s linear 0s, opacity 250ms;
          }
        }
      }
    }
  }
}

.drawerMenu-header {
  height: 61px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    height: 35px;
  }
}
</style>
