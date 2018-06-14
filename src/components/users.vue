<template>
  <div class="container">
  <div class="head">选择角色</div>
  <ul>
      <li v-for="user in users" :key="user.id" class="line" @click="toInfo(user)">
        <span v-if="user.sex == 'female'" class="icon-nvtouxiang"></span>
        <span v-else-if="user.sex == 'male'" class="icon-nantouxiang"></span>
        <span class="user-content">{{user.userName}}</span>
      </li>
      <div @click="toInfo" class="button">
        <span class="icon-icon02 add-logo"></span>
        <span class="add-text">增加新用户</span>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  created: function () {
    this.getUser()
  },
  watch: {
    'router' () {
      this.getUser()
    }
  },
  methods: {
    getUser () {
      const _that = this
      const url = `${this.$API}/getUsers`
      this.$http.get(url).then(function (res) {
        _that.users = res.data
      })
    },
    toInfo (user) {
      this.$router.push({
        path: '/info',
        name: 'UserInfo',
        query: {
          id: user.id
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import "../common/style/users.less";
</style>
