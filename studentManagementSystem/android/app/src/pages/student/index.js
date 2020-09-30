import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";

import User from "../public/user/index"
import Schedule from "../public/schedule/index"
import Course from "./course/index"
import Grade from "./grade/index"

const StudentNavigator = createStackNavigator({
  Schedule: {
    screen: Schedule,
  },
  Course: {
    screen: Course,
  },
  Grade: {
    screen: Grade,
  }, 
  User: {
    screen: User,
  },
}, {
    headerMode: 'none',
});


const TabNavigator = createBottomTabNavigator({
  Schedule: {
    screen: StudentNavigator,
    navigationOptions: {
      tabBarLabel: '课程表',
      tabBarIcon: ({focused}) => {
        return ( <Image style = {{width: 25,height: 25}}
          source = {
            focused ?
            require('../public/img/schedule-selected.png') :
            require('../public/img/schedule.png')
          }
          />
        )
      }
    }
  },
  Course: {
    screen: Course,
    navigationOptions: {
      tabBarLabel: '选课',
      tabBarIcon: ({focused}) => {
        return ( <Image style = {{width: 25,height: 25}}
          source = {
            focused ?
            require('../public/img/course-selected.png') :
            require('../public/img/course.png')
          }
          />
        )
      }
    }
  },
  Grade: {
    screen: Grade,
    navigationOptions: {
      tabBarLabel: '成绩单',
      tabBarIcon: ({focused}) => {
        return ( <Image style = {{width: 25,height: 25}}
          source = {
            focused ?
            require('../public/img/grade-selected.png') :
            require('../public/img/grade.png')
          }
          />
        )
      }
    }
  },
  User: {
    screen: User,
    navigationOptions: ({navigation}) => {
      return {
        tabBarLabel: '我',
        tabBarIcon: ({focused}) => {
          return ( <Image 
            style = {{width: 25, height: 25}}
            source = {
              focused ?
              require('../public/img/user-selected.png') :
              require('../public/img/user.png')
            }
            />
          )
        }
      }
    }
  },
}, {
  tabBarOptions: {
    activeTintColor: '#61b0d4',
    inactiveTintColor: 'gray',
  },
  defaultNavigationOptions: ({navigation}) => {
    const {routeName} = navigation.state;

    return {
      gesturesEnabled: false
    }
  }
});


const AppContainer = createAppContainer(TabNavigator)

class Student extends Component {
  render() {
    return ( <
      AppContainer / >
    )
  }
}

export default Student;