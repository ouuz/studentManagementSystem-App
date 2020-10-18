import React, { Component,useState } from 'react';
import { View, Text, Image } from 'react-native';

import Student from './student/index'
import Login from './public/login/index'
import Teacher from './teacher/index'

const App = () => {
  const [identity,setIdentity] = useState()
  
  function changeIdentity( identity ) {
    setIdentity(identity)
  }

  return (
    <View style={{flex:1}}>
      {/* {(()=>{
      switch(identity){
        case "学生":
          return <Student/>
        case "老师":
          return <Teacher/>
        default:
          return <Login changeIdentity={changeIdentity}/>
      }
    })()} */}
    <Teacher changeIdentity={changeIdentity}/>
    </View>

  )
}

export default App;