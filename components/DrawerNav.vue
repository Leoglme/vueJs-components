<template>
    <div class="drawerMenu-container">
       <div class="drawerMenu-navigation" :class="{'active': isActive}">
          <ul>
            <li v-for="link in links">
               <nuxt-link :to="link.to">
                 <span class="material-icons-round drawerMenu-icon">{{ link.icon }}</span>
                 <span class="drawerMenu-title" :class="isActive ? 'active': 'disabled'">{{ link.title }}</span>
               </nuxt-link>
            </li>
          </ul>
       </div>
      <div class="drawerMenu-toggle" :class="{'active': isActive}" @click="isActive = !isActive"/>
    </div>
</template>

<script>
   import {mapState} from "vuex";
   export default {
     name: 'DrawerNav',
     data(){
       return {
         isActive: true,
       }
     },
     computed: {
       ...mapState('drawerMenu', ['links']),
     }
   }
</script>

<style lang="scss" scoped>
   .drawerMenu-container {
     position: relative;
   }

   .drawerMenu-toggle {
     position: absolute;
     top: 45%;
     left: 60px;
     width: 40px;
     height: 40px;
     background: #f5f5f5;
     cursor: pointer;
     border: 5px solid white;
     border-radius: 50%;
     transition: 0.5s ease;

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
       font-weight: 900;
       font-size: 16px;
       color: #6843d1;
     }

     &.active::before {
       content: '\e5cb';
     }
   }

   .drawerMenu-navigation {
     position: relative;
     width: 80px;
     height: 420px;
     background: #fff;
     border-radius: 10px;
     overflow: hidden;
     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
     transition: 0.5s ease;

     &.active {
       width: 300px;
     }

     & ul {
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       padding: 0;
       margin: 0;

       & li {
         position: relative;
         list-style: none;
         width: 100%;

         &:hover {
           background: #efefef;
         }

         & a {
           position: relative;
           width: 100%;
           display: flex;
           text-decoration: none;
           color: #6843cf;
           font-weight: 500;

           & .drawerMenu-icon {
             position: relative;
             display: block;
             min-width: 80px;
             height: 60px;
             line-height: 60px;
             text-align: center;
             font-size: 24px;
           }

           & .drawerMenu-title {
             position: relative;
             display: block;
             height: 60px;
             line-height: 60px;
             white-space: nowrap;

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

</style>
