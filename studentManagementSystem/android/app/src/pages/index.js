import React, { useState } from 'react';
import { View } from 'react-native';

import Student from './student/index'
import Login from './public/login/index'
import Teacher from './teacher/index'

const App = () => {
  const [identity,setIdentity] = useState("exit")
  const [userId,setUserId] = useState()
  
  function changeIdentity( identity ) {
    setIdentity(identity)
  }

  function getUserId( userId ) {
    setUserId(userId)
  }

  return (
    <View style={{flex:1}}>
      {(()=>{
      switch(identity){
        case "学生":
          return <Student changeIdentity={changeIdentity} userId={userId} identity={identity}/>
        case "老师":
          return <Teacher changeIdentity={changeIdentity} userId={userId} identity={identity}/>
        case "exit":
          return <Login changeIdentity={changeIdentity} getUserId={getUserId} />
      }
    })()}
    </View>

  )
}

export default App;