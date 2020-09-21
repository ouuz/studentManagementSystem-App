import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import { StyleSheet, View, Text } from "react-native";

import mock from'../mock/mock'

const ShowCourse = () => {

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

  return (
    <View style={style.scheduleColBox}>
        <View style={style.col} key={0}></View>
        { mock[0]["class"].map((day,index) => (
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
  );
};

const style = StyleSheet.create({
  scheduleColBox:{
    flexDirection:'row',
    position:'absolute'
  },
  col:{
    width:50,
    height:630
  },
  courseInformation:{
    fontSize:11,
    color:'#ffffff'
  },
  day:{
    justifyContent:'center',
    alignItems:'center',
    height:47,
  },
});

export default ShowCourse;