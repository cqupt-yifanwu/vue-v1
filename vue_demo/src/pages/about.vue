<template>
  <main>
    关于
  </main>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'initdata'
    ])
  },
  methods: {
    ...mapActions({
      readMock: 'about/readMock'
    })
  },
  mounted () {
    this.readMock()
  }
}
</script>
