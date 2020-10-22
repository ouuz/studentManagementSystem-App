import React from 'react';
import { SafeAreaView,StyleSheet } from "react-native";
import Grade from '../../../student/grade/index'

const studentInformationDetails = ({ route,navigation }) => {

  const { userId } = route.params;

  return (
    <SafeAreaView style={style.safeContainer}>
      <Grade userId={ userId }/>
    </SafeAreaView> 
  )
}


const style = StyleSheet.create({
  safeContainer:{
    flex:1,
  },
});

export default studentInformationDetails;