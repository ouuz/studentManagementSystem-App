import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { List, Radio, Flex, WhiteSpace,Icon,Accordion,Button,WingBlank } from '@ant-design/react-native';

const GradeList = ({gradeList}) => {
  const [activeSections,setActiveSections] = useState([])
  const [isActive,setIsActive] = useState(false)
  const list = gradeList

  return (
    <WingBlank size="sm" style={style.gradeListContainer}>
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
                  term.gradeList.map(course => (
                    <Flex style={style.grade} justify="between">
                      <Flex style={style.gradeLeft} direction="column" justify="around" align="start">
                        <Text style={style.courseName}>{course.name}</Text>
                        <Text>编号：{course.serialNumber} 学分：{course.credits}</Text>
                        {course.grade.map(item => (<Text>成绩：{item.level}({item.category})</Text>))}
                      </Flex>
                      <Flex justify="center">
                        <Text style={style.GPA}>{course.GPA}</Text>
                      </Flex>
                    </Flex>
                ))}
              </Animatable.View>
            </Accordion.Panel>
          ))
        }
        </Accordion>
    </WingBlank>
  )
}

const style = StyleSheet.create({
  gradeListContainer:{
    backgroundColor:'#ffffff',
    minHeight:370,
    borderRadius:10,
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
    backgroundColor:'#ffffff',
    paddingHorizontal:15
  },
  gradeLeft:{
    minHeight:100,
  },
  courseName:{
    fontSize:18
  },
  GPA:{
    fontSize:20
  }
})


export default GradeList