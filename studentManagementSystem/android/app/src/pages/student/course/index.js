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

/**
 * @description 选课的公共容器
 * @param { String } userId 用户的身份标识：教师：工号 学生：学号
 */
const Course = ({ userId }) => {
  const student = mock.findIndex(student => student.studentId === userId) || 0
  const [optionalList,setOptionalList] = useState(mock[student]["optionalList"]);
  const [selectedList,setSelectedList] = useState(mock[student]["selectedList"]);
  const [operator,setOperator] = useState(false)

  /**
   * @description 选课
   * @param { Object } course 需要选择添加的课程
   */
  function addCourse(course) {
    let currentSelected = selectedList;
    currentSelected.push(course)
    setSelectedList(currentSelected);

    let currentOptionalList = optionalList;
    let index = currentOptionalList.findIndex(item => item.serialNumber === course.serialNumber)
    currentOptionalList.splice(index,1)
    setOptionalList(currentOptionalList);

    setOperator(!operator)
  }

  /**
   * @description 取消选课
   * @param { Object } course 需要取消选择的课程
   */
  function deleteCourse(course) {
    let currentSelected = selectedList;
    let index = currentSelected.findIndex(item => item.serialNumber === course.serialNumber)
    currentSelected.splice(index,1)
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