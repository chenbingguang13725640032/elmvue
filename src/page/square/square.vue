<template>
  <div class="square-container">
    <navbar>
        <router-link to="/search" tag="div" class="iconfont icon-sousuo"></router-link>
        <router-link to="/home" tag="span">佛山市南海区教育局(南新三路北)</router-link>
        <router-link to="/login" tag="span">登录 | 注册</router-link>
    </navbar>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "square",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    navbar
  }
};
</script>

<style scoped lang="scss">
.square-container{
    .navbar{
        .iconfont{
            font-size: .325rem;
        }
        span{
            font-size: .5rem;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        span:nth-of-type(1){
            max-width:5.625rem;
        }
    }
}
</style>