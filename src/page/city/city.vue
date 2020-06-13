<template>
  <div class="city-container">
    <navbar>
      <router-link to="/home" tag="span" class="iconfont icon-youjiantou"></router-link>
      <span>{{cityinfo.name}}</span>
      <router-link tag="span" to="/home">切换城市</router-link>
    </navbar>
    <!-- 搜索地址 -->
    <section class="searchcard">
      <input type="text" placeholder="输入学校、商务楼、地址" v-model="searchval" />
      <i v-if="searchval" @click="handleseachval" class="iconfont icon-guanbi"></i>
      <button class="submit" @click="sumbitsearchval">提交</button>
    </section>
    <!-- 商铺列表 -->
    <section class="shoplist">
      <ul>
        <router-link
          tag="li"
          :to="`/square?geohash=${item.geohash}`"
          v-for="item in shoplist"
          :key="item.id"
          @click.native="handlestorage(item)"
        >
          <p class="one">{{item.name}}</p>
          <p class="two">{{item.address}}</p>
        </router-link>
      </ul>
    </section>
    <!-- 搜索历史 -->
    <section class="history">
      <p class="title">搜索历史</p>
      <ul>
        <router-link tag="li" :to="`/square?geohash=${item.geohash}`" v-for="item in historylist" :key="item.id">
          <p class="one">{{item.name}}</p>
          <p class="two">{{item.address}}</p>
        </router-link>
      </ul>
      <div v-if="historylist.length != 0" class="clearall" @click="clearhistory">
        <span>清空所有</span>
      </div>
    </section>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  name: "city",
  data() {
    return {
      //表单内容
      searchval: "",
      //城市信息
      cityinfo: {},
      //商铺列表
      shoplist: [],
      //搜索历史列表
      historylist: [],
      id: this.$route.query.id
    };
  },
  mounted() {
    this.getcityinfo();
    //如果有历史记录，则马上获取数据渲染
    const historyarr = window.localStorage.getItem("historyarr") || [];
    if (historyarr.length != 0) {
      this.historylist = JSON.parse(localStorage.getItem("historyarr"));
    }
  },
  methods: {
    //获取当前城市信息
    getcityinfo() {
      fetch(`https://elm.cangdu.org/v1/cities/${this.id}`, { method: "GET" })
        .then(res => res.json())
        .then(res => {
          this.cityinfo = res;
        });
    },
    //清空input
    handleseachval() {
      this.searchval = "";
    },
    //提交搜索表单
    sumbitsearchval() {
      if (this.searchval === "") {
        return;
      }
      fetch(
        `https://elm.cangdu.org/v1/pois?city_id=${this.id}&keyword=${this.searchval}&type=search`,
        { method: "GET" }
      )
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.shoplist = res;
        });
    },
    //搜索历史
    handlestorage(obj) {
      const historyarr =
        JSON.parse(window.localStorage.getItem("historyarr")) || [];
      historyarr.push(obj);
      window.localStorage.setItem("historyarr", JSON.stringify(historyarr));
    },
    //清空历史记录
    clearhistory() {
      window.localStorage.clear();
      this.historylist = [];
    }
  },
  components: {
    navbar
  }
};
</script>

<style lang="scss" scoped>
.city-container {
  height: 100%;
  background-color: #f5f5f5;
  .navbar {
    .icon-youjiantou {
      transform: rotate(180deg);
      font-size: 1.125rem;
    }
  }
  //搜索地址
  .searchcard {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0.8125rem;
    margin-top: 0.625rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 2px 0 #ccc;
    position: relative;
    input[type="text"] {
      font-size: 0.25rem;
      padding: 0.25rem 0 0.25rem 0.25rem;
      padding-right: 1rem;
      border: 1px solid #ccc;
      position: relative;
    }
    .icon-guanbi {
      position: absolute;
      top: 20%;
      right: 8%;
      font-size: 0.3125rem;
    }

    .submit {
      background-color: var(--color);
      border: 1px solid var(--color);
      margin-top: 0.375rem;
      font-size: 0.8125rem;
      border-radius: 2px;
      color: white;
      padding: 0.0625rem 0;
    }
  }
  //商铺列表
  .shoplist {
    ul {
      li {
        border-bottom: 1px solid #ccc;
        background-color: white;
        .one {
          font-size: 0.375rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.25rem 0.5rem;
          font-weight: 600;
        }
        .two {
          font-size: 0.15rem;
          color: var(--fail);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.25rem 0.5rem;
        }
      }
    }
  }
  //搜索历史
  .history {
    .title {
      font-size: 0.375rem;
      padding: 0.0625rem 0.15rem;
    }
    ul {
      li {
        border-bottom: 1px solid #ccc;
        background-color: white;
        .one {
          font-size: 0.375rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.25rem 0.5rem;
          font-weight: 600;
        }
        .two {
          font-size: 0.15rem;
          color: var(--fail);
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          padding: 0.25rem 0.5rem;
        }
      }
    }
  }
  .clearall {
    font-size: 0.75rem;
    text-align: center;
    padding: 0.5rem 0;
    background-color: white;
  }
}
</style>