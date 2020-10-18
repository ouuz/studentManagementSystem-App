import React, { useState, useCallback } from 'react';
import { StyleSheet, Dimensions, ScrollView, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text } from "react-native";

import { Card, WingBlank,WhiteSpace,List,SwipeAction, Flex  } from '@ant-design/react-native'

import mock from '../mock/mock'
import FileSystem from './fileSystem';

const { width, height } = Dimensions.get('window');
const StudentInformationList = ({navigation}) => {
  const [information,setInformation] = useState(mock)
  const [changeFlag,setChangeFlag] = useState(false)
  const data = mock
  const right = [
    {
      text: '修改',
      onPress: () => console.log('more'),
      style: style.updateBtn,
    },
    {
      text: '删除',
      onPress: () => console.log('delete'),
      style: style.deleteBtn,
    },
  ];

  function getImportData(information) {
    setChangeFlag(!changeFlag)
    setInformation(information)
  }

  return (
    <ScrollView style={style.container}>
      <FileSystem 
        studentNumber={data.length} 
        information={data}
        getImportData={getImportData}
      />
      <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />
        <View style={style.listContainer}>
          {
            information.map((student, index) => (
              <View>
                <SwipeAction
                  key={index}
                  style={style.studentBox}
                  autoClose
                  right={right}
                  left={[{
                      text: '查看成绩',
                      onPress: () => navigation.navigate('StudentInformationDetails',{ stuID: student.studentID }),
                      style: style.readBtn,
                    }]}
                  >
                  <WhiteSpace />
                  <Flex justify="around">
                    <Flex direction="column" justify="around" align="start" style={style.card}>
                      <Text style={style.name}>{student.name}</Text>
                      <Text style={style.college}>{student.college}</Text>
                    </Flex>
                    <Text style={style.studentID}>{student.studentID}</Text>
                  </Flex>
                  <WhiteSpace />
                  <Flex style={style.tagBox} justify="around">
                    <Text style={style.content}>{student.gender}</Text>
                    <Text style={style.content}>{student.grade}</Text>
                    <Text style={style.content}>{student.phone}</Text>
                  </Flex>
                  <WhiteSpace />
                </SwipeAction>
                <WhiteSpace size="lg"/>
              </View>
            ))
          }
        </View>
      </WingBlank>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor:'#f6f6f6',
    flex:1
  },
  studentBox:{
    backgroundColor:'#ffffff',
    borderLeftWidth:width * 0.01,
    borderColor:'#1daa75'
  },
  readBtn:{
    backgroundColor:'rgb(16, 142, 233)', 
    color:'#ffffff'
  },
  updateBtn:{
    backgroundColor:'orange', 
    color:'#ffffff' 
  },
  deleteBtn:{
    backgroundColor:'red', 
    color:'#ffffff' 
  },
  tagBox:{
    width:width * 0.6
  },
  content:{
    backgroundColor:'#ecedef',
    borderRadius:width * 0.025,
    padding:height * 0.01,
  },
  card:{
    height:height * 0.1
  },
  name:{
    fontSize:width * 0.05,
    color:'#525252',
  },
  college:{
    color:'#a2aeae',
    fontSize:width * 0.032
  },
  studentID:{
    color:'#1daa75',
    fontSize:width * 0.04
  }
});

export default StudentInformationList;