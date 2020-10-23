import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StudentInformationDetails from "./components/studentInformationDetails"
import StudentInformationList from "./components/studentInformationList"

const StudentInformationStack = createStackNavigator();

/**
 * @description 学生信息的路由导航
 * @param { String } userId 用户的身份标识：教师：工号 学生：学号
 */
export default function StudentInformation({userId}) {

  function studentInformationList({navigation}) {
    return (
      <StudentInformationList userId={userId} navigation={navigation}/>
    )
  }

  return (
    <StudentInformationStack.Navigator>
      <StudentInformationStack.Screen 
        name="StudentInformationList" 
        component={studentInformationList}
        options={{headerShown: false}}
      />
      <StudentInformationStack.Screen 
        name="StudentInformationDetails" 
        component={StudentInformationDetails}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitle: "成绩查询",
          headerTitleStyle: {
            fontSize:18
          }
        }}/>
    </StudentInformationStack.Navigator>
  );
}