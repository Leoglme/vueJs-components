<template>
  <div class="horizontal__nav">
    <span class="nav__title">{{ title }}</span>
    <div class="profile-section" v-if="showUsermenu">
      <span class="nav__text">{{ user.name }}</span>
      <img :src="user.image" :alt="user.name" v-if="user.image">
      <img src="@/assets/images/no-user-ico.jpg" :alt="user.name" v-else>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      user: {
        name: "unknown",
        image: null
      }
    }
  },
  props: {
    title: {
      type: String, default: ""
    },
    showUsermenu: {type: Boolean, default: true}
  }
}
</script>

<style lang="scss" scoped>

$fonts: Poppins, 'Roboto, sans-serif';

.horizontal__nav {
  font-family: $fonts;
  background: #fff;
  height: 62px;
  padding: 9px 30px;
  border-bottom: 1px solid #dbdbdb;
  color: #3e3e3e;
  display: flex;
}

.nav__title {
  font-size: 18px;
  font-weight: 500;
  flex: 1;
  display: flex;
  align-items: center;
}

.profile-section {
  margin: 0 11px 0 0;
  padding: 1px 4px;
  cursor: pointer;

  & img {
    width: 42px;
    height: 42px;
    border-radius: 20px;
    padding: 4px;

    &:hover {
      border: 1px solid var(--primary);
      padding: 3px;
    }
  }
}

.nav__text {
  display: inline;
  padding: 0 10px;
  font-size: 14px;
  line-height: 20px
}

</style>
