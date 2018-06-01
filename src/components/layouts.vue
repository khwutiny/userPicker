<template>
  <section class="container" :class="{'menu-open': menuOpen}">
    <section class="menu">
      <menus></menus> <!--左边的容器-->
    </section>
    <div class="content-overlay" @click="$store.dispatch('updateMenu')"></div>
    <!-- 这个是当页面收缩覆盖在内容上面的模糊层，点击后复原 他可以直接调用vuex actions.js里面的updateMenu方法-->
    <section class="content-container"><!--右边的容器-->
      <router-view></router-view>
    </section>
  </section>
</template>
<script>
import menus from '@/components/menus' // * 导入刚才我们创建的 menus组件
import todo from '@/components/todo' // * 导入刚才我们创建的 menus组件

export default {
  components: { // * 注册menus组件，让其可以在template调用
    menus,
    todo // 新加的
  },
  computed: {
    menuOpen () {
      return this.$store.state.menuOpen
    }
  }
}

</script>
<style lang="less">
  @import '../common/style/layouts.less';
</style>
