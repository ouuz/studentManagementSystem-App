import React from 'react';
import { SafeAreaView,StyleSheet } from "react-native";
import Grade from '../../../student/grade/index'

/**
 * @description 学生信息的具体内容
 * @param { Array } route 路由
 * @param { Array } navigation 导航
 * @param { String } route.params.userId 用户的身份标识：教师：工号 学生：学号
 */
const studentInformationDetails = ({ route,navigation }) => {

  const { userId } = route.params;

  return (
    <SafeAreaView style={style.safeContainer}>
      {
        userId === 'B18030406' || userId === 'B18030432' || userId === 'B18030429'? 
        <Grade userId={ userId }/> :
        <Grade userId='B18030406'/>
      }
      
    </SafeAreaView> 
  )
}


const style = StyleSheet.create({
  safeContainer:{
    flex:1,
  },
});

export default studentInformationDetails;