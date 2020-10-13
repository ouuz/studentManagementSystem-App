import React, { Component,useState } from 'react';
import { View, Text, Image } from 'react-native';

import Student from './student/index'
import Login from './public/login/index'
import Teacher from './teacher/index'

const App = () => {
  const [user,setUser] = useState()
  
  function changeUser( userID ) {
    setUser(userID)
    console.log(userID)
  }

  return (
    <View style={{flex:1}}>
      {(()=>{
      switch(user){
        case 0:
          return <Student/>
        case 1:
          return <Teacher/>
        default:
          return <Login changeUser={changeUser}/>
      }
    })()}
    </View>

  )
}

export default App;