import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Dimensions, TouchableOpacity, ImageBackground, Image, Text } from "react-native";
import { WingBlank, Button, WhiteSpace,Steps } from '@ant-design/react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');
const Step = Steps.Step;

/**
 * @description 课程信息的是否预订教材组件的标题公共渲染组件
 */
const page = {
  "optionalList":{
    "step":() => (<Step title={titleTemplate('是否需要订购教材')} />)
  },
  "selectedList":{
    "step":(booking) => { 
      let desc = booking ? "是" : "否"
      return (
        <Step title={titleTemplate('是否需要订购教材')} description={descTemplate(desc)}/>
      )}
  }
}

/**
 * @description 课程信息的标题公共渲染组件
 * @param { String } title 当前课程信息的标题
 */
function titleTemplate(title){
  return (
    <View style={{justifyContent:'center'}}>
      <Text style={style.descTitle}>{title}</Text>
    </View>
  )
}

/**
 * @description 课程信息的描述公共渲染组件
 * @param { String } title 当前课程信息的描述
 */
function descTemplate(desc){
  return (
    <View style={style.desc}>
      <Text style={style.descText}>{desc}</Text>
    </View>
  )
}

/**
 * @description 选课的公共渲染组件
 * @param { String } props.desc 当前列表描述
 * @param { Array } props.list 渲染的列表数据
 * @param { Function } props.operator 用户可操作的功能函数
 * @param { String } props.countDesc 列表数目的描述
 * @param { Number } props.currentCount 课程的进程数
 * @param { Function } props.titleBg 列表数目的描述背景图
 * @param { Function } props.radio 是否预订教材的函数式组件（单选）的渲染
 * @param { Boolean } props.booking 是否预订教材的状态
 */
const common = (props) => {
  
  const [isActive,setIsActive] = useState(false)
  const [activeSections,setActiveSections] = useState([])
  const { desc,list,operator, countDesc, currentCount, titleBg, radio,booking } = props

  useEffect(() => {
    if(!activeSections.length){
      let sections = activeSections;
      list.map(() => {sections.push(false)})     
      setActiveSections(sections)
    }
  })

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <WingBlank size="sm">
          <View style={style.optionalListCount}>
            <ImageBackground source={titleBg} style={style.bg}>
              <View style={style.countBox}>
                <Text style={style.count}>{list.length}</Text>
                <Text style={style.countDesc}>{countDesc}</Text>
              </View>
            </ImageBackground>
          </View>
          <WhiteSpace size="lg" />
          {
            list.map((course,index) => (
              <View key={index}>
                <TouchableOpacity style={style.label} 
                  onPress={() => {
                    let sections = activeSections;
                    sections[index] = !sections[index]
                    setActiveSections(sections)
                    setIsActive(!isActive)
                }}>
                  <View style={[style.labelBox,{flex:3}]}>
                    <Text style={style.labelName}>{course.name}</Text>
                  </View>
                  <View style={[style.labelBox,{flex:2}]}>
                    <Text style={style.labelAllowance}>{course.allowance}</Text>
                  </View>
                  <View style={style.labelBox}>
                    <Image source={require('../img/arrow-down.png')}/>
                  </View>
                </TouchableOpacity>
                {
                  activeSections[index]?
                    <Animatable.View 
                      duration={300}
                      easing="ease-out"
                      animation={activeSections[index] ? 'fadeInDown' : 'fadeInUp'}
                      style={style.details}>
                        <Steps size="small" current={currentCount}>
                          <Step title={titleTemplate('课程编号')} description={descTemplate(course.serialNumber)} />
                          <Step title={titleTemplate('课程类型')} description={descTemplate(course.category)} />
                          <Step title={titleTemplate('学分')} description={descTemplate(course.credits)} />
                          <Step title={titleTemplate('任课老师')} description={descTemplate(course.teacher)} />
                          { page[desc].step(course.booking) }
                        </Steps>
                        { radio ? radio() : null }
                        {
                          desc === "optionalList" 
                          ? <Button type="primary" onPress={() => {
                              let current = course;
                                current["booking"] = booking;
                                current["allowance"] = --current["allowance"];
                                operator(course)
                              }}>
                              确定
                            </Button>
                          : <Button type="warning" onPress={() => {
                                let current = course;
                                current["booking"] = booking;
                                current["allowance"] = ++current["allowance"];
                                operator(course)
                              }}>
                              删除
                          </Button>
                        }
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
  countBox:{
    height:height * 0.15,
    justifyContent:'space-around'
  },
  count:{
    textAlign:'center',
    fontSize:width * 0.1
  },
  countDesc:{
    fontSize:width * 0.05
  },
  details:{
    backgroundColor:'#ffffff',
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
    justifyContent:'space-around',
    backgroundColor: '#ffffff',
    borderLeftWidth:width * 0.015,
    borderColor:'#02a064',
    borderTopRightRadius:width * 0.05,
  },
  labelBox:{
    flex:1,
    justifyContent:'center'
  },
  labelName:{
    fontSize:width * 0.05,
    textAlign:'center'
  },
  labelAllowance:{
    color:'orange',
    fontSize:width * 0.08,
    textAlign:'center'
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
  },
  bg:{
    flex:1,
    width:null,
    height:null,
    backgroundColor:'rgba(0,0,0,0)',
    justifyContent:'center',
    alignItems:'center'
  },
  optionalListCount:{
    height:height * 0.3
  }
});

export default common;