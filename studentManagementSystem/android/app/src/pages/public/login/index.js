import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Image
} from "react-native";

const Login = () => {
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    Alert.alert(`${account} ${password}`)
  }

  return (
    <ImageBackground source={require('./img/bg-login.jpg')} style={style.bg}>
      <View style={style.container}>
        <View style={style.box}>
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
                <Image source={require('./img/登陆.png')}></Image>
              </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
    </ImageBackground>     
  );
};

const style = StyleSheet.create({
  bg:{
    flex:1,
    width:null,
    height:null,
    //resizeMode:Image.resizeMode.contain,
    backgroundColor:'rgba(0,0,0,0)',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  box:{
    width:'90%',
    height:200,
    justifyContent:'space-between',
  },
  account:{
    paddingLeft:20,
    paddingRight:10,
    borderRadius:50,
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

export default Login;