import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator,TransitionPresets } from "react-navigation-stack";
import { createBottomTabNavigator} from "react-navigation-tabs";
import StackViewStyleInterpolator from "react-navigation-stack";

import StudentInformationDetails from "./components/studentInformationDetails"
import StudentInformationList from "./components/studentInformationList"

const StudentInformationNavigator = createStackNavigator({
  StudentInformationList: {
    screen: StudentInformationList,
    navigationOptions({ navigation }) {
      return {
        headerShown: false
      }
    }
  }, 
  StudentInformationDetails: {
    screen: StudentInformationDetails,
    navigationOptions({ navigation }) {
      return {
        headerTitle: '成绩查询'
      }
    }
  },
}, {
  initialRouteName: 'StudentInformationList',
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


const StudentInformationContainer = createAppContainer(StudentInformationNavigator)

class StudentInformation extends Component {
  render() {
    return ( <
      StudentInformationContainer / >
    )
  }
}

export default StudentInformation;