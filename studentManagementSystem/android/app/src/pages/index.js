import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Student from './student/index'
import Login from './public/login/index'
import Teacher from './teacher/index'
class App extends Component {
  render() {
    return ( <Student />
    )
  }
}

export default App;