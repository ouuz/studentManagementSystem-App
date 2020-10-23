import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Image, Text } from "react-native";
import { WingBlank, WhiteSpace,Flex, Button,Toast, Provider } from '@ant-design/react-native'
import studentInformationList from '../studentInformation/mock/mock'
import schedule from '../../public/schedule/mock/mock'
import user from '../../public/login/mock/mock'
import grade from '../../student/grade/mock/mock'

var RNFS = require('react-native-fs');
const { width, height } = Dimensions.get('window');

/**
 * @description 导出文件
 * @param { String } targetName 需要导出的文件名
 * @param { Array } content 需要导出的数据
 */
function exportFile(targetName,content) {
  const path = `${RNFS.ExternalDirectoryPath}/${targetName}.json`;
  RNFS.writeFile(path, JSON.stringify(content), 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!'+ path);
    Toast.success('文件导出成功！', 1);
  })
};

/**
 * @description 导入文件
 * @param { String } fileName 需要导入的文件名
 */
function importFile (fileName)  {
  RNFS.readFile(`${RNFS.ExternalDirectoryPath}/${fileName}.json`)
      .then(result => console.log(result));
  Toast.success('文件导入成功！', 1);
};

/**
 * @description 初始化需要导入的数据文件（即导出）
 * @param { String } targetName 需要导出的文件名
 * @param { Array } content 需要导出的数据
 */
function InitializeFile (targetName,content)  {
  const path = `${RNFS.ExternalDirectoryPath}/${targetName}.json`;
  RNFS.writeFile(path, JSON.stringify(content), 'utf8')
  .then((success) => {
    console.log('FILE WRITTEN!'+ path);
  })
};

/**
 * @description 文件管理的容器
 */
const FileSystem = () => {
  const [flag,setFlag] = useState(true)

  useEffect(() =>{
    setFlag(false)
    if(!flag){
      InitializeFile("studentInformation",user.student)
      InitializeFile("schedule",schedule)
      InitializeFile("teacherInformation",user.teacher)
    }

  })

  return (
    <WingBlank size="lg" style={style.container}>
      <View style={style.box}>
      <WhiteSpace />
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
        <Flex justify="around">
          <View style={[style.btnBox,{borderRightWidth:3}]}>
            <Image source={require('./img/studentInformation.png')}/>
            <Text>学生信息</Text>
            <Button 
              type="primary" 
              onPress={() => {importFile("studentInformation")}} 
              style={style.btn}>
              <Text style={style.btnText}>导入</Text>
            </Button>
          </View>
          <View style={[style.btnBox,{borderRightWidth:3}]}>
            <Image source={require('./img/courseInformation.png')}/>
            <Text>课程信息</Text>
            <Button 
              type="primary" 
              onPress={() => {importFile("schedule")}} 
              style={style.btn}>
              <Text style={style.btnText}>导入</Text>
            </Button>
          </View>
          <View style={style.btnBox}>
            <Image source={require('./img/teacherInformation.png')}/>
            <Text>老师信息</Text>
            <Button 
            type="primary" 
            onPress={() => {importFile("teacherInformation")}} 
            style={style.btn}>
            <Text style={style.btnText}>导入</Text>
          </Button>
          </View>
        </Flex>
        <Provider></Provider>
        <Flex justify="around">
          <View style={[style.btnBox,{width:width * 0.4,borderRightWidth:3}]}>
            <Image source={require('./img/selfInformation.png')}/>
            <Text>学生个人信息和课程信息</Text>
            <Button
              type="primary" 
              onPress={() => {
                exportFile("studentInformationList",{
                  "schedule":schedule,
                  "selfInformation":user.student
                  })}}
                  style={style.btn}>
                    <Text style={style.btnText}>导出</Text>
            </Button>
          </View>
          <View style={[style.btnBox,{width:width * 0.43}]}>
            <Image source={require('./img/allStudentInformationList.png')}/>
            <Text>所有学生、成绩、课程信息</Text>
            <Button 
              type="primary"
              onPress={() => {
                exportFile("allStudentInformationList",{
                  "schedule":schedule,
                  "grade":grade,
                  "studentInformationList":studentInformationList
                  })}}
                  style={style.btn}>
                    <Text style={style.btnText}>导出</Text>
            </Button>
          </View>
        </Flex>
        <WhiteSpace size="lg"/>
        <WhiteSpace size="lg"/>
      </View>
    </WingBlank>
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    backgroundColor:'#ffffff',
    height:height * 0.5,
    justifyContent:'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    elevation: 4
  },
  btnBox:{
    height:height * 0.18,
    width:width * 0.3,
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:0,
    borderColor:'rgb(16, 142, 233)'
  },
  btn:{
    width:width * 0.25
  },
  btnText:{
    fontSize: 14
  }
});

export default FileSystem;