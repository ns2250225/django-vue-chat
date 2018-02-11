<template>
  <div>
    <div class="header">
      <mu-appbar title='关于'>
        <mu-icon-button icon="chevron_left" slot="left" @click="goback" />
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>
    </div>
    <div class="content">
      <mu-list>
        <mu-list-item title="马清雄" describeText="姓名">
          <mu-icon value="face" color="indigo" slot="left"/>
        </mu-list-item>
        <mu-list-item title="http://blog.csdn.net/ns2250225" describeText="技术博客" href="http://blog.csdn.net/ns2250225">
          <mu-icon value="book" color="indigo" slot="left"/>
        </mu-list-item>
        <mu-list-item title="https://github.com/ns2250225" describeText="GitHub" href="https://github.com/ns2250225">
          <mu-icon value="backup" color="indigo" slot="left"/>
        </mu-list-item>
        <mu-list-item title="243027571@qq.com" describeText="邮箱">
          <mu-icon value="subject" color="indigo" slot="left"/>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
import { getUserName } from '../../utils/localStorage'
export default{
  data () {
    return {
      username: ''
    }
  },
  mounted () {
    if (!getUserName()) {
      this.$router.push('/login')
    }
    this.username = getUserName()
  },
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>

<style scoped>
.mu-appbar {
    text-align: center;
    background-color: rgba(0,0,0,.78);
}
</style>
