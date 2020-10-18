import React, { useState, Component, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, TextInput, Dimensions,TouchableOpacity, ImageBackground, Alert, Image, Text} from "react-native";
import { List, Radio,  Steps, WhiteSpace,Icon,Accordion,Button,WingBlank, Progress, Flex} from '@ant-design/react-native';
import * as Animatable from 'react-native-animatable';
import mock from '../mock/mock'

const RadioItem = Radio.RadioItem;
const ListItem = List.Item;
const Step = Steps.Step;
const { width, height } = Dimensions.get('window');
const data = [
  { value: false, label: '否' },
  { value: true, label: '是' },
]

function titleTemplate(title){
  return (
    <View style={{justifyContent:'center'}}>
      <Text style={style.descTitle}>{title}</Text>
    </View>
  )
}

function descTemplate(desc){
  return (
    <View style={style.desc}>
      <Text style={style.descText}>{desc}</Text>
    </View>
  )
}

function courseStyle(isActive) {
  let colors = ['#16ad90','#539ce1','#e84c3d'],
  color = colors[ Math.floor(Math.random() * colors.length) ]
  if(isActive) return {
    backgroundColor: color,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  }
  return {
    backgroundColor: color,
    borderRadius:0
  }
}

const OptionalList = () => {
  const [value,setValue] = useState(false)
  const [isActive,setIsActive] = useState(false)
  const [activeSections,setActiveSections] = useState([])
  const [optionalList] = useState(mock[0]["optionalList"])

  useEffect(() => {
    if(!activeSections.length){
      let sections = activeSections;
      for(let index in optionalList){
        sections.push(false)
        sections[0] = true
        setActiveSections(sections)
      }
    }
  })

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <WingBlank>
          <WhiteSpace size="lg" />
          {
            optionalList.map((course,index) => (
              <View key={index}>
                <TouchableOpacity style={[courseStyle(!isActive),style.label]} 
                  onPress={() => {
                    let sections = activeSections;
                    sections[index] = !sections[index]
                    setActiveSections(sections)
                    setIsActive(!isActive)
                }}>
                  <View style={style.labelBox}>
                    <Text style={style.labelName}>{course.name}</Text>
                  </View>
                  <View style={style.labelBox}>
                    <Text style={style.labelAllowance}>89</Text>
                  </View> 
                </TouchableOpacity>
                {
                  activeSections[index]?
                    <Animatable.View 
                      duration={300}
                      easing="ease-out"
                      animation={activeSections[index] ? 'fadeInDown' : 'fadeInUp'}
                      style={style.details}>
                        <Steps size="small" current={2}>
                          <Step title={titleTemplate('课程类型')} description={descTemplate(course.category)} />
                          <Step title={titleTemplate('学分')} description={descTemplate(course.credits)} />
                          <Step title={titleTemplate('任课老师')} description={descTemplate(course.teacher)} />
                          <Step title={titleTemplate('是否需要订购教材')}/>
                        </Steps>
                        <View style={style.booking}>
                          {
                            data.map(item => (
                              <RadioItem key={item.value} checked={value == item.value} onChange={ () => { setValue(item.value)} }>
                                {item.label}
                              </RadioItem>
                          ))}
                        </View>
                    </Animatable.View> : null
                }
                <WhiteSpace size="lg" />
              </View>
          ))}
        </WingBlank>
      </ScrollView>
    </SafeAreaView>  
  );
};


const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f6f6f6'
  },
  details:{
    backgroundColor:'#ecedef',
    padding:height * 0.03,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 2,
    elevation: 4
  },
  label:{
    height:height * 0.1,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  labelBox:{
    flex:1,
    justifyContent:'center'
  },
  labelName:{
    color:'#ffffff',
    fontSize:width * 0.05,
    textAlign:'center'
  },
  labelAllowance:{
    color:'orange',
    fontSize:width * 0.08,
    textAlign:'center'
  },
  booking:{
    padding:height * 0.02,
    paddingTop:0,
  },
  descTitle:{
    fontSize:width * 0.045,
    color:'#525252',
    textAlignVertical:'center'
  },
  desc:{
    height:height * 0.06,
  },
  descText:{
    color:'#a2aeae',
    fontSize:width * 0.04
  }
});





export default OptionalList;