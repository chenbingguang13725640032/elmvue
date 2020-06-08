<template>
  <div class="home-container">
    <navbar>
      <span>ele.me</span>
      <div class="login">
        <router-link to="/login" tag="span">登录</router-link>
        <span>|</span>
        <router-link to="/login" tag="span">注册</router-link>
      </div>
    </navbar>
    <!-- 当前城市 -->
    <section class="nowcity">
      <div class="city-posistion">
        <span>当前定位城市：</span>
        <span>定位不准时，请在城市列表中选择</span>
      </div>
      <div class="city">
        <router-link to="/city" tag="span" class="dingwei">佛山</router-link>
        <div class="iconfont icon-youjiantou"></div>
      </div>
    </section>
    <!-- 热门城市 -->
    <section class="hotcity">
      <div class="city-hot">热门城市</div>
      <ul class="city">
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
        <router-link to="/city" tag="li">上海</router-link>
      </ul>
    </section>
    <!-- 城市列表 -->
    <section class="listcity">
      <div class="cityletter">
        <span>A</span>
        <span>(按字母排序)</span>
      </div>
      <ul class="city">
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
      </ul>
    </section>
     <!-- 城市列表 -->
    <section class="listcity">
      <div class="cityletter">
        <span>A</span>
        <span>(按字母排序)</span>
      </div>
      <ul class="city">
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
      </ul>
    </section>
     <!-- 城市列表 -->
    <section class="listcity">
      <div class="cityletter">
        <span>A</span>
        <span>(按字母排序)</span>
      </div>
      <ul class="city">
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
      </ul>
    </section>
     <!-- 城市列表 -->
    <section class="listcity">
      <div class="cityletter">
        <span>A</span>
        <span>(按字母排序)</span>
      </div>
      <ul class="city">
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
      </ul>
    </section>
     <!-- 城市列表 -->
    <section class="listcity">
      <div class="cityletter">
        <span>A</span>
        <span>(按字母排序)</span>
      </div>
      <ul class="city">
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
      </ul>
    </section>
     <!-- 城市列表 -->
    <section class="listcity">
      <div class="cityletter">
        <span>A</span>
        <span>(按字母排序)</span>
      </div>
      <ul class="city">
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        <router-link tag="li" to="/city">商户号或或或或或</router-link>
        
      </ul>
    </section>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "home-container",
  data() {
    return {};
  },
  mmounted() {},
  methods: {},
  components: {
    navbar
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  
  background-color: #f5f5f5;
  // 当前城市
  .nowcity {
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 2px 0 #ccc;
    .city-posistion {
      display: flex;
      justify-content: space-between;
      padding: 0.225rem;
      font-size: 0.1875rem;
      line-height: 1.25rem;
      border-bottom: 1px solid #ccc;
      span:nth-of-type(2) {
        color: var(--fail);
      }
    }
    .city {
      display: flex;
      justify-content: space-between;
      line-height: 1.375rem;
      align-items: center;
      padding: 0.225rem;
      span {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color);
      }
    }
  }
  //热门城市
  .hotcity {
    background-color: white;
    border-top: 1px solid #ccc;
    box-shadow: 0 -1px 2px 0 #ccc;
    margin: 0.625rem 0 0 0;
    .city-hot {
      line-height: 1.25rem;
      font-size: 0.1875rem;
      padding: 0.225rem;
      border-bottom: 1px solid #ccc;
    }
    .city {
      display: flex;
      flex-wrap: wrap;

      li {
        width: calc(100% / 4);
        text-align: center;
        padding: 0.375rem 0;
        font-size: 0.375rem;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        color: var(--color);
      }
      li:nth-of-type(4),
      li:nth-of-type(8) {
        border-right: none;
      }
    }
  }
  //城市列表
  .listcity {
    margin-top: 0.625rem;
    background-color: white;
    border-top: 1px solid #ccc;
    box-shadow: 0 -1px 2px 0 #ccc;
    .cityletter {
      line-height: 1.25rem;
      font-size: 0.1875rem;
      padding: 0.225rem;
      border-bottom: 1px solid #ccc;
      span:nth-of-type(2) {
        color: var(--fail);
      }
    }
    .city {
      display: flex;
      flex-wrap: wrap;
      li {
        width: calc(100% / 4);
        text-align: center;
        padding: 0.375rem 0;
        font-size: 0.375rem;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

      }
    }
  }
}
</style>