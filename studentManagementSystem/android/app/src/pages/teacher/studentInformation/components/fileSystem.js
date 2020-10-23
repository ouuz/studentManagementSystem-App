import React from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity, Text } from "react-native";
import { Flex, Toast, Provider  } from '@ant-design/react-native'

var RNFS = require('react-native-fs');
const { width, height } = Dimensions.get('window');

/**
 * @description 学生信息的文件管理
 * @param { Number } studentNumber 学生数量
 * @param { Array } informationList 学生信息列表数据
 * @param { Function } getImportData 更改学生信息列表数据
 */
const FileSystem = ({studentNumber, informationList, getImportData}) => {

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
        .then(result => getImportData(JSON.parse(result)));
    Toast.success('文件导入成功！', 1);
  };
  
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
          <TouchableOpacity onPress={() => {importFile("informationList")}} style={style.btn}>
            <Text>文件导入</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {exportFile("informationList",informationList)}} style={style.btn}>
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
    width:width * 0.3,
    height: height * 0.05,
    justifyContent:'center',
    alignItems:'center',
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