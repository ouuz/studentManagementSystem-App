import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { List, Radio, Flex, WhiteSpace,Icon,Accordion,Button,WingBlank } from '@ant-design/react-native';
import mock from '../mock/mock'

const GradeCredits = ({gradeCredits}) => {
  const { averageGPA, totalCredit, haveCredit, repairingCredits, ranking } = gradeCredits

  return (
    <SafeAreaView>
      <LinearGradient colors={['#ace0f9','#fff1eb',]} >
        <Flex direction="column" justify="center" style={style.top}>
          <Text style={[style.averageGPA,style.whiteFont]}>{averageGPA}</Text>
          <Text style={style.grayFont}>平均绩点</Text>
          <View style={style.ranking}>
            <Text style={style.whiteFont}>当前排名：{ranking}</Text>
          </View>
        </Flex>
      </LinearGradient>
      <Flex style={style.bottom}>
        <Flex.Item>
          <Flex justify="center" direction="column" style={style.centerFont}>
              <Text style={style.grayFont}>总学分</Text>
              <Text>{totalCredit}</Text>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <Flex justify="center" direction="column" style={style.centerFont}>
              <Text style={style.grayFont}>已修学分</Text>
              <Text>{haveCredit}</Text>
          </Flex>
        </Flex.Item>
        <Flex.Item>
          <Flex justify="center" direction="column" style={style.centerFont}>
            <Text style={style.grayFont}>重修学分</Text>
            <Text>{repairingCredits}</Text>
          </Flex>
        </Flex.Item>
      </Flex>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  top:{
    minHeight:150,
  },
  whiteFont:{
     color:'#ffffff'
  },
  averageGPA:{
    fontSize:40
  },
  ranking:{
    backgroundColor:'#99d2ed',
    width:250,
    borderRadius:10,
    alignItems:'center',
    marginTop:10,
  },
  bottom:{
    backgroundColor:'#fff',
  },
  grayFont:{
    color:'#999aaa'
  },
  centerFont:{
    height:60,
  }
})


export default GradeCredits