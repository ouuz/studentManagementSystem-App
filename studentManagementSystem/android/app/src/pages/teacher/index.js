import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";

import User from "../public/user/index"
import Login from '../public/login/index'
import Schedule from "../public/schedule/index"
import StudentInformation from './studentInformation/index'

const TeacherNavigator = createStackNavigator({
  Schedule: {
    screen: Schedule,
  },
  StudentInformation: {
    screen: StudentInformation,
  },
  Login: {
    screen: User,
  },
}, {
    headerMode: 'none',
});


const TabNavigator = createBottomTabNavigator({
  Schedule: {
    screen: TeacherNavigator,
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
  StudentInformation: {
    screen: StudentInformation,
    navigationOptions: {
      tabBarLabel: '学生信息',
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


const TeacherContainer = createAppContainer(TabNavigator)

class Teacher extends Component {
  render() {
    return ( <
      TeacherContainer / >
    )
  }
}

export default Teacher;