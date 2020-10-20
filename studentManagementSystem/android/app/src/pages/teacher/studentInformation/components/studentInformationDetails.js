import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import { SafeAreaView,StyleSheet, View, Text, ScrollView } from "react-native";
import Grade from '../../../student/grade/index'
import mock from '../mock/mock'

const studentInformationDetails = ({ route,navigation }) => {

  const { stuID } = route.params;

  return (
    <SafeAreaView style={style.safeContainer}>
      <Grade stu={ stuID }/>
    </SafeAreaView> 
  )
}


const style = StyleSheet.create({
  safeContainer:{
    flex:1,
  },
});

export default studentInformationDetails;