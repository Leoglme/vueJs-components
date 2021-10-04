<template>
  <div>
    <b-button v-b-modal.search__modal>Launch demo modal</b-button>
    <b-modal
      id="search__modal"
      v-model="isModalVisible"
      :modal-class="{'modal-fullscreen': fullscreen}"
      :hide-backdrop="hideBackdrop"
      :hide-footer="hideFooter"
      :hide-header="hideHeader"
      :hide-header-close="hideClose"
      :no-close-on-backdrop="noCloseOnBackdrop"
      content-class="search__modal--content"
      :size="size"
      title="BootstrapVue">
      <template #modal-header>

        <form class="SearchModal__form">
          <label for="SearchModel__input" class="SearchModel__label" v-if="!$fetchState.pending">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </label>
          <b-spinner style="height: 24px; width: 24px; border-width: 2.5px" variant="primary"
                     v-if="$fetchState.pending"/>
          <input type="search" id="SearchModel__input" placeholder="Search…" class="SearchModel__input"
                 v-model="searchValue">
        </form>
        <button class="close__modal" @click.prevent="closeModal()">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z"
                  stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round"
                  stroke-linejoin="round"></path>
          </svg>
        </button>
      </template>

      <div class="modal__body">
        <div v-if="this.search(searchValue, posts, 'title').length === 0" class="column__center" style="height: 300px;">
          <svg style="color: rgb(127, 142, 157)" width="40" height="40" viewBox="0 0 20 20" fill="none"
               fill-rule="evenodd" stroke="currentColor"
               stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
          </svg>
          <p class="no-result">Aucun résultats pour "<b>{{ searchValue }}</b>"</p>
        </div>
        <ul class="modal__list">
          <li class="modal__item" v-for="post in this.search(searchValue, posts, 'title')">
            <div class="content-container">
              <div class="content-wrapper">
                <span class="title">{{ post.title }}</span>
              </div>
              <div class="content-action"></div>
            </div>
          </li>
        </ul>
      </div>

      <template #modal-footer>
        <span></span>
      </template>
    </b-modal>
  </div>
</template>


<script>
import global from "~/mixins/global";

export default {
  name: 'BootstrapModal',
  data() {
    return {
      searchValue: '',
      isModalVisible: false,
      posts: []
    }
  },
  mixins: [global],
  mounted() {
    console.log("global", global);
  },
  props: {
    hideBackdrop: {type: Boolean, default: false},
    hideFooter: {type: Boolean, default: false},
    hideHeader: {type: Boolean, default: false},
    hideClose: {type: Boolean, default: false},
    noCloseOnBackdrop: {type: Boolean, default: false},
    fullscreen: {type: Boolean, default: false},
    size: {type: String, default: 'md'},
  },
  fetchOnServer: false,
  async fetch() {
    this.posts = await fetch(
      'https://api.nuxtjs.dev/posts'
    ).then(res => res.json())
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
  computed: {}
}
</script>


<style lang="scss" scoped>
$color: #6f32c9;
.modal__body {

  & .modal__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    & .modal__item {
      width: 100%;
      border-color: transparent transparent #eaeef3;
      border-width: 1px;
      border-style: solid;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        border-radius: 10px;
        border-color: $color;
      }
    }

    & .content-container {
      display: flex;
      align-items: center;
      color: rgb(68, 73, 80);
      padding: 2.5px 15px 2.5px 20px;
      border-radius: 10px;
      width: 100%;
      height: 62px;

      & .content-wrapper {
        display: flex;
        flex: 1 1 auto;
        flex-direction: column;
        justify-content: center;
        line-height: 1.2em;
        margin: 0 8px;
        overflow-x: hidden;
        position: relative;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-left: 20px;

        & .title {
          line-height: 1.2em;
          white-space: nowrap;
          font-size: 0.875rem;
          color: rgb(47, 58, 69);
        }
      }

      & .content-action {

      }

      &:hover {
        background-color: lighten($color, 47%);

        & .modal__item {
          border-radius: 10px;
        }

        & .title {
          color: $color;
        }
      }
    }
  }
}

.no-result {
  font-size: 17px;
  margin: 30px 0;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}
</style>
