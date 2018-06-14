<template>
  <div class="container">
  <div class="head">选择角色</div>
  <ul>
      <li v-for="user in users" :key="user.id" class="line" @click="toInfo(user)">
        <span v-if="user.userSex == 'female'" class="icon-nvtouxiang"></span>
        <span v-else-if="user.userSex == 'male'" class="icon-nantouxiang"></span>
        <span class="user-content">{{user.userName}}</span>
      </li>
      <li @click="toInfo" class="line">
        <span class="add-logo">+</span>
        <span class="add-text">增加一个用户</span>
      </li>
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
