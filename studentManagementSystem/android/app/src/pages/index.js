import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";

import Login from "./public/login/index"
import Schedule from "./public/schedule/index"
import Course from "./student/course/index"
import Grade from "./student/grade/index"

const AppNavigator = createStackNavigator({
  Schedule: {
    screen: Schedule,
  },
  Course: {
    screen: Course,
  },
  Grade: {
    screen: Grade,
  }, 
  Login: {
    screen: Login,
  },
}, {
    headerMode: 'none',
});


const TabNavigator = createBottomTabNavigator({
  Schedule: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarLabel: '课程表',
      tabBarIcon: ({focused}) => {
        return ( <Image style = {{width: 25,height: 25}}
          source = {
            focused ?
            require('./student/img/schedule-selected.png') :
            require('./student/img/schedule.png')
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
            require('./student/img/course-selected.png') :
            require('./student/img/course.png')
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
            require('./student/img/grade-selected.png') :
            require('./student/img/grade.png')
          }
          />
        )
      }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: ({navigation}) => {
      return {
        tabBarLabel: '我',
        tabBarIcon: ({focused}) => {
          return ( <Image 
            style = {{width: 25, height: 25}}
            source = {
              focused ?
              require('./student/img/user-selected.png') :
              require('./student/img/user.png')
            }
            />
          )
        }
      }
    }
  },
}, {
  // initialRouteName: 'Main',
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

class App extends Component {
  render() {
    return ( <
      AppContainer / >
    )
  }
}

export default App;