import React, { useState, useEffect,  } from 'react';
import axios from 'react-native-axios'

import { DeviceEventEmitter,SafeAreaView } from 'react-native';

import { Easing, StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, Animated, Dimensions } from "react-native";
import { Flex } from '@ant-design/react-native';
import Setting from './components/setting'
import ShowCourse from './components/showCourse'

const { width, height } = Dimensions.get('window');

const Schedule = () => {
  const row = 12;
  const [settingPosition,setSettingPosition] = useState(-100);
  const [ifShowSetting] = useState(new Animated.Value(settingPosition));
  const [week,setWeek] = useState(1);
  const [term,setTerm] = useState("2019-2020 第一学期");

  const test = () => {
    axios.get('https://mock.yonyoucloud.com/mock/15650/student/getSchedule')
      .then(res => {
        console.log(res.data)
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
     test()
    setSettingPosition(0)
    DeviceEventEmitter.addListener('changeWeek',(week) => {setWeek(week);})
    DeviceEventEmitter.addListener('changeTerm',(term) => {setTerm(term);})
  },[]);
   
  return (
    <SafeAreaView style={style.scheduleContainer}>
      <ScrollView style={style.scrollContainer}>
        <Animated.View style={{transform:[{translateY:ifShowSetting}]}}>
          <Setting />
        </Animated.View>
        <Animated.View style={{transform:[{translateY:ifShowSetting}]}}>
          <TouchableOpacity onPress={showSwitchWeeks} style={style.setting}>
            <Image source={require('../../public/img/setting.png')} />
          </TouchableOpacity>
          {(()=>{
              let arr = []
              for(let index = 0;index < row;index++)
                arr.push(
                  <View style={style.row} key={index}>
                    <Flex justify="center" style={style.sectionLabel}>
                      <Text>{index + 1}</Text>
                    </Flex>
                  </View>)
              return arr
          })()}
          <ShowCourse week={week} term={term}/>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
};

const common = {
  rowHeight: height / 14,
  rowWidth: width * 0.12
}
const style = StyleSheet.create({
  scheduleContainer:{
    flex:1
  },
  scrollContainer:{
    position:'relative',
    flex:1
  },
  row:{
    backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderColor:'#dddddd',
    height:common.rowHeight
  },
  sectionLabel:{
    width:common.rowWidth,
    height:common.rowHeight,
    backgroundColor:'#eceaea',
  },
  setting:{
    justifyContent:'center',
    alignItems:'center',
    width:common.rowWidth,
    height:common.rowHeight,
    backgroundColor:'#f6f6f6',
    paddingTop:2
  },
});

export default Schedule;