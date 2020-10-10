import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import GradeList from "./components/gradeList"
import GradeCredits from './components/gradeCredits';
import { WhiteSpace } from '@ant-design/react-native';
import mock from './mock/mock'

const Grade = ({ stu }) => {
  
  return (
    <ScrollView style={{ flex: 1, padding:10, backgroundColor:'#f6f6f6' }}>
      <GradeCredits gradeCredits={ mock[0][stu] }/>
      <WhiteSpace size="lg"/>
      <GradeList gradeList={ mock[0][stu]["details"] }/>
    </ScrollView>
  );
}

export default Grade