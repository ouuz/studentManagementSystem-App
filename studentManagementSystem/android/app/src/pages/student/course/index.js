import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, ImageBackground, Alert, Image } from "react-native";
import Optional from './components/optional'

const Course = () => {
  return (
    <View style={{flex:1}}>
      <Optional />
    </View>  
  );
};

const style = StyleSheet.create({
});

export default Course;