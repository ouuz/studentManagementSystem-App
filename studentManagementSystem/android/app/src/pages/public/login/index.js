import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Dimensions, View, Animated, Easing } from "react-native";
import { WingBlank, Flex, Button} from '@ant-design/react-native';

import Account from './components/account'

const { width, height } = Dimensions.get('window');

/**
 * @description 登录组件容器
 * @param { String } props.identity 用户状态
 * @param { Function } props.changeIdentity 更改用户状态
 * @param { Function } props.getUserId 获取用户的身份标识：教师：工号 学生：学号
 */

const Login = (props) => {
  const [identity,setIdentity] = useState('学生');
  const [settingPosition,setSettingPosition] = useState(0);
  const [ifShowSetting] = useState(new Animated.Value(settingPosition));

  /**
   * @description 获取用户身份
   * @param { String } newIdentity 用户当前选中的身份
   */
  function getIdentity(newIdentity) {
    setIdentity(newIdentity);
    newIdentity == "学生" ? setSettingPosition(-width * 0.88) : setSettingPosition(0);
    Animated.timing(ifShowSetting, {
      toValue: settingPosition,
      duration:300,
      useNativeDriver: true, 
      easing: Easing.bezier(0.15, 0.73, 0.37, 1.2)
    }).start();
  }

  useEffect(() => {
    setSettingPosition(-width * 0.88)
  },[]);

  return (
    <ImageBackground source={require('./img/bg-login.jpg')} style={style.bg}>
       <Flex justify="center">
         <WingBlank style={style.box}>
           <View style={style.labelBox}>
             <Button 
                onPress={(() => {getIdentity("学生")})} 
                style={[style.label,{
                  height:identity == "学生" ? height * 0.08 : height * 0.06,
                  borderBottomWidth:identity == "学生" ? 3:0}]}
              >学生</Button>
             <Button 
                onPress={(() => {getIdentity("老师")})} 
                style={[style.label,{
                  height:identity == "老师" ? height * 0.08 : height * 0.06,
                  borderBottomWidth:identity == "老师" ? 3:0}]}
              >老师</Button>
           </View>
           <View style={style.AccountBox}>
             <Animated.View style={{width:width * 0.88,transform:[{translateX:ifShowSetting}]}} >
               <Account 
                changeIdentity={props.changeIdentity}
                identity={identity}
                userPlaceholder="请输入你的学号~"
                getUserId={props.getUserId}
              />
             </Animated.View>
             <Animated.View  style={{width:width * 0.88,transform:[{translateX:ifShowSetting}]}}>
              <Account 
                changeIdentity={props.changeIdentity}
                identity={identity}
                userPlaceholder="请输入你的工号~"
                getUserId={props.getUserId}
              />
             </Animated.View>
           </View>
        </WingBlank>
       </Flex>
    </ImageBackground>     
  );
};

const style = StyleSheet.create({
  bg:{
    flex:1,
    width:null,
    height:null,
    backgroundColor:'rgba(0,0,0,0)',
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    height:height * 0.46,
    width:width * 0.88
  },
  labelBox:{
    flexDirection:'row',
    width: width * 0.52,
    justifyContent:'space-between',
    alignItems:"flex-end"
  },
  label:{
    width:width * 0.25,
    borderRadius:width * 0.03,
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    borderWidth:0,
    borderColor:'rgb(16, 142, 233)'
  },
  AccountBox:{
    maxWidth:width * 0.98,
    overflow:"hidden",
    flexDirection:'row'
  },
});

export default Login;