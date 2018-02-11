<template>
  <div>
    <div class="content-list">
      <mu-list>
        <mu-sub-header>最近聊天记录</mu-sub-header>
        <mu-list-item title="聊天室1" to='/chat' >
          <mu-avatar src="/static/images/avatar1.jpg" slot="leftAvatar" />
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="聊天室2" to='/chat' >
          <mu-avatar src="/static/images/avatar1.jpg" slot="leftAvatar" />
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="聊天室3" to='/chat' >
          <mu-avatar src="/static/images/avatar1.jpg" slot="leftAvatar" />
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="聊天室4" to='/chat' >
          <mu-avatar src="/static/images/avatar1.jpg" slot="leftAvatar" />
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-list>
        <mu-sub-header>历史聊天记录</mu-sub-header>
        <mu-list-item title="聊天室1">
          <mu-avatar src="/static/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="聊天室2">
          <mu-avatar src="/static/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="footer-nav">
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
      <mu-bottom-nav-item value="home" title="主页" icon="restore" to='/' />
      <mu-bottom-nav-item value="me" title="个人中心" icon="favorite" to='/me' />
      <mu-bottom-nav-item value="about" title="关于" icon="location_on" to='/about' />
    </mu-bottom-nav>
    </div>
  </div>
</template>

<script>
import { getUserName } from '../../utils/localStorage'
export default{
  data () {
    return {
      bottomNav: 'home'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  },
  mounted () {
    if (!getUserName()) {
      this.$router.push('/login')
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.footer-nav {
    position: fixed;
    bottom: 0;
    z-index: 102;
    width: 100%;
}
</style>
