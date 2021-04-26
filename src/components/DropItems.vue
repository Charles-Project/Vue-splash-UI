<template>
    <div class="drop">
        <div class="drop_item" v-for="item in items" :key="item.title">
            {{item.title}}
            <span><ChevronDown class="chevy"/></span>
        </div>


    </div>
</template>
<script>
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
import 'vue-material-design-icons/styles.css';
export default {
    components:{
        ChevronDown
    },
    data(){
        return{
            items:[
                {
                    title: "World"
                },
                 {
                    title: "Following"
                },
                 {
                    title: "Popular"
                },
                 {
                    title: "Post"
                },
                 {
                    title: "Gender"
                },
                 {
                    title: "Location"
                },
                  {
                    title: "Profession"
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>

.drop{
    display: flex;
    flex-wrap: wrap;

    .drop_item{
        background: white;
        font-size: 12px;
        padding: 10px 30px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 3px;
        color: #969494;
        box-shadow: 0px 0px 5px 2px rgba($color: #c9c9db, $alpha: 0.2);
        cursor: pointer;
        margin-bottom: 5px;

         @media screen and (max-width: 575px){
            padding: 10px 10px;
        }

          @media screen and (max-width: 475px){
           
            font-size: 11px;

        span{
        
         .material-design-icon > .material-design-icon__svg {
            height: 0.7em;
            width: 0.7em;
             bottom: -0.125em;
         }
         
        }
        
        }

        span{
            display: flex;
            align-items: center;
            font-size: 20px;
          

            .material-design-icon > .material-design-icon__svg{
                position: static !important;
            }
        }
        
    }
}

</style>