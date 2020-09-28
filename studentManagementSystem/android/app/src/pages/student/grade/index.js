import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator,TransitionPresets } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import StackViewStyleInterpolator from "react-navigation-stack";

import GradeDetails from "./components/gradeDetails"
import GradeList from "./components/gradeList"

const GradeNavigator = createStackNavigator({
  GradeList: {
    screen: GradeList,
    navigationOptions({ navigation }) {
      return {
        headerShown: false
      }
    }
  }, 
  GradeDetails: {
    screen: GradeDetails,
    navigationOptions({ navigation }) {
      return {
        headerTitle: '成绩查询'
      }
    }
  },
}, {
  initialRouteName: 'GradeList',
  mode:'card',
  defaultNavigationOptions: {
    ...TransitionPresets.SlideFromRightIOS,
    headerStyle: {
      backgroundColor: '#fff',
      },
      headerTitleStyle: {
        fontSize:18
      },
  }
});


const AppContainer = createAppContainer(GradeNavigator)

class App extends Component {
  render() {
    return ( <
      AppContainer / >
    )
  }
}

export default App;