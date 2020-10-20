import React, { useState, useCallback } from 'react';
import { StyleSheet, Dimensions, ScrollView, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text } from "react-native";

import { Card, WingBlank,WhiteSpace,List,SwipeAction, Flex, Toast,Provider  } from '@ant-design/react-native'

var RNFS = require('react-native-fs');
const { width, height } = Dimensions.get('window');

const FileSystem = ({studentNumber, informationList, getImportData}) => {

  function importFile() {
    RNFS.readDir(RNFS.ExternalDirectoryPath)
    .then((result) => {
      return Promise.all([RNFS.stat(result[0].path), result[0].path]);
    })
    .then((statResult) => {
      if (statResult[0].isFile()) {
        return RNFS.readFile(statResult[1], 'utf8');
      }
      return 'no file';
    })
    .then((contents) => {
      console.log(contents)
      getImportData(JSON.parse(contents));
      
      Toast.success('文件导入成功！', 1);
    })
    .catch((err) => {
      console.log(err.message, err.code);
    });
  } 

  function exportFile() {
    var path = RNFS.ExternalDirectoryPath + '/informationList.json';
    RNFS.writeFile(path, JSON.stringify(informationList), 'utf8')
    .then((success) => {
      console.log('FILE WRITTEN!'+ path);
      Toast.success('文件导出成功！', 1);
    })
    .catch((err) => {
      console.log(err.message);
    });
  }

  return (
    <View>
      <Provider></Provider>
      <Flex style={style.container} justify="center">
        <Flex direction="column" justify="around" style={style.descBox}>
          <Text style={[style.desc,style.descTopText]}>The number of students you have</Text>
          <Text style={[style.desc,style.descMiddleText]}>
            {studentNumber}
            <Text style={style.descMiddleInnerText}>QTY</Text>
          </Text>
          <Text style={style.desc}>NJUPT Teacher @office</Text>
        </Flex>
        <View style={style.btnBox}>
          <TouchableOpacity onPress={importFile} style={style.btn}>
            <Text>文件导入</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={exportFile} style={style.btn}>
            <Text>文件导出</Text>
          </TouchableOpacity>
        </View>
      </Flex>
    </View>

  );
};

const style = StyleSheet.create({
  container:{
    height:height * 0.3,
    backgroundColor:'#1daa75',
    borderBottomLeftRadius:width * 0.15,
    borderBottomRightRadius:width * 0.15,
    position:'relative',
  },
  descBox:{
    height: height * 0.2,
  },
  desc:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:width * 0.04
  },
  descTopText:{
    fontSize:width * 0.05
  },
  descMiddleText:{
    fontSize:width * 0.08
  },
  descMiddleInnerText:{
    fontSize:width * 0.04
  },
  btnBox:{
    position:'absolute',
    bottom:-height * 0.03,
    left:width * 0.15,
    flexDirection:'row',
    width:width * 0.7,
    justifyContent:'space-around'
  },
  btn:{
    borderWidth:1,
    borderRadius:width * 0.1,
    paddingHorizontal:width * 0.08,
    paddingVertical:height * 0.01,
    backgroundColor:'#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    elevation: 4,
    borderColor:'#ddd'
  }
});

export default FileSystem;