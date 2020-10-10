import React, { useState, useEffect,  } from 'react';
import axios from 'react-native-axios'

import { DeviceEventEmitter } from 'react-native';

import { Easing, StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, Animated, Dimensions } from "react-native";

import Setting from './components/setting'
import ShowCourse from './components/showCourse'
import {SafeAreaView} from 'react-navigation'

const { width, height } = Dimensions.get('window');

const Schedule = () => {
  const [row] = [12];
  const [rowList,setRowList] = useState([]);
  const [settingPosition,setSettingPosition] = useState(-100);
  const [ifShowSetting] = useState(new Animated.Value(settingPosition));
  const [week,setWeek] = useState(1);
  const [term,setTerm] = useState("2019-2020 第一学期");

  const createViews = (num,func) => {
    let arr = []
    for(let index = 0;index< num;index++)
      arr.push(<Text>{index + 1}</Text>)
    func(arr)
  }

  const test = () => {
    axios.get('https://mock.yonyoucloud.com/mock/15650/student/getSchedule')
      .then(res => {
        setCourseList(res.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const showSwitchWeeks = () => {
    settingPosition == -100 ? setSettingPosition(0) : setSettingPosition(-100);
    Animated.timing(ifShowSetting, {
      toValue: settingPosition,
      duration:300,
      useNativeDriver: true, 
      easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)
    }).start();
  }

  useEffect(() => {
    // test()
    createViews(row,setRowList)
    DeviceEventEmitter.addListener('changeWeek',(week) => {setWeek(week)})
    DeviceEventEmitter.addListener('changeTerm',(term) => {setTerm(term)})
  },[]);
   
  return (
    <SafeAreaView style={style.scheduleContainer}>
      <ScrollView style={style.scrollContainer}>
        <Animated.View style={{transform:[{translateY:ifShowSetting}]}}><Setting /></Animated.View>
        <Animated.View style={[style.scheduleRowBox,{transform:[{translateY:ifShowSetting}]}]}>
          <View style={style.row} key={0}>
            <TouchableOpacity onPress={showSwitchWeeks} style={style.setting}>
              <Image source={require('../../public/img/setting.png')}/>
            </TouchableOpacity>
          </View>
          { rowList.map((item,index) => ( 
            <View style={style.row} key={index}>
              <View style={style.section}>{item}</View>
            </View>
          ))}
          <ShowCourse week={week} term={term}/>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  scheduleContainer:{
    flex:1
  },
  scrollContainer:{
    position:'relative',
    flex:1
  },
  row:{
    backgroundColor:'#fff',
    borderStyle: 'dotted',
    borderBottomWidth:1,
    borderColor:'#ddd',
    height:height / 14
  },
  section:{
    justifyContent:'center',
    alignItems:'center',
    width: width * 0.12,
    backgroundColor:'#dddddd',
    height:height / 14
  },
  setting:{
    justifyContent:'center',
    alignItems:'center',
    width: 50,
    height:47
  },
});

export default Schedule;