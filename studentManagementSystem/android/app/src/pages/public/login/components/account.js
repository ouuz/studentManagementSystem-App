import React, { useState, useEffect,  } from 'react';
import axios from 'react-native-axios'

import { DeviceEventEmitter } from 'react-native';

import { SafeAreaView,Dimensions, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Button, Text, ScrollView, Animated, Easing } from "react-native";

import { WhiteSpace } from '@ant-design/react-native';

const { width, height } = Dimensions.get('window');

const Account = (props) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    // Alert.alert(`${account} ${password}`)
    props.changeIdentity(props.identity)
  }

  return (
    <SafeAreaView style={style.box}>
      <WhiteSpace />
      <View style={style.inputBox}>
        <TextInput 
          onChangeText={account => setAccount(account)}
          placeholder = "请输入你的用户名"
          value = {account}
        />
      </View>
      <WhiteSpace />
      <View style={style.inputBox}>
        <TextInput 
          onChangeText = {password =>setPassword(password)}
          placeholder = "请输入你的密码"
          value = {password}
        />
      </View>
      <View style={style.buttonBox}>  
        <TouchableOpacity onPress={submit} style={style.button}>
          <Image source={require('../img/登陆.png')}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const common = {

}

const style = StyleSheet.create({
  box:{
    height:height * 0.4,
    backgroundColor:'#ffffff',
    justifyContent:'space-between',
    padding:width * 0.035,
  },
  inputBox: {
    paddingLeft:width * 0.04,
    paddingRight:width * 0.02,
    borderRadius:width * 0.1,
    borderWidth:1,
    borderColor:'#ddd',
    backgroundColor:'#f6f6f6',
  },
  buttonBox:{
    justifyContent:'center',
    alignItems:'center',
  },
  button: { 
    padding:width * 0.035,
    borderRadius:width * 0.1,
    alignItems:'center',
    backgroundColor: 'rgb(16, 142, 233)',
  }
});

export default Account;