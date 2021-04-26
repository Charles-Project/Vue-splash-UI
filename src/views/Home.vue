<template>
  <div class="home">
      <MainContent />
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from "@/components/MainContent";


export default {
  name: "Home",
  components: {
    MainContent,
  },
};
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>
