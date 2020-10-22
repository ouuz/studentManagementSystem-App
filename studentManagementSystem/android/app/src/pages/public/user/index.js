import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, Dimensions } from "react-native";
import { Flex, WingBlank, List, Modal, Button, Provider, WhiteSpace } from '@ant-design/react-native';
import mock from '../login/mock/mock'

const { width, height } = Dimensions.get('window');

const User = ({ changeIdentity, userId, identity}) => {
  const Identity = identity === "老师" ? "teacher" : "student"
  const [informationList,setInformationList] = useState(mock[Identity])
  const student = informationList.findIndex(student => student.userName === userId) || 0
  
  const information = informationList[student]["information"]
  const name = information["name"]
  const [phone,setPhone] = useState(information["phone"])

  function changePassword() {
    Modal.prompt(
      'Input New Password',
      '密码最小长度是8个字符',
      password => {
        let newInformationList = informationList;
        newInformationList[student]["password"] = password;
        setInformationList(newInformationList);
        changeIdentity("exit")
      },
      'secure-text'
    );
  }

  function changePhone() {
    Modal.prompt(
      'Input New Phone Number',
      '长度为11位阿拉伯数字',
      phone => {
        setPhone(phone)
        let newInformationList = informationList;
        newInformationList[student]["information"]["phone"] = phone;
        setInformationList(newInformationList);
      },
      'default',
      null,
      ['请输入新手机号']
    );
  }

  function exitBtn() {
    changeIdentity("exit")
  }

  return (
    <WingBlank style={style.container}>
      <View style={style.card}>
        <ImageBackground source={require('./img/bg-user.png')} style={style.bg}>
          <Flex justify="around" style={style.box}>
            <Image source={require('./img/portrait.jpg')}style={style.portrait}/>
            <View style={style.information}>
              <Text style={style.desc}>{name}</Text>
              <Text style={style.phone}>已绑定的手机号：{phone}</Text>
            </View>
          </Flex>
        </ImageBackground>
      </View>
      <WingBlank size="md">
        <List>
          <List.Item  arrow="horizontal" onPress={changePassword} >
            <Flex>
              <Image source={require('./img/changePassword.png')} style={style.icon}/>
              <Text style={style.setting}>修改密码</Text>
            </Flex>
          </List.Item>
          <List.Item  arrow="horizontal" onPress={changePhone} >
            <Flex>
              <Image source={require('./img/changePhone.png')} style={style.icon}/>
              <Text style={style.setting}>修改手机号</Text>
            </Flex>
          </List.Item>
        </List>
        <WhiteSpace size="lg"/>
        <Button type="primary" style={style.exitBtn} onPress={exitBtn}>退出登录</Button>
      </WingBlank>
      <Provider></Provider>
    </WingBlank>
  );
};

const style = StyleSheet.create({
  card:{
    height:height * 0.3
  },
  bg:{
    flex:1,
    width:null,
    height:null,
    backgroundColor:'rgba(0,0,0,0)',
    justifyContent:'center',
    alignItems:'center'
  },
  box:{
    width:width * 0.7
  },
  portrait:{
    width:width * 0.16,
    height:width * 0.16,
    borderRadius:width * 0.15,
  },
  information:{
    height:height * 0.1,
    justifyContent:'space-around'
  },
  desc:{
    color:'#ffffff',
    fontSize:width * 0.045,
    fontWeight:'bold'
  },
  phone:{
    color:'#ffffff',
    fontSize:width * 0.03
  },
  icon:{
    width:width * 0.05,
    height:width * 0.05
  },
  setting:{
    fontSize:width * 0.035,
    color:'#525252',
    marginLeft:width * 0.05
  },
  exitBtn:{
    backgroundColor:'#73d1fe',
    borderColor:'#73d1fe'
  }
});

export default User;