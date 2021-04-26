<template>
    <div class="sidebar__container">
        <div class="close__nav" @click="menuClick(false)">
          <Close/>
        </div>

        <div class="side__header">
            <img src="../assets/logo.png" alt="logo">
        </div>

          <div class="sidebar__nav">
            <router-link to="/" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><Home /></span> Home
                </div>
            </router-link>

              <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><Message /></span> Message
                </div>
            </router-link>


            <h6>Share</h6>
            
             <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><Podium /></span>Ranking
                </div>
            </router-link>
            <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><EiffelTower /></span> Challenge
                </div>
            </router-link>

            <!-- ------------------------------ Planner ----------------------------------------------- -->
              <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><Podium /></span> Party
                </div>
            </router-link>

            
             <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                 <span><LinkVariant/></span> Connect
                </div>
            </router-link>
            
            <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><Yoga /></span> Parade
                </div>
            </router-link>
              <router-link to="#" exact active-class="active" tag="button" class="side__btn">
                <div class="side__link">
                  <span><AccountGroup /></span> Group
                </div>
            </router-link>


        
        </div>
     
    </div>
</template>
<script>
import Logo from "../assets/logo.png"
import Home from 'vue-material-design-icons/Home.vue';
import Message from 'vue-material-design-icons/Message.vue';
import LinkVariant from 'vue-material-design-icons/LinkVariant.vue';
import AccountGroup from 'vue-material-design-icons/AccountGroup.vue';
import  Podium from 'vue-material-design-icons/Podium.vue';
import Yoga  from 'vue-material-design-icons/Yoga.vue';
import EiffelTower from 'vue-material-design-icons/EiffelTower.vue';
import Close  from 'vue-material-design-icons/Close.vue';

import 'vue-material-design-icons/styles.css';

import {mapActions} from "vuex"

export default {
    components:{
        Home,
        Message,
        LinkVariant,
        AccountGroup,
        Podium,
        Yoga,
        EiffelTower,
        Close
    },
    data() {
       return{
          Logo
       }
    },

    methods: {
        ...mapActions(['toggleNavbar']),

        menuClick(value) {
            this.toggleNavbar(value);
        }

    }
  
}
</script>
<style lang="scss" scoped>
.sidebar__container{
    width: 100%;
    height: 100%;
    padding: 2.5rem 1.5rem 0 3rem;
    position: relative;

    .close__nav{
      position: absolute;
      top: 1%;
      left: 5%;
      transform: translate(-5%, -5%);
      font-size: 22px;
      cursor: pointer;
      display: none;


       @media screen and (max-width: 800px){
         display: block;
       }
    }

    .side__header{
        /* background: brown; */
        /* height: 20px; */
        width: 100%;
        img{
            width: 100%;
        }
    }

    .sidebar__nav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 2rem;
    
    
    h6{
        text-transform: uppercase;
        padding-left: 16px;
        padding: 9px 0px 9px 16px;
        font-size: 14px;
        opacity: 0.7;
        font-weight: 800;
        color: black;
    }

    .side__btn {
    border: none;
    outline: none;
    width: 100%;
    cursor: pointer;

    &.active{
    
        border: 2px solid #EDEDEF;
        border-radius: 5px;

    .side__link{
     color: rgba($color: #2c2c2c, $alpha: 0.9);

     span{
         margin-right: 5px !important;
         color: #493F9E;
         font-size: 16px;
         padding-top: 1px;
        /* background: blue;  */
       
     }
    }
    }
    
    .side__link{
     display: flex;
     justify-content: flex-start;
     align-items: center;
     border: none !important;
     outline: none;
     background: #fafafc;
     padding: 10px 15px !important;
     color: rgba($color: #9494ae, $alpha: 0.9);
    
     font-size: 14px;
     font-weight: 500;
     letter-spacing: 0.7px;
     transition: all 0.5s ease-in-out;

     span{
         margin-right: 5px !important;
         color: #72728c;
         font-size: 16px;
         padding-top: 1px;
      
        /* background: blue;  */
       
     }
    }
    
    }
    }
  
}
</style>