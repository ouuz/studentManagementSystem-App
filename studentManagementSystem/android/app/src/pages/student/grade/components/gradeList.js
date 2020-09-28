import React, { useCallback } from 'react'
import { StyleSheet, SafeAreaView, Text, Button, View, TouchableOpacity } from 'react-native'

import mock from '../mock/mock'

const GradeList = ({navigation}) => {
  return (
    <SafeAreaView style={ style.gradeListContainer }>
      {
        mock.map((term, index) => (
          <View style={style.term}>
            <TouchableOpacity 
              key = {index}
              onPress = {
                useCallback(() => {navigation.navigate('GradeDetails',{ gradeList:term.gradeList })}, []) 
              }
              title='go to GradeDetails'>
              <Text>{term.term}</Text>
            </TouchableOpacity>
          </View>
        ))
      }
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  gradeListContainer:{
    justifyContent:'space-around',
    padding:10
  },
  term:{
    backgroundColor:'#fff',
    borderBottomWidth:1,
    borderColor:'#ddd',
    backgroundColor:'#f9f2f4',
    borderRadius:20,
    padding:10,
    marginBottom:10
  }
})


export default GradeList