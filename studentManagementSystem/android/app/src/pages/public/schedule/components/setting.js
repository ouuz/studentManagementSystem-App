import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import {StyleSheet, View, Text, ScrollView} from "react-native";

import mock from'../mock/mock'

const Settings = () => {
  const [weeksList,setWeeksList] = useState([]);
  
  const createViews = (num,func) => {
    let arr = []
    for(let index = 1;index<=num;index++)
      arr.push(<Text style={style.information} onPress={switchWeeks}>{index}</Text>)
    func(arr)
  }

  const switchWeeks = (e) => {
    let selectedWeek = e.target._internalFiberInstanceHandleDEV.memoizedProps.children;
    console.log()
  }

  const switchTerms = (e) => {
    let selectedWeek = e.target._internalFiberInstanceHandleDEV.memoizedProps.children;
    console.log()
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
          <ScrollView horizontal={true} style={style.termsScroll}>
            { mock.map((term, index) => (<View style={style.terms} key={++index}><Text onPress={switchTerms} style={style.information}>{term.term}</Text></View>))}
          </ScrollView>
        </View>
        <View style={style.weeksList} >
          <View style={style.title} key={0}>
            <Text>更换周数</Text>
          </View>
          <ScrollView horizontal={true} style={style.weeksScroll}>
            { weeksList.map((item, index) => ( <View style={style.weeks} key={index}>{item}</View> )) }
          </ScrollView>
        </View>
    </View>  
  );
};

const style = StyleSheet.create({
  switchList:{
    minHeight:100,
    justifyContent:'space-around',
    backgroundColor:'#ffffff',
    flex:1
  },
  termsList:{
    flexDirection:'row',
    padding:5,
    borderBottomWidth:1,
    borderColor:'#dddddd',
    justifyContent:'space-around',
  },
  terms:{
    height:30,
    backgroundColor:'#a9e8e4',
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    marginLeft:10
  },
  weeksList:{
    flexDirection:'row',
    padding:5,
    borderBottomWidth:1,
    borderColor:'#dddddd',
    justifyContent:'space-around',
  },
  weeks:{
    width:30,
    height:30,
    backgroundColor:'#a9e8e4',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10
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