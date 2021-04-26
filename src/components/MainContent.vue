<template>
    <div class="main__wrapper">
        <div class="main__header">
           <Header />
        </div>

        <div class="search__body">
            <Search />
        </div>

        <div class="items__wrapper">
            <DropItems/>
        </div>
        <div class="main__body">
            <MainBody />
        </div>
    </div>
</template>
<script>
import Header from "./Header"
import DropItems from "./DropItems"
import MainBody from "./MainBody"
import Search from "./Search"

export default {
    components:{
        Header,
        DropItems,
        MainBody,
        Search 
    }
}
</script>
<style lang="scss" scoped>
.main__wrapper{
     width: 100%;
     height: 100%;
     display: flex;
     flex-direction: column;
     padding: 2rem 3rem 1rem 2rem;

     overflow-y: scroll;

    @media screen and (max-width: 800px){
        padding: 2rem 2rem 1rem 2rem;
    }


    .main__header{
        width: 100%;
    }


    .search__body{
        display: none;
    @media screen and (max-width: 624px){
        display: block;
        margin-top: 2rem;

    }

    }


    .items__wrapper{
        margin: 1.8rem 0 1.4875rem;
       
    }

    .main__body{
        width: 100%;
        flex-grow: 1;

    }
}
</style>