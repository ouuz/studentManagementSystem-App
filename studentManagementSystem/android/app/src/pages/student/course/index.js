import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import OptionalList from './components/optionalList'
import SelectedList from './components/selectedList'

const Course = () => {
  const tabs = [
    { title: '可选' },
    { title: '已选' }
  ];
  return (
    <View style={{ flex: 1 }}>
      <Tabs tabs={tabs}>
        <OptionalList />
        <SelectedList />
      </Tabs>
    </View>
  );
}

export default Course