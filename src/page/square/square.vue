<template>
  <div class="square-container">
    <navbar>
      <router-link to="/search" tag="div" class="iconfont icon-sousuo"></router-link>
      <router-link to="/home" tag="span">{{cityinfo.name}}</router-link>
      <router-link to="/login" tag="span">登录 | 注册</router-link>
    </navbar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="var(--color)">
      <van-swipe-item v-for="(item,index) in foodcationlist" :key="index">
        <router-link v-for="items in item" :key="items.id" to="/food" tag="div" class="fooditem">
          <div class="box">
            <img :src="imgbaseUrl + items.image_url" />
            <div class="title">{{items.title}}</div>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- 附件商家 -->
    <section class="nearby">
      <div class="title">
        <div class="iconfont icon-tubiaolunkuo-"></div>
        <span>附件商家</span>
      </div>
      <ul class="list">
        <router-link v-for="item in shoplist" :key="item.id" tag="li" to="/shop">
          <div class="box">
            <img :src="imgBaseUrl + item.image_path" alt />
            <div class="box_right">
              <div class="p1">
                <p class="p_left">
                  <span class="card">品牌</span>
                  <span class="title">效果演示</span>
                </p>
                <p class="p_right">
                  <span class="ticket">保 准 票</span>
                </p>
              </div>
              <div class="p2">
                <p class="p_left">
                  <rate></rate>
                  <span class="score">4.7</span>
                  <span class="sold">月售601单</span>
                </p>
                <p class="p_right">
                  <span class="bule_card">蜂鸟专送</span>
                  <span class="buleshadow_card">准时达</span>
                </p>
              </div>
              <div class="p3">
                <p class="p_left">￥5起送 / 配送费约￥2</p>
                <div class="p_right">2131.4公里 / 22小时33分钟</div>
              </div>
            </div>
          </div>
        </router-link>
      </ul>
    </section>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
import rate from "../components/rate.vue";
export default {
  name: "square",
  data() {
    return {
      //城市经纬度
      cityposition: this.$route.query.geohash,
      //该城市信息
      cityinfo: {},
      //食品分类列表
      foodcationlist: [],
      //商铺列表
      shoplist: [],
      //获取图片域名
      imgbaseUrl: "https://fuss10.elemecdn.com",
      //图片所在域名地址
      imgBaseUrl: "https://elm.cangdu.org/img/"
    };
  },
  mounted() {
    this.getcityinfo();
    this.getfoodcationlist();
    this.getshoplist();
  },
  methods: {
    //获取当前城市信息
    getcityinfo() {
      fetch(`https://elm.cangdu.org/v2/pois/${this.cityposition}`)
        .then(res => res.json())
        .then(res => (this.cityinfo = res));
    },
    //获取食品分类列表
    getfoodcationlist() {
      fetch(`https://elm.cangdu.org/v2/index_entry`)
        .then(res => res.json())
        .then(res => {
          const foodarr = [];
          foodarr.push(res.slice(0, 8));
          foodarr.push(res.slice(8, 16));
          this.foodcationlist = foodarr;
        });
    },
    //获取商铺列表
    getshoplist() {
      fetch(
        `https://elm.cangdu.org/shopping/restaurants?latitude=${this.cityinfo.atitude}&longitude=${this.cityinfo.longitude}`
      )
        .then(res => res.json())
        .then(res => {
          this.shoplist = res;
          console.log(res);
        });
    }
  },
  components: {
    navbar,
    rate
  }
};
</script>

<style scoped lang="scss">
.square-container {
  background-color: var(--qianfail);
  .navbar {
    .iconfont {
      font-size: 0.325rem;
    }
    span {
      font-size: 0.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    span:nth-of-type(1) {
      max-width: 5.625rem;
      font-size: 0.875rem;
    }
  }
  //轮播图
  .my-swipe {
    box-shadow: 0 1px 3px 0 grey;
    .van-swipe-item {
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: white;
      display: flex;
      flex-wrap: wrap;
      height: 8.75rem;
      line-height: 0;
    }
    .fooditem {
      width: calc(100% / 4);
      position: relative;
      .box {
        position: absolute;

        top: 40%;
        left: 50%;
        transform: translate(-50%, -40%);
        img {
          object-fit: fill;
          width: calc(100% / 4);
          width: 2rem;
          height: 2rem;
        }
        .title {
          color: var(--fail);
          margin-top: 0.375rem;
          font-size: 0.1875rem;
          min-width: 2.5rem;
        }
      }
    }
  }
  //附件商家
  .nearby {
    background-color: white;
    width: 100%;
    margin-top: 1rem;
    box-shadow: 0 -1px 3px 0 grey;

    .title {
      display: flex;
      padding: 0.125rem 0.625rem;
      line-height: 1.25rem;
      .iconfont,
      span {
        color: var(--fail);
      }
      span {
        font-size: 0.4375rem;
        margin-left: 0.25rem;
      }
    }
    .list {
      li {
        font-size: .15rem;
        .box {
          display: flex;
          padding: .25rem .375rem;
          
          border-bottom: 1px solid #ccc;
          img {
            width:3.125rem;
            height:3.125rem;
            object-fit: cover;
          }

          .box_right {
            padding-left: .75rem;
            width: 15rem;
            .p1 {
              height: .875rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .p_left {
                display: flex;
                 align-items: center;
                .card {
                  background-color: #ffd930;
                  height: 100%;
                  font-weight: bold;
                }

                .title {
                  font-weight: bold;
                }
              }

              .p_right {
                .ticket {
                  color: var(--fail);
                }
              }
            }

            .p2 {
              display: flex;
              justify-content: space-between;
              .p_left {
                display: flex;
               
                rate {
                }
                .score{
                  display: inline-block;
                }
                .sold {
                }
              }

              .p_right {
                .bule_card {
                }

                .buleshadow_card {
                }
              }
            }

            .p3 {
              .p_left {
              }

              .p_right {
              }
            }
          }
        }
      }
    }
  }
}
</style>