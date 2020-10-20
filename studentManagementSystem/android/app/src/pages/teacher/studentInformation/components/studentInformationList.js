import React, { useState, useCallback } from 'react';
import { StyleSheet, Dimensions, ScrollView, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text } from "react-native";

import { Card, WingBlank,WhiteSpace,List,SwipeAction, Flex, InputItem,Button, Toast, Provider} from '@ant-design/react-native'

import mock from '../mock/mock'
import FileSystem from './fileSystem';

const { width, height } = Dimensions.get('window');

const StudentInformationList = ({navigation}) => {
  const [informationList,setInformationList] = useState(mock)
  const [changeFlag,setChangeFlag] = useState(false)
  const [visible,setVisible] = useState(false)
  const [deleteFlag,setDeleteFlag] = useState(false)
  const [btnStatus,setBtnStatus] = useState('')
  const [name,setName] =useState('')
  const [gender,setGender] =useState('')
  const [grade,setGrade] =useState('')
  const [studentID,setStudentID] =useState('')
  const [college,setCollege] =useState('')
  const [phone,setPhone] = useState('')
  
  function getImportData(informationList) {
    setChangeFlag(!changeFlag)
    setInformationList(informationList)
  }

  function openInformationList() {
    setName('');
    setGender('')
    setGrade('')
    setStudentID('')
    setCollege('')
    setPhone('')
    setVisible(!visible)
    setBtnStatus('add')
  }

  function operator() {
    btnStatus === "add" ?  addInformation() : updateInformation()
  }

  function integration() {
    return {
      "name": name,
      "gender": gender,
      "grade": grade,
      "studentID": studentID,
      "college": college,
      "phone": phone
    }
  }

  function addInformation() {
    if(!!name && !!gender && !!grade && !!studentID &&!!college && !!phone){
      let information = integration()
      let list = informationList;
      list.push(information)
      setInformationList(list)
      setVisible(false)
      console.log(list)
    }
    else Toast.fail('你还有信息没填写完成噢~');
  }

  function updateInformation() {
    let information = integration()
    let list = informationList;
    let index = list.findIndex(item => item.studentID === information.studentID)
    index ? list.splice(index - 1,1,information) :list.splice(0,1,information)
    setInformationList(list)
    if(!!name && !!gender && !!grade && !!studentID &&!!college && !!phone)
      setVisible(false)
    else Toast.fail('你还有信息没填写完成噢~');
  }

  function deleteInformation(studentID) {
    let list = informationList;
    let index = list.findIndex(item => item.studentID === studentID)
    index ? list.splice(index - 1,1) :list.splice(0,1)
    setInformationList(list)
    setDeleteFlag(!deleteFlag)
  }

  return (
    <View style={style.container}>
      <ScrollView style={style.listContainer}>
        <FileSystem 
          studentNumber={informationList.length} 
          informationList={informationList}
          getImportData={getImportData}
        />
        <WingBlank size="lg" >
          <WhiteSpace size="lg" />
          <WhiteSpace size="lg" />
          <View style={style.listContainer}>
            {
              informationList.map((student, index) => (
                <View>
                  <SwipeAction
                    key={index}
                    style={style.studentBox}
                    autoClose
                    right={[
                      {
                        text: '修改',
                        onPress: () => {
                          setVisible(true);
                          setName(student.name);
                          setGender(student.gender)
                          setGrade(student.grade)
                          setStudentID(student.studentID)
                          setCollege(student.college)
                          setPhone(student.phone)
                        },
                        style: style.updateBtn,
                      },
                      {
                        text: '删除',
                        onPress: () => { deleteInformation(student.studentID)},
                        style: style.deleteBtn,
                      },
                    ]}
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
      <View style={style.addBtnBox}>
        <TouchableOpacity onPress={openInformationList}>
          <Image source={require('../img/add.png')}/>
        </TouchableOpacity>
      </View>
      {
        visible?
       <WingBlank style={style.addBox}>
          <List renderHeader={'新增的学生信息'} >
            <InputItem clear value={name} onChange={value => setName(value)} placeholder="学生姓名">名字</InputItem>
            <InputItem clear value={gender} onChange={value => setGender(value)} placeholder="性别">性别</InputItem>
            <InputItem clear value={grade} onChange={value => setGrade(value)} placeholder="年级">年级</InputItem>
            <InputItem clear value={studentID} onChange={value => setStudentID(value)} placeholder="学号">学号</InputItem>
            <InputItem clear value={college} onChange={value => setCollege(value)} placeholder="学院">学院</InputItem>
            <InputItem clear value={phone} onChange={value => setPhone(value)} placeholder="手机号" type="phone">手机号</InputItem>
            <List.Item>
              <Button type="primary" onPress={operator}>确定</Button>
            </List.Item>
        </List>
        </WingBlank> : null
      }
    </View>

  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    position:'relative'
  },
  listContainer:{
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
  },
  addBtnBox:{
    position:'absolute',
    top:height * 0.75,
    right:width * 0.05,
    backgroundColor:'#1daa75',
    borderRadius:50,
    width:width * 0.15,
    height:width * 0.15,
    justifyContent:'center',
    alignItems:'center',
  },
  addBox:{
    position:'absolute',
    top:height * 0.2,
    width:width * 0.93,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    elevation: 4,
    borderWidth:1,
    borderColor:'#ddd'
  }
});

export default StudentInformationList;