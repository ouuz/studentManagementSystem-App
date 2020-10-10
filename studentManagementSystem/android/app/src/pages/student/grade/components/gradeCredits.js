import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import mock from '../mock/mock'

const GradeCredits = ({gradeCredits}) => {
  const { averageGPA, totalCredit, haveCredit, repairingCredits, ranking } = gradeCredits
  const credits = [totalCredit, haveCredit, repairingCredits]
  return (
    <SafeAreaView>
      <LinearGradient colors={['#ace0f9','#fff1eb',]} style={style.top}>
        <Text style={[style.averageGPA,style.whiteFont]}>{averageGPA}</Text>
        <Text style={style.grayFont}>平均绩点</Text>
        <View style={style.ranking}>
          <Text style={style.whiteFont}>当前排名：{ranking}</Text>
        </View>
      </LinearGradient>
      <View style={style.bottom}>
        {
          credits.map((credit,index) => (
            <View style={style.centerFont} key={index}>
              <Text style={style.grayFont}>总学分</Text>
              <Text >{credit}</Text>
            </View>
          ))
        }
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  top:{
    backgroundColor:'#898',
    minHeight:150,
    justifyContent:'center',
    alignItems:'center'
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
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  grayFont:{
    color:'#999aaa'
  },
  centerFont:{
    alignItems:'center',
    height:60,
    justifyContent:'center'
  }
})


export default GradeCredits