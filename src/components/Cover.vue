<template lang="html">

  <div class="cover">
    <div class="bar">
      <div class="nav">
        <div class="l">
          <img src="../assets/img/logo-.png" alt="">
        </div>

        <div class="r" @click="showMenu">
          <span>MENU</span><img src="../assets/img/caidan-.png" alt="">
        </div>
      </div>
    </div>

    <div class="cover-mid">
      <h2>让采购变得更简单</h2>
      <p>睿采中国采购经理人联合会</p>
    </div>

    <div class="cover-drop">
      <img src="../assets/img/arrow.png" alt="" @click="showMore()">
    </div>

    <transition name="fade">
      <RightMenu v-if="show" :hide-menu="hideMenu"></RightMenu>
    </transition>

  </div>

</template>

<script>
import RightMenu from '../components/Menu'

export default {
  components: {
    RightMenu
  },

  data () {
    return {
      show: false
    }
  },

  methods: {
    showMenu () {
      this.show = true
    },

    hideMenu () {
      this.show = false
    }
  }
};
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .cover {
    background: url(../assets/img/banner-.jpg) no-repeat center;
    background-size: cover;
    height: 100%;
    width: 100%;

    .cover-drop {
      position: absolute;
      bottom: 5%;
      left: 0;
      right: 0;
      margin: auto;
      height: 100px;
      text-align: center;
      transition: all 2s;

      img {
        animation: drop 2s infinite;
        cursor: pointer;
      }

    }

    @keyframes drop {
      0% {
        opacity: 1;
        transform: translateY(0px);
      }
      100% {
        opacity: 0;
        transform: translateY(20px);
      }
    }

    .cover-mid {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      height: 150px;
      text-align: center;
      color: #fff;
      letter-spacing: 5px;

      h2 {
        font-size: 66px;
        margin-bottom: 36px;
      }

      p {
        font-size: 30px;
      }
    }

    .bar {
      width: 100%;
      height: 70px;
      border-bottom: 2px solid rgba(255,255,255, 0.1);

      .nav {
        width: 1200px;
        margin: 0 auto;
        font-size: 16px;

        span {
          color: #fff;
          line-height: 70px;
          letter-spacing: 2px;
          margin-right: 10px;
          cursor: pointer;
        }

        img {
          cursor: pointer;
        }
      }
    }
  }
</style>
