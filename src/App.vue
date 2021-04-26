<template>
   <div class="bluecube">
    <div class="sidebar__wrappers" :class="{active: getNav}">
      <Sidebar />
    </div>
    <div class="main__content">
       <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import {mapGetters} from "vuex"

export default {
  name: "App",
  components: {
    Sidebar
  },

  data() {
    return{
      access_key: "hj0T5bUjZVGUxHEyKbzlq-Snpb3GRQTXoH5_zyGLSj0",
      url: "https://api.unsplash.com/"
    }
  },

    computed: mapGetters(["getNav"]),
};
</script>

<style lang="scss">
*{
padding: 0;
margin: 0;
box-sizing: border-box;
}

.bluecube{
height: 100vh;
overflow-x: hidden !important;

background: #fafafc;
width: 100%;
color: #2c3e50;
display: flex;


.sidebar__wrappers{
  position: relative;
 height: 100%;
 width: 230px;
 border-right:2px solid #EFEFF1;
 transition: width 0.7s ease-in-out;

 @media screen and (max-width: 800px){
  width: 0px;
  display: none;
   transition: all 0.7s ease-in-out;

  &.active{
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10099;
    background: #fafafc;

    width: 230px;
  }
 }

 
}

.main__content{
  flex-grow: 1;
}

}


/* #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
