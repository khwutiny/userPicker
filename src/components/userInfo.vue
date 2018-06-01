<template>
  <div>
    <div class="container">
      <div class="display-flex line">
        <span class="info-id">昵称</span>
        <input  v-model="nickName"/>
      </div>
      <div @click="pickerShow('birth')" class="display-flex line">
        <span class="info-id">生日</span>
        <span>{{dataView['year'].value}}/{{dataView['month'].value}}/{{dataView['day'].value}}</span>
      </div>
      <div @click="pickerShow('height')" class="display-flex line">
        <span class="info-id">身高</span>
        <span >{{dataView['height'].value}}CM</span>
      </div>
      <div @click="pickerShow('weight')" class="display-flex line">
        <span class="info-id">体重</span>
        <span>{{dataView['weight'].value}}KG</span>
      </div>
    </div>

    <footer v-show='isTimePickerShow'>
      <div class="empty" @click="pickerHide"></div>
      <time-picker :dataView="dataView" :currentList="Array.from(currentList)"></time-picker>
    </footer>
  </div>
</template>

<script>
import TimePicker from '@/components/TimePicker'
const date = new Date()
let dataView = {
  'year': {
    'value': date.getFullYear()
  },
  'month': {
    'value': date.getMonth() + 1
  },
  'day': {
    'value': date.getDate()
  },
  'weight': {
    'value': 60
  },
  'height': {
    'value': 170
  }
}
export default {
  components: {TimePicker},
  data () {
    return {
      isTimePickerShow: false,
      nickName: 'khwutiny',
      dataView: dataView,
      currentList: []
    }
  },
  methods: {
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
