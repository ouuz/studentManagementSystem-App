import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Button, Text, ScrollView, Animated, Easing } from "react-native";

import ChangeUser from './components/changeUser'
import Account from './components/account'

const Login = (props) => {

  const [settingPosition,setSettingPosition] = useState(-190);
  const [ifShowSetting] = useState(new Animated.Value(settingPosition));

  function switchUser () {
    settingPosition == -190 ? setSettingPosition(0) : setSettingPosition(-190);
    Animated.timing(ifShowSetting, {
      toValue: settingPosition,
      duration:300,
      useNativeDriver: true, 
      easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)
    }).start();
  }

  function getUser(userID) {    
    props.changeUser(userID)
  }

  useEffect(() => {
    
  },[])

  return (
    <ImageBackground source={require('./img/bg-login.jpg')} style={style.bg}>
      <View style={{flex:1}}>
        <Animated.View style={[style.changeUserSetting,{transform:[{translateY:ifShowSetting}]}]}>
          <ChangeUser getUser={ getUser }/>
        </Animated.View>
        <Animated.View style={[style.loginView,{transform:[{translateY:ifShowSetting}]}]}>
          <TouchableOpacity onPress={switchUser}>
            <Image source={require('./img/登陆.png')}></Image>
          </TouchableOpacity>  
          <Account />
        </Animated.View>  
      </View>
    </ImageBackground>     
  );
};

const style = StyleSheet.create({
  bg:{
    flex:1,
    width:null,
    height:null,
    backgroundColor:'rgba(0,0,0,0)',
  },
  changeUserSetting:{
    flex:2,
    backgroundColor:'#ffffff'
  },
  loginView:{
    flex:5,
    justifyContent:'space-around',
  },
});

export default Login;