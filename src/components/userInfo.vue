<template>
  <div>
    <div class="head">编辑信息</div>
    <div class="container bg">
      <div class="display-flex line">
        <span class="info-id">昵称</span>
        <input  v-model="nickName"/>
      </div>
      <div @click="pickerShow('birth')" class="display-flex line">
        <span class="info-id">生日</span>
        <span class="info-content" v-if="dataView['weight'].value">{{dataView['year'].value}}/{{dataView['month'].value}}/{{dataView['day'].value}}</span>
      </div>
      <div @click="pickerShow('height')" class="display-flex line">
        <span class="info-id">身高</span>
        <span class="info-content" v-if="dataView['weight'].value">{{dataView['height'].value}}CM</span>
      </div>
      <div @click="pickerShow('weight')" class="display-flex line">
        <span class="info-id">体重</span>
        <span class="info-content" v-if="dataView['weight'].value">{{dataView['weight'].value}}KG</span>
      </div>
    </div>
    <footer style="bottom:0;position: absolute;width:100%;" v-show='isTimePickerShow'>
      <div class="empty" @click="pickerHide"></div>
      <time-picker :dataView="dataView" :currentList="Array.from(currentList)"></time-picker>
    </footer>
  </div>
</template>

<script>
import TimePicker from '@/components/TimePicker'
import global_ from '@/components/Golbal'// 引用文件
let dataView = {
  'year': {
    'value': ''
  },
  'month': {
    'value': ''
  },
  'day': {
    'value': ''
  },
  'weight': {
    'value': ''
  },
  'height': {
    'value': ''
  }
}
export default {
  components: {TimePicker},
  data () {
    return {
      isTimePickerShow: false,
      dataView: dataView,
      currentList: [],
      users: global_.users,
      nickName: ''
    }
  },
  mounted: function () {
    this.getParams()
  },
  methods: {
    getParams () {
      // 取到路由带过来的参数
      let id = this.$route.query.id
      // 将数据放在当前组件的数据内
      if (id !== '' && id !== undefined) {
        this.id = id
        let user = this.getInfoById(id)
        this.nickName = user.user_name
        dataView = {
          'year': {
            'value': user.birth.split('/')[0]
          },
          'month': {
            'value': user.birth.split('/')[1]
          },
          'day': {
            'value': user.birth.split('/')[2]
          },
          'weight': {
            'value': user.weight
          },
          'height': {
            'value': user.height
          }
        }
        this.dataView = dataView
      }
    },
    getInfoById (id) {
      const _users = this.users
      for (let i = 0; i < _users.length; i++) {
        if (id === _users[i].user_id) {
          return _users[i]
        }
      }
    },
    pickerShow (type) {
      this.isTimePickerShow = true
      if (type === 'birth') {
        this.currentList = ['year', 'month', 'day']
      } else {
        this.currentList = [type]
      }
    },
    pickerHide () {
      this.isTimePickerShow = false
    }
  }
}
</script>

<style>
@import "../common/style/userInfo.less";
</style>
