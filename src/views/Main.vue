<template>
  <el-container class="homeWrap">
    <el-header height="20%">
    <big-header></big-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer height="10%">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>
<script>
import BigHeader from "../components/BigHeader.vue";
import PersonAvatar from "../components/PersonAvatar.vue";
import ComAside from "../components/ComAside.vue";
import ComHeader from "../components/ComHeader.vue";
import Footer from "../components/footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    BigHeader,
    PersonAvatar,
    ComAside,
    ComHeader,
    Footer
  },
};
</script>
<style >
.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>