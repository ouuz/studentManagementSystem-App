import React, { useState, Component } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text} from "react-native";
import { Pagination,  WingBlank, List, Radio, WhiteSpace, } from '@ant-design/react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient'
import mock from '../mock/mock'

const RadioItem = Radio.RadioItem;
const ListItem = List.Item;
const data = [
  { value: false, label: '否' },
  { value: true, label: '是' },
]
const locale = {
  prevText: '上一个',
  nextText: '下一个',
};

const selectedList = () => {
  const [isChange,setIsChange] = useState(false)
  const [selectedList] = useState(mock[0]["selectedList"])
  const [count] = useState(mock[0]["selectedList"][0]["count"])
  const [pageIndex,setPageIndex] = useState(1)
  let course = selectedList[pageIndex]

  return (
    <SafeAreaView style={style.container}>
      <View style={style.courseContainer}>
        <LinearGradient colors={['#abecd6','#fbed96']} style={style.top}>
          <Text style={style.count}>{count}</Text>
          <Text style={style.illustrativeFont}>已选科目数</Text>
        </LinearGradient>
        <Animatable.View 
          duration={500}
          easing="ease-out"
          style={style.course}
          animation={isChange? 'swing' : 'wobble'}>
          <List style={style.courseDetail}>
            <ListItem extra={course.name} multipleLine>课程名称</ListItem>
            <ListItem extra={course.category} multipleLine>课程类型</ListItem>
            <ListItem extra={course.serialNumber} multipleLine>课程编号</ListItem>
            <ListItem extra={course.credits} multipleLine>学分</ListItem>
            <ListItem extra={course.teacher} multipleLine>任课老师</ListItem>
            <ListItem extra={course.booking ? '是':'否'} multipleLine style={style.booking}>是否需要订购教材：</ListItem>
          </List>
        </Animatable.View>
        <WingBlank size="lg">       
          <WhiteSpace size="lg" />
          <Pagination 
            total={count} 
            current={pageIndex} 
            locale={locale} 
            onChange = { (index) =>{ setIsChange(!isChange);setPageIndex(index); }}
          />
          <WhiteSpace size="lg" />
        </WingBlank>
      </View>
    </SafeAreaView>  
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    padding:10, 
    backgroundColor:'#f6f6f6',
  },
  courseContainer:{
    flex:1,
    justifyContent:'space-around'
  },
  top:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor:'#fff',
    borderBottomWidth:1
  },
  count:{
    fontSize:40,
    color:'#fff'
  },
  illustrativeFont:{
    color:'#999aaa'
  },
  course:{
    flex:3,
    justifyContent:'space-around',
  },
  courseDetail:{
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 2,
    elevation: 4,
    borderWidth:1,
    borderColor:'#ddd'
  },
  booking:{
    borderTopWidth:1,
    borderColor:'#ddd',
  },
});

export default selectedList;