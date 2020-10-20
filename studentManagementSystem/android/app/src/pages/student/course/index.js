import React, { useState } from 'react';
import { Text, View, TouchableOpacity,StyleSheet, Dimensions } from 'react-native';
import { Tabs,WingBlank,WhiteSpace } from '@ant-design/react-native';
import OptionalList from './components/optionalList'
import SelectedList from './components/selectedList'

import mock from './mock/mock'

const { width, height } = Dimensions.get('window');
const tabs = [
  { title: '可选' },
  { title: '已选' }
];

const Course = () => {

  const [optionalList,setOptionalList] = useState(mock[0]["optionalList"]);
  const [selectedList,setSelectedList] = useState(mock[0]["selectedList"]);
  const [operator,setOperator] = useState(false)

  function addCourse(course) {
    let currentSelected = selectedList;
    currentSelected.push(course)
    setSelectedList(currentSelected);

    let currentOptionalList = optionalList;
    let index = currentOptionalList.findIndex(item => item.serialNumber === course.serialNumber)
    index ? currentOptionalList.splice(index - 1,1) :currentOptionalList.splice(0,1)
    setOptionalList(currentOptionalList);

    setOperator(!operator)
  }

  function deleteCourse(course) {
    let currentSelected = selectedList;
    let index = currentSelected.findIndex(item => item.serialNumber === course.serialNumber)
    index ? currentSelected.splice(index - 1,1) :currentSelected.splice(0,1)
    setSelectedList(currentSelected);

    let currentOptionalList = optionalList;
    currentOptionalList.push(course)
    setOptionalList(currentOptionalList);

    setOperator(!operator)
  }
  

  return (
    <WingBlank style={{ flex: 1 }}>
      <WhiteSpace />
      <Tabs tabs={tabs}
          renderTabBar={tabProps => (
            <View style={style.tabContainer} >
              {tabProps.tabs.map((tab, i) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={tab.key || i}
                  style={[style.tabBox,{
                    height: tabProps.activeTab === i ? height * 0.07 : height * 0.06,
                    backgroundColor:tab.title === '可选' ? '#b9deea' : '#f9f2d3',
                  }]}
                  onPress={() => {
                    const { goToTab, onTabClick } = tabProps;
                    onTabClick && onTabClick(tabs[i], i);
                    goToTab && goToTab(i);
                  }}
                >
                  <Text>{tab.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}>
        <OptionalList optionalList={optionalList} addCourse={addCourse}/>
        <SelectedList selectedList={selectedList} deleteCourse={deleteCourse}/>
      </Tabs>
    </WingBlank>
  );
}

const style = StyleSheet.create({
  tabContainer:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent:'space-around',
    width:width * 0.52
  },
  tabBox:{
    width:width * 0.25, 
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderWidth:1,
    borderColor:'#ddd',
    justifyContent:'center',
    alignItems:'center'
  },
})

export default Course