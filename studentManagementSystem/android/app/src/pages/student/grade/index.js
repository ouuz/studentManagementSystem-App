import React, { Component, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import GradeList from "./components/gradeList"
import GradeCredits from './components/gradeCredits';
import { WhiteSpace } from '@ant-design/react-native';
import mock from './mock/mock'

const Grade = ({ userId }) => {
  const student = mock.findIndex(student => student.studentId === userId) || 0

  return (
    <ScrollView style={{ flex: 1, padding:10, backgroundColor:'#f6f6f6' }}>
      <GradeCredits gradeCredits={ mock[student] }/>
      <WhiteSpace size="lg"/>
      <GradeList gradeList={ mock[student]["details"] }/>
    </ScrollView>
  );
}

export default Grade