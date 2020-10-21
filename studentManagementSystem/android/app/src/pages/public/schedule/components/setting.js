import React, { useState, useEffect, } from 'react';
import axios from 'react-native-axios'

import {StyleSheet, View, Text, ScrollView, TouchableOpacity,Dimensions} from "react-native";
import { Flex } from '@ant-design/react-native';
import mock from'../mock/mock'

const { width, height } = Dimensions.get('window');

const Settings = ({changeWeek,changeTerm}) => {
  let termLabel = Object.keys(mock[0])
  
  return (
    <Flex style={style.switchList} direction="column">
        <Flex style={style.labelList} justify="center">
          <View>
            <Text>更换学期</Text>
          </View>
          <ScrollView horizontal={true} style={style.termsScroll}>
            { 
              termLabel.map((term, index) => (
                <TouchableOpacity style={[style.terms,style.label]} key={++index} onPress={() => {changeTerm(term)}} >
                  <Text style={style.information}>{term}</Text>
                </TouchableOpacity>
            ))}
          </ScrollView>
        </Flex>
        <Flex style={style.labelList} >
          <View>
            <Text>更换周数</Text>
          </View>
          <ScrollView horizontal={true} style={style.weeksScroll}>
            {(() => {
              let arr = []
              for(let index = 1; index <= 10; index++)
                arr.push(
                  <TouchableOpacity style={[style.weeks,style.label]} key={index} onPress={() => {changeWeek(index)}}>
                    <Text style={style.information} >{index}</Text>
                  </TouchableOpacity>
                )
              return arr
            })()}
          </ScrollView>
        </Flex>
    </Flex>  
  );
};

const style = StyleSheet.create({
  switchList:{
    backgroundColor:'#ffffff',
  },
  labelList:{
    height:height * 0.07,
    paddingLeft:width * 0.02,
    borderBottomWidth:1,
    borderColor:'#dddddd',
  },
  label:{
    backgroundColor:'#a9e8e4',
    justifyContent:'center',
    alignItems:'center',
    height:height * 0.04,
    marginLeft:width * 0.024
  },
  terms:{
    borderRadius:width * 0.025,
    padding:width * 0.02,
  },
  weeks:{
    width:width * 0.075,
    borderRadius:50,
  },
  information:{
    color:'#ffffff'
  },
});

export default Settings;