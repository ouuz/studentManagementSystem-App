import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import StudentInformationDetails from "./components/studentInformationDetails"
import StudentInformationList from "./components/studentInformationList"

const StudentInformationStack = createStackNavigator();

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