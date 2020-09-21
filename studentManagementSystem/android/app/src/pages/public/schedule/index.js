import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from "react-native";

import Setting from './components/setting'
import ShowCourse from './components/showCourse'
import {SafeAreaView} from 'react-navigation'

// import ModalDropdown from 'react-native-modal-dropdown';

const Schedule = () => {
  const [ifShowSetting,setIfShowSetting] = useState(style.hideSettings)
  const [row] = [12];
  const [rowList,setRowList] = useState([]);
  
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
    let ifShow = ifShowSetting == style.hideSettings ? style.showSettings : style.hideSettings
    setIfShowSetting(ifShow)
  }

  useEffect(() => {
    // test()
    createViews(row,setRowList)
  },[]);
   
  return (
    <SafeAreaView style={style.scheduleContainer}>
      <ScrollView style={style.scrollContainer}>
        <View style={ifShowSetting}><Setting /></View>
        <View style={style.scheduleRowBox}>
          <View style={style.row} key={0}>
            <TouchableOpacity onPress={showSwitchWeeks}>
              <Image source={require('../../student/img/user.png')}></Image>
            </TouchableOpacity>
          </View>
          { rowList.map((item,index) => ( 
            <View style={style.row} key={index}>
              <View style={style.section}>{item}</View>
            </View>
          ))}
          <ShowCourse />
        </View>
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
  hideSettings:{
   transform:[{translateY:-100}],
   height:0
  },
  showSettings:{
    transform:[{translateY:0}],
    height:100
  },
  row:{
    backgroundColor:'#fff',
    borderStyle: 'dotted',
    borderBottomWidth:1,
    borderColor:'#ddd',
    height:47
  },
  section:{
    justifyContent:'center',
    alignItems:'center',
    width: 50,
    backgroundColor:'#dddddd',
    height:47
  }
});

export default Schedule;