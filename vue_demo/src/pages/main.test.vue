<template>
  <div class="hello">
    <p>{{pageTitle}}</p>
    <p>just for fun</p>
    <div id="demo1" class="auto-test" v-bind:title="message">
      demo1 我只试一次
    </div>
    <div class="todo" v-bind:class="classObject">
      <ul>
        <li v-for="(todo, index) in todos" v-bind:key="index">
          {{todo}}
        </li>
      </ul>
    </div>
    <div class="demo3">
      <button v-on:click="reload">刷新页面</button>
    </div>
    <div class="demo4">
      <h1 v-if="isActive">Vue is awesome!</h1>
      <h1 v-else>Oh no 😢</h1>
    </div>
    <div class="demo5">
      <ul>
        <li v-for="(value, key, index) in userMsg" v-bind:key="index">
          {{index + 1}}. {{key}} : {{value}}
        </li>
      </ul>
    </div>
    <div>
      <button v-on:click="handel">神奇的按钮</button>
    </div>
    <div class="dome6">
      <testComponents />
    </div>
    <div class="dome7">
      <TodoList />
    </div>
    <div class="dome8">
      <!-- 插槽 -->
      <SlotTest />
    </div>
    <div class="demo9">
      <!-- vuex -->
      {{count}}
    </div>
  </div>
</template>

<script>
import testComponents from './testComponents'
import TodoList from './TodoList'
import SlotTest from './SlotTest'
import {mapState} from 'vuex'
export default {
  components: {
    testComponents,
    TodoList,
    SlotTest
  },
  data () {
    return {
      pageTitle: '这里其实这是一个用来练手的页面',
      message: '页面加载于 ' + new Date().toLocaleString(),
      todos: [
        '把基础知识快速过一遍',
        '在网上找个例子好好看一遍',
        '把百度云APP给搞一下',
        '学习优化相关的知识丰富项目'
      ],
      isActive: true,
      active: {
        color: 'red'
      },
      userMsg: {
        name: 'jiao'
      }
    }
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive
      }
    },
    // count () {
    //   return this.$store.state.count
    // }
    ...mapState([
      'count'
    ])
  },
  methods: {
    reload: function () {
      this.todos = []
      const timer = setTimeout(() => {
        clearTimeout(timer)
        location.reload()
      }, 500)
    },
    handel: function () {
      console.log(this.userMsg.name)
      this.userMsg = Object.assign({}, this.userMsg, {
        age: '24'
      })
      this.$store.commit('increment')
    }
  }
}
</script>
