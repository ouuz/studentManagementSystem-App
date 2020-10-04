import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import GradeList from "./components/gradeList"
import GradeCredits from './components/gradeCredits';
import { WhiteSpace } from '@ant-design/react-native';

const Course = () => {
  return (
    <ScrollView style={{ flex: 1, padding:10, backgroundColor:'#f6f6f6' }}>
      <GradeCredits />
      <WhiteSpace size="lg"/>
      <GradeList />
    </ScrollView>
  );
}

export default Course