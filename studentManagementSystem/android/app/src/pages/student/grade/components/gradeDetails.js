import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import {SafeAreaView,StyleSheet, View, Text, ScrollView} from "react-native";

const GradeDetails = ({ navigation }) => {

  const { params } = navigation.state;

  return (
      <SafeAreaView style={style.safeContainer}>
        <ScrollView style={style.gradeListContainer}>
         {
           params.gradeList.map((course, index) => (
            <View style={style.gradeList}>
              <View style={style.gradeLeft}>
                <Text style={style.courseName}>{course.name}</Text>
                <Text>编号：{course.serialNumber} 学分：{course.credits}</Text>
                {course.grade.map(item => (<Text>成绩：{item.level}({item.category})</Text>))}
              </View>
              <View style={style.gradeRight}>
                <Text style={style.GPA}>{course.GPA}</Text>
              </View>
            </View>
           ))
         }
      </ScrollView>
     </SafeAreaView> 
  )
}


const style = StyleSheet.create({
  safeContainer:{
    flex:1,
  },
  gradeListContainer:{
    flex:1,
    padding:15,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 2,
    elevation: 4,
  },
  gradeList:{
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    flexDirection:'row',
    justifyContent:'space-between',
    minHeight:130,
    marginBottom:5,
    padding:15
  },
  gradeLeft:{
    justifyContent:'space-around'
  },
  courseName:{
    fontSize:18
  },
  gradeRight:{
    justifyContent:'center',
    alignItems:'center',
  },
  GPA:{
    fontSize:20
  }
});

export default GradeDetails;