import React, { useState, useEffect,  } from 'react';
import axios from 'react-native-axios'

import { DeviceEventEmitter } from 'react-native';

import { Easing, StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, Animated, Dimensions } from "react-native";

import {SafeAreaView} from 'react-navigation'

const { width, height } = Dimensions.get('window');

const ChangeUser = (props) => {

  function change(e) {
    let userID = e.target._internalFiberInstanceHandleDEV.memoizedProps.children == '老师' ? 1 : 0;
    props.getUser(userID)
  }
   
  return (
    <SafeAreaView style={style.ChangeUserContainer}>
      <TouchableOpacity onPress={change}><Text>老师</Text></TouchableOpacity>
      <TouchableOpacity onPress={change}><Text>学生</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  ChangeUserContainer:{
    flex:1
  }
});

export default ChangeUser;