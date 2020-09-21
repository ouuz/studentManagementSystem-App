import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import {StyleSheet, View, Text} from "react-native";

import mock from'../mock/mock'

const Settings = () => {
  const [weeksList,setWeeksList] = useState([]);
  
  const createViews = (num,func) => {
    let arr = []
    for(let index = 1;index<=num;index++)
      arr.push(<Text style={style.information}>{index}</Text>)
    func(arr)
  }

  const switchWeeks = () => {

  }

  useEffect(() => {
    createViews(mock[0]["weeks"],setWeeksList)
  },[]);
   
  return (
    <View style={style.switchList}>
        <View style={style.termsList}>
          <View style={style.title} key={0}>
            <Text>更换学期</Text>
          </View>
          { mock.map((term, index) => (<View style={style.terms} key={++index}><Text style={style.information}>{term.term}</Text></View>))}
        </View>
        <View style={style.weeksList}>
          <View style={style.title} key={0}>
            <Text>更换周数</Text>
          </View>
          { weeksList.map((item, index) => ( <View style={style.weeks} key={index}>{item}</View> )) }
        </View>
    </View>  
  );
};

const style = StyleSheet.create({
  switchList:{
    minHeight:100,
    justifyContent:'space-around',
    backgroundColor:'#ffffff'
  },
  termsList:{
    flexDirection:'row',
    padding:5,
    borderBottomWidth:1,
    borderColor:'#dddddd',
    justifyContent:'space-around',
    width:360
  },
  terms:{
    height:30,
    backgroundColor:'#a9e8e4',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    padding:5
  },
  weeksList:{
    flexDirection:'row',
    padding:5,
    borderBottomWidth:1,
    borderColor:'#dddddd',
    justifyContent:'space-around',
    minWidth:800
  },
  weeks:{
    width:30,
    height:30,
    backgroundColor:'#a9e8e4',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
  information:{
    color:'#ffffff'
  },
  title:{
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Settings;