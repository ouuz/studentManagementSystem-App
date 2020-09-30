import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'

import mock from '../mock/mock'
import GradeCredits from './gradeCredits'
const GradeList = ({navigation}) => {
  return (
    <SafeAreaView style={ style.gradeListContainer }>
      <GradeCredits />
      <View style={style.gradeList}>
        {
          mock[0]["details"].map((term, index) => (
              <TouchableOpacity style={style.term} key={index}
                key = {index}
                onPress = {
                  useCallback(() => {navigation.navigate('GradeDetails',{ gradeList:term.gradeList })}, []) 
                }>
                <Text>{term.term}</Text>
                <Image source={require('../../../public/img/arrow-right.png')}/>
              </TouchableOpacity>
              
          ))
        }
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  gradeListContainer:{
    padding:10,
    flex:1
  },
  gradeList:{
    marginTop:10,
    padding:10,
    flex:1.7,
    backgroundColor:'#ffffff',
  },
  term:{
    backgroundColor:'#ffffff',
    borderBottomWidth:1,
    borderColor:'#ddd',
    borderRadius:10,
    padding:15,
    marginBottom:15,
    shadowColor: 'rgba(0, 0, 0, 0.03)',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowRadius: 2,
    elevation: 4,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})


export default GradeList