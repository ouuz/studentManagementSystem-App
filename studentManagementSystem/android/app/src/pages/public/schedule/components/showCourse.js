import React from 'react';
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { Flex } from '@ant-design/react-native';
import mock from'../mock/mock'

const { width, height } = Dimensions.get('window');

const ShowCourse = ({week, term}) => {

  const courseStyle = (index,section) => {
    let colors = ['#c3a6d7','#fe87b4','#16ad90','#539ce1'],
      color = colors[ Math.floor(Math.random() * colors.length) ],
      top = index * height / 14,
      sectionHeight = section * height / 14.6
    return {
      backgroundColor: color,
      position:'absolute',
      height:sectionHeight,
      width:width * 0.115,
      top:top,
      borderRadius:width * 0.015,
      padding:1,
    }
  }

  const courseList = mock[0][term]["class"]

  return (
    <Flex style={style.scheduleColBox}>
        <View style={style.col} key={0}></View>
        { 
          courseList.map((day,index) => (
            <View style={style.col} key={index}>
              <Flex style={style.dayLabel} justify="center">
                <Text>{day.day}</Text>
              </Flex>
              {
                day.course.map(course => {
                  if(course.startWeek <= week && week <= course.endWeek && ( course.double == '' || week % 2 == course.double )){
                    return (
                      <Flex justify="center" direction="column" style={courseStyle(course.index,course.section)} key={course.index}>
                        <View style={{padding:3}}>
                          <Text numberOfLines={3}  style={style.courseInformation}>{course.name}</Text>
                          <Text style={style.courseInformation}>{course.classroom}</Text>
                        </View>
                      </Flex>)
                    }
                  }
                )
              }
            </View>
        ))}
      </Flex>
  );
};

const style = StyleSheet.create({
  scheduleColBox:{
    position:'absolute'
  },
  col:{
    width:width * 0.125,
    height:height
  },
  courseInformation:{
    fontSize:width * 0.026,
    color:'#ffffff',
    textAlign:"center",
    textAlignVertical:"center"
  },
  dayLabel:{
    height:height / 14,
    backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderColor:'#dddddd'
  },
});

export default ShowCourse;