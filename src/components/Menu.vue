<template lang="html">
  <div class="">

    <div class="menumask" @click="hideMenu()">
    </div>

    <div class="menubox">
      <img src="../assets/img/logo-heng.png" alt="">
      <ul>
        <router-link :to="item.link" tag="li" v-for="item in nav">
          <span>
            {{ item.title }}
          </span>
        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
import { nav } from "../info.json"

export default {
  data() {
    return {
      nav:[]
    };
  },
  created () {
    this.nav = nav
  },
  methods: {
    
  },
  props: [ 'hideMenu' ]
};
</script>

<style lang="scss">
.menumask {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
}
.menubox {
  position: absolute;
  top: 0;
  right: 10%;
  width: 360px;
  background: #e7e7e8;
  height: 100%;
  z-index: 999;
  text-align: center;

  img {
    margin-top: 60px;
    margin-bottom: 45px;
  }

  .router-link-active {
    color: #000;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      width: 40px;
      height: 1px;
      background: #000;
      right: 0;
      bottom: 0;
    }
  }

  ul {
    width: 260px;
    margin: 0 auto;
  }

  li {
    text-align: right;
    font-size: 20px;
    color: #999;
    margin-bottom: 30px;
    padding-bottom: 3px;
  }

  span {
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }


}
</style>
