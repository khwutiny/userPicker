<template>
  <div class="container">
    <div class="head">编辑信息</div>
    <ul>
      <li class="line">
        <span class="info-id">昵称</span>
        <input class="info-content" v-model="nickName"/>
        <span class="info-logo"><em style="visibility: hidden">></em></span>
      </li>
      <li @click="pickerShow('birth')" class="line">
        <span class="info-id">生日</span>
        <span class="info-content" v-if="dataView['year'].value">{{dataView['year'].value}}.{{dataView['month'].value}}.{{dataView['day'].value}}</span>
        <span class="info-content" v-else>生日</span>
        <span class="info-logo"><em>></em></span>
      </li>
      <li @click="pickerShow('height')" class="line">
        <span class="info-id">身高</span>
        <span class="info-content" v-if="dataView['height'].value">{{dataView['height'].value}}厘米</span>
        <span class="info-content" v-else>身高</span>
        <span class="info-logo"><em>></em></span>

      </li>
      <li @click="pickerShow('weight')" class="line">
        <span class="info-id">体重</span>
        <span class="info-content" v-if="dataView['weight'].value">{{dataView['weight'].value}}公斤</span>
        <span class="info-content" v-else>体重</span>
        <span class="info-logo"><em>></em></span>
      </li>
    </ul>
    <footer class="footer" @click="setInfoById">保存</footer>
    <footer  v-show='isTimePickerShow'>
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
      nickName: '',
      id: '',
      index: ''
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
            'value': user.birth.split('.')[0]
          },
          'month': {
            'value': user.birth.split('.')[1]
          },
          'day': {
            'value': user.birth.split('.')[2]
          },
          'weight': {
            'value': user.weight
          },
          'height': {
            'value': user.height
          }
        }
      } else {
        dataView = {
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
      }
      this.dataView = dataView
    },
    getInfoById (id) {
      const _users = this.users
      for (let i = 0; i < _users.length; i++) {
        if (id === _users[i].user_id) {
          this.index = i
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
    },
    setInfoById () {
      if (this.index === '') {
        this.index = this.users.length
        this.id = Math.random()
      }
      this.users[this.index] = {
        user_id: this.id,
        user_name: this.nickName,
        sex: 1,
        birth: `${dataView['year'].value}.${dataView['month'].value}.${dataView['day'].value}`,
        weight: dataView['weight'].value,
        height: dataView['height'].value
      }
      this.$router.push({
        path: '/user',
        name: 'users'
      })
    }
  }
}
</script>

<style>
@import "../common/style/userInfo.less";
</style>
