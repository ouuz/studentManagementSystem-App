import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View,  TextInput, TouchableOpacity, ImageBackground, Alert, Image, Text } from "react-native";
import { List, Radio, Flex, WhiteSpace,Icon ,Accordion } from '@ant-design/react-native';
import mock from '../mock/mock'

const OptionalList = () => {
  const RadioItem = Radio.RadioItem;
  const [value,setValue] = useState(0)

  const [activeSections,setActiveSections] = useState()

  const data = [
    { value: 0, label: '否' },
    { value: 1, label: '是' },
  ]

  return (
    <SafeAreaView style={style.container}>
      <Text>可选</Text>
      {
        mock[0]["optionalList"].map((course, index) => (
          <Accordion
          onChange={(activeSections) => {setActiveSections(activeSections)}}
          activeSections={activeSections}
          >
            <Accordion.Panel header={course.name} key={index}>
              <List>   
                <List.Item>{course.category}</List.Item>
                <List.Item>{course.credits}</List.Item>
                <List.Item>{course.teacher}</List.Item>
                <List.Item>是否需要订购教材：</List.Item>
                <List.Item>
                  {
                    data.map(item => (
                      <RadioItem key={item.value} checked={value == item.value} onChange={ () => { setValue(item.value)} }>
                        {item.label}
                      </RadioItem>
                    )
                  )}
                </List.Item>
              </List>
            </Accordion.Panel>
          </Accordion>
        ))
      }
    </SafeAreaView>  
  );
};

const style = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    backgroundColor:'#898'
  },
  course:{
    backgroundColor:'#fff',
    padding:10
  },
  information:{
    paddingLeft:10,
    minHeight:150,
    justifyContent:'space-around',
  },
  bigFont:{
    fontSize:18,
    borderBottomWidth:1,
    borderColor:'#ddd'
  }
});

export default OptionalList;