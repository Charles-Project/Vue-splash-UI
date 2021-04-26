<template>
    <div class="main__container">
    
    <div class="main__card" :style="{ backgroundImage: `linear-gradient(to bottom, rgba(0, 10, 20, 0.1), rgba(0, 2, 12, 0.50)),url(${item.image})` }"
    v-for="item in getSplash" :key="item.id"  @click="togCards(item.id)">
       
       <div class="main__lines">
           <div class="lines"></div>
           <div class="lines"></div>
           <div class="lines"></div>
           <div class="lines"></div>
       </div>

       <div class="main__description">
             <h4>{{item.name}}, {{item.photos_no}}</h4>
             <p><span class="location">
                 <!-- <ph-map-pin :size="16" /> -->
                 <MapMarker/>
             </span>
                 {{item.location}}</p>
         </div>
<!-- ------------------------------------------------------------------- -->
          <div class="main__descrip" :class="{disp: item.display}">
             <h4>{{item.name}}, {{item.photos_no}}</h4>
             <p>
                 <span class="location">
                 <MapMarker/>
             </span>
                 {{item.location}}
            </p>

            <div class="btn__wrapper">
                <button class="btn__love">
                    <HeartOutline/>
                </button>
                 <button class="btn__dislike">
                     <ph-thumbs-down :size="16" />
                </button>
                
            </div>
         </div>


    </div>
   
    </div>
</template>

<script>
// import Girl from "../assets/girl.jpeg"
import MapMarker from 'vue-material-design-icons/MapMarker.vue';
import HeartOutline from 'vue-material-design-icons/HeartOutline.vue';
import {PhThumbsDown} from "phosphor-vue";

import {mapActions, mapGetters} from "vuex"
 
export default {
    components:{
        MapMarker,
        HeartOutline,
        PhThumbsDown,
    },

    computed: mapGetters(["getSplash"]),

    methods:{
    ...mapActions(['fetchData', 'toggleCard']),

    togCards(id) {
        this.toggleCard(id)
    },
    
    },

    created(){
    this.fetchData()
    }
}
</script>

<style lang="scss" scoped>
.main__container{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 2rem;
    padding-bottom: 10px;

     @media screen and (max-width: 416px){
        /* justify-content: center; */
        /* grid-template-columns: repeat(auto-fit, minmax(170px, 220px)); */
    }

    .main__card{
        height: 205px;
        background: linear-gradient(to right bottom, #648880, #293f50);;
        background-position: center;
        background-size: cover;
        border-radius: 10px;
        position: relative;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;

        .main__lines{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30px, 1fr
            ));
            grid-gap: 5px;
            width: 100%;
            padding: 7px 10px;

            .lines{
                background: rgb(124, 117, 117);
                height: 2px;
                opacity: 0.5;

                &:first-child{
                     background: #efefef;
                     opacity: 0.9;
                }
            }
        }

        

        .main__description{
            color: rgb(225, 226, 224);
            padding-left: 1.1rem;

            h4{
                font-size: 13px;
                margin-bottom: 4px;
                font-weight: 500;
            }

            p{
                 font-size: 10px;
                 opacity: 0.8;
                 margin-bottom: 1.5rem;


                 .location{
                     color: white;
                     opacity: 1;
                 }
                 
            }
        }
        

        .main__descrip{
            background: white;
            width: 100%;
            /* color: rgb(225, 226, 224); */
            padding: 0.6rem 0.7rem 0.7rem;
       
            border-bottom-left-radius: 7px;
            border-bottom-right-radius: 7px;

            box-shadow: 0px 1px 5px 3px rgba($color: #E8E8FB, $alpha: 0.3);
            position: absolute;
            bottom: -7.5%;
            left: 0px;

            visibility: hidden;

            &.disp{
               visibility:visible;
            }

            h4{
                font-size: 13px;
                margin-bottom: 4px;
                font-weight: 700;
                color:#8653c4
            }

            p{
                 font-size: 9px;
                 /* opacity: 0.8; */
                 margin-bottom: 0.65rem;;
                 color: #8c8aab;
                opacity: .6;
                font-weight: 600;

                 .location{
                     /* color: white; */
                     opacity: 0.9;
                    
                 }
                 
            }

            .btn__wrapper{
                display: flex;
                button{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50%;
                 
                    padding: 3px;
                    border: none;
                    color: white;
                    border-radius: 5px
                }

                .btn__love{
                    background: #C83435;
                    margin-right: 10px;
                    
                }

                .btn__dislike{
                      background: #342AA1
                }
            }

        }
        
   
    }
}
</style>