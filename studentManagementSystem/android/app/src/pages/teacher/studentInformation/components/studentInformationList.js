import React, { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text } from "react-native";

import { Card, WingBlank,WhiteSpace  } from '@ant-design/react-native'

import mock from '../mock/mock'

const StudentInformationList = ({navigation}) => {

  const data = mock
  return (
    <ScrollView style={style.container}>
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        {
          data.map((student, index) => (
            <TouchableOpacity style={style.term} key={index}
              key = {index}
              onPress = {
              useCallback(() => {navigation.navigate('StudentInformationDetails',{ gradeList: student.gradeList})}, []) 
            }>
              <Card style={style.card}>
                <Card.Header
                  thumbStyle={style.cardHeader}
                  extra={student.name}
                />
                <Card.Body>
                  <View style={style.contentContainer}>
                    <Text style={style.content}>性别：{student.gender}</Text>
                    <Text style={style.content}>学号：{student.studentID}</Text>
                    <Text style={style.content}>学院：{student.college}</Text>
                  </View>
                </Card.Body>
                <Card.Footer
                  content="年级"
                  extra={student.grade}
                />
              </Card>
              <WhiteSpace size="lg" />
          </TouchableOpacity>
          ))
        }
      </WingBlank>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor:'#f6f6f6',
  },
  card:{
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 2,
    elevation: 4,
  },
  cardHeader:{
    width: 30, 
    height: 30 
  },
  contentContainer:{
    justifyContent:'space-around',
    height:70
  },
  content:{
    marginLeft: 16 
  }
});

export default StudentInformationList;