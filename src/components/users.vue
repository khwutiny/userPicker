<template>
  <div class="container">
  <div class="head">选择角色</div>
  <ul>
      <li v-for="user in users" :key="user.user_id" class="line" @click="toInfo(user)">
        <span v-if="user.sex == 0" class="icon-nvtouxiang"></span>
        <span v-else-if="user.sex == 1" class="icon-nantouxiang"></span>
        <span class="user-content">{{user.user_name}}</span>
      </li>
      <li @click="toInfo" class="line">
        <span class="add-logo">+</span>
        <span class="add-text">增加一个用户</span>
      </li>
    </ul>
  </div>
</template>

<script>
import global_ from '@/components/Golbal'// 引用文件
export default {
  name: 'users',
  data () {
    return {
      users: global_.users
    }
  },
  methods: {
    toInfo (user) {
      this.$router.push({
        path: '/info',
        name: 'UserInfo',
        query: {
          id: user.user_id
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import "../common/style/users.less";
</style>
