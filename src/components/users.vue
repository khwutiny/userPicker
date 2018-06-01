<template>
    <ul class="container">
      <!--<li v-for="user in users" :key="user" class="display-flex line" @click="toInfo(user.id)"></li>-->
      <li @click="toInfo(id)" class="display-flex line">
        <span class="icon-nantouxiang"></span>
        <span>{{nickName[0]}}</span>
      </li>
      <li @click="toInfo(id)" class="display-flex line">
        <span class="icon-nantouxiang"></span>
        <span>{{nickName[1]}}</span>
      </li>
      <li @click="toInfo(id)" class="display-flex line">
        <span class="icon-nantouxiang"></span>
        <span>{{nickName[2]}}</span>
      </li>
      <li @click="toInfo" class="display-flex line">
        <span class="icon-add">+</span>
        <span>增加一个用户</span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      nickName: [111, 222, 333]
    }
  },
  methods: {
    toInfo (index) {
      this.$router.push({
        path: '/info',
        name: 'UserInfo',
        params: {
          name: this.nickName[index],
          id: ''
        }
      })
    }
  }
}
</script>

<style lang="less">
  @import "../common/style/users.less";
</style>
