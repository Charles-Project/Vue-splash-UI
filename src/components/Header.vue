<template>
    <div class="header__wrapper">
          <div class="menu__items" @click="menuClick(true)">
                <Menu/>
        </div>
        <div class="header__input--wrapper">

            <div class="search__input">
                <div class="icon__search">
                  <ph-magnifying-glass :size="24"/>
                </div>
                <input type="text" placeholder="Find Something..." v-model="search">
            </div>

            <button class="search__button" @click="handlerSearch(search)">Search</button>
        </div>


        <div class="header__bells" v-click-outside="hide" @click="toggle">
            <div class="bell_con">
                 <Bell/>
            </div>
                <span class="bell_no">3</span>

             <div v-show="opened" class="pop__item">
                 <div class="pop">
                    <div class="pops">
                         <div class="pop__avatar">
                         <img :src="Man" alt="">
                     </div>
                     <div class="pop__desc">
                         <div class="pop__likes">
                            Michael liked you!
                         </div>

                         <div class="pop__times">
                             about 20 mins ago
                         </div>
                     </div>
                    </div>
                     <div class="pop__icon one">
                         <CardsHeart />
                     </div>
                 </div>

                 <!-- ----------------------- -->
                  <div class="pop">
                    <div class="pops">
                         <div class="pop__avatar">
                         <img :src="Man" alt="">
                     </div>
                     <div class="pop__desc">
                         <div class="pop__likes">
                            Jack liked you!
                         </div>

                         <div class="pop__times">
                             about 40 mins ago
                         </div>
                     </div>
                    </div>
                     <div class="pop__icon two">
                         <CardsHeart />
                     </div>
                 </div>

                 <!-- ----------------------- -->

                    <!-- ----------------------- -->
                  <div class="pop">
                    <div class="pops">
                         <div class="pop__avatar">
                         <img :src=" Girl" alt="">
                     </div>
                     <div class="pop__desc">
                         <div class="pop__likes">
                            Martin commented on your photo
                         </div>

                         <div class="pop__times">
                             about 40 mins ago
                         </div>
                     </div>
                    </div>
                     <div class="pop__icon three">
                         <MessageReply />
                     </div>
                 </div>

                 <!-- ----------------------- -->
            </div>
        </div>

       

        
        <div class="header_avatar">
            <div class="avatar__wrapper">
                <img :src="Image" alt="">
                <span></span>
            </div>

            <h6>Abigirl <span><ph-caret-down :size="16" /></span></h6>
        </div>
    </div>
    
</template>
<script>
import { PhCaretDown, PhMagnifyingGlass } from "phosphor-vue";
import Menu from 'vue-material-design-icons/Menu.vue';
import Bell from 'vue-material-design-icons/Bell.vue';
import CardsHeart from 'vue-material-design-icons/CardsHeart.vue';
import MessageReply from 'vue-material-design-icons/MessageReply.vue';
import 'vue-material-design-icons/styles.css';

import ClickOutside from 'vue-click-outside'

import {mapActions} from "vuex"

