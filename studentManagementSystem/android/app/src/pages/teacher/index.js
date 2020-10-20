import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from "../public/user/index"
import Schedule from "../public/schedule/index"
import StudentInformation from './studentInformation/index'

const Tab = createBottomTabNavigator();

export default function Teacher({changeIdentity}) {

  function user() {
    return (
      <User changeIdentity={changeIdentity}/>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let icon;

          if (route.name === '课程表') {
            icon = focused
              ? require('../public/img/schedule-selected.png')
              : require('../public/img/schedule.png');
          } else if (route.name === '学生信息') {
            icon = focused 
              ? require('../public/img/grade-selected.png') 
              : require('../public/img/grade.png')
          } else if (route.name === '我') {
            icon = focused 
            ? require('../public/img/user-selected.png')
            : require('../public/img/user.png');
          }

          return <Image style = {{width: 25, height: 25}} source = {icon}/>
        },
        })}
        tabBarOptions={{
          activeTintColor: '#61b0d4',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="课程表" component={Schedule} />
        <Tab.Screen name="学生信息" component={StudentInformation} />
        <Tab.Screen name="我" component={user} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
