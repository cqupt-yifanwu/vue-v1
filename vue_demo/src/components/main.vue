<template>
  <div class="hello">
    <p>{{pageTitle}}</p>
    <p>just for fun</p>
    <div id="demo1" class="auto-test" v-bind:title="message">
      demo1 我只试一次
    </div>
    <div class="todo">
      <ul>
        <li v-for="todo in todos">
          {{todo}}
        </li>
      </ul>
    </div>
    <div class="demo3">
      <button v-on:click="reload">刷新页面</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      pageTitle: '这里其实这是一个用来练手的页面',
      message: '页面加载于 ' + new Date().toLocaleString(),
      todos: [
        '把基础知识快速过一遍',
        '在网上找个例子好好看一遍',
        '把百度云APP给搞一下',
        '学习优化相关的知识丰富项目'
      ]
    }
  },
  methods: {
    reload: function () {
      this.todos = []
      const timer = setTimeout(() => {
        clearTimeout(timer)
        location.reload()
      }, 500)
    }
  }
}
</script>
