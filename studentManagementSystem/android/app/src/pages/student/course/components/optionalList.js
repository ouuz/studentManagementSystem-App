import React, { useState, Component } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text} from "react-native";
import { List, Radio,  WhiteSpace,Icon,Accordion,Button,WingBlank } from '@ant-design/react-native';
import * as Animatable from 'react-native-animatable';
import mock from '../mock/mock'

const RadioItem = Radio.RadioItem;
const ListItem = List.Item;
const data = [
  { value: false, label: '否' },
  { value: true, label: '是' },
]

const OptionalList = () => {
  const [value,setValue] = useState(false)
  const [isActive,setIsActive] = useState(false)
  const [activeSections,setActiveSections] = useState([])
  const [optionalList] = useState(mock[0]["optionalList"])

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <WingBlank>
          <Accordion
            onChange={(activeSections) => {setActiveSections(activeSections);activeSections.length ? setIsActive(true):setIsActive(false);}}
            activeSections={activeSections}
            >
            {
              optionalList.map((course,index) => (
                <Accordion.Panel header={course.name} style={style.course} key={index}>
                  <Animatable.View 
                    duration={300}
                    easing="ease-out"
                    animation={isActive ? 'fadeInDown' : 'fadeInUp'}>
                      <List>
                        <ListItem extra={course.category} multipleLine>课程类型</ListItem>
                        <ListItem extra={course.credits} multipleLine>学分</ListItem>
                        <ListItem extra={course.teacher} multipleLine>任课老师</ListItem>
                        <ListItem style={style.booking}>是否需要订购教材：</ListItem>
                        {
                          data.map(item => (
                            <RadioItem key={item.value} checked={value == item.value} onChange={ () => { setValue(item.value)} }>
                              {item.label}
                            </RadioItem>
                          )
                        )}
                        <ListItem>
                          <Button type="primary" onPress={ () => {
                            console.log(course.name,value)
                          } }>确定</Button>
                        </ListItem>
                      </List>
                    <WhiteSpace size="lg" />
                  </Animatable.View>
                </Accordion.Panel>
              ))
            }
          </Accordion>
        </WingBlank>
      </ScrollView>
    </SafeAreaView>  
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f3f4f6'
  },
  title:{
    fontSize:20
  },
  course:{
    backgroundColor:'#fff',
    padding:10
  },
  booking:{
    borderTopWidth:1,
    borderColor:'#ddd'
  }
});





export default OptionalList;