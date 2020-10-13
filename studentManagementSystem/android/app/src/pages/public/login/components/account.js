import React, { useState, useEffect,  } from 'react';
import axios from 'react-native-axios'

import { DeviceEventEmitter } from 'react-native';

import { Dimensions, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Button, Text, ScrollView, Animated, Easing } from "react-native";
import {SafeAreaView} from 'react-navigation'

const { width, height } = Dimensions.get('window');

const Account = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    Alert.alert(`${account} ${password}`)
  }
   
  return (
    <SafeAreaView style={style.box}>
      <View style={style.account}>
        <TextInput 
          onChangeText={account => setAccount(account)}
          placeholder = "请输入你的用户名"
          value = {account}
        /></View>
      <View style={style.password}>
        <TextInput 
          onChangeText = {password =>setPassword(password)}
          placeholder = "请输入你的密码"
          value = {password}
        /></View>
      <View style={style.buttonBox}>  
        <View style={style.button}>
          <TouchableOpacity onPress={submit} >
            <Image source={require('../img/登陆.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  box:{
    height:300,
    backgroundColor:'#4545',
    justifyContent:'space-between',
    padding:15
  },
  account:{
    paddingLeft:20,
    paddingRight:10,
    borderRadius:50,
    marginVertical:15,
    backgroundColor:'#ffffff',
  },
  password:{
    paddingLeft:20,
    paddingRight:10,
    borderRadius:50,
    backgroundColor:'#ffffff',
  },
  buttonBox:{
    justifyContent:'center',
    alignItems:'center',
  },
  button: { 
    padding:15,
    borderRadius:50,
    alignItems:'center',
    backgroundColor: '#61b0d4',
  }
});

export default Account;