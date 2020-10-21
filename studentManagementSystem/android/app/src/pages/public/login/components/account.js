import React, { useState, useEffect,  } from 'react';
import axios from 'react-native-axios'

import { SafeAreaView,Dimensions, StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Button, Text, ScrollView, Animated, Easing } from "react-native";

import { WhiteSpace, List, InputItem,Toast,Provider } from '@ant-design/react-native';
import mock from '../mock/mock'

const { width, height } = Dimensions.get('window');

const Account = (props) => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    let identity = props.identity === "老师" ? "teacher" : "student";
    for(let user of mock[identity]){
      if(user.userName === account && user.password === password){
        props.changeIdentity(props.identity);
        props.getUserId(account)
        return false;
      }
    }
    Toast.fail("输入的用户名或者密码有误，请重新输入~");
  }

  return (
    <SafeAreaView style={style.box}>
      <Provider></Provider>
      <WhiteSpace />
      <List >
        <List.Item style={style.inputBox} multipleLine>
          <InputItem
            clear
            value={account}
            onChange={account => setAccount(account)}
            placeholder={props.userPlaceholder}
          />
        </List.Item>
          <WhiteSpace size="lg"/>
          <WhiteSpace size="lg"/>
        <List.Item style={style.inputBox} multipleLine>
          <InputItem
            clear
            type="password"
            value={password}
            onChange={password =>setPassword(password)}
            placeholder="密码默认为身份证后六位~"
          />
        </List.Item>
        <WhiteSpace /> 
      </List>
      <WhiteSpace />
      <View style={style.buttonBox}>  
        <TouchableOpacity onPress={login} style={style.button}>
          <Image source={require('../img/登陆.png')}></Image>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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