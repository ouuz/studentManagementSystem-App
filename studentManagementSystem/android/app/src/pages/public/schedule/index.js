import React, { useState, useEffect } from 'react';
import axios from 'react-native-axios'

import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
  Text,
  Image
} from "react-native";

const Schedule = () => {
  const [row,col] = [13,8];
  const [courseList,setCourseList] = useState();
  const [rowList,setRowList] = useState([]);
  const [colList,setColList] = useState([]);

  const createRows = () => {
    var rows = []
    for(let index = 0;index < row;index++)
      rows.push(<View style={style.row} key={index}></View>)
    setRowList(rows)
  }

  const createCols = () => {
    var cols = []
    for(let index = 0;index < col;index++)
      cols.push(
      <View style={style.col} key={index}>
        <View style={style.course} key={index}>
            <Text>1111</Text>
        </View>
      </View>)
    setColList(cols)
  }

  const test = () => {
    axios.get('https://mock.yonyoucloud.com/mock/15650/student/getSchedule')
      .then(res => {
        dispatch(onGetScheduleList(res.data))
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    createRows()
    createCols()
  },[]);
   
  return (
    <View>
      {/* <TouchableOpacity onPress={test} >
        <Image source={ require('../../public/login/img/登陆.png')}></Image>
      </TouchableOpacity> */}
      <View>
        {/* <View style={style.scheduleRowBox}>
          { rowList.map(item => ( <View>{item}</View> )) }
        </View> */}
        <View style={style.scheduleColBox}>
        { colList.map((item,index) => ( <View key={index}>{item}</View> )) }
        </View>
      </View>
    </View>  
  );
};

const style = StyleSheet.create({
  scheduleRowBox:{
    backgroundColor:'#61b0d4',
  },
  row:{
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderColor:'#ddd',
    height:47
  },
  scheduleColBox:{
    flex:1,
    flexDirection:'row',
    position:'relative',
  },
  col:{
    backgroundColor:'#fff',
    borderRightWidth:1,
    borderColor:'#ddd',
    width:52,
    height:630
  },
  course:{
    backgroundColor:'#948',
    position:'absolute',
    height:94,
    top:141,
  }
});

export default Schedule;