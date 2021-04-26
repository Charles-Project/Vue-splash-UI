<template>
     <div class="header__input--wrapper">

            <div class="search__input">
                <div class="icon__search">
                  <ph-magnifying-glass :size="16"/>
                </div>
                <input type="text" placeholder="Find Something..." v-model="search">
            </div>

            <button class="search__button" @click="handlerSearch(search)">Search</button>
        </div>
</template>
<script>
import { PhMagnifyingGlass } from "phosphor-vue";

import {mapActions} from "vuex"

export default {
     components: {
      PhMagnifyingGlass,
    },
     data(){
        return{
            search: ''
        }
    },

    methods: {
        ...mapActions(['toggleNavbar', 'searchData']),

        handlerSearch(value) {
            this.searchData(value)
            this.search = ""
        }

    }
}
</script>
<style lang="scss" scoped>
   .header__input--wrapper{
        width: 100%;
        display: flex;
        background: white;
        padding: 0.4rem 0.4rem 0.4rem 1rem;
        border-radius: 7px;
        box-shadow: 3px 3px 5px 2px rgba($color: #EEEFF3, $alpha: 0.3);

           @media screen and (max-width: 380px){
        .icon__search{
                display: none !important;
                
        }

         input{
                font-size: 12px !important;
                margin-left: 0 !important;
                margin-right: 0 !important;
                color:#6f6f6f;
               
            }

        .search__button{ 
            padding: 0.3rem 0.5rem !important;
            font-size: 10px !important;
        }
            

    }


        .search__input{
            flex-grow: 1;
            display: flex;
            color: #D0D0D0;

            .icon__search{
                display: flex;
                align-items: center;
            }
            
            SVG{
                color:#514083;
            }

            input{
                font-size: 14px;
                flex-grow: 1;
                margin-left: 0.4rem !important;
                margin-right: 1rem;
                outline: none;
                border: none;
               
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
</style>