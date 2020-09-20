import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Text,
  Image
} from "react-native";

const mock = [
  {
    "day":'周一',
    "course":[{ "name":"嵌入式手机终端开发技术","index":1,"classroom":"教3-313","section":3}]
  },
  {
    "day":'周二',
    "course":[{ "name":"数电","index":1,"classroom":"教3-313","section":2},{ "name":"模电","index":3,"classroom":"教3-313","section":2}]
  },
  {
    "day":'周三',
    "course":[]
  },
  {
    "day":'周四',
    "course":[{ "name":"数电","index":3,"classroom":"教3-313","section":2}]
  },
  {
    "day":'周五',
    "course":[{ "name":"数电","index":7,"classroom":"教3-313","section":2}]
  },
  {
    "day":'周六',
    "course":[{ "name":"数电","index":3,"classroom":"教3-313","section":2}]
  },
  {
    "day":'周日',
    "course":[]
  }
]

const Schedule = () => {
  const [row] = [12];
  const [courseList,setCourseList] = useState();
  const [rowList,setRowList] = useState([]);

  const createRows = () => {
    var rows = []
    for(let index = 0;index < row;index++)
      rows.push(
        <View style={style.row} key={index}>
          <View style={style.section}>
            <Text>{index + 1}</Text>
          </View>
        </View>)
    setRowList(rows)
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

  const courseStyle = (index,section) => {
    let colors = ['#c3a6d7','#a9e8e4','#90dcaa','#e8e8b1'],
      color = colors[ Math.floor(Math.random() * 3) ],
      top = index * 47,
      height = section * 46
    return {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: color,
      position:'absolute',
      height:height,
      width:48,
      top:top,
      borderRadius:5,
      padding:1
    }
  }

  useEffect(() => {
    createRows()
    // test()
  },[]);
   
  return (
    <View style={style.scheduleContainer}>
      <View style={style.scheduleRowBox}>
        <View style={style.row} key={0}>
        </View>
        { rowList.map((item,index) => ( <View key={index}>{item}</View> )) }
      </View>
      <View style={style.scheduleColBox}>
        <View style={style.col} key={0}></View>
        { mock.map((day,index) => (
          <View style={style.col} key={index}>
            <View style={style.day}>
              <Text>{day.day}</Text>
            </View>
            {day.course.map(course => 
              <View style={courseStyle(course.index,course.section)} key={course.index}>
                <Text style={style.courseInformation}>{course.name}</Text>
                <Text style={style.courseInformation}>{course.classroom}</Text>
              </View>)}
          </View>
        ))}
      </View>
    </View>  
  );
};

const style = StyleSheet.create({
  scheduleContainer:{
    position:'relative'
  },
  scheduleRowBox:{
    backgroundColor:'#61b0d4',
  },
  row:{
    backgroundColor:'#fff',
    borderStyle: 'dotted',
    borderBottomWidth:1,
    borderColor:'#ddd',
    height:47
  },
  section:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width: 50,
    backgroundColor:'#dddddd',
    height:47
  },
  day:{
    justifyContent:'center',
    alignItems:'center',
    height:47,
  },
  scheduleColBox:{
    flex:1,
    flexDirection:'row',
    position:'absolute',
  },
  col:{
    width:50,
    height:630
  },
  courseInformation:{
    fontSize:11,
    color:'#ffffff'
  }
});

export default Schedule;