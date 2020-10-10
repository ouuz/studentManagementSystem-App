import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { List, Radio, Flex, WhiteSpace,Icon,Accordion,Button } from '@ant-design/react-native';


import mock from '../mock/mock'

const GradeList = ({gradeList}) => {
  const [activeSections,setActiveSections] = useState([])
  const [isActive,setIsActive] = useState(false)
  const list = gradeList

  return (
    <SafeAreaView style={style.gradeListContainer}>
      <Accordion
        onChange={(activeSections) => {setActiveSections(activeSections);activeSections.length ? setIsActive(true):setIsActive(false);}}
        activeSections={activeSections}
      >
        {
          list.map((term,index) => (
            <Accordion.Panel header={term.term} style={style.term} key={index}>
                <Animatable.View 
                  duration={300}
                  easing="ease-out"
                  animation={isActive ? 'fadeInDown' : 'fadeInUp'}
                  key={index}
                  style={style.gradeList}
                >
                  {
                    term.gradeList.map((course, index) => (
                      <View style={style.grade}>
                        <View style={style.gradeLeft}>
                          <Text style={style.courseName}>{course.name}</Text>
                          <Text>编号：{course.serialNumber} 学分：{course.credits}</Text>
                          {course.grade.map(item => (<Text>成绩：{item.level}({item.category})</Text>))}
                        </View>
                        <View style={style.gradeRight}>
                          <Text style={style.GPA}>{course.GPA}</Text>
                        </View>
                      </View>
                  ))}
                </Animatable.View>
            </Accordion.Panel>
          ))
        }
        </Accordion>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  gradeListContainer:{
    padding: 3,
    backgroundColor:'#ffffff',
    minHeight:370
  },
  term:{
    backgroundColor:'#ffffff',
    borderRadius:10,
    marginBottom:15,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 2,
    elevation: 4,
  },
  gradeList:{
    backgroundColor:'#f6f6f6',
  },
  grade:{
    borderBottomWidth:1,
    borderColor:'#ddd',
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
     minHeight:130,
    // marginBottom:10,
    // marginHorizontal:5,
    backgroundColor:'#ffffff',
    // shadowColor: 'rgba(0, 0, 0, 0.03)',
    // shadowOffset: {
    //     width: 0,
    //     height: 2
    // },
    // shadowRadius: 2,
    // elevation: 4,
    padding:15
  },
  gradeLeft:{
    justifyContent:'space-around'
  },
  courseName:{
    fontSize:18
  },
  gradeRight:{
    justifyContent:'center',
    alignItems:'center',
  },
  GPA:{
    fontSize:20
  }
})


export default GradeList