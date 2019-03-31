<template>
  <header>
    <div class="logo">这是logo但是我们没有logo</div>
    <nav>
      <div v-for="(item, index) in nav" :key="index">
        <span>
          <router-link :to="item.link">{{item.name}} </router-link>
        </span>
      </div>
    </nav>
    <div class="login" @click="loginHandle">
      {{loginText}}
    </div>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      nav: [
        {
          name: 'index',
          link: '/'
        },
        {
          name: 'pic',
          link: '/abum'
        },
        {
          name: 'aboutUs',
          link: '/about'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      loginText: (state) => {
        if (state.isLogin) {
          return '登出'
        }
        return '登录'
      }
    })
  },
  methods: {
    loginHandle: () => {
      setTimeout(() => {
        console.log(this.isLogin)
        if (this) {
        } else {
          //
        }
      }, 1000)
    },
    ...mapActions({
      checkLogin: 'checkLogin',
      login: 'login',
      logout: 'logout'
    })
  },
  mounted () {
    this.checkLogin()
  }
}
</script>

<style lang="less">
  header {
    overflow: hidden;
  }

  .logo {
    float: left;
    font-size: 12px;
    width: 20%;
  }

  nav {
    float: left;
    width: 80%;
    padding: 0 10px;
    box-sizing: border-box;

    div {
      float: left;
      padding: 20px;
    }
  }
</style>
