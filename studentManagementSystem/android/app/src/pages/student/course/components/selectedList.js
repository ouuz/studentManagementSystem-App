import React from 'react';
import Common from './common'

/**
 * @description 可选列表
 * @param { Array } selectedList 已选列表的数据
 * @param { Function } deleteCourse 取消选课的功能函数
 */
const selectedList = ({selectedList, deleteCourse}) => {

  return (
    <Common 
      desc="selectedList"
      list={selectedList}
      countDesc="已选课程列表"
      operator={deleteCourse}
      currentCount="4"
      titleBg={require("../img/graduation-cap-seamless-pattern.png")}
    />
  );
};

export default selectedList;