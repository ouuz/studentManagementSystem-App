import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import { StyleSheet, View, Text, Dimensions } from "react-native";

import mock from'../mock/mock'

const { width, height } = Dimensions.get('window');

const ShowCourse = () => {

  const courseStyle = (index,section) => {
    let colors = ['#c3a6d7','#fe87b4','#16ad90','#539ce1'],
      color = colors[ Math.floor(Math.random() * colors.length) ],
      top = index * height / 14,
      sectionHeight = section * height / 14.4
    return {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: color,
      position:'absolute',
      height:sectionHeight,
      width:width * 0.12,
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
    width:width * 0.125,
    height:height
  },
  courseInformation:{
    fontSize:8,
    color:'#ffffff',
  },
  day:{
    justifyContent:'center',
    alignItems:'center',
    height:height / 14,
  },
});

export default ShowCourse;