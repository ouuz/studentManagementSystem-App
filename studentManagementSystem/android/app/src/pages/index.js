import React, { Component,useState } from 'react';
import { View, Text, Image } from 'react-native';

import Student from './student/index'
import Login from './public/login/index'
import Teacher from './teacher/index'

const App = () => {
  const [user,setUser] = useState()
  
  function changeIdentity( userID ) {
    setUser(userID)
    console.log(userID)
  }

  return (
    <View style={{flex:1}}>
      {(()=>{
      switch(user){
        case "学生":
          return <Student/>
        case "老师":
          return <Teacher/>
        default:
          return <Login changeIdentity={changeIdentity}/>
      }
    })()}
    </View>

  )
}

export default App;