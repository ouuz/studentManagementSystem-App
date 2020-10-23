import React from 'react';
import { ScrollView } from 'react-native';

import GradeList from "./components/gradeList"
import GradeCredits from './components/gradeCredits';
import { WhiteSpace } from '@ant-design/react-native';
import mock from './mock/mock'

/**
 * @description 成绩单的容器
 * @param { String } userId 用户的身份标识：教师：工号 学生：学号
 */
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