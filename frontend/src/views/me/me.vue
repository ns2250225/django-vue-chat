<template>
  <div>
    <div class="header">
      <mu-appbar :title='username'>
        <mu-icon-button icon="chevron_left" slot="left" @click="goback" />
        <mu-icon-button icon="expand_more" slot="right"/>
      </mu-appbar>
    </div>
    <div class="content">
      <mu-list>
        <mu-list-item title="个人中心">
          <mu-icon slot="left" value="inbox"/>
        </mu-list-item>
        <mu-list-item title="我的好友">
          <mu-icon slot="left" value="grade"/>
        </mu-list-item>
        <mu-list-item title="我的动态">
          <mu-icon slot="left" value="send"/>
        </mu-list-item>
        <mu-list-item title="设置">
          <mu-icon slot="left" value="drafts"/>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="logout">
      <mu-raised-button @click="logout" label="退出" backgroundColor='grey900' fullWidth/>
    </div>
  </div>
</template>

<script>
import {getUserName, removeUserName} from '../../utils/localStorage'
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
    logout () {
      removeUserName()
      this.$router.push('/login')
    },
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