export default {
    name: "Header",
    components: {
      PhCaretDown,
      PhMagnifyingGlass,
      Menu,
      Bell,
      CardsHeart,
      MessageReply 

    },

    data(){
        return{
            Image: require('../assets/girl.jpeg'),
            Man: require('../assets/man.jpeg'),
            Girl: require('../assets/girl.jpeg'),
            search: '',
            opened: false
        }
    },

    methods: {
        ...mapActions(['toggleNavbar', 'searchData']),

        menuClick(value) {
            this.toggleNavbar(value);
        },

        handlerSearch(value) {
            this.searchData(value)
            this.search = ""
        },
          toggle () {
      this.opened = true
    },
 
    hide () {
      this.opened = false
    }

    },

      mounted () {
    this.popupItem = this.$el
  },
 
  directives: {
    ClickOutside
  }
}
</script>
<style lang="scss" scoped>
.header__wrapper{
     display: flex;
     justify-content: space-between;
     align-items: center;

     .menu__items{
         margin-right: 10px;
         font-size: 27px;
         cursor: pointer;
         display: none;

          @media screen and (max-width: 800px){
            display: block;
          }

     }

    .header__input--wrapper{
        flex-grow: 1;
        display: flex;
        background: white;
        padding: 0.6rem 0.6rem 0.6rem 1.8rem;
        border-radius: 7px;
        box-shadow: 3px 3px 5px 2px rgba($color: #EEEFF3, $alpha: 0.3);

        @media screen and (max-width: 800px){
             padding: 0.4rem 0.4rem 0.4rem 1rem;

        .search__input{
            .icon__search{
            display: flex;
            align-items: center;

            SVG{
                color:#514083;
                width: 16px !important;
                height: 16px !important;
            }
            }

            input{
              
              
                margin-left: 0.4rem !important;
                margin-right: 1rem;
                 
              
            }

        }
        }

          @media screen and (max-width: 624px){
            display: none
          }

        .search__input{
            flex-grow: 1;
            display: flex;
            color: #D0D0D0;
            
            SVG{
                color:#514083;
            }

            input{
                font-size: 14px;
                flex-grow: 1;
                margin-left: 1rem;
                margin-right: 1.3rem;
                outline: none;
                border: none;
                color:#6f6f6f;
               
            }

        }
        
        .search__button{
            color: #cbc8ea;
            background: #3A319D;
            padding: 0.3rem 1.3rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;

            font-size: 13px;
        }

    }

    .header_bell{
        margin: auto 1.7rem;
        position: relative;

         @media screen and (max-width: 624px){
            margin-left: auto;
          }

       .bell__wrapper{
           color: blue;
           font-size: 23px;
           position: absolute;
           z-index: 100;
           cursor: pointer;
       }

        span{
            position: absolute;
            right: 0;
            bottom: 0;

            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: #B8383D;

            display: flex;
            align-items: center;
            justify-content: center;

            color: white;
            font-size: 8px;
        }
    }

    .header__bells{
        margin: auto 1.7rem;
        position: relative;

         @media screen and (max-width: 624px){
            margin-left: auto;
          }

          .bell_con{
             color: #3A319D;
             font-size: 25px;
             cursor: pointer;
          }

          .bell_no{
             position: absolute;
            right: 0;
            bottom: 4px;

            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: #B8383D;

            display: flex;
            align-items: center;
            justify-content: center;

            color: white;
            font-size: 8px;
          }

          .pop__item{
              position: absolute;
              top: 150%;
              left: -40px;
              background: white;
              min-width: 220px;
              z-index: 992;
              box-shadow: 0px 0px 5px 4px rgba($color: #F1F1FA, $alpha: 0.5);
              border-radius: 7px;

             .pop{
                 display: flex;
                 justify-content: space-between;
                 align-items: center;
                 padding: 1rem 1.3rem;
                 border-bottom: 2px solid rgb(244, 244, 237);
               

                 &:last-child{
                     border-bottom: none;
                 }

                 .pops{
                     display: flex;
                     justify-content: flex-start;
                     .pop__avatar{
                         width: 30px !important;
                         height: 30px !important;
                         border-radius: 50%;
                         margin-right: 10px;
                          box-shadow: 0px 0px 5px 4px rgba($color: #F1F1FA, $alpha: 0.5);

                         img{
                             width: 100% !important;
                             height: 100% !important;
                             border-radius: 50%;
                         }
                     }

                     .pop__desc{
                         display: flex;
                         flex-direction: column;
                         justify-content: space-between;

                         .pop__likes{
                             font-size: 10px;
                             font-weight: 500;
                             text-transform: capitalize;
                             color: #3A319D;
                             margin-bottom: 5px;
                             width: 100px;
                         }

                         .pop__times{
                             font-size: 8px;
                             text-transform: capitalize;
                             color: #c3bbbb;
                                 font-weight: 500;
                         }
                     }
                 }

                 .pop__icon.one{
                     font-size: 14px;
                     color: lightgray;
                       margin-left: 1rem;
                   
                 }

                 .pop__icon.two{
                     font-size: 14px;
                     color: rgb(210, 18, 18);
                       margin-left: 1rem;
                   
                 }

                   .pop__icon.three{
                     font-size: 14px;
                     color: #4d3ebf;
                     margin-left: 1rem;
                   
                 }


             }


          }

         
    }

    .header_avatar{
        display: flex;
        align-items: center;

        .avatar__wrapper{
        width: 34px;
        height: 34px;
        position: relative;
        background: brown;
        border-radius: 50%;
        box-shadow: 0px 0px 3px #E7E7F9;
        margin-right: 12px;

        img{
            height: 100%;
            width: 100%;
            border-radius: 50%;
        }

        span{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #4DC674;
            display: block;
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }

    h6{
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        margin-bottom: 0;
        color: #4c3fb1 ;
        font-weight: 600;

        span{
            display: flex;
            align-items: center;
            color: rgba($color: #000000, $alpha: 0.5);
            margin-left: 3px;
        }
    }

    }
}
</style>