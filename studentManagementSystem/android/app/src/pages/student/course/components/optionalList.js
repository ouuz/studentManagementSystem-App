import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import { Radio } from '@ant-design/react-native';
import Common from './common'

const { height } = Dimensions.get('window');
const data = [
  { value: false, label: '否' },
  { value: true, label: '是' },
]

/**
 * @description 可选列表
 * @param { Array } optionalList 可选列表的数据
 * @param { Function } addCourse 选课的功能函数
 */
const OptionalList = ({optionalList, addCourse}) => {
  const [booking,setBooking] = useState(false)

/**
 * @description 是否预订教材的函数式组件（单选）的渲染
 */
  function radio() {
    return(
      <View style={style.booking}>
        {
          data.map(item => (
            <Radio.RadioItem key={item.value} checked={booking == item.value} onChange={ () => { setBooking(item.value)} }>
              {item.label}
            </Radio.RadioItem>
        ))}
      </View>
  )}

  return (
    <Common
      desc="optionalList"
      list={optionalList} 
      countDesc="剩余课程列表"
      operator={addCourse}
      currentCount="3"
      titleBg={require('../img/bg.jpg')}
      radio={radio}
      booking={booking}
    />
  );
};

const style = StyleSheet.create({
  booking:{
    padding:height * 0.02,
    paddingTop:0,
  }
});

export default OptionalList;