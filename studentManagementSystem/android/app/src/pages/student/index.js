import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import User from "../public/user/index"
import Schedule from "../public/schedule/index"
import Course from "./course/index"
import Grade from "./grade/index"

const Tab = createBottomTabNavigator();

export default function student({changeIdentity,userId, identity}) {

  function user() {
    return (<User changeIdentity={changeIdentity} userId={userId} identity={identity}/>)
  }

  function schedule() {
    return (<Schedule />)
  }

  function course() {
    return (<Course userId={userId}/>)
  }
  
  function grade() {
    return (<Grade userId={userId}/>)
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
          } else if (route.name === '选课') {
            icon = focused 
            ? require('../public/img/course-selected.png')
            : require('../public/img/course.png');
          } else if (route.name === '成绩单') {
            icon = focused 
            ? require('../public/img/grade-selected.png')
            : require('../public/img/grade.png');
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
        <Tab.Screen name="课程表" component={schedule} />
        <Tab.Screen name="选课" component={course} />
        <Tab.Screen name="成绩单" component={grade} />
        <Tab.Screen name="我" component={user} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
