import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Dimensions, } from "react-native";
import { Tabs, WingBlank, Flex,  } from '@ant-design/react-native';

import Account from './components/account'

const tabs = [
  { title: '学生' },
  { title: '老师' },
];
const { width, height } = Dimensions.get('window');

const Login = (props) => {
  const [identity,setIdentity] = useState('学生');

  function getIdentity(e) {    
    setIdentity(e.title);
  }

  return (
    <ImageBackground source={require('./img/bg-login.jpg')} style={style.bg}>
       <Flex justify="center">
         <WingBlank style={style.box}>
          <Tabs tabs={tabs} onChange={getIdentity}>
            <Account 
              changeIdentity={props.changeIdentity}
              identity={identity}
            />
          </Tabs>
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
  }
});

export default Login;